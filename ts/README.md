# CloudflareBilling TypeScript SDK



The TypeScript SDK for the CloudflareBilling API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccountBilling()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-billing-sdk/releases](https://github.com/voxgig-sdk/cloudflare-billing-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareBillingSDK } from '@voxgig-sdk/cloudflare-billing-sdk'

const client = new CloudflareBillingSDK({
  apikey: process.env.CLOUDFLARE_BILLING_APIKEY,
})
```

### 3. Load a billsubsapipaymentmethodresponsesingle

BillSubsApiPaymentMethodResponseSingle is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const billsubsapipaymentmethodresponsesingle = await client.BillSubsApiPaymentMethodResponseSingle().load({
    account_id: 'example_account_id',
    payment_method_id: 'example_payment_method_id',
  })
  console.log(billsubsapipaymentmethodresponsesingle)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const billsubsapibaddebtresponsesingle = await client.BillSubsApiBadDebtResponseSingle().load({ account_id: "example" })
  console.log(billsubsapibaddebtresponsesingle)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareBillingSDK.test()

const billsubsapibaddebtresponsesingle = await client.BillSubsApiBadDebtResponseSingle().load({ account_id: 'example_account_id' })
// billsubsapibaddebtresponsesingle is the entity, populated with mock response data
// — call billsubsapibaddebtresponsesingle.data() for the record itself
console.log(billsubsapibaddebtresponsesingle)
```

You can also use the instance method:

```ts
const client = new CloudflareBillingSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.BillSubsApiBadDebtResponseSingle()

// First call runs the operation and stores its result
await entity.load({ account_id: 'example_account_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareBillingSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_BILLING_TEST_LIVE=TRUE
CLOUDFLARE_BILLING_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareBillingSDK

#### Constructor

```ts
new CloudflareBillingSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AccountBilling(data?)` | `AccountBillingEntity` | Create an AccountBilling entity instance. |
| `AccountBillingProfile(data?)` | `AccountBillingProfileEntity` | Create an AccountBillingProfile entity instance. |
| `AccountSubscription(data?)` | `AccountSubscriptionEntity` | Create an AccountSubscription entity instance. |
| `BillSubsApiAccountBillingHistoryCollection(data?)` | `BillSubsApiAccountBillingHistoryCollectionEntity` | Create a BillSubsApiAccountBillingHistoryCollection entity instance. |
| `BillSubsApiAccountCredit(data?)` | `BillSubsApiAccountCreditEntity` | Create a BillSubsApiAccountCredit entity instance. |
| `BillSubsApiAccountSubscriptionResponseCollection(data?)` | `BillSubsApiAccountSubscriptionResponseCollectionEntity` | Create a BillSubsApiAccountSubscriptionResponseCollection entity instance. |
| `BillSubsApiAccountSubscriptionResponseSingle(data?)` | `BillSubsApiAccountSubscriptionResponseSingleEntity` | Create a BillSubsApiAccountSubscriptionResponseSingle entity instance. |
| `BillSubsApiAddressValidationResponseSingle(data?)` | `BillSubsApiAddressValidationResponseSingleEntity` | Create a BillSubsApiAddressValidationResponseSingle entity instance. |
| `BillSubsApiBadDebtResponseSingle(data?)` | `BillSubsApiBadDebtResponseSingleEntity` | Create a BillSubsApiBadDebtResponseSingle entity instance. |
| `BillSubsApiBillingHistoryCollection(data?)` | `BillSubsApiBillingHistoryCollectionEntity` | Create a BillSubsApiBillingHistoryCollection entity instance. |
| `BillSubsApiBillingResponseSingle(data?)` | `BillSubsApiBillingResponseSingleEntity` | Create a BillSubsApiBillingResponseSingle entity instance. |
| `BillSubsApiCancelReasonResponseSingle(data?)` | `BillSubsApiCancelReasonResponseSingleEntity` | Create a BillSubsApiCancelReasonResponseSingle entity instance. |
| `BillSubsApiClientSecretResponseSingle(data?)` | `BillSubsApiClientSecretResponseSingleEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillSubsApiPaymentIntentResponseSingle(data?)` | `BillSubsApiPaymentIntentResponseSingleEntity` | Create a BillSubsApiPaymentIntentResponseSingle entity instance. |
| `BillSubsApiPaymentMethodResponseCollection(data?)` | `BillSubsApiPaymentMethodResponseCollectionEntity` | Create a BillSubsApiPaymentMethodResponseCollection entity instance. |
| `BillSubsApiPaymentMethodResponseSingle(data?)` | `BillSubsApiPaymentMethodResponseSingleEntity` | Create a BillSubsApiPaymentMethodResponseSingle entity instance. |
| `BillSubsApiPlanResponseCollection(data?)` | `BillSubsApiPlanResponseCollectionEntity` | Create a BillSubsApiPlanResponseCollection entity instance. |
| `BillSubsApiRatePlanSimple(data?)` | `BillSubsApiRatePlanSimpleEntity` | Create a BillSubsApiRatePlanSimple entity instance. |
| `BillSubsApiUnpaidInvoicesResponseSingle(data?)` | `BillSubsApiUnpaidInvoicesResponseSingleEntity` | Create a BillSubsApiUnpaidInvoicesResponseSingle entity instance. |
| `BillSubsApiUserSubscriptionResponseCollection(data?)` | `BillSubsApiUserSubscriptionResponseCollectionEntity` | Create a BillSubsApiUserSubscriptionResponseCollection entity instance. |
| `BillSubsApiUserSubscriptionResponseSingle(data?)` | `BillSubsApiUserSubscriptionResponseSingleEntity` | Create a BillSubsApiUserSubscriptionResponseSingle entity instance. |
| `BillSubsApiZoneSubscriptionResponseSingle(data?)` | `BillSubsApiZoneSubscriptionResponseSingleEntity` | Create a BillSubsApiZoneSubscriptionResponseSingle entity instance. |
| `BillableUsage(data?)` | `BillableUsageEntity` | Create a BillableUsage entity instance. |
| `BillableUsageApiUsageInfo(data?)` | `BillableUsageApiUsageInfoEntity` | Create a BillableUsageApiUsageInfo entity instance. |
| `BillableUsageApiV2AccountBillableMetric(data?)` | `BillableUsageApiV2AccountBillableMetricEntity` | Create a BillableUsageApiV2AccountBillableMetric entity instance. |
| `BillableUsageApiV2Usage(data?)` | `BillableUsageApiV2UsageEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `CancelDowngrade(data?)` | `CancelDowngradeEntity` | Create a CancelDowngrade entity instance. |
| `Entitlement(data?)` | `EntitlementEntity` | Create an Entitlement entity instance. |
| `Invoice(data?)` | `InvoiceEntity` | Create an Invoice entity instance. |
| `PaymentMethod(data?)` | `PaymentMethodEntity` | Create a PaymentMethod entity instance. |
| `SetAsDefault(data?)` | `SetAsDefaultEntity` | Create a SetAsDefault entity instance. |
| `Usage(data?)` | `UsageEntity` | Create an Usage entity instance. |
| `UserSubscription(data?)` | `UserSubscriptionEntity` | Create an UserSubscription entity instance. |
| `ZoneRatePlan(data?)` | `ZoneRatePlanEntity` | Create a ZoneRatePlan entity instance. |
| `ZoneSubscription(data?)` | `ZoneSubscriptionEntity` | Create a ZoneSubscription entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareBillingSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareBillingSDK.test(testopts?, sdkopts?)` | `CloudflareBillingSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareBillingSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AccountBilling

| Field | Description |
| --- | --- |

Operations: load.

API path: `/accounts/{account_id}/receipts/{receipt_id}/pdf`

#### AccountBillingProfile

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/billing/profile`

#### AccountSubscription

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}`

#### BillSubsApiAccountBillingHistoryCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/billing/history`

#### BillSubsApiAccountCredit

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/billing/credits`

#### BillSubsApiAccountSubscriptionResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/subscriptions`

#### BillSubsApiAccountSubscriptionResponseSingle

| Field | Description |
| --- | --- |
| `app` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | Configurable component values for the subscription. |
| `currency` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | The end of the current period and also when the next billing is due. |
| `current_period_start` | When the current billing period started. |
| `frequency` | How often the subscription is renewed automatically. |
| `id` | Subscription identifier tag. |
| `price` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | The rate plan applied to the subscription. |
| `result` |  |
| `state` | The state that the subscription is in. |
| `zone` | A simple zone object. |

Operations: create, load, update.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}/action/append`

#### BillSubsApiAddressValidationResponseSingle

| Field | Description |
| --- | --- |
| `address` | Address line 1. |
| `address2` | Address line 2. |
| `city` | City. |
| `country` | Country code. |
| `state` | State or province. |
| `zipcode` | Postal or zip code. |

Operations: create.

API path: `/billing/address-validation`

#### BillSubsApiBadDebtResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/billing/bad-debt`

#### BillSubsApiBillingHistoryCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/user/billing/history`

#### BillSubsApiBillingResponseSingle

| Field | Description |
| --- | --- |
| `address` | Street address line 1. |
| `address2` | Street address line 2 (apt, suite, etc.). |
| `billing_email` | Primary billing email address. |
| `buying_rate_plan` | Rate plan being purchased right after profile setup. |
| `captcha_challenge_jwt` | Captcha challenge JWT issued during onboarding. |
| `cf_turnstile_response` | Cloudflare Turnstile response. |
| `city` | City on the billing profile. |
| `company` | Company name on the billing profile. |
| `country` | ISO 3166-1 alpha-2 country code. |
| `first_name` | First name on the billing profile. |
| `h_captcha_response` | hCaptcha response. |
| `last_name` | Last name on the billing profile. |
| `preferred_locale` | Preferred locale for invoice rendering (BCP 47). |
| `result` |  |
| `secondary_billing_email` | Secondary billing email address for CC on invoices. |
| `state` | State or region on the billing profile. |
| `tax_id_type` | Type of tax ID provided. |
| `telephone` | Contact phone number. |
| `vat` | VAT identifier. |
| `zipcode` | ZIP or postal code. |

Operations: create, load, patch, update.

API path: `/accounts/{account_id}/billing/profile`

