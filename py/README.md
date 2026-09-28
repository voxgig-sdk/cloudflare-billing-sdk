# CloudflareBilling Python SDK



The Python SDK for the CloudflareBilling API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccountBilling()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-billing-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflarebilling_sdk import CloudflareBillingSDK

client = CloudflareBillingSDK({
    "apikey": os.environ.get("CLOUDFLARE_BILLING_APIKEY"),
})
```

### 3. Load a billsubsapipaymentmethodresponsesingle

BillSubsApiPaymentMethodResponseSingle is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    billsubsapipaymentmethodresponsesingle = client.BillSubsApiPaymentMethodResponseSingle().load({"account_id": "example_account_id", "payment_method_id": "example_payment_method_id"})
    print(billsubsapipaymentmethodresponsesingle)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    billsubsapibaddebtresponsesingle = client.BillSubsApiBadDebtResponseSingle().load({"account_id": "example"})
    print(billsubsapibaddebtresponsesingle)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareBillingSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
billsubsapibaddebtresponsesingle = client.BillSubsApiBadDebtResponseSingle().load({"account_id": "example"})
# billsubsapibaddebtresponsesingle contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareBillingSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
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
cd py && pytest test/
```


## Reference

### CloudflareBillingSDK

```python
from cloudflarebilling_sdk import CloudflareBillingSDK

client = CloudflareBillingSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareBillingSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareBillingSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `AccountBilling` | `(data) -> AccountBillingEntity` | Create an AccountBilling entity instance. |
| `AccountBillingProfile` | `(data) -> AccountBillingProfileEntity` | Create an AccountBillingProfile entity instance. |
| `AccountSubscription` | `(data) -> AccountSubscriptionEntity` | Create an AccountSubscription entity instance. |
| `BillSubsApiAccountBillingHistoryCollection` | `(data) -> BillSubsApiAccountBillingHistoryCollectionEntity` | Create a BillSubsApiAccountBillingHistoryCollection entity instance. |
| `BillSubsApiAccountCredit` | `(data) -> BillSubsApiAccountCreditEntity` | Create a BillSubsApiAccountCredit entity instance. |
| `BillSubsApiAccountSubscriptionResponseCollection` | `(data) -> BillSubsApiAccountSubscriptionResponseCollectionEntity` | Create a BillSubsApiAccountSubscriptionResponseCollection entity instance. |
| `BillSubsApiAccountSubscriptionResponseSingle` | `(data) -> BillSubsApiAccountSubscriptionResponseSingleEntity` | Create a BillSubsApiAccountSubscriptionResponseSingle entity instance. |
| `BillSubsApiAddressValidationResponseSingle` | `(data) -> BillSubsApiAddressValidationResponseSingleEntity` | Create a BillSubsApiAddressValidationResponseSingle entity instance. |
| `BillSubsApiBadDebtResponseSingle` | `(data) -> BillSubsApiBadDebtResponseSingleEntity` | Create a BillSubsApiBadDebtResponseSingle entity instance. |
| `BillSubsApiBillingHistoryCollection` | `(data) -> BillSubsApiBillingHistoryCollectionEntity` | Create a BillSubsApiBillingHistoryCollection entity instance. |
| `BillSubsApiBillingResponseSingle` | `(data) -> BillSubsApiBillingResponseSingleEntity` | Create a BillSubsApiBillingResponseSingle entity instance. |
| `BillSubsApiCancelReasonResponseSingle` | `(data) -> BillSubsApiCancelReasonResponseSingleEntity` | Create a BillSubsApiCancelReasonResponseSingle entity instance. |
| `BillSubsApiClientSecretResponseSingle` | `(data) -> BillSubsApiClientSecretResponseSingleEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillSubsApiPaymentIntentResponseSingle` | `(data) -> BillSubsApiPaymentIntentResponseSingleEntity` | Create a BillSubsApiPaymentIntentResponseSingle entity instance. |
| `BillSubsApiPaymentMethodResponseCollection` | `(data) -> BillSubsApiPaymentMethodResponseCollectionEntity` | Create a BillSubsApiPaymentMethodResponseCollection entity instance. |
| `BillSubsApiPaymentMethodResponseSingle` | `(data) -> BillSubsApiPaymentMethodResponseSingleEntity` | Create a BillSubsApiPaymentMethodResponseSingle entity instance. |
| `BillSubsApiPlanResponseCollection` | `(data) -> BillSubsApiPlanResponseCollectionEntity` | Create a BillSubsApiPlanResponseCollection entity instance. |
| `BillSubsApiRatePlanSimple` | `(data) -> BillSubsApiRatePlanSimpleEntity` | Create a BillSubsApiRatePlanSimple entity instance. |
| `BillSubsApiUnpaidInvoicesResponseSingle` | `(data) -> BillSubsApiUnpaidInvoicesResponseSingleEntity` | Create a BillSubsApiUnpaidInvoicesResponseSingle entity instance. |
| `BillSubsApiUserSubscriptionResponseCollection` | `(data) -> BillSubsApiUserSubscriptionResponseCollectionEntity` | Create a BillSubsApiUserSubscriptionResponseCollection entity instance. |
| `BillSubsApiUserSubscriptionResponseSingle` | `(data) -> BillSubsApiUserSubscriptionResponseSingleEntity` | Create a BillSubsApiUserSubscriptionResponseSingle entity instance. |
| `BillSubsApiZoneSubscriptionResponseSingle` | `(data) -> BillSubsApiZoneSubscriptionResponseSingleEntity` | Create a BillSubsApiZoneSubscriptionResponseSingle entity instance. |
| `BillableUsage` | `(data) -> BillableUsageEntity` | Create a BillableUsage entity instance. |
| `BillableUsageApiUsageInfo` | `(data) -> BillableUsageApiUsageInfoEntity` | Create a BillableUsageApiUsageInfo entity instance. |
| `BillableUsageApiV2AccountBillableMetric` | `(data) -> BillableUsageApiV2AccountBillableMetricEntity` | Create a BillableUsageApiV2AccountBillableMetric entity instance. |
| `BillableUsageApiV2Usage` | `(data) -> BillableUsageApiV2UsageEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `CancelDowngrade` | `(data) -> CancelDowngradeEntity` | Create a CancelDowngrade entity instance. |
| `Entitlement` | `(data) -> EntitlementEntity` | Create an Entitlement entity instance. |
| `Invoice` | `(data) -> InvoiceEntity` | Create an Invoice entity instance. |
| `PaymentMethod` | `(data) -> PaymentMethodEntity` | Create a PaymentMethod entity instance. |
| `SetAsDefault` | `(data) -> SetAsDefaultEntity` | Create a SetAsDefault entity instance. |
| `Usage` | `(data) -> UsageEntity` | Create an Usage entity instance. |
| `UserSubscription` | `(data) -> UserSubscriptionEntity` | Create an UserSubscription entity instance. |
| `ZoneRatePlan` | `(data) -> ZoneRatePlanEntity` | Create a ZoneRatePlan entity instance. |
| `ZoneSubscription` | `(data) -> ZoneSubscriptionEntity` | Create a ZoneSubscription entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### AccountBilling

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/receipts/{receipt_id}/pdf`

#### AccountBillingProfile

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/billing/profile`

