package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-billing-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"account_billing | account_billing_profile | account_subscription | bill_subs_api_account_billing_history_collection | bill_subs_api_account_credit | bill_subs_api_account_subscription_response_collection | bill_subs_api_account_subscription_response_single | bill_subs_api_address_validation_response_single | bill_subs_api_bad_debt_response_single | bill_subs_api_billing_history_collection | bill_subs_api_billing_response_single | bill_subs_api_cancel_reason_response_single | bill_subs_api_client_secret_response_single | bill_subs_api_payment_intent_response_single | bill_subs_api_payment_method_response_collection | bill_subs_api_payment_method_response_single | bill_subs_api_plan_response_collection | bill_subs_api_rate_plan_simple | bill_subs_api_unpaid_invoices_response_single | bill_subs_api_user_subscription_response_collection | bill_subs_api_user_subscription_response_single | bill_subs_api_zone_subscription_response_single | billable_usage | billable_usage_api_usage_info | billable_usage_api_v2_account_billable_metric | billable_usage_api_v2_usage | cancel_downgrade | entitlement | invoice | payment_method | set_as_default | usage | user_subscription | zone_rate_plan | zone_subscription"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareBillingSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-billing_list",
		Description: "List records from CloudflareBilling. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-billing_load",
		Description: "Load a single record from CloudflareBilling. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareBillingSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareBillingSDK, name string) (sdk.CloudflareBillingEntity, error) {
	switch strings.ToLower(name) {
	case "account_billing":
		return client.AccountBilling(nil), nil
	case "account_billing_profile":
		return client.AccountBillingProfile(nil), nil
	case "account_subscription":
		return client.AccountSubscription(nil), nil
	case "bill_subs_api_account_billing_history_collection":
		return client.BillSubsApiAccountBillingHistoryCollection(nil), nil
	case "bill_subs_api_account_credit":
		return client.BillSubsApiAccountCredit(nil), nil
	case "bill_subs_api_account_subscription_response_collection":
		return client.BillSubsApiAccountSubscriptionResponseCollection(nil), nil
	case "bill_subs_api_account_subscription_response_single":
		return client.BillSubsApiAccountSubscriptionResponseSingle(nil), nil
	case "bill_subs_api_address_validation_response_single":
		return client.BillSubsApiAddressValidationResponseSingle(nil), nil
	case "bill_subs_api_bad_debt_response_single":
		return client.BillSubsApiBadDebtResponseSingle(nil), nil
	case "bill_subs_api_billing_history_collection":
		return client.BillSubsApiBillingHistoryCollection(nil), nil
	case "bill_subs_api_billing_response_single":
		return client.BillSubsApiBillingResponseSingle(nil), nil
	case "bill_subs_api_cancel_reason_response_single":
		return client.BillSubsApiCancelReasonResponseSingle(nil), nil
	case "bill_subs_api_client_secret_response_single":
		return client.BillSubsApiClientSecretResponseSingle(nil), nil
	case "bill_subs_api_payment_intent_response_single":
		return client.BillSubsApiPaymentIntentResponseSingle(nil), nil
	case "bill_subs_api_payment_method_response_collection":
		return client.BillSubsApiPaymentMethodResponseCollection(nil), nil
	case "bill_subs_api_payment_method_response_single":
		return client.BillSubsApiPaymentMethodResponseSingle(nil), nil
	case "bill_subs_api_plan_response_collection":
		return client.BillSubsApiPlanResponseCollection(nil), nil
	case "bill_subs_api_rate_plan_simple":
		return client.BillSubsApiRatePlanSimple(nil), nil
	case "bill_subs_api_unpaid_invoices_response_single":
		return client.BillSubsApiUnpaidInvoicesResponseSingle(nil), nil
	case "bill_subs_api_user_subscription_response_collection":
		return client.BillSubsApiUserSubscriptionResponseCollection(nil), nil
	case "bill_subs_api_user_subscription_response_single":
		return client.BillSubsApiUserSubscriptionResponseSingle(nil), nil
	case "bill_subs_api_zone_subscription_response_single":
		return client.BillSubsApiZoneSubscriptionResponseSingle(nil), nil
	case "billable_usage":
		return client.BillableUsage(nil), nil
	case "billable_usage_api_usage_info":
		return client.BillableUsageApiUsageInfo(nil), nil
	case "billable_usage_api_v2_account_billable_metric":
		return client.BillableUsageApiV2AccountBillableMetric(nil), nil
	case "billable_usage_api_v2_usage":
		return client.BillableUsageApiV2Usage(nil), nil
	case "cancel_downgrade":
		return client.CancelDowngrade(nil), nil
	case "entitlement":
		return client.Entitlement(nil), nil
	case "invoice":
		return client.Invoice(nil), nil
	case "payment_method":
		return client.PaymentMethod(nil), nil
	case "set_as_default":
		return client.SetAsDefault(nil), nil
	case "usage":
		return client.Usage(nil), nil
	case "user_subscription":
		return client.UserSubscription(nil), nil
	case "zone_rate_plan":
		return client.ZoneRatePlan(nil), nil
	case "zone_subscription":
		return client.ZoneSubscription(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