#### BillSubsApiCancelReasonResponseSingle

| Field | Description |
| --- | --- |
| `other` | Additional cancellation details. |
| `reason_code` | The cancellation reason codes. |
| `result` |  |

Operations: create, load.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason`

#### BillSubsApiClientSecretResponseSingle

| Field | Description |
| --- | --- |
| `invoice_id` | The identifier of the invoice to pay. |
| `payment_method_id` | The payment method to use. |
| `validate_payment_method` | Whether to validate the payment method before processing. |

Operations: create.

API path: `/accounts/{account_id}/pay-bad-debt`

#### BillSubsApiPaymentIntentResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: create.

API path: `/accounts/{account_id}/billing/profile/payment-method`

#### BillSubsApiPaymentMethodResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/payment-methods`

#### BillSubsApiPaymentMethodResponseSingle

| Field | Description |
| --- | --- |
| `address` | Billing address line 1. |
| `address2` | Billing address line 2. |
| `bank_account_type` | Bank account type. |
| `bank_code` | Bank code. |
| `bank_country` | Bank country. |
| `bank_name` | Bank name for bank-based payment methods. |
| `bank_routing_number` | Bank routing number. |
| `cashapp_cash_tag` | Cash App cash tag. |
| `city` | Billing city. |
| `country` | Billing country. |
| `default` | Whether this is the default payment method. |
| `device_data` | Device data for fraud prevention. |
| `expiration_date` | Card expiration date. |
| `first_name` | Billing first name. |
| `id` | Payment method identifier. |
| `last_four` | Last four digits of the card number. |
| `last_name` | Billing last name. |
| `nick_name` | A nickname for the payment method. |
| `payment_account_email` | Email associated with the payment account. |
| `payment_email` | Payment email address. |
| `payment_gateway` | The payment gateway used. |
| `payment_nonce` | Payment nonce for tokenized payments. |
| `result` |  |
| `state` | Billing state. |
| `type` | The payment method type. |
| `zipcode` | Billing zip code. |

