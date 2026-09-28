# CloudflareBilling TypeScript SDK Reference

Complete API reference for the CloudflareBilling TypeScript SDK.


## CloudflareBillingSDK

### Constructor

```ts
new CloudflareBillingSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareBillingSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareBillingSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareBillingSDK` instance in test mode.


### Instance Methods

#### `AccountBilling(data?: object)`

Create a new `AccountBilling` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountBillingEntity` instance.

#### `AccountBillingProfile(data?: object)`

Create a new `AccountBillingProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountBillingProfileEntity` instance.

#### `AccountSubscription(data?: object)`

Create a new `AccountSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountSubscriptionEntity` instance.

#### `BillSubsApiAccountBillingHistoryCollection(data?: object)`

Create a new `BillSubsApiAccountBillingHistoryCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiAccountBillingHistoryCollectionEntity` instance.

#### `BillSubsApiAccountCredit(data?: object)`

Create a new `BillSubsApiAccountCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiAccountCreditEntity` instance.

#### `BillSubsApiAccountSubscriptionResponseCollection(data?: object)`

Create a new `BillSubsApiAccountSubscriptionResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance.

#### `BillSubsApiAccountSubscriptionResponseSingle(data?: object)`

Create a new `BillSubsApiAccountSubscriptionResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiAccountSubscriptionResponseSingleEntity` instance.

#### `BillSubsApiAddressValidationResponseSingle(data?: object)`

Create a new `BillSubsApiAddressValidationResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiAddressValidationResponseSingleEntity` instance.

#### `BillSubsApiBadDebtResponseSingle(data?: object)`

Create a new `BillSubsApiBadDebtResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiBadDebtResponseSingleEntity` instance.

#### `BillSubsApiBillingHistoryCollection(data?: object)`

Create a new `BillSubsApiBillingHistoryCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiBillingHistoryCollectionEntity` instance.

#### `BillSubsApiBillingResponseSingle(data?: object)`

Create a new `BillSubsApiBillingResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiBillingResponseSingleEntity` instance.

#### `BillSubsApiCancelReasonResponseSingle(data?: object)`

Create a new `BillSubsApiCancelReasonResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiCancelReasonResponseSingleEntity` instance.

#### `BillSubsApiClientSecretResponseSingle(data?: object)`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiClientSecretResponseSingleEntity` instance.

#### `BillSubsApiPaymentIntentResponseSingle(data?: object)`

Create a new `BillSubsApiPaymentIntentResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiPaymentIntentResponseSingleEntity` instance.

#### `BillSubsApiPaymentMethodResponseCollection(data?: object)`

Create a new `BillSubsApiPaymentMethodResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiPaymentMethodResponseCollectionEntity` instance.

#### `BillSubsApiPaymentMethodResponseSingle(data?: object)`

Create a new `BillSubsApiPaymentMethodResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiPaymentMethodResponseSingleEntity` instance.

#### `BillSubsApiPlanResponseCollection(data?: object)`

Create a new `BillSubsApiPlanResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiPlanResponseCollectionEntity` instance.

#### `BillSubsApiRatePlanSimple(data?: object)`

Create a new `BillSubsApiRatePlanSimple` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiRatePlanSimpleEntity` instance.

#### `BillSubsApiUnpaidInvoicesResponseSingle(data?: object)`

Create a new `BillSubsApiUnpaidInvoicesResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance.

#### `BillSubsApiUserSubscriptionResponseCollection(data?: object)`

Create a new `BillSubsApiUserSubscriptionResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiUserSubscriptionResponseCollectionEntity` instance.

#### `BillSubsApiUserSubscriptionResponseSingle(data?: object)`

Create a new `BillSubsApiUserSubscriptionResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiUserSubscriptionResponseSingleEntity` instance.

#### `BillSubsApiZoneSubscriptionResponseSingle(data?: object)`

Create a new `BillSubsApiZoneSubscriptionResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiZoneSubscriptionResponseSingleEntity` instance.

#### `BillableUsage(data?: object)`

Create a new `BillableUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillableUsageEntity` instance.

#### `BillableUsageApiUsageInfo(data?: object)`

Create a new `BillableUsageApiUsageInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillableUsageApiUsageInfoEntity` instance.

#### `BillableUsageApiV2AccountBillableMetric(data?: object)`

