package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-billing-sdk/go/utility/struct"
)

type CloudflareBillingSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareBillingSDK(options map[string]any) *CloudflareBillingSDK {
	sdk := &CloudflareBillingSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareBillingSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareBillingSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareBillingSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareBillingSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareBillingSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareBillingSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareBillingSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareBillingSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareBillingSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareBillingSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareBillingSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AccountBilling returns a AccountBilling entity bound to this client.
// Idiomatic usage: client.AccountBilling(nil).List(nil, nil) or
// client.AccountBilling(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) AccountBilling(data map[string]any) CloudflareBillingEntity {
	return NewAccountBillingEntityFunc(sdk, data)
}


// AccountBillingProfile returns a AccountBillingProfile entity bound to this client.
// Idiomatic usage: client.AccountBillingProfile(nil).List(nil, nil) or
// client.AccountBillingProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) AccountBillingProfile(data map[string]any) CloudflareBillingEntity {
	return NewAccountBillingProfileEntityFunc(sdk, data)
}


// AccountSubscription returns a AccountSubscription entity bound to this client.
// Idiomatic usage: client.AccountSubscription(nil).List(nil, nil) or
// client.AccountSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) AccountSubscription(data map[string]any) CloudflareBillingEntity {
	return NewAccountSubscriptionEntityFunc(sdk, data)
}


// BillSubsApiAccountBillingHistoryCollection returns a BillSubsApiAccountBillingHistoryCollection entity bound to this client.
// Idiomatic usage: client.BillSubsApiAccountBillingHistoryCollection(nil).List(nil, nil) or
// client.BillSubsApiAccountBillingHistoryCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiAccountBillingHistoryCollection(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiAccountBillingHistoryCollectionEntityFunc(sdk, data)
}


// BillSubsApiAccountCredit returns a BillSubsApiAccountCredit entity bound to this client.
// Idiomatic usage: client.BillSubsApiAccountCredit(nil).List(nil, nil) or
// client.BillSubsApiAccountCredit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiAccountCredit(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiAccountCreditEntityFunc(sdk, data)
}


// BillSubsApiAccountSubscriptionResponseCollection returns a BillSubsApiAccountSubscriptionResponseCollection entity bound to this client.
// Idiomatic usage: client.BillSubsApiAccountSubscriptionResponseCollection(nil).List(nil, nil) or
// client.BillSubsApiAccountSubscriptionResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiAccountSubscriptionResponseCollection(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiAccountSubscriptionResponseCollectionEntityFunc(sdk, data)
}


// BillSubsApiAccountSubscriptionResponseSingle returns a BillSubsApiAccountSubscriptionResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiAccountSubscriptionResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiAccountSubscriptionResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiAccountSubscriptionResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiAccountSubscriptionResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiAddressValidationResponseSingle returns a BillSubsApiAddressValidationResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiAddressValidationResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiAddressValidationResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiAddressValidationResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiAddressValidationResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiBadDebtResponseSingle returns a BillSubsApiBadDebtResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiBadDebtResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiBadDebtResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiBadDebtResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiBadDebtResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiBillingHistoryCollection returns a BillSubsApiBillingHistoryCollection entity bound to this client.
// Idiomatic usage: client.BillSubsApiBillingHistoryCollection(nil).List(nil, nil) or
// client.BillSubsApiBillingHistoryCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiBillingHistoryCollection(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiBillingHistoryCollectionEntityFunc(sdk, data)
}


// BillSubsApiBillingResponseSingle returns a BillSubsApiBillingResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiBillingResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiBillingResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiBillingResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiBillingResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiCancelReasonResponseSingle returns a BillSubsApiCancelReasonResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiCancelReasonResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiCancelReasonResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiCancelReasonResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiCancelReasonResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiClientSecretResponseSingle returns a BillSubsApiClientSecretResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiClientSecretResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiClientSecretResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiClientSecretResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiClientSecretResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiPaymentIntentResponseSingle returns a BillSubsApiPaymentIntentResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiPaymentIntentResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiPaymentIntentResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiPaymentIntentResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiPaymentIntentResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiPaymentMethodResponseCollection returns a BillSubsApiPaymentMethodResponseCollection entity bound to this client.
// Idiomatic usage: client.BillSubsApiPaymentMethodResponseCollection(nil).List(nil, nil) or
// client.BillSubsApiPaymentMethodResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiPaymentMethodResponseCollection(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiPaymentMethodResponseCollectionEntityFunc(sdk, data)
}


// BillSubsApiPaymentMethodResponseSingle returns a BillSubsApiPaymentMethodResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiPaymentMethodResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiPaymentMethodResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiPaymentMethodResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiPaymentMethodResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiPlanResponseCollection returns a BillSubsApiPlanResponseCollection entity bound to this client.
// Idiomatic usage: client.BillSubsApiPlanResponseCollection(nil).List(nil, nil) or
// client.BillSubsApiPlanResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiPlanResponseCollection(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiPlanResponseCollectionEntityFunc(sdk, data)
}


// BillSubsApiRatePlanSimple returns a BillSubsApiRatePlanSimple entity bound to this client.
// Idiomatic usage: client.BillSubsApiRatePlanSimple(nil).List(nil, nil) or
// client.BillSubsApiRatePlanSimple(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiRatePlanSimple(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiRatePlanSimpleEntityFunc(sdk, data)
}