Operations: create, load, update.

API path: `/accounts/{account_id}/payment-methods`

#### BillSubsApiPlanResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/available_rate_plans`

#### BillSubsApiRatePlanSimple

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/billing/rate_plans/{public_key}`

#### BillSubsApiUnpaidInvoicesResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/billing/unpaid-invoice`

#### BillSubsApiUserSubscriptionResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/user/subscriptions`

#### BillSubsApiUserSubscriptionResponseSingle

| Field | Description |
| --- | --- |
| `app` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | Configurable component values for the subscription. |
| `currency` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | The end of the current period and also when the next billing is due. |
| `current_period_start` | When the current billing period started. |
| `frequency` | How often the subscription is renewed automatically. |
| `id` | Subscription identifier tag. |
| `price` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | The rate plan applied to the subscription. |
| `state` | The state that the subscription is in. |
| `zone` | A simple zone object. |

Operations: create, update.

API path: `/user/subscriptions`

#### BillSubsApiZoneSubscriptionResponseSingle

| Field | Description |
| --- | --- |
| `app` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | Configurable component values for the subscription. |
| `currency` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | The end of the current period and also when the next billing is due. |
| `current_period_start` | When the current billing period started. |
| `frequency` | How often the subscription is renewed automatically. |
| `id` | Subscription identifier tag. |
| `price` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | The rate plan applied to the subscription. |
| `result` |  |
| `state` | The state that the subscription is in. |
| `zone` | A simple zone object. |

Operations: create, load, update.

API path: `/zones/{zone_id}/subscription`

#### BillableUsage

| Field | Description |
| --- | --- |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains informational notices about the response. |
| `result` | Contains the array of billable usage records. |
| `success` | Indicates whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/billable-usage`

#### BillableUsageApiUsageInfo

| Field | Description |
| --- | --- |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains any informational messages from the API. |
| `result` | Contains the usage info. |
| `success` | Indicates whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/billable-usage/info`

#### BillableUsageApiV2AccountBillableMetric

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/billable/usage/billable-metrics`

#### BillableUsageApiV2Usage

| Field | Description |
| --- | --- |
| `FilterBy` | Usage filters. |
| `GroupBy` | Grouping definitions used to split result rows. |
| `TimePeriod` | Charge period to query, i.e. |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains informational notices about the response. |
| `result` | Contains the array of cost and usage records. |
| `success` | Indicates whether the API call was successful. |

Operations: create, list.

API path: `/accounts/{account_id}/billable/usage`

#### CancelDowngrade

| Field | Description |
| --- | --- |
| `subscription_ids` | List of subscription identifiers to cancel downgrades for. |

Operations: create.

API path: `/accounts/{account_id}/subscriptions/cancel-downgrade`

#### Entitlement

| Field | Description |
| --- | --- |
| `errors` | List of errors, empty on success. |
| `messages` | List of informational messages. |
| `result` | List of entitlements for the requested object. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/entitlements`

#### Invoice

| Field | Description |
| --- | --- |
| `toggle` | Whether to enable or disable PDF invoice generation. |

Operations: update.

API path: `/accounts/{account_id}/invoices`

