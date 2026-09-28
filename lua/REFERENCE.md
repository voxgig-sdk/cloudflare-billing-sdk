# CloudflareBilling Lua SDK Reference

Complete API reference for the CloudflareBilling Lua SDK.


## CloudflareBillingSDK

### Constructor

```lua
local sdk = require("cloudflare-billing_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AccountBilling(data)`

Create a new `AccountBilling` entity instance. Pass `nil` for no initial data.

#### `AccountBillingProfile(data)`

Create a new `AccountBillingProfile` entity instance. Pass `nil` for no initial data.

#### `AccountSubscription(data)`

Create a new `AccountSubscription` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountBillingHistoryCollection(data)`

Create a new `BillSubsApiAccountBillingHistoryCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountCredit(data)`

Create a new `BillSubsApiAccountCredit` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseCollection(data)`

Create a new `BillSubsApiAccountSubscriptionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseSingle(data)`

Create a new `BillSubsApiAccountSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAddressValidationResponseSingle(data)`

Create a new `BillSubsApiAddressValidationResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBadDebtResponseSingle(data)`

Create a new `BillSubsApiBadDebtResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBillingHistoryCollection(data)`

Create a new `BillSubsApiBillingHistoryCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBillingResponseSingle(data)`

Create a new `BillSubsApiBillingResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiCancelReasonResponseSingle(data)`

Create a new `BillSubsApiCancelReasonResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data)`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentIntentResponseSingle(data)`

Create a new `BillSubsApiPaymentIntentResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentMethodResponseCollection(data)`

Create a new `BillSubsApiPaymentMethodResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentMethodResponseSingle(data)`

Create a new `BillSubsApiPaymentMethodResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPlanResponseCollection(data)`

Create a new `BillSubsApiPlanResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiRatePlanSimple(data)`

Create a new `BillSubsApiRatePlanSimple` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUnpaidInvoicesResponseSingle(data)`

Create a new `BillSubsApiUnpaidInvoicesResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUserSubscriptionResponseCollection(data)`

Create a new `BillSubsApiUserSubscriptionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUserSubscriptionResponseSingle(data)`

Create a new `BillSubsApiUserSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiZoneSubscriptionResponseSingle(data)`

Create a new `BillSubsApiZoneSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillableUsage(data)`

Create a new `BillableUsage` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiUsageInfo(data)`

Create a new `BillableUsageApiUsageInfo` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2AccountBillableMetric(data)`

Create a new `BillableUsageApiV2AccountBillableMetric` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2Usage(data)`

Create a new `BillableUsageApiV2Usage` entity instance. Pass `nil` for no initial data.

#### `CancelDowngrade(data)`

Create a new `CancelDowngrade` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data)`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Invoice(data)`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `PaymentMethod(data)`

Create a new `PaymentMethod` entity instance. Pass `nil` for no initial data.

#### `SetAsDefault(data)`

Create a new `SetAsDefault` entity instance. Pass `nil` for no initial data.

#### `Usage(data)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `UserSubscription(data)`

Create a new `UserSubscription` entity instance. Pass `nil` for no initial data.

#### `ZoneRatePlan(data)`

Create a new `ZoneRatePlan` entity instance. Pass `nil` for no initial data.

#### `ZoneSubscription(data)`

Create a new `ZoneSubscription` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccountBillingEntity

