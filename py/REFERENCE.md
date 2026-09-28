# CloudflareBilling Python SDK Reference

Complete API reference for the CloudflareBilling Python SDK.


## CloudflareBillingSDK

### Constructor

```python
from cloudflarebilling_sdk import CloudflareBillingSDK

client = CloudflareBillingSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareBillingSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareBillingSDK.test()
```


### Instance Methods

#### `AccountBilling(data=None)`

Create a new `AccountBillingEntity` instance. Pass `None` for no initial data.

#### `AccountBillingProfile(data=None)`

Create a new `AccountBillingProfileEntity` instance. Pass `None` for no initial data.

#### `AccountSubscription(data=None)`

Create a new `AccountSubscriptionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiAccountBillingHistoryCollection(data=None)`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiAccountCredit(data=None)`

Create a new `BillSubsApiAccountCreditEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseCollection(data=None)`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiAccountSubscriptionResponseSingle(data=None)`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiAddressValidationResponseSingle(data=None)`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiBadDebtResponseSingle(data=None)`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiBillingHistoryCollection(data=None)`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiBillingResponseSingle(data=None)`

Create a new `BillSubsApiBillingResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiCancelReasonResponseSingle(data=None)`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data=None)`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiPaymentIntentResponseSingle(data=None)`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiPaymentMethodResponseCollection(data=None)`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiPaymentMethodResponseSingle(data=None)`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiPlanResponseCollection(data=None)`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiRatePlanSimple(data=None)`

Create a new `BillSubsApiRatePlanSimpleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiUnpaidInvoicesResponseSingle(data=None)`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiUserSubscriptionResponseCollection(data=None)`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiUserSubscriptionResponseSingle(data=None)`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiZoneSubscriptionResponseSingle(data=None)`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillableUsage(data=None)`

Create a new `BillableUsageEntity` instance. Pass `None` for no initial data.

#### `BillableUsageApiUsageInfo(data=None)`

Create a new `BillableUsageApiUsageInfoEntity` instance. Pass `None` for no initial data.

#### `BillableUsageApiV2AccountBillableMetric(data=None)`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance. Pass `None` for no initial data.

#### `BillableUsageApiV2Usage(data=None)`

Create a new `BillableUsageApiV2UsageEntity` instance. Pass `None` for no initial data.

#### `CancelDowngrade(data=None)`

Create a new `CancelDowngradeEntity` instance. Pass `None` for no initial data.

#### `Entitlement(data=None)`

Create a new `EntitlementEntity` instance. Pass `None` for no initial data.

#### `Invoice(data=None)`

Create a new `InvoiceEntity` instance. Pass `None` for no initial data.

#### `PaymentMethod(data=None)`

Create a new `PaymentMethodEntity` instance. Pass `None` for no initial data.

#### `SetAsDefault(data=None)`

Create a new `SetAsDefaultEntity` instance. Pass `None` for no initial data.

#### `Usage(data=None)`

Create a new `UsageEntity` instance. Pass `None` for no initial data.

#### `UserSubscription(data=None)`

Create a new `UserSubscriptionEntity` instance. Pass `None` for no initial data.

#### `ZoneRatePlan(data=None)`

Create a new `ZoneRatePlanEntity` instance. Pass `None` for no initial data.

#### `ZoneSubscription(data=None)`