#### PaymentMethod

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/payment-methods/{payment_method_id}`

#### SetAsDefault

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: create.

API path: `/accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default`

#### Usage

| Field | Description |
| --- | --- |
| `errors` | List of errors, empty on success. |
| `messages` | List of informational messages. |
| `result` | Array of billing usage data points for the requested time range. |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/billing/usage`

#### UserSubscription

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/user/subscriptions/{identifier}`

#### ZoneRatePlan

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: list, load.

API path: `/zones/{zone_id}/available_plans`

#### ZoneSubscription

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/zones/{zone_id}/subscription`



## Entities


### AccountBilling

Create an instance: `const account_billing = client.AccountBilling()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const account_billing = await client.AccountBilling().load({ account_id: 'account_id', receipt_id: 'receipt_id' })
```


### AccountBillingProfile

Create an instance: `const account_billing_profile = client.AccountBillingProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AccountSubscription

Create an instance: `const account_subscription = client.AccountSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BillSubsApiAccountBillingHistoryCollection

Create an instance: `const bill_subs_api_account_billing_history_collection = client.BillSubsApiAccountBillingHistoryCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const bill_subs_api_account_billing_history_collections = await client.BillSubsApiAccountBillingHistoryCollection().list({ account_id: "example" })
```


### BillSubsApiAccountCredit

Create an instance: `const bill_subs_api_account_credit = client.BillSubsApiAccountCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const bill_subs_api_account_credit = await client.BillSubsApiAccountCredit().load({ account_id: 'account_id' })
```


### BillSubsApiAccountSubscriptionResponseCollection

Create an instance: `const bill_subs_api_account_subscription_response_collection = client.BillSubsApiAccountSubscriptionResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const bill_subs_api_account_subscription_response_collections = await client.BillSubsApiAccountSubscriptionResponseCollection().list({ account_id: "example" })
```


### BillSubsApiAccountSubscriptionResponseSingle

Create an instance: `const bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `Record<string, any>` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `any[]` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `number` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Record<string, any>` | The rate plan applied to the subscription. |
| `result` | `Record<string, any>` |  |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `Record<string, any>` | A simple zone object. |

#### Example: Load

```ts
const bill_subs_api_account_subscription_response_single = await client.BillSubsApiAccountSubscriptionResponseSingle().load({ account_id: 'account_id', subscription_identifier: 'subscription_identifier' })
```

#### Example: Create

```ts
const bill_subs_api_account_subscription_response_single = await client.BillSubsApiAccountSubscriptionResponseSingle().create({
  account_id: 'example_account_id',
})
```


### BillSubsApiAddressValidationResponseSingle

Create an instance: `const bill_subs_api_address_validation_response_single = client.BillSubsApiAddressValidationResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | Address line 1. |
| `address2` | `string` | Address line 2. |
| `city` | `string` | City. |
| `country` | `string` | Country code. |
| `state` | `string` | State or province. |
| `zipcode` | `string` | Postal or zip code. |

#### Example: Create

```ts
const bill_subs_api_address_validation_response_single = await client.BillSubsApiAddressValidationResponseSingle().create({
})
```


### BillSubsApiBadDebtResponseSingle

Create an instance: `const bill_subs_api_bad_debt_response_single = client.BillSubsApiBadDebtResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const bill_subs_api_bad_debt_response_single = await client.BillSubsApiBadDebtResponseSingle().load({ account_id: 'account_id' })
```


### BillSubsApiBillingHistoryCollection

Create an instance: `const bill_subs_api_billing_history_collection = client.BillSubsApiBillingHistoryCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const bill_subs_api_billing_history_collections = await client.BillSubsApiBillingHistoryCollection().list()
```


### BillSubsApiBillingResponseSingle

Create an instance: `const bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | Street address line 1. |
| `address2` | `string` | Street address line 2 (apt, suite, etc.). |
| `billing_email` | `string` | Primary billing email address. |
| `buying_rate_plan` | `string` | Rate plan being purchased right after profile setup. |
| `captcha_challenge_jwt` | `string` | Captcha challenge JWT issued during onboarding. |
| `cf_turnstile_response` | `string` | Cloudflare Turnstile response. |
| `city` | `string` | City on the billing profile. |
| `company` | `string` | Company name on the billing profile. |
| `country` | `string` | ISO 3166-1 alpha-2 country code. |
| `first_name` | `string` | First name on the billing profile. |
| `h_captcha_response` | `string` | hCaptcha response. |
| `last_name` | `string` | Last name on the billing profile. |
| `preferred_locale` | `string` | Preferred locale for invoice rendering (BCP 47). |
| `result` | `Record<string, any>` |  |
| `secondary_billing_email` | `string` | Secondary billing email address for CC on invoices. |
| `state` | `string` | State or region on the billing profile. |
| `tax_id_type` | `string` | Type of tax ID provided. |
| `telephone` | `string` | Contact phone number. |
| `vat` | `string` | VAT identifier. |
| `zipcode` | `string` | ZIP or postal code. |

