// CloudflareBilling Ts SDK

import { AccountBillingEntity } from './entity/AccountBillingEntity'
import { AccountBillingProfileEntity } from './entity/AccountBillingProfileEntity'
import { AccountSubscriptionEntity } from './entity/AccountSubscriptionEntity'
import { BillSubsApiAccountBillingHistoryCollectionEntity } from './entity/BillSubsApiAccountBillingHistoryCollectionEntity'
import { BillSubsApiAccountCreditEntity } from './entity/BillSubsApiAccountCreditEntity'
import { BillSubsApiAccountSubscriptionResponseCollectionEntity } from './entity/BillSubsApiAccountSubscriptionResponseCollectionEntity'
import { BillSubsApiAccountSubscriptionResponseSingleEntity } from './entity/BillSubsApiAccountSubscriptionResponseSingleEntity'
import { BillSubsApiAddressValidationResponseSingleEntity } from './entity/BillSubsApiAddressValidationResponseSingleEntity'
import { BillSubsApiBadDebtResponseSingleEntity } from './entity/BillSubsApiBadDebtResponseSingleEntity'
import { BillSubsApiBillingHistoryCollectionEntity } from './entity/BillSubsApiBillingHistoryCollectionEntity'
import { BillSubsApiBillingResponseSingleEntity } from './entity/BillSubsApiBillingResponseSingleEntity'
import { BillSubsApiCancelReasonResponseSingleEntity } from './entity/BillSubsApiCancelReasonResponseSingleEntity'
import { BillSubsApiClientSecretResponseSingleEntity } from './entity/BillSubsApiClientSecretResponseSingleEntity'
import { BillSubsApiPaymentIntentResponseSingleEntity } from './entity/BillSubsApiPaymentIntentResponseSingleEntity'
import { BillSubsApiPaymentMethodResponseCollectionEntity } from './entity/BillSubsApiPaymentMethodResponseCollectionEntity'
import { BillSubsApiPaymentMethodResponseSingleEntity } from './entity/BillSubsApiPaymentMethodResponseSingleEntity'
import { BillSubsApiPlanResponseCollectionEntity } from './entity/BillSubsApiPlanResponseCollectionEntity'
import { BillSubsApiRatePlanSimpleEntity } from './entity/BillSubsApiRatePlanSimpleEntity'
import { BillSubsApiUnpaidInvoicesResponseSingleEntity } from './entity/BillSubsApiUnpaidInvoicesResponseSingleEntity'
import { BillSubsApiUserSubscriptionResponseCollectionEntity } from './entity/BillSubsApiUserSubscriptionResponseCollectionEntity'
import { BillSubsApiUserSubscriptionResponseSingleEntity } from './entity/BillSubsApiUserSubscriptionResponseSingleEntity'
import { BillSubsApiZoneSubscriptionResponseSingleEntity } from './entity/BillSubsApiZoneSubscriptionResponseSingleEntity'
import { BillableUsageEntity } from './entity/BillableUsageEntity'
import { BillableUsageApiUsageInfoEntity } from './entity/BillableUsageApiUsageInfoEntity'
import { BillableUsageApiV2AccountBillableMetricEntity } from './entity/BillableUsageApiV2AccountBillableMetricEntity'
import { BillableUsageApiV2UsageEntity } from './entity/BillableUsageApiV2UsageEntity'
import { CancelDowngradeEntity } from './entity/CancelDowngradeEntity'
import { EntitlementEntity } from './entity/EntitlementEntity'
import { InvoiceEntity } from './entity/InvoiceEntity'
import { PaymentMethodEntity } from './entity/PaymentMethodEntity'
import { SetAsDefaultEntity } from './entity/SetAsDefaultEntity'
import { UsageEntity } from './entity/UsageEntity'
import { UserSubscriptionEntity } from './entity/UserSubscriptionEntity'
import { ZoneRatePlanEntity } from './entity/ZoneRatePlanEntity'
import { ZoneSubscriptionEntity } from './entity/ZoneSubscriptionEntity'