#### AccountSubscription

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}`

#### BillSubsApiAccountBillingHistoryCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/billing/history`

#### BillSubsApiAccountCredit

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/billing/credits`

#### BillSubsApiAccountSubscriptionResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Update.

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

Operations: Create.

API path: `/billing/address-validation`

#### BillSubsApiBadDebtResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/billing/bad-debt`

#### BillSubsApiBillingHistoryCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/billing/profile`

#### BillSubsApiCancelReasonResponseSingle

| Field | Description |
| --- | --- |
| `other` | Additional cancellation details. |
| `reason_code` | The cancellation reason codes. |
| `result` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason`

#### BillSubsApiClientSecretResponseSingle

| Field | Description |
| --- | --- |
| `invoice_id` | The identifier of the invoice to pay. |
| `payment_method_id` | The payment method to use. |
| `validate_payment_method` | Whether to validate the payment method before processing. |

Operations: Create.

API path: `/accounts/{account_id}/pay-bad-debt`

#### BillSubsApiPaymentIntentResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Create.

API path: `/accounts/{account_id}/billing/profile/payment-method`

#### BillSubsApiPaymentMethodResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/payment-methods`

#### BillSubsApiPlanResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/available_rate_plans`

#### BillSubsApiRatePlanSimple

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/billing/rate_plans/{public_key}`

#### BillSubsApiUnpaidInvoicesResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/billing/unpaid-invoice`

#### BillSubsApiUserSubscriptionResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Update.

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

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/subscription`

#### BillableUsage

| Field | Description |
| --- | --- |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains informational notices about the response. |
| `result` | Contains the array of billable usage records. |
| `success` | Indicates whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/billable-usage`

#### BillableUsageApiUsageInfo

| Field | Description |
| --- | --- |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains any informational messages from the API. |
| `result` | Contains the usage info. |
| `success` | Indicates whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/billable-usage/info`

#### BillableUsageApiV2AccountBillableMetric

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List.

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

Operations: Create, List.

API path: `/accounts/{account_id}/billable/usage`

#### CancelDowngrade

| Field | Description |
| --- | --- |
| `subscription_ids` | List of subscription identifiers to cancel downgrades for. |

Operations: Create.

API path: `/accounts/{account_id}/subscriptions/cancel-downgrade`

#### Entitlement

| Field | Description |
| --- | --- |
| `errors` | List of errors, empty on success. |
| `messages` | List of informational messages. |
| `result` | List of entitlements for the requested object. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/entitlements`

#### Invoice

| Field | Description |
| --- | --- |
| `toggle` | Whether to enable or disable PDF invoice generation. |

Operations: Update.

API path: `/accounts/{account_id}/invoices`

#### PaymentMethod

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/payment-methods/{payment_method_id}`

#### SetAsDefault

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: Create.

API path: `/accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default`

#### Usage

| Field | Description |
| --- | --- |
| `errors` | List of errors, empty on success. |
| `messages` | List of informational messages. |
| `result` | Array of billing usage data points for the requested time range. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/billing/usage`

#### UserSubscription

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/user/subscriptions/{identifier}`

#### ZoneRatePlan

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: List, Load.

API path: `/zones/{zone_id}/available_plans`

#### ZoneSubscription

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/zones/{zone_id}/subscription`



## Entities


### AccountBilling

Create an instance: `account_billing = client.AccountBilling()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
account_billing = client.AccountBilling().load({"account_id": "account_id", "receipt_id": "receipt_id"})
```


### AccountBillingProfile

Create an instance: `account_billing_profile = client.AccountBillingProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AccountSubscription

Create an instance: `account_subscription = client.AccountSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### BillSubsApiAccountBillingHistoryCollection

Create an instance: `bill_subs_api_account_billing_history_collection = client.BillSubsApiAccountBillingHistoryCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
bill_subs_api_account_billing_history_collections = client.BillSubsApiAccountBillingHistoryCollection().list({"account_id": "example"})
```


### BillSubsApiAccountCredit

Create an instance: `bill_subs_api_account_credit = client.BillSubsApiAccountCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
bill_subs_api_account_credit = client.BillSubsApiAccountCredit().load({"account_id": "account_id"})
```


### BillSubsApiAccountSubscriptionResponseCollection

Create an instance: `bill_subs_api_account_subscription_response_collection = client.BillSubsApiAccountSubscriptionResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
bill_subs_api_account_subscription_response_collections = client.BillSubsApiAccountSubscriptionResponseCollection().list({"account_id": "example"})
```


### BillSubsApiAccountSubscriptionResponseSingle

Create an instance: `bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `dict` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `list` | Configurable component values for the subscription. |
| `currency` | `str` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `str` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `str` | When the current billing period started. |
| `frequency` | `str` | How often the subscription is renewed automatically. |
| `id` | `str` | Subscription identifier tag. |
| `price` | `float` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `dict` | The rate plan applied to the subscription. |
| `result` | `dict` |  |
| `state` | `str` | The state that the subscription is in. |
| `zone` | `dict` | A simple zone object. |

#### Example: Load

```python
bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle().load({"account_id": "account_id", "subscription_identifier": "subscription_identifier"})
```

#### Example: Create

```python
bill_subs_api_account_subscription_response_single = client.BillSubsApiAccountSubscriptionResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### BillSubsApiAddressValidationResponseSingle

