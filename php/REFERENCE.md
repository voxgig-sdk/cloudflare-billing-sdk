# CloudflareBilling PHP SDK Reference

Complete API reference for the CloudflareBilling PHP SDK.


## CloudflareBillingSDK

### Constructor

```php
require_once __DIR__ . '/cloudflarebilling_sdk.php';

$client = new CloudflareBillingSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareBillingSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareBillingSDK::test();
```


### Instance Methods

#### `AccountBilling($data = null)`

Create a new `AccountBillingEntity` instance. Pass `null` for no initial data.

#### `AccountBillingProfile($data = null)`

Create a new `AccountBillingProfileEntity` instance. Pass `null` for no initial data.

#### `AccountSubscription($data = null)`

Create a new `AccountSubscriptionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiAccountBillingHistoryCollection($data = null)`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiAccountCredit($data = null)`

Create a new `BillSubsApiAccountCreditEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseCollection($data = null)`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseSingle($data = null)`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiAddressValidationResponseSingle($data = null)`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiBadDebtResponseSingle($data = null)`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiBillingHistoryCollection($data = null)`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiBillingResponseSingle($data = null)`

Create a new `BillSubsApiBillingResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiCancelReasonResponseSingle($data = null)`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiClientSecretResponseSingle($data = null)`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiPaymentIntentResponseSingle($data = null)`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiPaymentMethodResponseCollection($data = null)`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiPaymentMethodResponseSingle($data = null)`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiPlanResponseCollection($data = null)`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiRatePlanSimple($data = null)`

Create a new `BillSubsApiRatePlanSimpleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiUnpaidInvoicesResponseSingle($data = null)`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiUserSubscriptionResponseCollection($data = null)`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiUserSubscriptionResponseSingle($data = null)`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiZoneSubscriptionResponseSingle($data = null)`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillableUsage($data = null)`

Create a new `BillableUsageEntity` instance. Pass `null` for no initial data.

#### `BillableUsageApiUsageInfo($data = null)`

Create a new `BillableUsageApiUsageInfoEntity` instance. Pass `null` for no initial data.

#### `BillableUsageApiV2AccountBillableMetric($data = null)`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance. Pass `null` for no initial data.

#### `BillableUsageApiV2Usage($data = null)`

Create a new `BillableUsageApiV2UsageEntity` instance. Pass `null` for no initial data.

#### `CancelDowngrade($data = null)`

Create a new `CancelDowngradeEntity` instance. Pass `null` for no initial data.

#### `Entitlement($data = null)`

Create a new `EntitlementEntity` instance. Pass `null` for no initial data.

#### `Invoice($data = null)`

Create a new `InvoiceEntity` instance. Pass `null` for no initial data.

#### `PaymentMethod($data = null)`

Create a new `PaymentMethodEntity` instance. Pass `null` for no initial data.

#### `SetAsDefault($data = null)`

Create a new `SetAsDefaultEntity` instance. Pass `null` for no initial data.

#### `Usage($data = null)`

Create a new `UsageEntity` instance. Pass `null` for no initial data.

#### `UserSubscription($data = null)`

Create a new `UserSubscriptionEntity` instance. Pass `null` for no initial data.

#### `ZoneRatePlan($data = null)`

Create a new `ZoneRatePlanEntity` instance. Pass `null` for no initial data.

#### `ZoneSubscription($data = null)`

