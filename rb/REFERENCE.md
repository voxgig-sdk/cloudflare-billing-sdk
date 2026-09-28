# CloudflareBilling Ruby SDK Reference

Complete API reference for the CloudflareBilling Ruby SDK.


## CloudflareBillingSDK

### Constructor

```ruby
require_relative 'CloudflareBilling_sdk'

client = CloudflareBillingSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareBillingSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareBillingSDK.test
```


### Instance Methods

#### `AccountBilling(data = nil)`

Create a new `AccountBilling` entity instance. Pass `nil` for no initial data.

#### `AccountBillingProfile(data = nil)`

Create a new `AccountBillingProfile` entity instance. Pass `nil` for no initial data.

#### `AccountSubscription(data = nil)`

Create a new `AccountSubscription` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountBillingHistoryCollection(data = nil)`

Create a new `BillSubsApiAccountBillingHistoryCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountCredit(data = nil)`

Create a new `BillSubsApiAccountCredit` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseCollection(data = nil)`

Create a new `BillSubsApiAccountSubscriptionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseSingle(data = nil)`

Create a new `BillSubsApiAccountSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAddressValidationResponseSingle(data = nil)`

Create a new `BillSubsApiAddressValidationResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBadDebtResponseSingle(data = nil)`

Create a new `BillSubsApiBadDebtResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBillingHistoryCollection(data = nil)`

Create a new `BillSubsApiBillingHistoryCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBillingResponseSingle(data = nil)`

Create a new `BillSubsApiBillingResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiCancelReasonResponseSingle(data = nil)`

Create a new `BillSubsApiCancelReasonResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data = nil)`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentIntentResponseSingle(data = nil)`

Create a new `BillSubsApiPaymentIntentResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentMethodResponseCollection(data = nil)`

Create a new `BillSubsApiPaymentMethodResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentMethodResponseSingle(data = nil)`

Create a new `BillSubsApiPaymentMethodResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPlanResponseCollection(data = nil)`

Create a new `BillSubsApiPlanResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiRatePlanSimple(data = nil)`

Create a new `BillSubsApiRatePlanSimple` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUnpaidInvoicesResponseSingle(data = nil)`

Create a new `BillSubsApiUnpaidInvoicesResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUserSubscriptionResponseCollection(data = nil)`

Create a new `BillSubsApiUserSubscriptionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUserSubscriptionResponseSingle(data = nil)`

Create a new `BillSubsApiUserSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiZoneSubscriptionResponseSingle(data = nil)`

Create a new `BillSubsApiZoneSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillableUsage(data = nil)`

Create a new `BillableUsage` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiUsageInfo(data = nil)`

Create a new `BillableUsageApiUsageInfo` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2AccountBillableMetric(data = nil)`

Create a new `BillableUsageApiV2AccountBillableMetric` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2Usage(data = nil)`

Create a new `BillableUsageApiV2Usage` entity instance. Pass `nil` for no initial data.

#### `CancelDowngrade(data = nil)`

Create a new `CancelDowngrade` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data = nil)`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Invoice(data = nil)`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `PaymentMethod(data = nil)`

Create a new `PaymentMethod` entity instance. Pass `nil` for no initial data.

#### `SetAsDefault(data = nil)`

Create a new `SetAsDefault` entity instance. Pass `nil` for no initial data.

#### `Usage(data = nil)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `UserSubscription(data = nil)`

Create a new `UserSubscription` entity instance. Pass `nil` for no initial data.

#### `ZoneRatePlan(data = nil)`

Create a new `ZoneRatePlan` entity instance. Pass `nil` for no initial data.

#### `ZoneSubscription(data = nil)`

Create a new `ZoneSubscription` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccountBillingEntity

```ruby
account_billing = client.AccountBilling
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccountBilling.load({ "account_id" => "account_id", "receipt_id" => "receipt_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountBillingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccountBillingProfileEntity

```ruby
account_billing_profile = client.AccountBillingProfile
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AccountBillingProfile.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountBillingProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccountSubscriptionEntity

```ruby
account_subscription = client.AccountSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AccountSubscription.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiAccountBillingHistoryCollectionEntity

```ruby
bill_subs_api_account_billing_history_collection = client.BillSubsApiAccountBillingHistoryCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillSubsApiAccountBillingHistoryCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiAccountCreditEntity

```ruby
bill_subs_api_account_credit = client.BillSubsApiAccountCredit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiAccountCredit.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiAccountCreditEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseCollectionEntity

```ruby
bill_subs_api_account_subscription_response_collection = client.BillSubsApiAccountSubscriptionResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillSubsApiAccountSubscriptionResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseSingleEntity

```ruby
bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Hash` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `Array` | No | Configurable component values for the subscription. |
| `currency` | `String` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `String` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `String` | No | When the current billing period started. |
| `frequency` | `String` | No | How often the subscription is renewed automatically. |
| `id` | `String` | No | Subscription identifier tag. |
| `price` | `Float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Hash` | No | The rate plan applied to the subscription. |
| `result` | `Hash` | No |  |
| `state` | `String` | No | The state that the subscription is in. |
| `zone` | `Hash` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiAccountSubscriptionResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiAccountSubscriptionResponseSingle.load({ "account_id" => "account_id", "subscription_identifier" => "subscription_identifier" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.BillSubsApiAccountSubscriptionResponseSingle.update({
  "account_id" => "account_id",
  "subscription_identifier" => "subscription_identifier",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiAddressValidationResponseSingleEntity

```ruby
bill_subs_api_address_validation_response_single = client.BillSubsApiAddressValidationResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | No | Address line 1. |
| `address2` | `String` | No | Address line 2. |
| `city` | `String` | No | City. |
| `country` | `String` | No | Country code. |
| `state` | `String` | No | State or province. |
| `zipcode` | `String` | No | Postal or zip code. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiAddressValidationResponseSingle.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiBadDebtResponseSingleEntity

```ruby
bill_subs_api_bad_debt_response_single = client.BillSubsApiBadDebtResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiBadDebtResponseSingle.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiBillingHistoryCollectionEntity

```ruby
bill_subs_api_billing_history_collection = client.BillSubsApiBillingHistoryCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillSubsApiBillingHistoryCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiBillingResponseSingleEntity

```ruby
bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | No | Street address line 1. |
| `address2` | `String` | No | Street address line 2 (apt, suite, etc.). |
| `billing_email` | `String` | No | Primary billing email address. |
| `buying_rate_plan` | `String` | No | Rate plan being purchased right after profile setup. |
| `captcha_challenge_jwt` | `String` | No | Captcha challenge JWT issued during onboarding. |
| `cf_turnstile_response` | `String` | No | Cloudflare Turnstile response. |
| `city` | `String` | No | City on the billing profile. |
| `company` | `String` | No | Company name on the billing profile. |
| `country` | `String` | No | ISO 3166-1 alpha-2 country code. |
| `first_name` | `String` | No | First name on the billing profile. |
| `h_captcha_response` | `String` | No | hCaptcha response. |
| `last_name` | `String` | No | Last name on the billing profile. |
| `preferred_locale` | `String` | No | Preferred locale for invoice rendering (BCP 47). |
| `result` | `Hash` | No |  |
| `secondary_billing_email` | `String` | No | Secondary billing email address for CC on invoices. |
| `state` | `String` | No | State or region on the billing profile. |
| `tax_id_type` | `String` | No | Type of tax ID provided. |
| `telephone` | `String` | No | Contact phone number. |
| `vat` | `String` | No | VAT identifier. |
| `zipcode` | `String` | No | ZIP or postal code. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiBillingResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiBillingResponseSingle.load()
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.BillSubsApiBillingResponseSingle.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiBillingResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiCancelReasonResponseSingleEntity

```ruby
bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `other` | `String` | No | Additional cancellation details. |
| `reason_code` | `Array` | No | The cancellation reason codes. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiCancelReasonResponseSingle.create({
  "account_id" => "example_account_id", # String
  "subscription_identifier" => "example_subscription_identifier", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiCancelReasonResponseSingle.load({ "account_id" => "account_id", "subscription_identifier" => "subscription_identifier" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```ruby
bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice_id` | `String` | No | The identifier of the invoice to pay. |
| `payment_method_id` | `String` | No | The payment method to use. |
| `validate_payment_method` | `Boolean` | No | Whether to validate the payment method before processing. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiClientSecretResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiPaymentIntentResponseSingleEntity

```ruby
bill_subs_api_payment_intent_response_single = client.BillSubsApiPaymentIntentResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiPaymentIntentResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseCollectionEntity

```ruby
bill_subs_api_payment_method_response_collection = client.BillSubsApiPaymentMethodResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillSubsApiPaymentMethodResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseSingleEntity

```ruby
bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | No | Billing address line 1. |
| `address2` | `String` | No | Billing address line 2. |
| `bank_account_type` | `String` | No | Bank account type. |
| `bank_code` | `String` | No | Bank code. |
| `bank_country` | `String` | No | Bank country. |
| `bank_name` | `String` | No | Bank name for bank-based payment methods. |
| `bank_routing_number` | `String` | No | Bank routing number. |
| `cashapp_cash_tag` | `String` | No | Cash App cash tag. |
| `city` | `String` | No | Billing city. |
| `country` | `String` | No | Billing country. |
| `default` | `Boolean` | No | Whether this is the default payment method. |
| `device_data` | `String` | No | Device data for fraud prevention. |
| `expiration_date` | `String` | No | Card expiration date. |
| `first_name` | `String` | No | Billing first name. |
| `id` | `String` | No | Payment method identifier. |
| `last_four` | `String` | No | Last four digits of the card number. |
| `last_name` | `String` | No | Billing last name. |
| `nick_name` | `String` | No | A nickname for the payment method. |
| `payment_account_email` | `String` | No | Email associated with the payment account. |
| `payment_email` | `String` | No | Payment email address. |
| `payment_gateway` | `String` | No | The payment gateway used. |
| `payment_nonce` | `String` | No | Payment nonce for tokenized payments. |
| `result` | `Hash` | No |  |
| `state` | `String` | No | Billing state. |
| `type` | `String` | No | The payment method type. |
| `zipcode` | `String` | No | Billing zip code. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiPaymentMethodResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiPaymentMethodResponseSingle.load({ "account_id" => "account_id", "payment_method_id" => "payment_method_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.BillSubsApiPaymentMethodResponseSingle.update({
  "account_id" => "account_id",
  "payment_method_id" => "payment_method_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiPlanResponseCollectionEntity

```ruby
bill_subs_api_plan_response_collection = client.BillSubsApiPlanResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillSubsApiPlanResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiRatePlanSimpleEntity

```ruby
bill_subs_api_rate_plan_simple = client.BillSubsApiRatePlanSimple
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiRatePlanSimple.load({ "public_key" => "public_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiRatePlanSimpleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiUnpaidInvoicesResponseSingleEntity

```ruby
bill_subs_api_unpaid_invoices_response_single = client.BillSubsApiUnpaidInvoicesResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiUnpaidInvoicesResponseSingle.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseCollectionEntity

```ruby
bill_subs_api_user_subscription_response_collection = client.BillSubsApiUserSubscriptionResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillSubsApiUserSubscriptionResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseSingleEntity

```ruby
bill_subs_api_user_subscription_response_single = client.BillSubsApiUserSubscriptionResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Hash` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `Array` | No | Configurable component values for the subscription. |
| `currency` | `String` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `String` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `String` | No | When the current billing period started. |
| `frequency` | `String` | No | How often the subscription is renewed automatically. |
| `id` | `String` | No | Subscription identifier tag. |
| `price` | `Float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Hash` | No | The rate plan applied to the subscription. |
| `state` | `String` | No | The state that the subscription is in. |
| `zone` | `Hash` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiUserSubscriptionResponseSingle.create({
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.BillSubsApiUserSubscriptionResponseSingle.update({
  "identifier" => "identifier",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiZoneSubscriptionResponseSingleEntity

```ruby
bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Hash` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `Array` | No | Configurable component values for the subscription. |
| `currency` | `String` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `String` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `String` | No | When the current billing period started. |
| `frequency` | `String` | No | How often the subscription is renewed automatically. |
| `id` | `String` | No | Subscription identifier tag. |
| `price` | `Float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `Hash` | No | The rate plan applied to the subscription. |
| `result` | `Hash` | No |  |
| `state` | `String` | No | The state that the subscription is in. |
| `zone` | `Hash` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiZoneSubscriptionResponseSingle.create({
  "zone_id" => "example_zone_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillSubsApiZoneSubscriptionResponseSingle.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.BillSubsApiZoneSubscriptionResponseSingle.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillableUsageEntity

```ruby
billable_usage = client.BillableUsage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Contains error details if the request failed. |
| `messages` | `Array` | Yes | Contains informational notices about the response. |
| `result` | `Array` | Yes | Contains the array of billable usage records. |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillableUsage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillableUsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillableUsageApiUsageInfoEntity

```ruby
billable_usage_api_usage_info = client.BillableUsageApiUsageInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Contains error details if the request failed. |
| `messages` | `Array` | Yes | Contains any informational messages from the API. |
| `result` | `Hash` | Yes | Contains the usage info. |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillableUsageApiUsageInfo.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillableUsageApiUsageInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillableUsageApiV2AccountBillableMetricEntity

```ruby
billable_usage_api_v2_account_billable_metric = client.BillableUsageApiV2AccountBillableMetric
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillableUsageApiV2AccountBillableMetric.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```ruby
billable_usage_api_v2_usage = client.BillableUsageApiV2Usage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `FilterBy` | `Hash` | No | Usage filters. |
| `GroupBy` | `Array` | No | Grouping definitions used to split result rows. |
| `TimePeriod` | `Hash` | No | Charge period to query, i.e. |
| `errors` | `Array` | Yes | Contains error details if the request failed. |
| `messages` | `Array` | Yes | Contains informational notices about the response. |
| `result` | `Array` | Yes | Contains the array of cost and usage records. |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillableUsageApiV2Usage.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => [], # Array
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillableUsageApiV2Usage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CancelDowngradeEntity

```ruby
cancel_downgrade = client.CancelDowngrade
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription_ids` | `Array` | No | List of subscription identifiers to cancel downgrades for. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CancelDowngrade.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CancelDowngradeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EntitlementEntity

```ruby
entitlement = client.Entitlement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | List of errors, empty on success. |
| `messages` | `Array` | Yes | List of informational messages. |
| `result` | `Array` | Yes | List of entitlements for the requested object. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Entitlement.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InvoiceEntity

```ruby
invoice = client.Invoice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toggle` | `Boolean` | No | Whether to enable or disable PDF invoice generation. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Invoice.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PaymentMethodEntity

```ruby
payment_method = client.PaymentMethod
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PaymentMethod.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SetAsDefaultEntity

```ruby
set_as_default = client.SetAsDefault
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SetAsDefault.create({
  "account_id" => "example_account_id", # String
  "payment_method_id" => "example_payment_method_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # Object
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SetAsDefaultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageEntity

```ruby
usage = client.Usage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | List of errors, empty on success. |
| `messages` | `Array` | No | List of informational messages. |
| `result` | `Array` | Yes | Array of billing usage data points for the requested time range. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Usage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserSubscriptionEntity

```ruby
user_subscription = client.UserSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UserSubscription.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZoneRatePlanEntity

```ruby
zone_rate_plan = client.ZoneRatePlan
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZoneRatePlan.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneRatePlan.load({ "plan_identifier" => "plan_identifier", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZoneRatePlanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZoneSubscriptionEntity

```ruby
zone_subscription = client.ZoneSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneSubscription.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZoneSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareBillingSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

