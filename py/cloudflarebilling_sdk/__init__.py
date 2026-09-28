# CloudflareBilling SDK

from cloudflarebilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarebilling_sdk.core.utility_type import CloudflareBillingUtility
from cloudflarebilling_sdk.core.spec import CloudflareBillingSpec
from cloudflarebilling_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflarebilling_sdk.utility import register

# Load features
from cloudflarebilling_sdk.feature.base_feature import CloudflareBillingBaseFeature
from cloudflarebilling_sdk.features import _has_feature, _make_feature


class CloudflareBillingSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareBillingUtility()
        self._utility = utility

        from cloudflarebilling_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareBillingUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareBillingSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareBillingSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareBillingSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AccountBilling(self, data=None) -> "AccountBillingEntity":
        """Entity factory: client.AccountBilling().list() / client.AccountBilling().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.account_billing_entity import AccountBillingEntity
        return AccountBillingEntity(self, data)


    def AccountBillingProfile(self, data=None) -> "AccountBillingProfileEntity":
        """Entity factory: client.AccountBillingProfile().list() / client.AccountBillingProfile().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.account_billing_profile_entity import AccountBillingProfileEntity
        return AccountBillingProfileEntity(self, data)


    def AccountSubscription(self, data=None) -> "AccountSubscriptionEntity":
        """Entity factory: client.AccountSubscription().list() / client.AccountSubscription().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.account_subscription_entity import AccountSubscriptionEntity
        return AccountSubscriptionEntity(self, data)


    def BillSubsApiAccountBillingHistoryCollection(self, data=None) -> "BillSubsApiAccountBillingHistoryCollectionEntity":
        """Entity factory: client.BillSubsApiAccountBillingHistoryCollection().list() / client.BillSubsApiAccountBillingHistoryCollection().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_account_billing_history_collection_entity import BillSubsApiAccountBillingHistoryCollectionEntity
        return BillSubsApiAccountBillingHistoryCollectionEntity(self, data)


    def BillSubsApiAccountCredit(self, data=None) -> "BillSubsApiAccountCreditEntity":
        """Entity factory: client.BillSubsApiAccountCredit().list() / client.BillSubsApiAccountCredit().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_account_credit_entity import BillSubsApiAccountCreditEntity
        return BillSubsApiAccountCreditEntity(self, data)


    def BillSubsApiAccountSubscriptionResponseCollection(self, data=None) -> "BillSubsApiAccountSubscriptionResponseCollectionEntity":
        """Entity factory: client.BillSubsApiAccountSubscriptionResponseCollection().list() / client.BillSubsApiAccountSubscriptionResponseCollection().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_account_subscription_response_collection_entity import BillSubsApiAccountSubscriptionResponseCollectionEntity
        return BillSubsApiAccountSubscriptionResponseCollectionEntity(self, data)


    def BillSubsApiAccountSubscriptionResponseSingle(self, data=None) -> "BillSubsApiAccountSubscriptionResponseSingleEntity":
        """Entity factory: client.BillSubsApiAccountSubscriptionResponseSingle().list() / client.BillSubsApiAccountSubscriptionResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_account_subscription_response_single_entity import BillSubsApiAccountSubscriptionResponseSingleEntity
        return BillSubsApiAccountSubscriptionResponseSingleEntity(self, data)


    def BillSubsApiAddressValidationResponseSingle(self, data=None) -> "BillSubsApiAddressValidationResponseSingleEntity":
        """Entity factory: client.BillSubsApiAddressValidationResponseSingle().list() / client.BillSubsApiAddressValidationResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_address_validation_response_single_entity import BillSubsApiAddressValidationResponseSingleEntity
        return BillSubsApiAddressValidationResponseSingleEntity(self, data)


    def BillSubsApiBadDebtResponseSingle(self, data=None) -> "BillSubsApiBadDebtResponseSingleEntity":
        """Entity factory: client.BillSubsApiBadDebtResponseSingle().list() / client.BillSubsApiBadDebtResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_bad_debt_response_single_entity import BillSubsApiBadDebtResponseSingleEntity
        return BillSubsApiBadDebtResponseSingleEntity(self, data)


    def BillSubsApiBillingHistoryCollection(self, data=None) -> "BillSubsApiBillingHistoryCollectionEntity":
        """Entity factory: client.BillSubsApiBillingHistoryCollection().list() / client.BillSubsApiBillingHistoryCollection().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_billing_history_collection_entity import BillSubsApiBillingHistoryCollectionEntity
        return BillSubsApiBillingHistoryCollectionEntity(self, data)


    def BillSubsApiBillingResponseSingle(self, data=None) -> "BillSubsApiBillingResponseSingleEntity":
        """Entity factory: client.BillSubsApiBillingResponseSingle().list() / client.BillSubsApiBillingResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_billing_response_single_entity import BillSubsApiBillingResponseSingleEntity
        return BillSubsApiBillingResponseSingleEntity(self, data)


    def BillSubsApiCancelReasonResponseSingle(self, data=None) -> "BillSubsApiCancelReasonResponseSingleEntity":
        """Entity factory: client.BillSubsApiCancelReasonResponseSingle().list() / client.BillSubsApiCancelReasonResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_cancel_reason_response_single_entity import BillSubsApiCancelReasonResponseSingleEntity
        return BillSubsApiCancelReasonResponseSingleEntity(self, data)


    def BillSubsApiClientSecretResponseSingle(self, data=None) -> "BillSubsApiClientSecretResponseSingleEntity":
        """Entity factory: client.BillSubsApiClientSecretResponseSingle().list() / client.BillSubsApiClientSecretResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_client_secret_response_single_entity import BillSubsApiClientSecretResponseSingleEntity
        return BillSubsApiClientSecretResponseSingleEntity(self, data)


    def BillSubsApiPaymentIntentResponseSingle(self, data=None) -> "BillSubsApiPaymentIntentResponseSingleEntity":
        """Entity factory: client.BillSubsApiPaymentIntentResponseSingle().list() / client.BillSubsApiPaymentIntentResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_payment_intent_response_single_entity import BillSubsApiPaymentIntentResponseSingleEntity
        return BillSubsApiPaymentIntentResponseSingleEntity(self, data)


    def BillSubsApiPaymentMethodResponseCollection(self, data=None) -> "BillSubsApiPaymentMethodResponseCollectionEntity":
        """Entity factory: client.BillSubsApiPaymentMethodResponseCollection().list() / client.BillSubsApiPaymentMethodResponseCollection().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_payment_method_response_collection_entity import BillSubsApiPaymentMethodResponseCollectionEntity
        return BillSubsApiPaymentMethodResponseCollectionEntity(self, data)


    def BillSubsApiPaymentMethodResponseSingle(self, data=None) -> "BillSubsApiPaymentMethodResponseSingleEntity":
        """Entity factory: client.BillSubsApiPaymentMethodResponseSingle().list() / client.BillSubsApiPaymentMethodResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_payment_method_response_single_entity import BillSubsApiPaymentMethodResponseSingleEntity
        return BillSubsApiPaymentMethodResponseSingleEntity(self, data)


    def BillSubsApiPlanResponseCollection(self, data=None) -> "BillSubsApiPlanResponseCollectionEntity":
        """Entity factory: client.BillSubsApiPlanResponseCollection().list() / client.BillSubsApiPlanResponseCollection().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_plan_response_collection_entity import BillSubsApiPlanResponseCollectionEntity
        return BillSubsApiPlanResponseCollectionEntity(self, data)


    def BillSubsApiRatePlanSimple(self, data=None) -> "BillSubsApiRatePlanSimpleEntity":
        """Entity factory: client.BillSubsApiRatePlanSimple().list() / client.BillSubsApiRatePlanSimple().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_rate_plan_simple_entity import BillSubsApiRatePlanSimpleEntity
        return BillSubsApiRatePlanSimpleEntity(self, data)


    def BillSubsApiUnpaidInvoicesResponseSingle(self, data=None) -> "BillSubsApiUnpaidInvoicesResponseSingleEntity":
        """Entity factory: client.BillSubsApiUnpaidInvoicesResponseSingle().list() / client.BillSubsApiUnpaidInvoicesResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_unpaid_invoices_response_single_entity import BillSubsApiUnpaidInvoicesResponseSingleEntity
        return BillSubsApiUnpaidInvoicesResponseSingleEntity(self, data)


    def BillSubsApiUserSubscriptionResponseCollection(self, data=None) -> "BillSubsApiUserSubscriptionResponseCollectionEntity":
        """Entity factory: client.BillSubsApiUserSubscriptionResponseCollection().list() / client.BillSubsApiUserSubscriptionResponseCollection().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_user_subscription_response_collection_entity import BillSubsApiUserSubscriptionResponseCollectionEntity
        return BillSubsApiUserSubscriptionResponseCollectionEntity(self, data)


    def BillSubsApiUserSubscriptionResponseSingle(self, data=None) -> "BillSubsApiUserSubscriptionResponseSingleEntity":
        """Entity factory: client.BillSubsApiUserSubscriptionResponseSingle().list() / client.BillSubsApiUserSubscriptionResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_user_subscription_response_single_entity import BillSubsApiUserSubscriptionResponseSingleEntity
        return BillSubsApiUserSubscriptionResponseSingleEntity(self, data)


    def BillSubsApiZoneSubscriptionResponseSingle(self, data=None) -> "BillSubsApiZoneSubscriptionResponseSingleEntity":
        """Entity factory: client.BillSubsApiZoneSubscriptionResponseSingle().list() / client.BillSubsApiZoneSubscriptionResponseSingle().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.bill_subs_api_zone_subscription_response_single_entity import BillSubsApiZoneSubscriptionResponseSingleEntity
        return BillSubsApiZoneSubscriptionResponseSingleEntity(self, data)


    def BillableUsage(self, data=None) -> "BillableUsageEntity":
        """Entity factory: client.BillableUsage().list() / client.BillableUsage().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.billable_usage_entity import BillableUsageEntity
        return BillableUsageEntity(self, data)


    def BillableUsageApiUsageInfo(self, data=None) -> "BillableUsageApiUsageInfoEntity":
        """Entity factory: client.BillableUsageApiUsageInfo().list() / client.BillableUsageApiUsageInfo().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.billable_usage_api_usage_info_entity import BillableUsageApiUsageInfoEntity
        return BillableUsageApiUsageInfoEntity(self, data)


    def BillableUsageApiV2AccountBillableMetric(self, data=None) -> "BillableUsageApiV2AccountBillableMetricEntity":
        """Entity factory: client.BillableUsageApiV2AccountBillableMetric().list() / client.BillableUsageApiV2AccountBillableMetric().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.billable_usage_api_v2_account_billable_metric_entity import BillableUsageApiV2AccountBillableMetricEntity
        return BillableUsageApiV2AccountBillableMetricEntity(self, data)


    def BillableUsageApiV2Usage(self, data=None) -> "BillableUsageApiV2UsageEntity":
        """Entity factory: client.BillableUsageApiV2Usage().list() / client.BillableUsageApiV2Usage().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.billable_usage_api_v2_usage_entity import BillableUsageApiV2UsageEntity
        return BillableUsageApiV2UsageEntity(self, data)


    def CancelDowngrade(self, data=None) -> "CancelDowngradeEntity":
        """Entity factory: client.CancelDowngrade().list() / client.CancelDowngrade().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.cancel_downgrade_entity import CancelDowngradeEntity
        return CancelDowngradeEntity(self, data)


    def Entitlement(self, data=None) -> "EntitlementEntity":
        """Entity factory: client.Entitlement().list() / client.Entitlement().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.entitlement_entity import EntitlementEntity
        return EntitlementEntity(self, data)


    def Invoice(self, data=None) -> "InvoiceEntity":
        """Entity factory: client.Invoice().list() / client.Invoice().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.invoice_entity import InvoiceEntity
        return InvoiceEntity(self, data)


    def PaymentMethod(self, data=None) -> "PaymentMethodEntity":
        """Entity factory: client.PaymentMethod().list() / client.PaymentMethod().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.payment_method_entity import PaymentMethodEntity
        return PaymentMethodEntity(self, data)


    def SetAsDefault(self, data=None) -> "SetAsDefaultEntity":
        """Entity factory: client.SetAsDefault().list() / client.SetAsDefault().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.set_as_default_entity import SetAsDefaultEntity
        return SetAsDefaultEntity(self, data)


    def Usage(self, data=None) -> "UsageEntity":
        """Entity factory: client.Usage().list() / client.Usage().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.usage_entity import UsageEntity
        return UsageEntity(self, data)


    def UserSubscription(self, data=None) -> "UserSubscriptionEntity":
        """Entity factory: client.UserSubscription().list() / client.UserSubscription().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.user_subscription_entity import UserSubscriptionEntity
        return UserSubscriptionEntity(self, data)


    def ZoneRatePlan(self, data=None) -> "ZoneRatePlanEntity":
        """Entity factory: client.ZoneRatePlan().list() / client.ZoneRatePlan().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.zone_rate_plan_entity import ZoneRatePlanEntity
        return ZoneRatePlanEntity(self, data)


    def ZoneSubscription(self, data=None) -> "ZoneSubscriptionEntity":
        """Entity factory: client.ZoneSubscription().list() / client.ZoneSubscription().load({"id": ...})."""
        from cloudflarebilling_sdk.entity.zone_subscription_entity import ZoneSubscriptionEntity
        return ZoneSubscriptionEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareBillingSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflarebilling_sdk.entity.account_billing_entity import AccountBillingEntity
    from cloudflarebilling_sdk.entity.account_billing_profile_entity import AccountBillingProfileEntity
    from cloudflarebilling_sdk.entity.account_subscription_entity import AccountSubscriptionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_account_billing_history_collection_entity import BillSubsApiAccountBillingHistoryCollectionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_account_credit_entity import BillSubsApiAccountCreditEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_account_subscription_response_collection_entity import BillSubsApiAccountSubscriptionResponseCollectionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_account_subscription_response_single_entity import BillSubsApiAccountSubscriptionResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_address_validation_response_single_entity import BillSubsApiAddressValidationResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_bad_debt_response_single_entity import BillSubsApiBadDebtResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_billing_history_collection_entity import BillSubsApiBillingHistoryCollectionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_billing_response_single_entity import BillSubsApiBillingResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_cancel_reason_response_single_entity import BillSubsApiCancelReasonResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_client_secret_response_single_entity import BillSubsApiClientSecretResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_payment_intent_response_single_entity import BillSubsApiPaymentIntentResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_payment_method_response_collection_entity import BillSubsApiPaymentMethodResponseCollectionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_payment_method_response_single_entity import BillSubsApiPaymentMethodResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_plan_response_collection_entity import BillSubsApiPlanResponseCollectionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_rate_plan_simple_entity import BillSubsApiRatePlanSimpleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_unpaid_invoices_response_single_entity import BillSubsApiUnpaidInvoicesResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_user_subscription_response_collection_entity import BillSubsApiUserSubscriptionResponseCollectionEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_user_subscription_response_single_entity import BillSubsApiUserSubscriptionResponseSingleEntity
    from cloudflarebilling_sdk.entity.bill_subs_api_zone_subscription_response_single_entity import BillSubsApiZoneSubscriptionResponseSingleEntity
    from cloudflarebilling_sdk.entity.billable_usage_entity import BillableUsageEntity
    from cloudflarebilling_sdk.entity.billable_usage_api_usage_info_entity import BillableUsageApiUsageInfoEntity
    from cloudflarebilling_sdk.entity.billable_usage_api_v2_account_billable_metric_entity import BillableUsageApiV2AccountBillableMetricEntity
    from cloudflarebilling_sdk.entity.billable_usage_api_v2_usage_entity import BillableUsageApiV2UsageEntity
    from cloudflarebilling_sdk.entity.cancel_downgrade_entity import CancelDowngradeEntity
    from cloudflarebilling_sdk.entity.entitlement_entity import EntitlementEntity
    from cloudflarebilling_sdk.entity.invoice_entity import InvoiceEntity
    from cloudflarebilling_sdk.entity.payment_method_entity import PaymentMethodEntity
    from cloudflarebilling_sdk.entity.set_as_default_entity import SetAsDefaultEntity
    from cloudflarebilling_sdk.entity.usage_entity import UsageEntity
    from cloudflarebilling_sdk.entity.user_subscription_entity import UserSubscriptionEntity
    from cloudflarebilling_sdk.entity.zone_rate_plan_entity import ZoneRatePlanEntity
    from cloudflarebilling_sdk.entity.zone_subscription_entity import ZoneSubscriptionEntity