Create a new `ZoneSubscriptionEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountBillingEntity

```python
account_billing = client.AccountBilling()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccountBilling().load({"account_id": "account_id", "receipt_id": "receipt_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountBillingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountBillingProfileEntity

```python
account_billing_profile = client.AccountBillingProfile()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AccountBillingProfile().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountBillingProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountSubscriptionEntity

```python
account_subscription = client.AccountSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AccountSubscription().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiAccountBillingHistoryCollectionEntity

```python
bill_subs_api_account_billing_history_collection = client.BillSubsApiAccountBillingHistoryCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillSubsApiAccountBillingHistoryCollection().list({"account_id": "example"})
for bill_subs_api_account_billing_history_collection in results:
    print(bill_subs_api_account_billing_history_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountBillingHistoryCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiAccountCreditEntity

```python
bill_subs_api_account_credit = client.BillSubsApiAccountCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiAccountCredit().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountCreditEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseCollectionEntity

```python
bill_subs_api_account_subscription_response_collection = client.BillSubsApiAccountSubscriptionResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillSubsApiAccountSubscriptionResponseCollection().list({"account_id": "example"})
for bill_subs_api_account_subscription_response_collection in results:
    print(bill_subs_api_account_subscription_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountSubscriptionResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiAccountSubscriptionResponseSingleEntity

```python
bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `dict` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `list` | No | Configurable component values for the subscription. |
| `currency` | `str` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `str` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `str` | No | When the current billing period started. |
| `frequency` | `str` | No | How often the subscription is renewed automatically. |
| `id` | `str` | No | Subscription identifier tag. |
| `price` | `float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `dict` | No | The rate plan applied to the subscription. |
| `result` | `dict` | No |  |
| `state` | `str` | No | The state that the subscription is in. |
| `zone` | `dict` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiAccountSubscriptionResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiAccountSubscriptionResponseSingle().load({"account_id": "account_id", "subscription_identifier": "subscription_identifier"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BillSubsApiAccountSubscriptionResponseSingle().update({
    "account_id": "account_id",
    "subscription_identifier": "subscription_identifier",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAccountSubscriptionResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiAddressValidationResponseSingleEntity

```python
bill_subs_api_address_validation_response_single = client.BillSubsApiAddressValidationResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | No | Address line 1. |
| `address2` | `str` | No | Address line 2. |
| `city` | `str` | No | City. |
| `country` | `str` | No | Country code. |
| `state` | `str` | No | State or province. |
| `zipcode` | `str` | No | Postal or zip code. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiAddressValidationResponseSingle().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiAddressValidationResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiBadDebtResponseSingleEntity

```python
bill_subs_api_bad_debt_response_single = client.BillSubsApiBadDebtResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiBadDebtResponseSingle().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBadDebtResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiBillingHistoryCollectionEntity

```python
bill_subs_api_billing_history_collection = client.BillSubsApiBillingHistoryCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillSubsApiBillingHistoryCollection().list()
for bill_subs_api_billing_history_collection in results:
    print(bill_subs_api_billing_history_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBillingHistoryCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiBillingResponseSingleEntity

```python
bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | No | Street address line 1. |
| `address2` | `str` | No | Street address line 2 (apt, suite, etc.). |
| `billing_email` | `str` | No | Primary billing email address. |
| `buying_rate_plan` | `str` | No | Rate plan being purchased right after profile setup. |
| `captcha_challenge_jwt` | `str` | No | Captcha challenge JWT issued during onboarding. |
| `cf_turnstile_response` | `str` | No | Cloudflare Turnstile response. |
| `city` | `str` | No | City on the billing profile. |
| `company` | `str` | No | Company name on the billing profile. |
| `country` | `str` | No | ISO 3166-1 alpha-2 country code. |
| `first_name` | `str` | No | First name on the billing profile. |
| `h_captcha_response` | `str` | No | hCaptcha response. |
| `last_name` | `str` | No | Last name on the billing profile. |
| `preferred_locale` | `str` | No | Preferred locale for invoice rendering (BCP 47). |
| `result` | `dict` | No |  |
| `secondary_billing_email` | `str` | No | Secondary billing email address for CC on invoices. |
| `state` | `str` | No | State or region on the billing profile. |
| `tax_id_type` | `str` | No | Type of tax ID provided. |
| `telephone` | `str` | No | Contact phone number. |
| `vat` | `str` | No | VAT identifier. |
| `zipcode` | `str` | No | ZIP or postal code. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiBillingResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiBillingResponseSingle().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BillSubsApiBillingResponseSingle().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBillingResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiCancelReasonResponseSingleEntity

```python
bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `other` | `str` | No | Additional cancellation details. |
| `reason_code` | `list` | No | The cancellation reason codes. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiCancelReasonResponseSingle().create({
    "account_id": "example_account_id",  # str
    "subscription_identifier": "example_subscription_identifier",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiCancelReasonResponseSingle().load({"account_id": "account_id", "subscription_identifier": "subscription_identifier"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiCancelReasonResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```python
bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `invoice_id` | `str` | No | The identifier of the invoice to pay. |
| `payment_method_id` | `str` | No | The payment method to use. |
| `validate_payment_method` | `bool` | No | Whether to validate the payment method before processing. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiClientSecretResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiPaymentIntentResponseSingleEntity

```python
bill_subs_api_payment_intent_response_single = client.BillSubsApiPaymentIntentResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiPaymentIntentResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPaymentIntentResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseCollectionEntity

```python
bill_subs_api_payment_method_response_collection = client.BillSubsApiPaymentMethodResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillSubsApiPaymentMethodResponseCollection().list({"account_id": "example"})
for bill_subs_api_payment_method_response_collection in results:
    print(bill_subs_api_payment_method_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPaymentMethodResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiPaymentMethodResponseSingleEntity

```python
bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | No | Billing address line 1. |
| `address2` | `str` | No | Billing address line 2. |
| `bank_account_type` | `str` | No | Bank account type. |
| `bank_code` | `str` | No | Bank code. |
| `bank_country` | `str` | No | Bank country. |
| `bank_name` | `str` | No | Bank name for bank-based payment methods. |
| `bank_routing_number` | `str` | No | Bank routing number. |
| `cashapp_cash_tag` | `str` | No | Cash App cash tag. |
| `city` | `str` | No | Billing city. |
| `country` | `str` | No | Billing country. |
| `default` | `bool` | No | Whether this is the default payment method. |
| `device_data` | `str` | No | Device data for fraud prevention. |
| `expiration_date` | `str` | No | Card expiration date. |
| `first_name` | `str` | No | Billing first name. |
| `id` | `str` | No | Payment method identifier. |
| `last_four` | `str` | No | Last four digits of the card number. |
| `last_name` | `str` | No | Billing last name. |
| `nick_name` | `str` | No | A nickname for the payment method. |
| `payment_account_email` | `str` | No | Email associated with the payment account. |
| `payment_email` | `str` | No | Payment email address. |
| `payment_gateway` | `str` | No | The payment gateway used. |
| `payment_nonce` | `str` | No | Payment nonce for tokenized payments. |
| `result` | `dict` | No |  |
| `state` | `str` | No | Billing state. |
| `type` | `str` | No | The payment method type. |
| `zipcode` | `str` | No | Billing zip code. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiPaymentMethodResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiPaymentMethodResponseSingle().load({"account_id": "account_id", "payment_method_id": "payment_method_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BillSubsApiPaymentMethodResponseSingle().update({
    "account_id": "account_id",
    "payment_method_id": "payment_method_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPaymentMethodResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiPlanResponseCollectionEntity

```python
bill_subs_api_plan_response_collection = client.BillSubsApiPlanResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillSubsApiPlanResponseCollection().list({"zone_id": "example"})
for bill_subs_api_plan_response_collection in results:
    print(bill_subs_api_plan_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiPlanResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiRatePlanSimpleEntity

```python
bill_subs_api_rate_plan_simple = client.BillSubsApiRatePlanSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiRatePlanSimple().load({"public_key": "public_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiRatePlanSimpleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiUnpaidInvoicesResponseSingleEntity

```python
bill_subs_api_unpaid_invoices_response_single = client.BillSubsApiUnpaidInvoicesResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiUnpaidInvoicesResponseSingle().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiUnpaidInvoicesResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseCollectionEntity

```python
bill_subs_api_user_subscription_response_collection = client.BillSubsApiUserSubscriptionResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillSubsApiUserSubscriptionResponseCollection().list()
for bill_subs_api_user_subscription_response_collection in results:
    print(bill_subs_api_user_subscription_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiUserSubscriptionResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiUserSubscriptionResponseSingleEntity

```python
bill_subs_api_user_subscription_response_single = client.BillSubsApiUserSubscriptionResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `dict` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `list` | No | Configurable component values for the subscription. |
| `currency` | `str` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `str` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `str` | No | When the current billing period started. |
| `frequency` | `str` | No | How often the subscription is renewed automatically. |
| `id` | `str` | No | Subscription identifier tag. |
| `price` | `float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `dict` | No | The rate plan applied to the subscription. |
| `state` | `str` | No | The state that the subscription is in. |
| `zone` | `dict` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiUserSubscriptionResponseSingle().create({
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BillSubsApiUserSubscriptionResponseSingle().update({
    "identifier": "identifier",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiUserSubscriptionResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiZoneSubscriptionResponseSingleEntity

```python
bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `dict` | No | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `list` | No | Configurable component values for the subscription. |
| `currency` | `str` | No | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `str` | No | The end of the current period and also when the next billing is due. |
| `current_period_start` | `str` | No | When the current billing period started. |
| `frequency` | `str` | No | How often the subscription is renewed automatically. |
| `id` | `str` | No | Subscription identifier tag. |
| `price` | `float` | No | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `dict` | No | The rate plan applied to the subscription. |
| `result` | `dict` | No |  |
| `state` | `str` | No | The state that the subscription is in. |
| `zone` | `dict` | No | A simple zone object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiZoneSubscriptionResponseSingle().create({
    "zone_id": "example_zone_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillSubsApiZoneSubscriptionResponseSingle().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BillSubsApiZoneSubscriptionResponseSingle().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiZoneSubscriptionResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillableUsageEntity

```python
billable_usage = client.BillableUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Contains error details if the request failed. |
| `messages` | `list` | Yes | Contains informational notices about the response. |
| `result` | `list` | Yes | Contains the array of billable usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillableUsage().list({"account_id": "example"})
for billable_usage in results:
    print(billable_usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillableUsageApiUsageInfoEntity

```python
billable_usage_api_usage_info = client.BillableUsageApiUsageInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Contains error details if the request failed. |
| `messages` | `list` | Yes | Contains any informational messages from the API. |
| `result` | `dict` | Yes | Contains the usage info. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillableUsageApiUsageInfo().list({"account_id": "example"})
for billable_usage_api_usage_info in results:
    print(billable_usage_api_usage_info)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiUsageInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillableUsageApiV2AccountBillableMetricEntity

```python
billable_usage_api_v2_account_billable_metric = client.BillableUsageApiV2AccountBillableMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillableUsageApiV2AccountBillableMetric().list({"account_id": "example"})
for billable_usage_api_v2_account_billable_metric in results:
    print(billable_usage_api_v2_account_billable_metric)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiV2AccountBillableMetricEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```python
billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `FilterBy` | `dict` | No | Usage filters. |
| `GroupBy` | `list` | No | Grouping definitions used to split result rows. |
| `TimePeriod` | `dict` | No | Charge period to query, i.e. |
| `errors` | `list` | Yes | Contains error details if the request failed. |
| `messages` | `list` | Yes | Contains informational notices about the response. |
| `result` | `list` | Yes | Contains the array of cost and usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillableUsageApiV2Usage().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": [],  # list
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillableUsageApiV2Usage().list({"account_id": "example"})
for billable_usage_api_v2_usage in results:
    print(billable_usage_api_v2_usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CancelDowngradeEntity

```python
cancel_downgrade = client.CancelDowngrade()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subscription_ids` | `list` | No | List of subscription identifiers to cancel downgrades for. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CancelDowngrade().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CancelDowngradeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EntitlementEntity

```python
entitlement = client.Entitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | List of errors, empty on success. |
| `messages` | `list` | Yes | List of informational messages. |
| `result` | `list` | Yes | List of entitlements for the requested object. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Entitlement().list({"account_id": "example"})
for entitlement in results:
    print(entitlement)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntitlementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvoiceEntity

```python
invoice = client.Invoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toggle` | `bool` | No | Whether to enable or disable PDF invoice generation. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Invoice().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentMethodEntity

```python
payment_method = client.PaymentMethod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PaymentMethod().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SetAsDefaultEntity

```python
set_as_default = client.SetAsDefault()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SetAsDefault().create({
    "account_id": "example_account_id",  # str
    "payment_method_id": "example_payment_method_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # Any
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetAsDefaultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageEntity

```python
usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | List of errors, empty on success. |
| `messages` | `list` | No | List of informational messages. |
| `result` | `list` | Yes | Array of billing usage data points for the requested time range. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Usage().list({"account_id": "example"})
for usage in results:
    print(usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserSubscriptionEntity

```python
user_subscription = client.UserSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UserSubscription().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZoneRatePlanEntity

```python
zone_rate_plan = client.ZoneRatePlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZoneRatePlan().list({"id": "example"})
for zone_rate_plan in results:
    print(zone_rate_plan)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZoneRatePlan().load({"plan_identifier": "plan_identifier", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneRatePlanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZoneSubscriptionEntity

```python
zone_subscription = client.ZoneSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ZoneSubscription().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareBillingSDK({
    "feature": {
        "test": {"active": True},
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