Create an instance: `bill_subs_api_address_validation_response_single = client.BillSubsApiAddressValidationResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | Address line 1. |
| `address2` | `str` | Address line 2. |
| `city` | `str` | City. |
| `country` | `str` | Country code. |
| `state` | `str` | State or province. |
| `zipcode` | `str` | Postal or zip code. |

#### Example: Create

```python
bill_subs_api_address_validation_response_single = client.BillSubsApiAddressValidationResponseSingle().create({
})
```


### BillSubsApiBadDebtResponseSingle

Create an instance: `bill_subs_api_bad_debt_response_single = client.BillSubsApiBadDebtResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
bill_subs_api_bad_debt_response_single = client.BillSubsApiBadDebtResponseSingle().load({"account_id": "account_id"})
```


### BillSubsApiBillingHistoryCollection

Create an instance: `bill_subs_api_billing_history_collection = client.BillSubsApiBillingHistoryCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
bill_subs_api_billing_history_collections = client.BillSubsApiBillingHistoryCollection().list()
```


### BillSubsApiBillingResponseSingle

Create an instance: `bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | Street address line 1. |
| `address2` | `str` | Street address line 2 (apt, suite, etc.). |
| `billing_email` | `str` | Primary billing email address. |
| `buying_rate_plan` | `str` | Rate plan being purchased right after profile setup. |
| `captcha_challenge_jwt` | `str` | Captcha challenge JWT issued during onboarding. |
| `cf_turnstile_response` | `str` | Cloudflare Turnstile response. |
| `city` | `str` | City on the billing profile. |
| `company` | `str` | Company name on the billing profile. |
| `country` | `str` | ISO 3166-1 alpha-2 country code. |
| `first_name` | `str` | First name on the billing profile. |
| `h_captcha_response` | `str` | hCaptcha response. |
| `last_name` | `str` | Last name on the billing profile. |
| `preferred_locale` | `str` | Preferred locale for invoice rendering (BCP 47). |
| `result` | `dict` |  |
| `secondary_billing_email` | `str` | Secondary billing email address for CC on invoices. |
| `state` | `str` | State or region on the billing profile. |
| `tax_id_type` | `str` | Type of tax ID provided. |
| `telephone` | `str` | Contact phone number. |
| `vat` | `str` | VAT identifier. |
| `zipcode` | `str` | ZIP or postal code. |

#### Example: Load

```python
bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle().load()
```

#### Example: Create

```python
bill_subs_api_billing_response_single = client.BillSubsApiBillingResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### BillSubsApiCancelReasonResponseSingle

Create an instance: `bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `other` | `str` | Additional cancellation details. |
| `reason_code` | `list` | The cancellation reason codes. |
| `result` | `dict` |  |

#### Example: Load

```python
bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle().load({"account_id": "account_id", "subscription_identifier": "subscription_identifier"})
```

#### Example: Create

```python
bill_subs_api_cancel_reason_response_single = client.BillSubsApiCancelReasonResponseSingle().create({
    "account_id": "example_account_id",  # str
    "subscription_identifier": "example_subscription_identifier",  # str
})
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `invoice_id` | `str` | The identifier of the invoice to pay. |
| `payment_method_id` | `str` | The payment method to use. |
| `validate_payment_method` | `bool` | Whether to validate the payment method before processing. |

#### Example: Create

```python
bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### BillSubsApiPaymentIntentResponseSingle

Create an instance: `bill_subs_api_payment_intent_response_single = client.BillSubsApiPaymentIntentResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Create

```python
bill_subs_api_payment_intent_response_single = client.BillSubsApiPaymentIntentResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### BillSubsApiPaymentMethodResponseCollection

Create an instance: `bill_subs_api_payment_method_response_collection = client.BillSubsApiPaymentMethodResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
bill_subs_api_payment_method_response_collections = client.BillSubsApiPaymentMethodResponseCollection().list({"account_id": "example"})
```


### BillSubsApiPaymentMethodResponseSingle