export type * from './CloudflareBillingTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareBillingEntityBase } from './CloudflareBillingEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareBillingSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareBillingSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareBillingSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareBillingSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AccountBilling().list()` / `client.AccountBilling().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountBilling(entopts?: Record<string, any>) {
    const self = this
    return new AccountBillingEntity(self, entopts)
  }


  // Entity access: `client.AccountBillingProfile().list()` / `client.AccountBillingProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountBillingProfile(entopts?: Record<string, any>) {
    const self = this
    return new AccountBillingProfileEntity(self, entopts)
  }


  // Entity access: `client.AccountSubscription().list()` / `client.AccountSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountSubscription(entopts?: Record<string, any>) {
    const self = this
    return new AccountSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiAccountBillingHistoryCollection().list()` / `client.BillSubsApiAccountBillingHistoryCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiAccountBillingHistoryCollection(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiAccountBillingHistoryCollectionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiAccountCredit().list()` / `client.BillSubsApiAccountCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiAccountCredit(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiAccountCreditEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiAccountSubscriptionResponseCollection().list()` / `client.BillSubsApiAccountSubscriptionResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiAccountSubscriptionResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiAccountSubscriptionResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiAccountSubscriptionResponseSingle().list()` / `client.BillSubsApiAccountSubscriptionResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiAccountSubscriptionResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiAccountSubscriptionResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiAddressValidationResponseSingle().list()` / `client.BillSubsApiAddressValidationResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiAddressValidationResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiAddressValidationResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiBadDebtResponseSingle().list()` / `client.BillSubsApiBadDebtResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiBadDebtResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiBadDebtResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiBillingHistoryCollection().list()` / `client.BillSubsApiBillingHistoryCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiBillingHistoryCollection(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiBillingHistoryCollectionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiBillingResponseSingle().list()` / `client.BillSubsApiBillingResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiBillingResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiBillingResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiCancelReasonResponseSingle().list()` / `client.BillSubsApiCancelReasonResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiCancelReasonResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiCancelReasonResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiClientSecretResponseSingle().list()` / `client.BillSubsApiClientSecretResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiClientSecretResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiClientSecretResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiPaymentIntentResponseSingle().list()` / `client.BillSubsApiPaymentIntentResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiPaymentIntentResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiPaymentIntentResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiPaymentMethodResponseCollection().list()` / `client.BillSubsApiPaymentMethodResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiPaymentMethodResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiPaymentMethodResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiPaymentMethodResponseSingle().list()` / `client.BillSubsApiPaymentMethodResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiPaymentMethodResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiPaymentMethodResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiPlanResponseCollection().list()` / `client.BillSubsApiPlanResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiPlanResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiPlanResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiRatePlanSimple().list()` / `client.BillSubsApiRatePlanSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiRatePlanSimple(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiRatePlanSimpleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiUnpaidInvoicesResponseSingle().list()` / `client.BillSubsApiUnpaidInvoicesResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiUnpaidInvoicesResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiUnpaidInvoicesResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiUserSubscriptionResponseCollection().list()` / `client.BillSubsApiUserSubscriptionResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiUserSubscriptionResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiUserSubscriptionResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiUserSubscriptionResponseSingle().list()` / `client.BillSubsApiUserSubscriptionResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiUserSubscriptionResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiUserSubscriptionResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiZoneSubscriptionResponseSingle().list()` / `client.BillSubsApiZoneSubscriptionResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiZoneSubscriptionResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiZoneSubscriptionResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillableUsage().list()` / `client.BillableUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillableUsage(entopts?: Record<string, any>) {
    const self = this
    return new BillableUsageEntity(self, entopts)
  }


  // Entity access: `client.BillableUsageApiUsageInfo().list()` / `client.BillableUsageApiUsageInfo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillableUsageApiUsageInfo(entopts?: Record<string, any>) {
    const self = this
    return new BillableUsageApiUsageInfoEntity(self, entopts)
  }


  // Entity access: `client.BillableUsageApiV2AccountBillableMetric().list()` / `client.BillableUsageApiV2AccountBillableMetric().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillableUsageApiV2AccountBillableMetric(entopts?: Record<string, any>) {
    const self = this
    return new BillableUsageApiV2AccountBillableMetricEntity(self, entopts)
  }


  // Entity access: `client.BillableUsageApiV2Usage().list()` / `client.BillableUsageApiV2Usage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillableUsageApiV2Usage(entopts?: Record<string, any>) {
    const self = this
    return new BillableUsageApiV2UsageEntity(self, entopts)
  }


  // Entity access: `client.CancelDowngrade().list()` / `client.CancelDowngrade().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CancelDowngrade(entopts?: Record<string, any>) {
    const self = this
    return new CancelDowngradeEntity(self, entopts)
  }


  // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Entitlement(entopts?: Record<string, any>) {
    const self = this
    return new EntitlementEntity(self, entopts)
  }


  // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invoice(entopts?: Record<string, any>) {
    const self = this
    return new InvoiceEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethod().list()` / `client.PaymentMethod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethod(entopts?: Record<string, any>) {
    const self = this
    return new PaymentMethodEntity(self, entopts)
  }


  // Entity access: `client.SetAsDefault().list()` / `client.SetAsDefault().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SetAsDefault(entopts?: Record<string, any>) {
    const self = this
    return new SetAsDefaultEntity(self, entopts)
  }


  // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usage(entopts?: Record<string, any>) {
    const self = this
    return new UsageEntity(self, entopts)
  }


  // Entity access: `client.UserSubscription().list()` / `client.UserSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserSubscription(entopts?: Record<string, any>) {
    const self = this
    return new UserSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.ZoneRatePlan().list()` / `client.ZoneRatePlan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZoneRatePlan(entopts?: Record<string, any>) {
    const self = this
    return new ZoneRatePlanEntity(self, entopts)
  }


  // Entity access: `client.ZoneSubscription().list()` / `client.ZoneSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZoneSubscription(entopts?: Record<string, any>) {
    const self = this
    return new ZoneSubscriptionEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareBillingSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareBillingSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareBilling' }
  }

  toString() {
    return 'CloudflareBilling ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareBillingSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareBillingEntityBase,

  CloudflareBillingSDK,
  SDK,
}