#### Example: Load

```ts
const bill_subs_api_billing_response_single = await client.BillSubsApiBillingResponseSingle().load()
```

#### Example: Create

```ts
const bill_subs_api_billing_response_single = await client.BillSubsApiBillingResponseSingle().create({
  account_id: 'example_account_id',
})
```


### BillSubsApiCancelReasonResponseSingle

Create an instance: `const bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `other` | `string` | Additional cancellation details. |
| `reason_code` | `any[]` | The cancellation reason codes. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const bill_subs_api_cancel_reason_response_single = await client.BillSubsApiCancelReasonResponseSingle().load({ account_id: 'account_id', subscription_identifier: 'subscription_identifier' })
```

#### Example: Create

```ts
const bill_subs_api_cancel_reason_response_single = await client.BillSubsApiCancelReasonResponseSingle().create({
  account_id: 'example_account_id',
  subscription_identifier: 'example_subscription_identifier',
})
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `const bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `invoice_id` | `string` | The identifier of the invoice to pay. |
| `payment_method_id` | `string` | The payment method to use. |
| `validate_payment_method` | `boolean` | Whether to validate the payment method before processing. |

#### Example: Create

```ts
const bill_subs_api_client_secret_response_single = await client.BillSubsApiClientSecretResponseSingle().create({
  account_id: 'example_account_id',
})
```


### BillSubsApiPaymentIntentResponseSingle

Create an instance: `const bill_subs_api_payment_intent_response_single = client.BillSubsApiPaymentIntentResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Create

```ts
const bill_subs_api_payment_intent_response_single = await client.BillSubsApiPaymentIntentResponseSingle().create({
  account_id: 'example_account_id',
})
```


### BillSubsApiPaymentMethodResponseCollection

Create an instance: `const bill_subs_api_payment_method_response_collection = client.BillSubsApiPaymentMethodResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const bill_subs_api_payment_method_response_collections = await client.BillSubsApiPaymentMethodResponseCollection().list({ account_id: "example" })
```


### BillSubsApiPaymentMethodResponseSingle

Create an instance: `const bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | Billing address line 1. |
| `address2` | `string` | Billing address line 2. |
| `bank_account_type` | `string` | Bank account type. |
| `bank_code` | `string` | Bank code. |
| `bank_country` | `string` | Bank country. |
| `bank_name` | `string` | Bank name for bank-based payment methods. |
| `bank_routing_number` | `string` | Bank routing number. |
| `cashapp_cash_tag` | `string` | Cash App cash tag. |
| `city` | `string` | Billing city. |
| `country` | `string` | Billing country. |
| `default` | `boolean` | Whether this is the default payment method. |
| `device_data` | `string` | Device data for fraud prevention. |
| `expiration_date` | `string` | Card expiration date. |
| `first_name` | `string` | Billing first name. |
| `id` | `string` | Payment method identifier. |
| `last_four` | `string` | Last four digits of the card number. |
| `last_name` | `string` | Billing last name. |
| `nick_name` | `string` | A nickname for the payment method. |
| `payment_account_email` | `string` | Email associated with the payment account. |
| `payment_email` | `string` | Payment email address. |
| `payment_gateway` | `string` | The payment gateway used. |
| `payment_nonce` | `string` | Payment nonce for tokenized payments. |
| `result` | `Record<string, any>` |  |
| `state` | `string` | Billing state. |
| `type` | `string` | The payment method type. |
| `zipcode` | `string` | Billing zip code. |