// BillSubsApiUnpaidInvoicesResponseSingle returns a BillSubsApiUnpaidInvoicesResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiUnpaidInvoicesResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiUnpaidInvoicesResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiUnpaidInvoicesResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiUnpaidInvoicesResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiUserSubscriptionResponseCollection returns a BillSubsApiUserSubscriptionResponseCollection entity bound to this client.
// Idiomatic usage: client.BillSubsApiUserSubscriptionResponseCollection(nil).List(nil, nil) or
// client.BillSubsApiUserSubscriptionResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiUserSubscriptionResponseCollection(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiUserSubscriptionResponseCollectionEntityFunc(sdk, data)
}


// BillSubsApiUserSubscriptionResponseSingle returns a BillSubsApiUserSubscriptionResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiUserSubscriptionResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiUserSubscriptionResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiUserSubscriptionResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiUserSubscriptionResponseSingleEntityFunc(sdk, data)
}


// BillSubsApiZoneSubscriptionResponseSingle returns a BillSubsApiZoneSubscriptionResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiZoneSubscriptionResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiZoneSubscriptionResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillSubsApiZoneSubscriptionResponseSingle(data map[string]any) CloudflareBillingEntity {
	return NewBillSubsApiZoneSubscriptionResponseSingleEntityFunc(sdk, data)
}


// BillableUsage returns a BillableUsage entity bound to this client.
// Idiomatic usage: client.BillableUsage(nil).List(nil, nil) or
// client.BillableUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillableUsage(data map[string]any) CloudflareBillingEntity {
	return NewBillableUsageEntityFunc(sdk, data)
}


// BillableUsageApiUsageInfo returns a BillableUsageApiUsageInfo entity bound to this client.
// Idiomatic usage: client.BillableUsageApiUsageInfo(nil).List(nil, nil) or
// client.BillableUsageApiUsageInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillableUsageApiUsageInfo(data map[string]any) CloudflareBillingEntity {
	return NewBillableUsageApiUsageInfoEntityFunc(sdk, data)
}


// BillableUsageApiV2AccountBillableMetric returns a BillableUsageApiV2AccountBillableMetric entity bound to this client.
// Idiomatic usage: client.BillableUsageApiV2AccountBillableMetric(nil).List(nil, nil) or
// client.BillableUsageApiV2AccountBillableMetric(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillableUsageApiV2AccountBillableMetric(data map[string]any) CloudflareBillingEntity {
	return NewBillableUsageApiV2AccountBillableMetricEntityFunc(sdk, data)
}


// BillableUsageApiV2Usage returns a BillableUsageApiV2Usage entity bound to this client.
// Idiomatic usage: client.BillableUsageApiV2Usage(nil).List(nil, nil) or
// client.BillableUsageApiV2Usage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) BillableUsageApiV2Usage(data map[string]any) CloudflareBillingEntity {
	return NewBillableUsageApiV2UsageEntityFunc(sdk, data)
}


// CancelDowngrade returns a CancelDowngrade entity bound to this client.
// Idiomatic usage: client.CancelDowngrade(nil).List(nil, nil) or
// client.CancelDowngrade(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) CancelDowngrade(data map[string]any) CloudflareBillingEntity {
	return NewCancelDowngradeEntityFunc(sdk, data)
}


// Entitlement returns a Entitlement entity bound to this client.
// Idiomatic usage: client.Entitlement(nil).List(nil, nil) or
// client.Entitlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) Entitlement(data map[string]any) CloudflareBillingEntity {
	return NewEntitlementEntityFunc(sdk, data)
}


// Invoice returns a Invoice entity bound to this client.
// Idiomatic usage: client.Invoice(nil).List(nil, nil) or
// client.Invoice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) Invoice(data map[string]any) CloudflareBillingEntity {
	return NewInvoiceEntityFunc(sdk, data)
}


// PaymentMethod returns a PaymentMethod entity bound to this client.
// Idiomatic usage: client.PaymentMethod(nil).List(nil, nil) or
// client.PaymentMethod(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) PaymentMethod(data map[string]any) CloudflareBillingEntity {
	return NewPaymentMethodEntityFunc(sdk, data)
}


// SetAsDefault returns a SetAsDefault entity bound to this client.
// Idiomatic usage: client.SetAsDefault(nil).List(nil, nil) or
// client.SetAsDefault(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) SetAsDefault(data map[string]any) CloudflareBillingEntity {
	return NewSetAsDefaultEntityFunc(sdk, data)
}


// Usage returns a Usage entity bound to this client.
// Idiomatic usage: client.Usage(nil).List(nil, nil) or
// client.Usage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) Usage(data map[string]any) CloudflareBillingEntity {
	return NewUsageEntityFunc(sdk, data)
}


// UserSubscription returns a UserSubscription entity bound to this client.
// Idiomatic usage: client.UserSubscription(nil).List(nil, nil) or
// client.UserSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) UserSubscription(data map[string]any) CloudflareBillingEntity {
	return NewUserSubscriptionEntityFunc(sdk, data)
}


// ZoneRatePlan returns a ZoneRatePlan entity bound to this client.
// Idiomatic usage: client.ZoneRatePlan(nil).List(nil, nil) or
// client.ZoneRatePlan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) ZoneRatePlan(data map[string]any) CloudflareBillingEntity {
	return NewZoneRatePlanEntityFunc(sdk, data)
}


// ZoneSubscription returns a ZoneSubscription entity bound to this client.
// Idiomatic usage: client.ZoneSubscription(nil).List(nil, nil) or
// client.ZoneSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareBillingSDK) ZoneSubscription(data map[string]any) CloudflareBillingEntity {
	return NewZoneSubscriptionEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareBillingSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareBillingSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