Create an instance: `bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | Billing address line 1. |
| `address2` | `str` | Billing address line 2. |
| `bank_account_type` | `str` | Bank account type. |
| `bank_code` | `str` | Bank code. |
| `bank_country` | `str` | Bank country. |
| `bank_name` | `str` | Bank name for bank-based payment methods. |
| `bank_routing_number` | `str` | Bank routing number. |
| `cashapp_cash_tag` | `str` | Cash App cash tag. |
| `city` | `str` | Billing city. |
| `country` | `str` | Billing country. |
| `default` | `bool` | Whether this is the default payment method. |
| `device_data` | `str` | Device data for fraud prevention. |
| `expiration_date` | `str` | Card expiration date. |
| `first_name` | `str` | Billing first name. |
| `id` | `str` | Payment method identifier. |
| `last_four` | `str` | Last four digits of the card number. |
| `last_name` | `str` | Billing last name. |
| `nick_name` | `str` | A nickname for the payment method. |
| `payment_account_email` | `str` | Email associated with the payment account. |
| `payment_email` | `str` | Payment email address. |
| `payment_gateway` | `str` | The payment gateway used. |
| `payment_nonce` | `str` | Payment nonce for tokenized payments. |
| `result` | `dict` |  |
| `state` | `str` | Billing state. |
| `type` | `str` | The payment method type. |
| `zipcode` | `str` | Billing zip code. |

#### Example: Load

```python
bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle().load({"account_id": "account_id", "payment_method_id": "payment_method_id"})
```

#### Example: Create

```python
bill_subs_api_payment_method_response_single = client.BillSubsApiPaymentMethodResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### BillSubsApiPlanResponseCollection

Create an instance: `bill_subs_api_plan_response_collection = client.BillSubsApiPlanResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
bill_subs_api_plan_response_collections = client.BillSubsApiPlanResponseCollection().list({"zone_id": "example"})
```


### BillSubsApiRatePlanSimple

Create an instance: `bill_subs_api_rate_plan_simple = client.BillSubsApiRatePlanSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
bill_subs_api_rate_plan_simple = client.BillSubsApiRatePlanSimple().load({"public_key": "public_key"})
```


### BillSubsApiUnpaidInvoicesResponseSingle

Create an instance: `bill_subs_api_unpaid_invoices_response_single = client.BillSubsApiUnpaidInvoicesResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
bill_subs_api_unpaid_invoices_response_single = client.BillSubsApiUnpaidInvoicesResponseSingle().load({"account_id": "account_id"})
```


### BillSubsApiUserSubscriptionResponseCollection

Create an instance: `bill_subs_api_user_subscription_response_collection = client.BillSubsApiUserSubscriptionResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
bill_subs_api_user_subscription_response_collections = client.BillSubsApiUserSubscriptionResponseCollection().list()
```


### BillSubsApiUserSubscriptionResponseSingle

Create an instance: `bill_subs_api_user_subscription_response_single = client.BillSubsApiUserSubscriptionResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `dict` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `list` | Configurable component values for the subscription. |
| `currency` | `str` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `str` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `str` | When the current billing period started. |
| `frequency` | `str` | How often the subscription is renewed automatically. |
| `id` | `str` | Subscription identifier tag. |
| `price` | `float` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `dict` | The rate plan applied to the subscription. |
| `state` | `str` | The state that the subscription is in. |
| `zone` | `dict` | A simple zone object. |

#### Example: Create

```python
bill_subs_api_user_subscription_response_single = client.BillSubsApiUserSubscriptionResponseSingle().create({
})
```


### BillSubsApiZoneSubscriptionResponseSingle

Create an instance: `bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `dict` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `list` | Configurable component values for the subscription. |
| `currency` | `str` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `str` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `str` | When the current billing period started. |
| `frequency` | `str` | How often the subscription is renewed automatically. |
| `id` | `str` | Subscription identifier tag. |
| `price` | `float` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `dict` | The rate plan applied to the subscription. |
| `result` | `dict` |  |
| `state` | `str` | The state that the subscription is in. |
| `zone` | `dict` | A simple zone object. |

#### Example: Load

```python
bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle().load({"zone_id": "zone_id"})
```