Create a new `BillableUsageApiV2AccountBillableMetric` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillableUsageApiV2AccountBillableMetricEntity` instance.

#### `BillableUsageApiV2Usage(data?: object)`

Create a new `BillableUsageApiV2Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillableUsageApiV2UsageEntity` instance.

#### `CancelDowngrade(data?: object)`

Create a new `CancelDowngrade` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CancelDowngradeEntity` instance.

#### `Entitlement(data?: object)`

Create a new `Entitlement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntitlementEntity` instance.

#### `Invoice(data?: object)`

Create a new `Invoice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvoiceEntity` instance.

#### `PaymentMethod(data?: object)`

Create a new `PaymentMethod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentMethodEntity` instance.

#### `SetAsDefault(data?: object)`

Create a new `SetAsDefault` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SetAsDefaultEntity` instance.

#### `Usage(data?: object)`

Create a new `Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageEntity` instance.

#### `UserSubscription(data?: object)`

Create a new `UserSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSubscriptionEntity` instance.

#### `ZoneRatePlan(data?: object)`

Create a new `ZoneRatePlan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZoneRatePlanEntity` instance.

#### `ZoneSubscription(data?: object)`

Create a new `ZoneSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZoneSubscriptionEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareBillingSDK.test()`.

**Returns:** `CloudflareBillingSDK` instance in test mode.


---

## AccountBillingEntity

```ts
const account_billing = client.AccountBilling()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountBilling().load({ account_id: 'account_id', receipt_id: 'receipt_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountBillingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountBillingProfileEntity

```ts
const account_billing_profile = client.AccountBillingProfile()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountBillingProfile().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountBillingProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountSubscriptionEntity

```ts
const account_subscription = client.AccountSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountSubscription().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiAccountBillingHistoryCollectionEntity

```ts
const bill_subs_api_account_billing_history_collection = client.BillSubsApiAccountBillingHistoryCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillSubsApiAccountBillingHistoryCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiAccountCreditEntity

```ts
const bill_subs_api_account_credit = client.BillSubsApiAccountCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiAccountCredit().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiAccountCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiAccountSubscriptionResponseCollectionEntity

```ts
const bill_subs_api_account_subscription_response_collection = client.BillSubsApiAccountSubscriptionResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillSubsApiAccountSubscriptionResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiAccountSubscriptionResponseSingleEntity

```ts
const bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Record<string, any>` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `any[]` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `number` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Record<string, any>` | No | The rate plan applied to the subscription. |
| `result` | `Record<string, any>` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `Record<string, any>` | No | A simple zone object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiAccountSubscriptionResponseSingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiAccountSubscriptionResponseSingle().load({ account_id: 'account_id', subscription_identifier: 'subscription_identifier' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BillSubsApiAccountSubscriptionResponseSingle().update({
  account_id: 'account_id',
  subscription_identifier: 'subscription_identifier',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiAddressValidationResponseSingleEntity

```ts
const bill_subs_api_address_validation_response_single = client.BillSubsApiAddressValidationResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | Address line 1. |
| `address2` | `string` | No | Address line 2. |
| `city` | `string` | No | City. |
| `country` | `string` | No | Country code. |
| `state` | `string` | No | State or province. |
| `zipcode` | `string` | No | Postal or zip code. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiAddressValidationResponseSingle().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiBadDebtResponseSingleEntity

```ts
const bill_subs_api_bad_debt_response_single = client.BillSubsApiBadDebtResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiBadDebtResponseSingle().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiBillingHistoryCollectionEntity

```ts
const bill_subs_api_billing_history_collection = client.BillSubsApiBillingHistoryCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillSubsApiBillingHistoryCollection().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiBillingResponseSingleEntity

```ts
const bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | Street address line 1. |
| `address2` | `string` | No | Street address line 2 (apt, suite, etc.). |
| `billing_email` | `string` | No | Primary billing email address. |
| `buying_rate_plan` | `string` | No | Rate plan being purchased right after profile setup. |
| `captcha_challenge_jwt` | `string` | No | Captcha challenge JWT issued during onboarding. |
| `cf_turnstile_response` | `string` | No | Cloudflare Turnstile response. |
| `city` | `string` | No | City on the billing profile. |
| `company` | `string` | No | Company name on the billing profile. |
| `country` | `string` | No | ISO 3166-1 alpha-2 country code. |
| `first_name` | `string` | No | First name on the billing profile. |
| `h_captcha_response` | `string` | No | hCaptcha response. |
| `last_name` | `string` | No | Last name on the billing profile. |
| `preferred_locale` | `string` | No | Preferred locale for invoice rendering (BCP 47). |
| `result` | `Record<string, any>` | No |  |
| `secondary_billing_email` | `string` | No | Secondary billing email address for CC on invoices. |
| `state` | `string` | No | State or region on the billing profile. |
| `tax_id_type` | `string` | No | Type of tax ID provided. |
| `telephone` | `string` | No | Contact phone number. |
| `vat` | `string` | No | VAT identifier. |
| `zipcode` | `string` | No | ZIP or postal code. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiBillingResponseSingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiBillingResponseSingle().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BillSubsApiBillingResponseSingle().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiBillingResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiCancelReasonResponseSingleEntity

```ts
const bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `other` | `string` | No | Additional cancellation details. |
| `reason_code` | `any[]` | No | The cancellation reason codes. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiCancelReasonResponseSingle().create({
  account_id: 'example_account_id',
  subscription_identifier: 'example_subscription_identifier',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiCancelReasonResponseSingle().load({ account_id: 'account_id', subscription_identifier: 'subscription_identifier' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiClientSecretResponseSingleEntity

```ts
const bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice_id` | `string` | No | The identifier of the invoice to pay. |
| `payment_method_id` | `string` | No | The payment method to use. |
| `validate_payment_method` | `boolean` | No | Whether to validate the payment method before processing. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiClientSecretResponseSingle().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiPaymentIntentResponseSingleEntity

```ts
const bill_subs_api_payment_intent_response_single = client.BillSubsApiPaymentIntentResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiPaymentIntentResponseSingle().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiPaymentMethodResponseCollectionEntity

```ts
const bill_subs_api_payment_method_response_collection = client.BillSubsApiPaymentMethodResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillSubsApiPaymentMethodResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiPaymentMethodResponseSingleEntity

```ts
const bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | Billing address line 1. |
| `address2` | `string` | No | Billing address line 2. |
| `bank_account_type` | `string` | No | Bank account type. |
| `bank_code` | `string` | No | Bank code. |
| `bank_country` | `string` | No | Bank country. |
| `bank_name` | `string` | No | Bank name for bank-based payment methods. |
| `bank_routing_number` | `string` | No | Bank routing number. |
| `cashapp_cash_tag` | `string` | No | Cash App cash tag. |
| `city` | `string` | No | Billing city. |
| `country` | `string` | No | Billing country. |
| `default` | `boolean` | No | Whether this is the default payment method. |
| `device_data` | `string` | No | Device data for fraud prevention. |
| `expiration_date` | `string` | No | Card expiration date. |
| `first_name` | `string` | No | Billing first name. |
| `id` | `string` | No | Payment method identifier. |
| `last_four` | `string` | No | Last four digits of the card number. |
| `last_name` | `string` | No | Billing last name. |
| `nick_name` | `string` | No | A nickname for the payment method. |
| `payment_account_email` | `string` | No | Email associated with the payment account. |
| `payment_email` | `string` | No | Payment email address. |
| `payment_gateway` | `string` | No | The payment gateway used. |
| `payment_nonce` | `string` | No | Payment nonce for tokenized payments. |
| `result` | `Record<string, any>` | No |  |
| `state` | `string` | No | Billing state. |
| `type` | `string` | No | The payment method type. |
| `zipcode` | `string` | No | Billing zip code. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiPaymentMethodResponseSingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiPaymentMethodResponseSingle().load({ account_id: 'account_id', payment_method_id: 'payment_method_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BillSubsApiPaymentMethodResponseSingle().update({
  account_id: 'account_id',
  payment_method_id: 'payment_method_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiPlanResponseCollectionEntity

```ts
const bill_subs_api_plan_response_collection = client.BillSubsApiPlanResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillSubsApiPlanResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiRatePlanSimpleEntity

```ts
const bill_subs_api_rate_plan_simple = client.BillSubsApiRatePlanSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiRatePlanSimple().load({ public_key: 'public_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiRatePlanSimpleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiUnpaidInvoicesResponseSingleEntity

```ts
const bill_subs_api_unpaid_invoices_response_single = client.BillSubsApiUnpaidInvoicesResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiUnpaidInvoicesResponseSingle().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiUserSubscriptionResponseCollectionEntity

```ts
const bill_subs_api_user_subscription_response_collection = client.BillSubsApiUserSubscriptionResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillSubsApiUserSubscriptionResponseCollection().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiUserSubscriptionResponseSingleEntity

```ts
const bill_subs_api_user_subscription_response_single = client.BillSubsApiUserSubscriptionResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Record<string, any>` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `any[]` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `number` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Record<string, any>` | No | The rate plan applied to the subscription. |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `Record<string, any>` | No | A simple zone object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiUserSubscriptionResponseSingle().create({
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BillSubsApiUserSubscriptionResponseSingle().update({
  identifier: 'identifier',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiZoneSubscriptionResponseSingleEntity

```ts
const bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Record<string, any>` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `any[]` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `number` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Record<string, any>` | No | The rate plan applied to the subscription. |
| `result` | `Record<string, any>` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `Record<string, any>` | No | A simple zone object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiZoneSubscriptionResponseSingle().create({
  zone_id: 'example_zone_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillSubsApiZoneSubscriptionResponseSingle().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BillSubsApiZoneSubscriptionResponseSingle().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillableUsageEntity

```ts
const billable_usage = client.BillableUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Contains error details if the request failed. |
| `messages` | `any[]` | Yes | Contains informational notices about the response. |
| `result` | `any[]` | Yes | Contains the array of billable usage records. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillableUsage().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillableUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillableUsageApiUsageInfoEntity

```ts
const billable_usage_api_usage_info = client.BillableUsageApiUsageInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Contains error details if the request failed. |
| `messages` | `any[]` | Yes | Contains any informational messages from the API. |
| `result` | `Record<string, any>` | Yes | Contains the usage info. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillableUsageApiUsageInfo().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillableUsageApiUsageInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillableUsageApiV2AccountBillableMetricEntity

```ts
const billable_usage_api_v2_account_billable_metric = client.BillableUsageApiV2AccountBillableMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillableUsageApiV2AccountBillableMetric().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillableUsageApiV2UsageEntity

```ts
const billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `FilterBy` | `Record<string, any>` | No | Usage filters. |
| `GroupBy` | `any[]` | No | Grouping definitions used to split result rows. |
| `TimePeriod` | `Record<string, any>` | No | Charge period to query, i.e. |
| `errors` | `any[]` | Yes | Contains error details if the request failed. |
| `messages` | `any[]` | Yes | Contains informational notices about the response. |
| `result` | `any[]` | Yes | Contains the array of cost and usage records. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillableUsageApiV2Usage().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: [],
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillableUsageApiV2Usage().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CancelDowngradeEntity

```ts
const cancel_downgrade = client.CancelDowngrade()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription_ids` | `any[]` | No | List of subscription identifiers to cancel downgrades for. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CancelDowngrade().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CancelDowngradeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EntitlementEntity

```ts
const entitlement = client.Entitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | List of errors, empty on success. |
| `messages` | `any[]` | Yes | List of informational messages. |
| `result` | `any[]` | Yes | List of entitlements for the requested object. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Entitlement().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvoiceEntity

```ts
const invoice = client.Invoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toggle` | `boolean` | No | Whether to enable or disable PDF invoice generation. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Invoice().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentMethodEntity

```ts
const payment_method = client.PaymentMethod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PaymentMethod().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SetAsDefaultEntity

```ts
const set_as_default = client.SetAsDefault()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SetAsDefault().create({
  account_id: 'example_account_id',
  payment_method_id: 'example_payment_method_id',
  errors: [],
  messages: [],
  result: 'example_result',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SetAsDefaultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageEntity

```ts
const usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | List of errors, empty on success. |
| `messages` | `any[]` | No | List of informational messages. |
| `result` | `any[]` | Yes | Array of billing usage data points for the requested time range. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Usage().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSubscriptionEntity

```ts
const user_subscription = client.UserSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UserSubscription().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZoneRatePlanEntity

```ts
const zone_rate_plan = client.ZoneRatePlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `available_plans` | `/zones/{zone_id}/available_plans` | `client.ZoneRatePlan().list({ $action: 'available_plans', ... })` |

An action returns that action's OWN response, which is not necessarily a
ZoneRatePlan record — check the API definition for its shape.

```ts
const result = await client.ZoneRatePlan().list({
  $action: 'available_plans',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZoneRatePlan().list({ id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZoneRatePlan().load({ plan_identifier: 'plan_identifier', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZoneRatePlanEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZoneSubscriptionEntity

```ts
const zone_subscription = client.ZoneSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ZoneSubscription().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZoneSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareBillingSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