#### Example: Load

```ts
const bill_subs_api_payment_method_response_single = await client.BillSubsApiPaymentMethodResponseSingle().load({ account_id: 'account_id', payment_method_id: 'payment_method_id' })
```

#### Example: Create

```ts
const bill_subs_api_payment_method_response_single = await client.BillSubsApiPaymentMethodResponseSingle().create({
  account_id: 'example_account_id',
})
```


### BillSubsApiPlanResponseCollection

Create an instance: `const bill_subs_api_plan_response_collection = client.BillSubsApiPlanResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const bill_subs_api_plan_response_collections = await client.BillSubsApiPlanResponseCollection().list({ zone_id: "example" })
```


### BillSubsApiRatePlanSimple

Create an instance: `const bill_subs_api_rate_plan_simple = client.BillSubsApiRatePlanSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const bill_subs_api_rate_plan_simple = await client.BillSubsApiRatePlanSimple().load({ public_key: 'public_key' })
```


### BillSubsApiUnpaidInvoicesResponseSingle

Create an instance: `const bill_subs_api_unpaid_invoices_response_single = client.BillSubsApiUnpaidInvoicesResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const bill_subs_api_unpaid_invoices_response_single = await client.BillSubsApiUnpaidInvoicesResponseSingle().load({ account_id: 'account_id' })
```


### BillSubsApiUserSubscriptionResponseCollection

Create an instance: `const bill_subs_api_user_subscription_response_collection = client.BillSubsApiUserSubscriptionResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const bill_subs_api_user_subscription_response_collections = await client.BillSubsApiUserSubscriptionResponseCollection().list()
```


### BillSubsApiUserSubscriptionResponseSingle

Create an instance: `const bill_subs_api_user_subscription_response_single = client.BillSubsApiUserSubscriptionResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `Record<string, any>` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `any[]` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `number` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Record<string, any>` | The rate plan applied to the subscription. |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `Record<string, any>` | A simple zone object. |

#### Example: Create

```ts
const bill_subs_api_user_subscription_response_single = await client.BillSubsApiUserSubscriptionResponseSingle().create({
})
```


### BillSubsApiZoneSubscriptionResponseSingle

Create an instance: `const bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `Record<string, any>` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `any[]` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `number` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Record<string, any>` | The rate plan applied to the subscription. |
| `result` | `Record<string, any>` |  |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `Record<string, any>` | A simple zone object. |

#### Example: Load

```ts
const bill_subs_api_zone_subscription_response_single = await client.BillSubsApiZoneSubscriptionResponseSingle().load({ zone_id: 'zone_id' })
```

#### Example: Create

```ts
const bill_subs_api_zone_subscription_response_single = await client.BillSubsApiZoneSubscriptionResponseSingle().create({
  zone_id: 'example_zone_id',
})
```


### BillableUsage

Create an instance: `const billable_usage = client.BillableUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | Contains error details if the request failed. |
| `messages` | `any[]` | Contains informational notices about the response. |
| `result` | `any[]` | Contains the array of billable usage records. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```ts
const billable_usages = await client.BillableUsage().list({ account_id: "example" })
```


### BillableUsageApiUsageInfo

Create an instance: `const billable_usage_api_usage_info = client.BillableUsageApiUsageInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | Contains error details if the request failed. |
| `messages` | `any[]` | Contains any informational messages from the API. |
| `result` | `Record<string, any>` | Contains the usage info. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```ts
const billable_usage_api_usage_infos = await client.BillableUsageApiUsageInfo().list({ account_id: "example" })
```