```lua
local account_billing = client:AccountBilling(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccountBilling():load({ account_id = "account_id", receipt_id = "receipt_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountBillingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountBillingProfileEntity

```lua
local account_billing_profile = client:AccountBillingProfile(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AccountBillingProfile():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountBillingProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountSubscriptionEntity

```lua
local account_subscription = client:AccountSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AccountSubscription():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiAccountBillingHistoryCollectionEntity

```lua
local bill_subs_api_account_billing_history_collection = client:BillSubsApiAccountBillingHistoryCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillSubsApiAccountBillingHistoryCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiAccountCreditEntity

```lua
local bill_subs_api_account_credit = client:BillSubsApiAccountCredit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiAccountCredit():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountCreditEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseCollectionEntity

```lua
local bill_subs_api_account_subscription_response_collection = client:BillSubsApiAccountSubscriptionResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillSubsApiAccountSubscriptionResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseSingleEntity

```lua
local bill_subs_api_account_subscription_response_single = client:BillSubsApiAccountSubscriptionResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `table` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `table` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `number` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `table` | No | The rate plan applied to the subscription. |
| `result` | `table` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `table` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiAccountSubscriptionResponseSingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiAccountSubscriptionResponseSingle():load({ account_id = "account_id", subscription_identifier = "subscription_identifier" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BillSubsApiAccountSubscriptionResponseSingle():update({
  account_id = "account_id",
  subscription_identifier = "subscription_identifier",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiAddressValidationResponseSingleEntity

```lua
local bill_subs_api_address_validation_response_single = client:BillSubsApiAddressValidationResponseSingle(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiAddressValidationResponseSingle():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiBadDebtResponseSingleEntity

```lua
local bill_subs_api_bad_debt_response_single = client:BillSubsApiBadDebtResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiBadDebtResponseSingle():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiBillingHistoryCollectionEntity

```lua
local bill_subs_api_billing_history_collection = client:BillSubsApiBillingHistoryCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillSubsApiBillingHistoryCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiBillingResponseSingleEntity

```lua
local bill_subs_api_billing_response_single = client:BillSubsApiBillingResponseSingle(nil)
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
| `result` | `table` | No |  |
| `secondary_billing_email` | `string` | No | Secondary billing email address for CC on invoices. |
| `state` | `string` | No | State or region on the billing profile. |
| `tax_id_type` | `string` | No | Type of tax ID provided. |
| `telephone` | `string` | No | Contact phone number. |
| `vat` | `string` | No | VAT identifier. |
| `zipcode` | `string` | No | ZIP or postal code. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiBillingResponseSingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiBillingResponseSingle():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BillSubsApiBillingResponseSingle():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBillingResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiCancelReasonResponseSingleEntity

```lua
local bill_subs_api_cancel_reason_response_single = client:BillSubsApiCancelReasonResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `other` | `string` | No | Additional cancellation details. |
| `reason_code` | `table` | No | The cancellation reason codes. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiCancelReasonResponseSingle():create({
  account_id = --[[ string ]],
  subscription_identifier = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiCancelReasonResponseSingle():load({ account_id = "account_id", subscription_identifier = "subscription_identifier" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```lua
local bill_subs_api_client_secret_response_single = client:BillSubsApiClientSecretResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice_id` | `string` | No | The identifier of the invoice to pay. |
| `payment_method_id` | `string` | No | The payment method to use. |
| `validate_payment_method` | `boolean` | No | Whether to validate the payment method before processing. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiClientSecretResponseSingle():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiPaymentIntentResponseSingleEntity

```lua
local bill_subs_api_payment_intent_response_single = client:BillSubsApiPaymentIntentResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiPaymentIntentResponseSingle():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseCollectionEntity

```lua
local bill_subs_api_payment_method_response_collection = client:BillSubsApiPaymentMethodResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillSubsApiPaymentMethodResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseSingleEntity

```lua
local bill_subs_api_payment_method_response_single = client:BillSubsApiPaymentMethodResponseSingle(nil)
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
| `result` | `table` | No |  |
| `state` | `string` | No | Billing state. |
| `type` | `string` | No | The payment method type. |
| `zipcode` | `string` | No | Billing zip code. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiPaymentMethodResponseSingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiPaymentMethodResponseSingle():load({ account_id = "account_id", payment_method_id = "payment_method_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BillSubsApiPaymentMethodResponseSingle():update({
  account_id = "account_id",
  payment_method_id = "payment_method_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiPlanResponseCollectionEntity

```lua
local bill_subs_api_plan_response_collection = client:BillSubsApiPlanResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillSubsApiPlanResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiRatePlanSimpleEntity

```lua
local bill_subs_api_rate_plan_simple = client:BillSubsApiRatePlanSimple(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiRatePlanSimple():load({ public_key = "public_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiRatePlanSimpleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiUnpaidInvoicesResponseSingleEntity

```lua
local bill_subs_api_unpaid_invoices_response_single = client:BillSubsApiUnpaidInvoicesResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiUnpaidInvoicesResponseSingle():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseCollectionEntity

```lua
local bill_subs_api_user_subscription_response_collection = client:BillSubsApiUserSubscriptionResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillSubsApiUserSubscriptionResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseSingleEntity

```lua
local bill_subs_api_user_subscription_response_single = client:BillSubsApiUserSubscriptionResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `table` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `table` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `number` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `table` | No | The rate plan applied to the subscription. |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `table` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiUserSubscriptionResponseSingle():create({
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BillSubsApiUserSubscriptionResponseSingle():update({
  identifier = "identifier",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiZoneSubscriptionResponseSingleEntity

```lua
local bill_subs_api_zone_subscription_response_single = client:BillSubsApiZoneSubscriptionResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `table` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `table` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `number` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `table` | No | The rate plan applied to the subscription. |
| `result` | `table` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `table` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiZoneSubscriptionResponseSingle():create({
  zone_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillSubsApiZoneSubscriptionResponseSingle():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BillSubsApiZoneSubscriptionResponseSingle():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillableUsageEntity

```lua
local billable_usage = client:BillableUsage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Contains error details if the request failed. |
| `messages` | `table` | Yes | Contains informational notices about the response. |
| `result` | `table` | Yes | Contains the array of billable usage records. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillableUsage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillableUsageApiUsageInfoEntity

```lua
local billable_usage_api_usage_info = client:BillableUsageApiUsageInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Contains error details if the request failed. |
| `messages` | `table` | Yes | Contains any informational messages from the API. |
| `result` | `table` | Yes | Contains the usage info. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillableUsageApiUsageInfo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiUsageInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillableUsageApiV2AccountBillableMetricEntity

```lua
local billable_usage_api_v2_account_billable_metric = client:BillableUsageApiV2AccountBillableMetric(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillableUsageApiV2AccountBillableMetric():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```lua
local billable_usage_api_v2_usage = client:BillableUsageApiV2Usage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `FilterBy` | `table` | No | Usage filters. |
| `GroupBy` | `table` | No | Grouping definitions used to split result rows. |
| `TimePeriod` | `table` | No | Charge period to query, i.e. |
| `errors` | `table` | Yes | Contains error details if the request failed. |
| `messages` | `table` | Yes | Contains informational notices about the response. |
| `result` | `table` | Yes | Contains the array of cost and usage records. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillableUsageApiV2Usage():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillableUsageApiV2Usage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CancelDowngradeEntity

```lua
local cancel_downgrade = client:CancelDowngrade(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription_ids` | `table` | No | List of subscription identifiers to cancel downgrades for. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CancelDowngrade():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CancelDowngradeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EntitlementEntity

```lua
local entitlement = client:Entitlement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | List of errors, empty on success. |
| `messages` | `table` | Yes | List of informational messages. |
| `result` | `table` | Yes | List of entitlements for the requested object. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Entitlement():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvoiceEntity

```lua
local invoice = client:Invoice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toggle` | `boolean` | No | Whether to enable or disable PDF invoice generation. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Invoice():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentMethodEntity

```lua
local payment_method = client:PaymentMethod(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PaymentMethod():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SetAsDefaultEntity

```lua
local set_as_default = client:SetAsDefault(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SetAsDefault():create({
  account_id = --[[ string ]],
  payment_method_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ any ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetAsDefaultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageEntity

```lua
local usage = client:Usage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | List of errors, empty on success. |
| `messages` | `table` | No | List of informational messages. |
| `result` | `table` | Yes | Array of billing usage data points for the requested time range. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Usage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserSubscriptionEntity

```lua
local user_subscription = client:UserSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UserSubscription():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZoneRatePlanEntity

```lua
local zone_rate_plan = client:ZoneRatePlan(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZoneRatePlan():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZoneRatePlan():load({ plan_identifier = "plan_identifier", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneRatePlanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZoneSubscriptionEntity

```lua
local zone_subscription = client:ZoneSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ZoneSubscription():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
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