Create a new `ZoneSubscriptionEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareBillingUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccountBillingEntity

```php
$account_billing = $client->AccountBilling();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccountBilling()->load(["account_id" => "account_id", "receipt_id" => "receipt_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountBillingEntity`

Create a new `AccountBillingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountBillingProfileEntity

```php
$account_billing_profile = $client->AccountBillingProfile();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AccountBillingProfile()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountBillingProfileEntity`

Create a new `AccountBillingProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountSubscriptionEntity

```php
$account_subscription = $client->AccountSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AccountSubscription()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountSubscriptionEntity`

Create a new `AccountSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiAccountBillingHistoryCollectionEntity

```php
$bill_subs_api_account_billing_history_collection = $client->BillSubsApiAccountBillingHistoryCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillSubsApiAccountBillingHistoryCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiAccountBillingHistoryCollectionEntity`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiAccountCreditEntity

```php
$bill_subs_api_account_credit = $client->BillSubsApiAccountCredit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiAccountCredit()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiAccountCreditEntity`

Create a new `BillSubsApiAccountCreditEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseCollectionEntity

```php
$bill_subs_api_account_subscription_response_collection = $client->BillSubsApiAccountSubscriptionResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillSubsApiAccountSubscriptionResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiAccountSubscriptionResponseCollectionEntity`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseSingleEntity

```php
$bill_subs_api_account_subscription_response_single = $client->BillSubsApiAccountSubscriptionResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `array` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `array` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `array` | No | The rate plan applied to the subscription. |
| `result` | `array` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `array` | No | A simple zone object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiAccountSubscriptionResponseSingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiAccountSubscriptionResponseSingle()->load(["account_id" => "account_id", "subscription_identifier" => "subscription_identifier"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BillSubsApiAccountSubscriptionResponseSingle()->update([
  "account_id" => "account_id",
  "subscription_identifier" => "subscription_identifier",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiAccountSubscriptionResponseSingleEntity`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiAddressValidationResponseSingleEntity

```php
$bill_subs_api_address_validation_response_single = $client->BillSubsApiAddressValidationResponseSingle();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiAddressValidationResponseSingle()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiAddressValidationResponseSingleEntity`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiBadDebtResponseSingleEntity

```php
$bill_subs_api_bad_debt_response_single = $client->BillSubsApiBadDebtResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiBadDebtResponseSingle()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiBadDebtResponseSingleEntity`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiBillingHistoryCollectionEntity

```php
$bill_subs_api_billing_history_collection = $client->BillSubsApiBillingHistoryCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillSubsApiBillingHistoryCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiBillingHistoryCollectionEntity`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiBillingResponseSingleEntity

```php
$bill_subs_api_billing_response_single = $client->BillSubsApiBillingResponseSingle();
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
| `result` | `array` | No |  |
| `secondary_billing_email` | `string` | No | Secondary billing email address for CC on invoices. |
| `state` | `string` | No | State or region on the billing profile. |
| `tax_id_type` | `string` | No | Type of tax ID provided. |
| `telephone` | `string` | No | Contact phone number. |
| `vat` | `string` | No | VAT identifier. |
| `zipcode` | `string` | No | ZIP or postal code. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiBillingResponseSingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiBillingResponseSingle()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BillSubsApiBillingResponseSingle()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiBillingResponseSingleEntity`

Create a new `BillSubsApiBillingResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiCancelReasonResponseSingleEntity

```php
$bill_subs_api_cancel_reason_response_single = $client->BillSubsApiCancelReasonResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `other` | `string` | No | Additional cancellation details. |
| `reason_code` | `array` | No | The cancellation reason codes. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiCancelReasonResponseSingle()->create([
  "account_id" => null, // string
  "subscription_identifier" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiCancelReasonResponseSingle()->load(["account_id" => "account_id", "subscription_identifier" => "subscription_identifier"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiCancelReasonResponseSingleEntity`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```php
$bill_subs_api_client_secret_response_single = $client->BillSubsApiClientSecretResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice_id` | `string` | No | The identifier of the invoice to pay. |
| `payment_method_id` | `string` | No | The payment method to use. |
| `validate_payment_method` | `bool` | No | Whether to validate the payment method before processing. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiClientSecretResponseSingle()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiClientSecretResponseSingleEntity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiPaymentIntentResponseSingleEntity

```php
$bill_subs_api_payment_intent_response_single = $client->BillSubsApiPaymentIntentResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiPaymentIntentResponseSingle()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiPaymentIntentResponseSingleEntity`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseCollectionEntity

```php
$bill_subs_api_payment_method_response_collection = $client->BillSubsApiPaymentMethodResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillSubsApiPaymentMethodResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiPaymentMethodResponseCollectionEntity`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseSingleEntity

```php
$bill_subs_api_payment_method_response_single = $client->BillSubsApiPaymentMethodResponseSingle();
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
| `result` | `array` | No |  |
| `state` | `string` | No | Billing state. |
| `type` | `string` | No | The payment method type. |
| `zipcode` | `string` | No | Billing zip code. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiPaymentMethodResponseSingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiPaymentMethodResponseSingle()->load(["account_id" => "account_id", "payment_method_id" => "payment_method_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BillSubsApiPaymentMethodResponseSingle()->update([
  "account_id" => "account_id",
  "payment_method_id" => "payment_method_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiPaymentMethodResponseSingleEntity`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiPlanResponseCollectionEntity

```php
$bill_subs_api_plan_response_collection = $client->BillSubsApiPlanResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillSubsApiPlanResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiPlanResponseCollectionEntity`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiRatePlanSimpleEntity

```php
$bill_subs_api_rate_plan_simple = $client->BillSubsApiRatePlanSimple();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiRatePlanSimple()->load(["public_key" => "public_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiRatePlanSimpleEntity`

Create a new `BillSubsApiRatePlanSimpleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiUnpaidInvoicesResponseSingleEntity

```php
$bill_subs_api_unpaid_invoices_response_single = $client->BillSubsApiUnpaidInvoicesResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiUnpaidInvoicesResponseSingle()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiUnpaidInvoicesResponseSingleEntity`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseCollectionEntity

```php
$bill_subs_api_user_subscription_response_collection = $client->BillSubsApiUserSubscriptionResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillSubsApiUserSubscriptionResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiUserSubscriptionResponseCollectionEntity`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseSingleEntity

```php
$bill_subs_api_user_subscription_response_single = $client->BillSubsApiUserSubscriptionResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `array` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `array` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `array` | No | The rate plan applied to the subscription. |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `array` | No | A simple zone object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiUserSubscriptionResponseSingle()->create([
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BillSubsApiUserSubscriptionResponseSingle()->update([
  "identifier" => "identifier",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiUserSubscriptionResponseSingleEntity`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiZoneSubscriptionResponseSingleEntity

```php
$bill_subs_api_zone_subscription_response_single = $client->BillSubsApiZoneSubscriptionResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `array` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `array` | No | Configurable component values for the subscription. |
| `currency` | `string` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | No | When the current billing period started. |
| `frequency` | `string` | No | How often the subscription is renewed automatically. |
| `id` | `string` | No | Subscription identifier tag. |
| `price` | `float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `array` | No | The rate plan applied to the subscription. |
| `result` | `array` | No |  |
| `state` | `string` | No | The state that the subscription is in. |
| `zone` | `array` | No | A simple zone object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiZoneSubscriptionResponseSingle()->create([
  "zone_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillSubsApiZoneSubscriptionResponseSingle()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BillSubsApiZoneSubscriptionResponseSingle()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiZoneSubscriptionResponseSingleEntity`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillableUsageEntity

```php
$billable_usage = $client->BillableUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Contains error details if the request failed. |
| `messages` | `array` | Yes | Contains informational notices about the response. |
| `result` | `array` | Yes | Contains the array of billable usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillableUsage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillableUsageEntity`

Create a new `BillableUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillableUsageApiUsageInfoEntity

```php
$billable_usage_api_usage_info = $client->BillableUsageApiUsageInfo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Contains error details if the request failed. |
| `messages` | `array` | Yes | Contains any informational messages from the API. |
| `result` | `array` | Yes | Contains the usage info. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillableUsageApiUsageInfo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillableUsageApiUsageInfoEntity`

Create a new `BillableUsageApiUsageInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillableUsageApiV2AccountBillableMetricEntity

```php
$billable_usage_api_v2_account_billable_metric = $client->BillableUsageApiV2AccountBillableMetric();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillableUsageApiV2AccountBillableMetric()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillableUsageApiV2AccountBillableMetricEntity`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```php
$billable_usage_api_v2_usage = $client->BillableUsageApiV2Usage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `FilterBy` | `array` | No | Usage filters. |
| `GroupBy` | `array` | No | Grouping definitions used to split result rows. |
| `TimePeriod` | `array` | No | Charge period to query, i.e. |
| `errors` | `array` | Yes | Contains error details if the request failed. |
| `messages` | `array` | Yes | Contains informational notices about the response. |
| `result` | `array` | Yes | Contains the array of cost and usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillableUsageApiV2Usage()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillableUsageApiV2Usage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillableUsageApiV2UsageEntity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CancelDowngradeEntity

```php
$cancel_downgrade = $client->CancelDowngrade();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription_ids` | `array` | No | List of subscription identifiers to cancel downgrades for. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CancelDowngrade()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CancelDowngradeEntity`

Create a new `CancelDowngradeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EntitlementEntity

```php
$entitlement = $client->Entitlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | List of errors, empty on success. |
| `messages` | `array` | Yes | List of informational messages. |
| `result` | `array` | Yes | List of entitlements for the requested object. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Entitlement()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EntitlementEntity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvoiceEntity

```php
$invoice = $client->Invoice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toggle` | `bool` | No | Whether to enable or disable PDF invoice generation. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Invoice()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvoiceEntity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentMethodEntity

```php
$payment_method = $client->PaymentMethod();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentMethod()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentMethodEntity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SetAsDefaultEntity

```php
$set_as_default = $client->SetAsDefault();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SetAsDefault()->create([
  "account_id" => null, // string
  "payment_method_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // mixed
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SetAsDefaultEntity`

Create a new `SetAsDefaultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageEntity

```php
$usage = $client->Usage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | List of errors, empty on success. |
| `messages` | `array` | No | List of informational messages. |
| `result` | `array` | Yes | Array of billing usage data points for the requested time range. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Usage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageEntity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserSubscriptionEntity

```php
$user_subscription = $client->UserSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UserSubscription()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserSubscriptionEntity`

Create a new `UserSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZoneRatePlanEntity

```php
$zone_rate_plan = $client->ZoneRatePlan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZoneRatePlan()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneRatePlan()->load(["plan_identifier" => "plan_identifier", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZoneRatePlanEntity`

Create a new `ZoneRatePlanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZoneSubscriptionEntity

```php
$zone_subscription = $client->ZoneSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneSubscription()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZoneSubscriptionEntity`

Create a new `ZoneSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareBillingSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

