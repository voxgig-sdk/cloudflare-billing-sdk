# CloudflareBilling Golang SDK Reference

Complete API reference for the CloudflareBilling Golang SDK.


## CloudflareBillingSDK

### Constructor

```go
func NewCloudflareBillingSDK(options map[string]any) *CloudflareBillingSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareBillingSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareBillingSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccountBilling(data map[string]any) CloudflareBillingEntity`

Create a new `AccountBilling` entity instance. Pass `nil` for no initial data.

#### `AccountBillingProfile(data map[string]any) CloudflareBillingEntity`

Create a new `AccountBillingProfile` entity instance. Pass `nil` for no initial data.

#### `AccountSubscription(data map[string]any) CloudflareBillingEntity`

Create a new `AccountSubscription` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountBillingHistoryCollection(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiAccountBillingHistoryCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountCredit(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiAccountCredit` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseCollection(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiAccountSubscriptionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiAccountSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiAddressValidationResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiAddressValidationResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBadDebtResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiBadDebtResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBillingHistoryCollection(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiBillingHistoryCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBillingResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiBillingResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiCancelReasonResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiCancelReasonResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentIntentResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiPaymentIntentResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentMethodResponseCollection(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiPaymentMethodResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPaymentMethodResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiPaymentMethodResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiPlanResponseCollection(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiPlanResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiRatePlanSimple(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiRatePlanSimple` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUnpaidInvoicesResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiUnpaidInvoicesResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUserSubscriptionResponseCollection(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiUserSubscriptionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiUserSubscriptionResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiUserSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiZoneSubscriptionResponseSingle(data map[string]any) CloudflareBillingEntity`

Create a new `BillSubsApiZoneSubscriptionResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillableUsage(data map[string]any) CloudflareBillingEntity`

Create a new `BillableUsage` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiUsageInfo(data map[string]any) CloudflareBillingEntity`

Create a new `BillableUsageApiUsageInfo` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2AccountBillableMetric(data map[string]any) CloudflareBillingEntity`

Create a new `BillableUsageApiV2AccountBillableMetric` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2Usage(data map[string]any) CloudflareBillingEntity`

Create a new `BillableUsageApiV2Usage` entity instance. Pass `nil` for no initial data.

#### `CancelDowngrade(data map[string]any) CloudflareBillingEntity`

Create a new `CancelDowngrade` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data map[string]any) CloudflareBillingEntity`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Invoice(data map[string]any) CloudflareBillingEntity`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `PaymentMethod(data map[string]any) CloudflareBillingEntity`

Create a new `PaymentMethod` entity instance. Pass `nil` for no initial data.

#### `SetAsDefault(data map[string]any) CloudflareBillingEntity`

Create a new `SetAsDefault` entity instance. Pass `nil` for no initial data.

#### `Usage(data map[string]any) CloudflareBillingEntity`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `UserSubscription(data map[string]any) CloudflareBillingEntity`

Create a new `UserSubscription` entity instance. Pass `nil` for no initial data.

#### `ZoneRatePlan(data map[string]any) CloudflareBillingEntity`

Create a new `ZoneRatePlan` entity instance. Pass `nil` for no initial data.

#### `ZoneSubscription(data map[string]any) CloudflareBillingEntity`

Create a new `ZoneSubscription` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountBillingEntity

```go
accountBilling := client.AccountBilling(nil)
fmt.Println(accountBilling.GetName()) // "account_billing"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountBilling(nil).Load(map[string]any{"account_id": "account_id", "receipt_id": "receipt_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountBillingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountBillingProfileEntity

```go
accountBillingProfile := client.AccountBillingProfile(nil)
fmt.Println(accountBillingProfile.GetName()) // "account_billing_profile"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AccountBillingProfile(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountBillingProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountSubscriptionEntity

```go
accountSubscription := client.AccountSubscription(nil)
fmt.Println(accountSubscription.GetName()) // "account_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AccountSubscription(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiAccountBillingHistoryCollectionEntity

```go
billSubsApiAccountBillingHistoryCollection := client.BillSubsApiAccountBillingHistoryCollection(nil)
fmt.Println(billSubsApiAccountBillingHistoryCollection.GetName()) // "bill_subs_api_account_billing_history_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillSubsApiAccountBillingHistoryCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiAccountCreditEntity

```go
billSubsApiAccountCredit := client.BillSubsApiAccountCredit(nil)
fmt.Println(billSubsApiAccountCredit.GetName()) // "bill_subs_api_account_credit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiAccountCredit(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiAccountCreditEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseCollectionEntity

```go
billSubsApiAccountSubscriptionResponseCollection := client.BillSubsApiAccountSubscriptionResponseCollection(nil)
fmt.Println(billSubsApiAccountSubscriptionResponseCollection.GetName()) // "bill_subs_api_account_subscription_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillSubsApiAccountSubscriptionResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseSingleEntity

```go
billSubsApiAccountSubscriptionResponseSingle := client.BillSubsApiAccountSubscriptionResponseSingle(nil)
fmt.Println(billSubsApiAccountSubscriptionResponseSingle.GetName()) // "bill_subs_api_account_subscription_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `map[string]any` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `[]any` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `float64` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `map[string]any` | No | The rate plan applied to the subscription. |
| `result` | `map[string]any` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `map[string]any` | No | A simple zone object. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiAccountSubscriptionResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "subscription_identifier": "subscription_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiAccountSubscriptionResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BillSubsApiAccountSubscriptionResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "subscription_identifier": "subscription_identifier",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiAddressValidationResponseSingleEntity

```go
billSubsApiAddressValidationResponseSingle := client.BillSubsApiAddressValidationResponseSingle(nil)
fmt.Println(billSubsApiAddressValidationResponseSingle.GetName()) // "bill_subs_api_address_validation_response_single"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiAddressValidationResponseSingle(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiBadDebtResponseSingleEntity

```go
billSubsApiBadDebtResponseSingle := client.BillSubsApiBadDebtResponseSingle(nil)
fmt.Println(billSubsApiBadDebtResponseSingle.GetName()) // "bill_subs_api_bad_debt_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiBadDebtResponseSingle(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiBillingHistoryCollectionEntity

```go
billSubsApiBillingHistoryCollection := client.BillSubsApiBillingHistoryCollection(nil)
fmt.Println(billSubsApiBillingHistoryCollection.GetName()) // "bill_subs_api_billing_history_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillSubsApiBillingHistoryCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiBillingResponseSingleEntity

```go
billSubsApiBillingResponseSingle := client.BillSubsApiBillingResponseSingle(nil)
fmt.Println(billSubsApiBillingResponseSingle.GetName()) // "bill_subs_api_billing_response_single"
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
| `result` | `map[string]any` | No |  |
| `secondary_billing_email` | `string` | No | Secondary billing email address for CC on invoices. |
| `state` | `string` | No | State or region on the billing profile. |
| `tax_id_type` | `string` | No | Type of tax ID provided. |
| `telephone` | `string` | No | Contact phone number. |
| `vat` | `string` | No | VAT identifier. |
| `zipcode` | `string` | No | ZIP or postal code. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiBillingResponseSingle(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiBillingResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BillSubsApiBillingResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiBillingResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiCancelReasonResponseSingleEntity

```go
billSubsApiCancelReasonResponseSingle := client.BillSubsApiCancelReasonResponseSingle(nil)
fmt.Println(billSubsApiCancelReasonResponseSingle.GetName()) // "bill_subs_api_cancel_reason_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `other` | `string` | No | Additional cancellation details. |
| `reason_code` | `[]any` | No | The cancellation reason codes. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiCancelReasonResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "subscription_identifier": "subscription_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiCancelReasonResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "subscription_identifier": "example_subscription_identifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```go
billSubsApiClientSecretResponseSingle := client.BillSubsApiClientSecretResponseSingle(nil)
fmt.Println(billSubsApiClientSecretResponseSingle.GetName()) // "bill_subs_api_client_secret_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice_id` | `string` | No | The identifier of the invoice to pay. |
| `payment_method_id` | `string` | No | The payment method to use. |
| `validate_payment_method` | `bool` | No | Whether to validate the payment method before processing. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiClientSecretResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiPaymentIntentResponseSingleEntity

```go
billSubsApiPaymentIntentResponseSingle := client.BillSubsApiPaymentIntentResponseSingle(nil)
fmt.Println(billSubsApiPaymentIntentResponseSingle.GetName()) // "bill_subs_api_payment_intent_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiPaymentIntentResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseCollectionEntity

```go
billSubsApiPaymentMethodResponseCollection := client.BillSubsApiPaymentMethodResponseCollection(nil)
fmt.Println(billSubsApiPaymentMethodResponseCollection.GetName()) // "bill_subs_api_payment_method_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillSubsApiPaymentMethodResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseSingleEntity

```go
billSubsApiPaymentMethodResponseSingle := client.BillSubsApiPaymentMethodResponseSingle(nil)
fmt.Println(billSubsApiPaymentMethodResponseSingle.GetName()) // "bill_subs_api_payment_method_response_single"
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
| `default` | `bool` | No | Whether this is the default payment method. |
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
| `result` | `map[string]any` | No |  |
| `state` | `string` | No | Billing state. |
| `type` | `string` | No | The payment method type. |
| `zipcode` | `string` | No | Billing zip code. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiPaymentMethodResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "payment_method_id": "payment_method_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiPaymentMethodResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BillSubsApiPaymentMethodResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "payment_method_id": "payment_method_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiPlanResponseCollectionEntity

```go
billSubsApiPlanResponseCollection := client.BillSubsApiPlanResponseCollection(nil)
fmt.Println(billSubsApiPlanResponseCollection.GetName()) // "bill_subs_api_plan_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillSubsApiPlanResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiRatePlanSimpleEntity

```go
billSubsApiRatePlanSimple := client.BillSubsApiRatePlanSimple(nil)
fmt.Println(billSubsApiRatePlanSimple.GetName()) // "bill_subs_api_rate_plan_simple"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiRatePlanSimple(nil).Load(map[string]any{"public_key": "public_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiRatePlanSimpleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiUnpaidInvoicesResponseSingleEntity

```go
billSubsApiUnpaidInvoicesResponseSingle := client.BillSubsApiUnpaidInvoicesResponseSingle(nil)
fmt.Println(billSubsApiUnpaidInvoicesResponseSingle.GetName()) // "bill_subs_api_unpaid_invoices_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiUnpaidInvoicesResponseSingle(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseCollectionEntity

```go
billSubsApiUserSubscriptionResponseCollection := client.BillSubsApiUserSubscriptionResponseCollection(nil)
fmt.Println(billSubsApiUserSubscriptionResponseCollection.GetName()) // "bill_subs_api_user_subscription_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillSubsApiUserSubscriptionResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseSingleEntity

```go
billSubsApiUserSubscriptionResponseSingle := client.BillSubsApiUserSubscriptionResponseSingle(nil)
fmt.Println(billSubsApiUserSubscriptionResponseSingle.GetName()) // "bill_subs_api_user_subscription_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `map[string]any` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `[]any` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `float64` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `map[string]any` | No | The rate plan applied to the subscription. |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `map[string]any` | No | A simple zone object. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiUserSubscriptionResponseSingle(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BillSubsApiUserSubscriptionResponseSingle(nil).Update(map[string]any{
    "identifier": "identifier",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiZoneSubscriptionResponseSingleEntity

```go
billSubsApiZoneSubscriptionResponseSingle := client.BillSubsApiZoneSubscriptionResponseSingle(nil)
fmt.Println(billSubsApiZoneSubscriptionResponseSingle.GetName()) // "bill_subs_api_zone_subscription_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `map[string]any` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `[]any` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `float64` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `map[string]any` | No | The rate plan applied to the subscription. |
| `result` | `map[string]any` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `map[string]any` | No | A simple zone object. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillSubsApiZoneSubscriptionResponseSingle(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiZoneSubscriptionResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BillSubsApiZoneSubscriptionResponseSingle(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillableUsageEntity

```go
billableUsage := client.BillableUsage(nil)
fmt.Println(billableUsage.GetName()) // "billable_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Contains error details if the request failed. |
| `messages` | `[]any` | Yes | Contains informational notices about the response. |
| `result` | `[]any` | Yes | Contains the array of billable usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillableUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillableUsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillableUsageApiUsageInfoEntity

```go
billableUsageApiUsageInfo := client.BillableUsageApiUsageInfo(nil)
fmt.Println(billableUsageApiUsageInfo.GetName()) // "billable_usage_api_usage_info"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Contains error details if the request failed. |
| `messages` | `[]any` | Yes | Contains any informational messages from the API. |
| `result` | `map[string]any` | Yes | Contains the usage info. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillableUsageApiUsageInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillableUsageApiUsageInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillableUsageApiV2AccountBillableMetricEntity

```go
billableUsageApiV2AccountBillableMetric := client.BillableUsageApiV2AccountBillableMetric(nil)
fmt.Println(billableUsageApiV2AccountBillableMetric.GetName()) // "billable_usage_api_v2_account_billable_metric"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillableUsageApiV2AccountBillableMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```go
billableUsageApiV2Usage := client.BillableUsageApiV2Usage(nil)
fmt.Println(billableUsageApiV2Usage.GetName()) // "billable_usage_api_v2_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `FilterBy` | `map[string]any` | No | Usage filters. |
| `GroupBy` | `[]any` | No | Grouping definitions used to split result rows. |
| `TimePeriod` | `map[string]any` | No | Charge period to query, i.e. |
| `errors` | `[]any` | Yes | Contains error details if the request failed. |
| `messages` | `[]any` | Yes | Contains informational notices about the response. |
| `result` | `[]any` | Yes | Contains the array of cost and usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillableUsageApiV2Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillableUsageApiV2Usage(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CancelDowngradeEntity

```go
cancelDowngrade := client.CancelDowngrade(nil)
fmt.Println(cancelDowngrade.GetName()) // "cancel_downgrade"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription_ids` | `[]any` | No | List of subscription identifiers to cancel downgrades for. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CancelDowngrade(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CancelDowngradeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EntitlementEntity

```go
entitlement := client.Entitlement(nil)
fmt.Println(entitlement.GetName()) // "entitlement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | List of errors, empty on success. |
| `messages` | `[]any` | Yes | List of informational messages. |
| `result` | `[]any` | Yes | List of entitlements for the requested object. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Entitlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvoiceEntity

```go
invoice := client.Invoice(nil)
fmt.Println(invoice.GetName()) // "invoice"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toggle` | `bool` | No | Whether to enable or disable PDF invoice generation. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Invoice(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentMethodEntity

```go
paymentMethod := client.PaymentMethod(nil)
fmt.Println(paymentMethod.GetName()) // "payment_method"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PaymentMethod(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SetAsDefaultEntity

```go
setAsDefault := client.SetAsDefault(nil)
fmt.Println(setAsDefault.GetName()) // "set_as_default"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SetAsDefault(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "payment_method_id": "example_payment_method_id",
    "errors": []any{},
    "messages": []any{},
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SetAsDefaultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageEntity

```go
usage := client.Usage(nil)
fmt.Println(usage.GetName()) // "usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | List of errors, empty on success. |
| `messages` | `[]any` | No | List of informational messages. |
| `result` | `[]any` | Yes | Array of billing usage data points for the requested time range. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserSubscriptionEntity

```go
userSubscription := client.UserSubscription(nil)
fmt.Println(userSubscription.GetName()) // "user_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UserSubscription(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZoneRatePlanEntity

```go
zoneRatePlan := client.ZoneRatePlan(nil)
fmt.Println(zoneRatePlan.GetName()) // "zone_rate_plan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZoneRatePlan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZoneRatePlan(nil).Load(map[string]any{"plan_identifier": "plan_identifier", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZoneRatePlanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZoneSubscriptionEntity

```go
zoneSubscription := client.ZoneSubscription(nil)
fmt.Println(zoneSubscription.GetName()) // "zone_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ZoneSubscription(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZoneSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareBillingSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