### BillableUsageApiV2AccountBillableMetric

Create an instance: `const billable_usage_api_v2_account_billable_metric = client.BillableUsageApiV2AccountBillableMetric()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const billable_usage_api_v2_account_billable_metrics = await client.BillableUsageApiV2AccountBillableMetric().list({ account_id: "example" })
```


### BillableUsageApiV2Usage

Create an instance: `const billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `FilterBy` | `Record<string, any>` | Usage filters. |
| `GroupBy` | `any[]` | Grouping definitions used to split result rows. |
| `TimePeriod` | `Record<string, any>` | Charge period to query, i.e. |
| `errors` | `any[]` | Contains error details if the request failed. |
| `messages` | `any[]` | Contains informational notices about the response. |
| `result` | `any[]` | Contains the array of cost and usage records. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```ts
const billable_usage_api_v2_usages = await client.BillableUsageApiV2Usage().list({ account_id: "example" })
```

#### Example: Create

```ts
const billable_usage_api_v2_usage = await client.BillableUsageApiV2Usage().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: [],
  success: true,
})
```


### CancelDowngrade

Create an instance: `const cancel_downgrade = client.CancelDowngrade()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscription_ids` | `any[]` | List of subscription identifiers to cancel downgrades for. |

#### Example: Create

```ts
const cancel_downgrade = await client.CancelDowngrade().create({
  account_id: 'example_account_id',
})
```


### Entitlement

Create an instance: `const entitlement = client.Entitlement()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | List of errors, empty on success. |
| `messages` | `any[]` | List of informational messages. |
| `result` | `any[]` | List of entitlements for the requested object. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const entitlements = await client.Entitlement().list({ account_id: "example" })
```


### Invoice

Create an instance: `const invoice = client.Invoice()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `toggle` | `boolean` | Whether to enable or disable PDF invoice generation. |


### PaymentMethod

Create an instance: `const payment_method = client.PaymentMethod()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SetAsDefault

Create an instance: `const set_as_default = client.SetAsDefault()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Create

```ts
const set_as_default = await client.SetAsDefault().create({
  account_id: 'example_account_id',
  payment_method_id: 'example_payment_method_id',
  errors: [],
  messages: [],
  result: 'example_result',
  success: true,
})
```


### Usage

Create an instance: `const usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | List of errors, empty on success. |
| `messages` | `any[]` | List of informational messages. |
| `result` | `any[]` | Array of billing usage data points for the requested time range. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const usages = await client.Usage().list({ account_id: "example" })
```


### UserSubscription

Create an instance: `const user_subscription = client.UserSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ZoneRatePlan

Create an instance: `const zone_rate_plan = client.ZoneRatePlan()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zone_rate_plan = await client.ZoneRatePlan().load({ plan_identifier: 'plan_identifier', zone_id: 'zone_id' })
```

#### Example: List

```ts
const zone_rate_plans = await client.ZoneRatePlan().list({ id: "example" })
```


### ZoneSubscription

Create an instance: `const zone_subscription = client.ZoneSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

2 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `entitlement` | `result` | 5 | 5 levels |
| `set_as_default` | `result` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-billing/
├── src/
│   ├── CloudflareBillingSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareBillingSDK } from '@voxgig-sdk/cloudflare-billing-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const billsubsapibaddebtresponsesingle = client.BillSubsApiBadDebtResponseSingle()
await billsubsapibaddebtresponsesingle.load({ account_id: "example" })

// billsubsapibaddebtresponsesingle.data() now returns the billsubsapibaddebtresponsesingle data from the last `load`
// billsubsapibaddebtresponsesingle.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