#### Example: Create

```python
bill_subs_api_zone_subscription_response_single = client.BillSubsApiZoneSubscriptionResponseSingle().create({
    "zone_id": "example_zone_id",  # str
})
```


### BillableUsage

Create an instance: `billable_usage = client.BillableUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Contains error details if the request failed. |
| `messages` | `list` | Contains informational notices about the response. |
| `result` | `list` | Contains the array of billable usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```python
billable_usages = client.BillableUsage().list({"account_id": "example"})
```


### BillableUsageApiUsageInfo

Create an instance: `billable_usage_api_usage_info = client.BillableUsageApiUsageInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Contains error details if the request failed. |
| `messages` | `list` | Contains any informational messages from the API. |
| `result` | `dict` | Contains the usage info. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```python
billable_usage_api_usage_infos = client.BillableUsageApiUsageInfo().list({"account_id": "example"})
```


### BillableUsageApiV2AccountBillableMetric

Create an instance: `billable_usage_api_v2_account_billable_metric = client.BillableUsageApiV2AccountBillableMetric()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` |  |

#### Example: List

```python
billable_usage_api_v2_account_billable_metrics = client.BillableUsageApiV2AccountBillableMetric().list({"account_id": "example"})
```


### BillableUsageApiV2Usage

Create an instance: `billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `FilterBy` | `dict` | Usage filters. |
| `GroupBy` | `list` | Grouping definitions used to split result rows. |
| `TimePeriod` | `dict` | Charge period to query, i.e. |
| `errors` | `list` | Contains error details if the request failed. |
| `messages` | `list` | Contains informational notices about the response. |
| `result` | `list` | Contains the array of cost and usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```python
billable_usage_api_v2_usages = client.BillableUsageApiV2Usage().list({"account_id": "example"})
```

#### Example: Create

```python
billable_usage_api_v2_usage = client.BillableUsageApiV2Usage().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": [],  # list
    "success": True,  # bool
})
```


### CancelDowngrade

Create an instance: `cancel_downgrade = client.CancelDowngrade()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscription_ids` | `list` | List of subscription identifiers to cancel downgrades for. |

#### Example: Create

```python
cancel_downgrade = client.CancelDowngrade().create({
    "account_id": "example_account_id",  # str
})
```


### Entitlement

Create an instance: `entitlement = client.Entitlement()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | List of errors, empty on success. |
| `messages` | `list` | List of informational messages. |
| `result` | `list` | List of entitlements for the requested object. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
entitlements = client.Entitlement().list({"account_id": "example"})
```


### Invoice

Create an instance: `invoice = client.Invoice()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `toggle` | `bool` | Whether to enable or disable PDF invoice generation. |


### PaymentMethod

Create an instance: `payment_method = client.PaymentMethod()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### SetAsDefault

Create an instance: `set_as_default = client.SetAsDefault()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Create

```python
set_as_default = client.SetAsDefault().create({
    "account_id": "example_account_id",  # str
    "payment_method_id": "example_payment_method_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # Any
    "success": True,  # bool
})
```


### Usage

Create an instance: `usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | List of errors, empty on success. |
| `messages` | `list` | List of informational messages. |
| `result` | `list` | Array of billing usage data points for the requested time range. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
usages = client.Usage().list({"account_id": "example"})
```


### UserSubscription

Create an instance: `user_subscription = client.UserSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ZoneRatePlan

Create an instance: `zone_rate_plan = client.ZoneRatePlan()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
zone_rate_plan = client.ZoneRatePlan().load({"plan_identifier": "plan_identifier", "zone_id": "zone_id"})
```

#### Example: List

```python
zone_rate_plans = client.ZoneRatePlan().list({"id": "example"})
```


### ZoneSubscription

Create an instance: `zone_subscription = client.ZoneSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflarebilling_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflarebilling_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
billsubsapibaddebtresponsesingle = client.BillSubsApiBadDebtResponseSingle()
billsubsapibaddebtresponsesingle.load({"account_id": "example"})

# billsubsapibaddebtresponsesingle.data_get() now returns the billsubsapibaddebtresponsesingle data from the last load
# billsubsapibaddebtresponsesingle.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
