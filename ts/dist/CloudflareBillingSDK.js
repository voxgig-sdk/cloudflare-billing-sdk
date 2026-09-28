"use strict";
// CloudflareBilling Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareBillingSDK = exports.CloudflareBillingEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountBillingEntity_1 = require("./entity/AccountBillingEntity");
const AccountBillingProfileEntity_1 = require("./entity/AccountBillingProfileEntity");
const AccountSubscriptionEntity_1 = require("./entity/AccountSubscriptionEntity");
const BillSubsApiAccountBillingHistoryCollectionEntity_1 = require("./entity/BillSubsApiAccountBillingHistoryCollectionEntity");
const BillSubsApiAccountCreditEntity_1 = require("./entity/BillSubsApiAccountCreditEntity");
const BillSubsApiAccountSubscriptionResponseCollectionEntity_1 = require("./entity/BillSubsApiAccountSubscriptionResponseCollectionEntity");
const BillSubsApiAccountSubscriptionResponseSingleEntity_1 = require("./entity/BillSubsApiAccountSubscriptionResponseSingleEntity");
const BillSubsApiAddressValidationResponseSingleEntity_1 = require("./entity/BillSubsApiAddressValidationResponseSingleEntity");
const BillSubsApiBadDebtResponseSingleEntity_1 = require("./entity/BillSubsApiBadDebtResponseSingleEntity");
const BillSubsApiBillingHistoryCollectionEntity_1 = require("./entity/BillSubsApiBillingHistoryCollectionEntity");
const BillSubsApiBillingResponseSingleEntity_1 = require("./entity/BillSubsApiBillingResponseSingleEntity");
const BillSubsApiCancelReasonResponseSingleEntity_1 = require("./entity/BillSubsApiCancelReasonResponseSingleEntity");
const BillSubsApiClientSecretResponseSingleEntity_1 = require("./entity/BillSubsApiClientSecretResponseSingleEntity");
const BillSubsApiPaymentIntentResponseSingleEntity_1 = require("./entity/BillSubsApiPaymentIntentResponseSingleEntity");
const BillSubsApiPaymentMethodResponseCollectionEntity_1 = require("./entity/BillSubsApiPaymentMethodResponseCollectionEntity");
const BillSubsApiPaymentMethodResponseSingleEntity_1 = require("./entity/BillSubsApiPaymentMethodResponseSingleEntity");
const BillSubsApiPlanResponseCollectionEntity_1 = require("./entity/BillSubsApiPlanResponseCollectionEntity");
const BillSubsApiRatePlanSimpleEntity_1 = require("./entity/BillSubsApiRatePlanSimpleEntity");
const BillSubsApiUnpaidInvoicesResponseSingleEntity_1 = require("./entity/BillSubsApiUnpaidInvoicesResponseSingleEntity");
const BillSubsApiUserSubscriptionResponseCollectionEntity_1 = require("./entity/BillSubsApiUserSubscriptionResponseCollectionEntity");
const BillSubsApiUserSubscriptionResponseSingleEntity_1 = require("./entity/BillSubsApiUserSubscriptionResponseSingleEntity");
const BillSubsApiZoneSubscriptionResponseSingleEntity_1 = require("./entity/BillSubsApiZoneSubscriptionResponseSingleEntity");
const BillableUsageEntity_1 = require("./entity/BillableUsageEntity");
const BillableUsageApiUsageInfoEntity_1 = require("./entity/BillableUsageApiUsageInfoEntity");
const BillableUsageApiV2AccountBillableMetricEntity_1 = require("./entity/BillableUsageApiV2AccountBillableMetricEntity");
const BillableUsageApiV2UsageEntity_1 = require("./entity/BillableUsageApiV2UsageEntity");
const CancelDowngradeEntity_1 = require("./entity/CancelDowngradeEntity");
const EntitlementEntity_1 = require("./entity/EntitlementEntity");
const InvoiceEntity_1 = require("./entity/InvoiceEntity");
const PaymentMethodEntity_1 = require("./entity/PaymentMethodEntity");
const SetAsDefaultEntity_1 = require("./entity/SetAsDefaultEntity");
const UsageEntity_1 = require("./entity/UsageEntity");
const UserSubscriptionEntity_1 = require("./entity/UserSubscriptionEntity");
const ZoneRatePlanEntity_1 = require("./entity/ZoneRatePlanEntity");
const ZoneSubscriptionEntity_1 = require("./entity/ZoneSubscriptionEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareBillingEntityBase_1 = require("./CloudflareBillingEntityBase");
Object.defineProperty(exports, "CloudflareBillingEntityBase", { enumerable: true, get: function () { return CloudflareBillingEntityBase_1.CloudflareBillingEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareBillingSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareBillingSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareBillingSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareBillingSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AccountBilling().list()` / `client.AccountBilling().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountBilling(entopts) {
        const self = this;
        return new AccountBillingEntity_1.AccountBillingEntity(self, entopts);
    }
    // Entity access: `client.AccountBillingProfile().list()` / `client.AccountBillingProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountBillingProfile(entopts) {
        const self = this;
        return new AccountBillingProfileEntity_1.AccountBillingProfileEntity(self, entopts);
    }
    // Entity access: `client.AccountSubscription().list()` / `client.AccountSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountSubscription(entopts) {
        const self = this;
        return new AccountSubscriptionEntity_1.AccountSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiAccountBillingHistoryCollection().list()` / `client.BillSubsApiAccountBillingHistoryCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiAccountBillingHistoryCollection(entopts) {
        const self = this;
        return new BillSubsApiAccountBillingHistoryCollectionEntity_1.BillSubsApiAccountBillingHistoryCollectionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiAccountCredit().list()` / `client.BillSubsApiAccountCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiAccountCredit(entopts) {
        const self = this;
        return new BillSubsApiAccountCreditEntity_1.BillSubsApiAccountCreditEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiAccountSubscriptionResponseCollection().list()` / `client.BillSubsApiAccountSubscriptionResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiAccountSubscriptionResponseCollection(entopts) {
        const self = this;
        return new BillSubsApiAccountSubscriptionResponseCollectionEntity_1.BillSubsApiAccountSubscriptionResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiAccountSubscriptionResponseSingle().list()` / `client.BillSubsApiAccountSubscriptionResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiAccountSubscriptionResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiAccountSubscriptionResponseSingleEntity_1.BillSubsApiAccountSubscriptionResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiAddressValidationResponseSingle().list()` / `client.BillSubsApiAddressValidationResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiAddressValidationResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiAddressValidationResponseSingleEntity_1.BillSubsApiAddressValidationResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiBadDebtResponseSingle().list()` / `client.BillSubsApiBadDebtResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiBadDebtResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiBadDebtResponseSingleEntity_1.BillSubsApiBadDebtResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiBillingHistoryCollection().list()` / `client.BillSubsApiBillingHistoryCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiBillingHistoryCollection(entopts) {
        const self = this;
        return new BillSubsApiBillingHistoryCollectionEntity_1.BillSubsApiBillingHistoryCollectionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiBillingResponseSingle().list()` / `client.BillSubsApiBillingResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiBillingResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiBillingResponseSingleEntity_1.BillSubsApiBillingResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiCancelReasonResponseSingle().list()` / `client.BillSubsApiCancelReasonResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiCancelReasonResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiCancelReasonResponseSingleEntity_1.BillSubsApiCancelReasonResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiClientSecretResponseSingle().list()` / `client.BillSubsApiClientSecretResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiClientSecretResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiClientSecretResponseSingleEntity_1.BillSubsApiClientSecretResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiPaymentIntentResponseSingle().list()` / `client.BillSubsApiPaymentIntentResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiPaymentIntentResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiPaymentIntentResponseSingleEntity_1.BillSubsApiPaymentIntentResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiPaymentMethodResponseCollection().list()` / `client.BillSubsApiPaymentMethodResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiPaymentMethodResponseCollection(entopts) {
        const self = this;
        return new BillSubsApiPaymentMethodResponseCollectionEntity_1.BillSubsApiPaymentMethodResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiPaymentMethodResponseSingle().list()` / `client.BillSubsApiPaymentMethodResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiPaymentMethodResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiPaymentMethodResponseSingleEntity_1.BillSubsApiPaymentMethodResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiPlanResponseCollection().list()` / `client.BillSubsApiPlanResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiPlanResponseCollection(entopts) {
        const self = this;
        return new BillSubsApiPlanResponseCollectionEntity_1.BillSubsApiPlanResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiRatePlanSimple().list()` / `client.BillSubsApiRatePlanSimple().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiRatePlanSimple(entopts) {
        const self = this;
        return new BillSubsApiRatePlanSimpleEntity_1.BillSubsApiRatePlanSimpleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiUnpaidInvoicesResponseSingle().list()` / `client.BillSubsApiUnpaidInvoicesResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiUnpaidInvoicesResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiUnpaidInvoicesResponseSingleEntity_1.BillSubsApiUnpaidInvoicesResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiUserSubscriptionResponseCollection().list()` / `client.BillSubsApiUserSubscriptionResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiUserSubscriptionResponseCollection(entopts) {
        const self = this;
        return new BillSubsApiUserSubscriptionResponseCollectionEntity_1.BillSubsApiUserSubscriptionResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiUserSubscriptionResponseSingle().list()` / `client.BillSubsApiUserSubscriptionResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiUserSubscriptionResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiUserSubscriptionResponseSingleEntity_1.BillSubsApiUserSubscriptionResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiZoneSubscriptionResponseSingle().list()` / `client.BillSubsApiZoneSubscriptionResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiZoneSubscriptionResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiZoneSubscriptionResponseSingleEntity_1.BillSubsApiZoneSubscriptionResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillableUsage().list()` / `client.BillableUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillableUsage(entopts) {
        const self = this;
        return new BillableUsageEntity_1.BillableUsageEntity(self, entopts);
    }
    // Entity access: `client.BillableUsageApiUsageInfo().list()` / `client.BillableUsageApiUsageInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillableUsageApiUsageInfo(entopts) {
        const self = this;
        return new BillableUsageApiUsageInfoEntity_1.BillableUsageApiUsageInfoEntity(self, entopts);
    }
    // Entity access: `client.BillableUsageApiV2AccountBillableMetric().list()` / `client.BillableUsageApiV2AccountBillableMetric().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillableUsageApiV2AccountBillableMetric(entopts) {
        const self = this;
        return new BillableUsageApiV2AccountBillableMetricEntity_1.BillableUsageApiV2AccountBillableMetricEntity(self, entopts);
    }
    // Entity access: `client.BillableUsageApiV2Usage().list()` / `client.BillableUsageApiV2Usage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillableUsageApiV2Usage(entopts) {
        const self = this;
        return new BillableUsageApiV2UsageEntity_1.BillableUsageApiV2UsageEntity(self, entopts);
    }
    // Entity access: `client.CancelDowngrade().list()` / `client.CancelDowngrade().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CancelDowngrade(entopts) {
        const self = this;
        return new CancelDowngradeEntity_1.CancelDowngradeEntity(self, entopts);
    }
    // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Entitlement(entopts) {
        const self = this;
        return new EntitlementEntity_1.EntitlementEntity(self, entopts);
    }
    // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Invoice(entopts) {
        const self = this;
        return new InvoiceEntity_1.InvoiceEntity(self, entopts);
    }
    // Entity access: `client.PaymentMethod().list()` / `client.PaymentMethod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentMethod(entopts) {
        const self = this;
        return new PaymentMethodEntity_1.PaymentMethodEntity(self, entopts);
    }
    // Entity access: `client.SetAsDefault().list()` / `client.SetAsDefault().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SetAsDefault(entopts) {
        const self = this;
        return new SetAsDefaultEntity_1.SetAsDefaultEntity(self, entopts);
    }
    // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usage(entopts) {
        const self = this;
        return new UsageEntity_1.UsageEntity(self, entopts);
    }
    // Entity access: `client.UserSubscription().list()` / `client.UserSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserSubscription(entopts) {
        const self = this;
        return new UserSubscriptionEntity_1.UserSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.ZoneRatePlan().list()` / `client.ZoneRatePlan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZoneRatePlan(entopts) {
        const self = this;
        return new ZoneRatePlanEntity_1.ZoneRatePlanEntity(self, entopts);
    }
    // Entity access: `client.ZoneSubscription().list()` / `client.ZoneSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZoneSubscription(entopts) {
        const self = this;
        return new ZoneSubscriptionEntity_1.ZoneSubscriptionEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareBillingSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareBillingSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareBilling' };
    }
    toString() {
        return 'CloudflareBilling ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareBillingSDK = CloudflareBillingSDK;
const SDK = CloudflareBillingSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareBillingSDK.js.map