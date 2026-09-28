# CloudflareBilling Lua SDK



The Lua SDK for the CloudflareBilling API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AccountBilling()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-billing-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-billing_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_BILLING_APIKEY"),
})
```

### 3. Load a billsubsapipaymentmethodresponsesingle

BillSubsApiPaymentMethodResponseSingle is nested under account, so provide the `account_id`.

```lua
local billsubsapipaymentmethodresponsesingle, err = client:BillSubsApiPaymentMethodResponseSingle():load({ account_id = "example_account_id", payment_method_id = "example_payment_method_id" })
if err then error(err) end
print(billsubsapipaymentmethodresponsesingle)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local billsubsapibaddebtresponsesingle, err = client:BillSubsApiBadDebtResponseSingle():load({ account_id = "example" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:BillSubsApiBadDebtResponseSingle():load({ account_id = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareBillingSDK

```lua
local sdk = require("cloudflare-billing_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareBillingSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local account_billing, err = client:AccountBilling():load()
    if err then error(err) end
    -- account_billing is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local account_billing = client:AccountBilling(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local account_billing, err = client:AccountBilling():load({ account_id = "account_id", receipt_id = "receipt_id" })
```


### AccountBillingProfile

Create an instance: `local account_billing_profile = client:AccountBillingProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AccountSubscription

Create an instance: `local account_subscription = client:AccountSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BillSubsApiAccountBillingHistoryCollection

Create an instance: `local bill_subs_api_account_billing_history_collection = client:BillSubsApiAccountBillingHistoryCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local bill_subs_api_account_billing_history_collections, err = client:BillSubsApiAccountBillingHistoryCollection():list()
```


### BillSubsApiAccountCredit

Create an instance: `local bill_subs_api_account_credit = client:BillSubsApiAccountCredit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local bill_subs_api_account_credit, err = client:BillSubsApiAccountCredit():load({ account_id = "account_id" })
```


### BillSubsApiAccountSubscriptionResponseCollection

Create an instance: `local bill_subs_api_account_subscription_response_collection = client:BillSubsApiAccountSubscriptionResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local bill_subs_api_account_subscription_response_collections, err = client:BillSubsApiAccountSubscriptionResponseCollection():list()
```


### BillSubsApiAccountSubscriptionResponseSingle

Create an instance: `local bill_subs_api_account_subscription_response_single = client:BillSubsApiAccountSubscriptionResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `table` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `table` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `number` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `table` | The rate plan applied to the subscription. |
| `result` | `table` |  |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `table` | A simple zone object. |

#### Example: Load

```lua
local bill_subs_api_account_subscription_response_single, err = client:BillSubsApiAccountSubscriptionResponseSingle():load({ account_id = "account_id", subscription_identifier = "subscription_identifier" })
```

#### Example: Create

```lua
local bill_subs_api_account_subscription_response_single, err = client:BillSubsApiAccountSubscriptionResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### BillSubsApiAddressValidationResponseSingle

Create an instance: `local bill_subs_api_address_validation_response_single = client:BillSubsApiAddressValidationResponseSingle(nil)`

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

```lua
local bill_subs_api_address_validation_response_single, err = client:BillSubsApiAddressValidationResponseSingle():create({
})
```


### BillSubsApiBadDebtResponseSingle

Create an instance: `local bill_subs_api_bad_debt_response_single = client:BillSubsApiBadDebtResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local bill_subs_api_bad_debt_response_single, err = client:BillSubsApiBadDebtResponseSingle():load({ account_id = "account_id" })
```


### BillSubsApiBillingHistoryCollection

Create an instance: `local bill_subs_api_billing_history_collection = client:BillSubsApiBillingHistoryCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local bill_subs_api_billing_history_collections, err = client:BillSubsApiBillingHistoryCollection():list()
```


### BillSubsApiBillingResponseSingle

Create an instance: `local bill_subs_api_billing_response_single = client:BillSubsApiBillingResponseSingle(nil)`

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
| `result` | `table` |  |
| `secondary_billing_email` | `string` | Secondary billing email address for CC on invoices. |
| `state` | `string` | State or region on the billing profile. |
| `tax_id_type` | `string` | Type of tax ID provided. |
| `telephone` | `string` | Contact phone number. |
| `vat` | `string` | VAT identifier. |
| `zipcode` | `string` | ZIP or postal code. |

#### Example: Load

```lua
local bill_subs_api_billing_response_single, err = client:BillSubsApiBillingResponseSingle():load()
```

#### Example: Create

```lua
local bill_subs_api_billing_response_single, err = client:BillSubsApiBillingResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### BillSubsApiCancelReasonResponseSingle

Create an instance: `local bill_subs_api_cancel_reason_response_single = client:BillSubsApiCancelReasonResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `other` | `string` | Additional cancellation details. |
| `reason_code` | `table` | The cancellation reason codes. |
| `result` | `table` |  |

#### Example: Load

```lua
local bill_subs_api_cancel_reason_response_single, err = client:BillSubsApiCancelReasonResponseSingle():load({ account_id = "account_id", subscription_identifier = "subscription_identifier" })
```

#### Example: Create

```lua
local bill_subs_api_cancel_reason_response_single, err = client:BillSubsApiCancelReasonResponseSingle():create({
  account_id = "example_account_id", -- string
  subscription_identifier = "example_subscription_identifier", -- string
})
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `local bill_subs_api_client_secret_response_single = client:BillSubsApiClientSecretResponseSingle(nil)`

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

```lua
local bill_subs_api_client_secret_response_single, err = client:BillSubsApiClientSecretResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### BillSubsApiPaymentIntentResponseSingle

Create an instance: `local bill_subs_api_payment_intent_response_single = client:BillSubsApiPaymentIntentResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Create

```lua
local bill_subs_api_payment_intent_response_single, err = client:BillSubsApiPaymentIntentResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### BillSubsApiPaymentMethodResponseCollection

Create an instance: `local bill_subs_api_payment_method_response_collection = client:BillSubsApiPaymentMethodResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local bill_subs_api_payment_method_response_collections, err = client:BillSubsApiPaymentMethodResponseCollection():list()
```


### BillSubsApiPaymentMethodResponseSingle

Create an instance: `local bill_subs_api_payment_method_response_single = client:BillSubsApiPaymentMethodResponseSingle(nil)`

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
| `result` | `table` |  |
| `state` | `string` | Billing state. |
| `type` | `string` | The payment method type. |
| `zipcode` | `string` | Billing zip code. |

#### Example: Load

```lua
local bill_subs_api_payment_method_response_single, err = client:BillSubsApiPaymentMethodResponseSingle():load({ account_id = "account_id", payment_method_id = "payment_method_id" })
```

#### Example: Create

```lua
local bill_subs_api_payment_method_response_single, err = client:BillSubsApiPaymentMethodResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### BillSubsApiPlanResponseCollection

Create an instance: `local bill_subs_api_plan_response_collection = client:BillSubsApiPlanResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local bill_subs_api_plan_response_collections, err = client:BillSubsApiPlanResponseCollection():list()
```


### BillSubsApiRatePlanSimple

Create an instance: `local bill_subs_api_rate_plan_simple = client:BillSubsApiRatePlanSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local bill_subs_api_rate_plan_simple, err = client:BillSubsApiRatePlanSimple():load({ public_key = "public_key" })
```


### BillSubsApiUnpaidInvoicesResponseSingle

Create an instance: `local bill_subs_api_unpaid_invoices_response_single = client:BillSubsApiUnpaidInvoicesResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local bill_subs_api_unpaid_invoices_response_single, err = client:BillSubsApiUnpaidInvoicesResponseSingle():load({ account_id = "account_id" })
```


### BillSubsApiUserSubscriptionResponseCollection

Create an instance: `local bill_subs_api_user_subscription_response_collection = client:BillSubsApiUserSubscriptionResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local bill_subs_api_user_subscription_response_collections, err = client:BillSubsApiUserSubscriptionResponseCollection():list()
```


### BillSubsApiUserSubscriptionResponseSingle

Create an instance: `local bill_subs_api_user_subscription_response_single = client:BillSubsApiUserSubscriptionResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `table` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `table` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `number` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `table` | The rate plan applied to the subscription. |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `table` | A simple zone object. |

#### Example: Create

```lua
local bill_subs_api_user_subscription_response_single, err = client:BillSubsApiUserSubscriptionResponseSingle():create({
})
```


### BillSubsApiZoneSubscriptionResponseSingle

Create an instance: `local bill_subs_api_zone_subscription_response_single = client:BillSubsApiZoneSubscriptionResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `table` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `table` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `number` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `table` | The rate plan applied to the subscription. |
| `result` | `table` |  |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `table` | A simple zone object. |

#### Example: Load

```lua
local bill_subs_api_zone_subscription_response_single, err = client:BillSubsApiZoneSubscriptionResponseSingle():load({ zone_id = "zone_id" })
```

#### Example: Create

```lua
local bill_subs_api_zone_subscription_response_single, err = client:BillSubsApiZoneSubscriptionResponseSingle():create({
  zone_id = "example_zone_id", -- string
})
```


### BillableUsage

Create an instance: `local billable_usage = client:BillableUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | Contains error details if the request failed. |
| `messages` | `table` | Contains informational notices about the response. |
| `result` | `table` | Contains the array of billable usage records. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```lua
local billable_usages, err = client:BillableUsage():list()
```


### BillableUsageApiUsageInfo

Create an instance: `local billable_usage_api_usage_info = client:BillableUsageApiUsageInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | Contains error details if the request failed. |
| `messages` | `table` | Contains any informational messages from the API. |
| `result` | `table` | Contains the usage info. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```lua
local billable_usage_api_usage_infos, err = client:BillableUsageApiUsageInfo():list()
```


### BillableUsageApiV2AccountBillableMetric

Create an instance: `local billable_usage_api_v2_account_billable_metric = client:BillableUsageApiV2AccountBillableMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local billable_usage_api_v2_account_billable_metrics, err = client:BillableUsageApiV2AccountBillableMetric():list()
```


### BillableUsageApiV2Usage

Create an instance: `local billable_usage_api_v2_usage = client:BillableUsageApiV2Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `FilterBy` | `table` | Usage filters. |
| `GroupBy` | `table` | Grouping definitions used to split result rows. |
| `TimePeriod` | `table` | Charge period to query, i.e. |
| `errors` | `table` | Contains error details if the request failed. |
| `messages` | `table` | Contains informational notices about the response. |
| `result` | `table` | Contains the array of cost and usage records. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```lua
local billable_usage_api_v2_usages, err = client:BillableUsageApiV2Usage():list()
```

#### Example: Create

```lua
local billable_usage_api_v2_usage, err = client:BillableUsageApiV2Usage():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### CancelDowngrade

Create an instance: `local cancel_downgrade = client:CancelDowngrade(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscription_ids` | `table` | List of subscription identifiers to cancel downgrades for. |

#### Example: Create

```lua
local cancel_downgrade, err = client:CancelDowngrade():create({
  account_id = "example_account_id", -- string
})
```


### Entitlement

Create an instance: `local entitlement = client:Entitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | List of errors, empty on success. |
| `messages` | `table` | List of informational messages. |
| `result` | `table` | List of entitlements for the requested object. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local entitlements, err = client:Entitlement():list()
```


### Invoice

Create an instance: `local invoice = client:Invoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `toggle` | `boolean` | Whether to enable or disable PDF invoice generation. |


### PaymentMethod

Create an instance: `local payment_method = client:PaymentMethod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SetAsDefault

Create an instance: `local set_as_default = client:SetAsDefault(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Create

```lua
local set_as_default, err = client:SetAsDefault():create({
  account_id = "example_account_id", -- string
  payment_method_id = "example_payment_method_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = "example_result", -- any
  success = true, -- boolean
})
```


### Usage

Create an instance: `local usage = client:Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | List of errors, empty on success. |
| `messages` | `table` | List of informational messages. |
| `result` | `table` | Array of billing usage data points for the requested time range. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local usages, err = client:Usage():list()
```


### UserSubscription

Create an instance: `local user_subscription = client:UserSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ZoneRatePlan

Create an instance: `local zone_rate_plan = client:ZoneRatePlan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local zone_rate_plan, err = client:ZoneRatePlan():load({ plan_identifier = "plan_identifier", zone_id = "zone_id" })
```

#### Example: List

```lua
local zone_rate_plans, err = client:ZoneRatePlan():list()
```


### ZoneSubscription

Create an instance: `local zone_subscription = client:ZoneSubscription(nil)`

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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-billing_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-billing_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local billsubsapibaddebtresponsesingle = client:BillSubsApiBadDebtResponseSingle()
billsubsapibaddebtresponsesingle:load({ account_id = "example" })

-- billsubsapibaddebtresponsesingle:data_get() now returns the billsubsapibaddebtresponsesingle data from the last load
-- billsubsapibaddebtresponsesingle:match_get() returns the last match criteria
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
