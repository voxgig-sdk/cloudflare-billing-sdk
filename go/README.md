# CloudflareBilling Golang SDK



The Golang SDK for the CloudflareBilling API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccountBilling(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-billing-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-billing-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-billing-sdk/go=../cloudflare-billing-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-billing-sdk/go"
)

func main() {
    client := sdk.NewCloudflareBillingSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_BILLING_APIKEY"),
    })

    // Load a single accountBilling — the value is the loaded record.
    accountBilling, err := client.AccountBilling(nil).Load(map[string]any{"account_id": "example_account_id", "receipt_id": "example_receipt_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(accountBilling)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
billsubsapibaddebtresponsesingle, err := client.BillSubsApiBadDebtResponseSingle(nil).Load(map[string]any{"account_id": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = billsubsapibaddebtresponsesingle
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

billSubsApiBadDebtResponseSingle, err := client.BillSubsApiBadDebtResponseSingle(nil).Load(
    map[string]any{"account_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiBadDebtResponseSingle) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareBillingSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareBillingSDK

```go
func NewCloudflareBillingSDK(options map[string]any) *CloudflareBillingSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareBillingSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareBillingSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AccountBilling` | `(data map[string]any) CloudflareBillingEntity` | Create an AccountBilling entity instance. |
| `AccountBillingProfile` | `(data map[string]any) CloudflareBillingEntity` | Create an AccountBillingProfile entity instance. |
| `AccountSubscription` | `(data map[string]any) CloudflareBillingEntity` | Create an AccountSubscription entity instance. |
| `BillSubsApiAccountBillingHistoryCollection` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiAccountBillingHistoryCollection entity instance. |
| `BillSubsApiAccountCredit` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiAccountCredit entity instance. |
| `BillSubsApiAccountSubscriptionResponseCollection` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiAccountSubscriptionResponseCollection entity instance. |
| `BillSubsApiAccountSubscriptionResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiAccountSubscriptionResponseSingle entity instance. |
| `BillSubsApiAddressValidationResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiAddressValidationResponseSingle entity instance. |
| `BillSubsApiBadDebtResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiBadDebtResponseSingle entity instance. |
| `BillSubsApiBillingHistoryCollection` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiBillingHistoryCollection entity instance. |
| `BillSubsApiBillingResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiBillingResponseSingle entity instance. |
| `BillSubsApiCancelReasonResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiCancelReasonResponseSingle entity instance. |
| `BillSubsApiClientSecretResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillSubsApiPaymentIntentResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiPaymentIntentResponseSingle entity instance. |
| `BillSubsApiPaymentMethodResponseCollection` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiPaymentMethodResponseCollection entity instance. |
| `BillSubsApiPaymentMethodResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiPaymentMethodResponseSingle entity instance. |
| `BillSubsApiPlanResponseCollection` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiPlanResponseCollection entity instance. |
| `BillSubsApiRatePlanSimple` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiRatePlanSimple entity instance. |
| `BillSubsApiUnpaidInvoicesResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiUnpaidInvoicesResponseSingle entity instance. |
| `BillSubsApiUserSubscriptionResponseCollection` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiUserSubscriptionResponseCollection entity instance. |
| `BillSubsApiUserSubscriptionResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiUserSubscriptionResponseSingle entity instance. |
| `BillSubsApiZoneSubscriptionResponseSingle` | `(data map[string]any) CloudflareBillingEntity` | Create a BillSubsApiZoneSubscriptionResponseSingle entity instance. |
| `BillableUsage` | `(data map[string]any) CloudflareBillingEntity` | Create a BillableUsage entity instance. |
| `BillableUsageApiUsageInfo` | `(data map[string]any) CloudflareBillingEntity` | Create a BillableUsageApiUsageInfo entity instance. |
| `BillableUsageApiV2AccountBillableMetric` | `(data map[string]any) CloudflareBillingEntity` | Create a BillableUsageApiV2AccountBillableMetric entity instance. |
| `BillableUsageApiV2Usage` | `(data map[string]any) CloudflareBillingEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `CancelDowngrade` | `(data map[string]any) CloudflareBillingEntity` | Create a CancelDowngrade entity instance. |
| `Entitlement` | `(data map[string]any) CloudflareBillingEntity` | Create an Entitlement entity instance. |
| `Invoice` | `(data map[string]any) CloudflareBillingEntity` | Create an Invoice entity instance. |
| `PaymentMethod` | `(data map[string]any) CloudflareBillingEntity` | Create a PaymentMethod entity instance. |
| `SetAsDefault` | `(data map[string]any) CloudflareBillingEntity` | Create a SetAsDefault entity instance. |
| `Usage` | `(data map[string]any) CloudflareBillingEntity` | Create an Usage entity instance. |
| `UserSubscription` | `(data map[string]any) CloudflareBillingEntity` | Create an UserSubscription entity instance. |
| `ZoneRatePlan` | `(data map[string]any) CloudflareBillingEntity` | Create a ZoneRatePlan entity instance. |
| `ZoneSubscription` | `(data map[string]any) CloudflareBillingEntity` | Create a ZoneSubscription entity instance. |

### Entity interface (CloudflareBillingEntity)

All entities implement the `CloudflareBillingEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    accountBilling, err := client.AccountBilling(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // accountBilling is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}`

#### BillSubsApiAccountBillingHistoryCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/billing/history`

#### BillSubsApiAccountCredit

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/billing/credits`

#### BillSubsApiAccountSubscriptionResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/subscriptions`

#### BillSubsApiAccountSubscriptionResponseSingle

| Field | Description |
| --- | --- |
| `"app"` | Cloudflare Apps Marketplace is sunset. |
| `"component_values"` | Configurable component values for the subscription. |
| `"currency"` | The monetary unit in which pricing information is displayed. |
| `"current_period_end"` | The end of the current period and also when the next billing is due. |
| `"current_period_start"` | When the current billing period started. |
| `"frequency"` | How often the subscription is renewed automatically. |
| `"id"` | Subscription identifier tag. |
| `"price"` | The price of the subscription that will be billed, in US dollars. |
| `"rate_plan"` | The rate plan applied to the subscription. |
| `"result"` |  |
| `"state"` | The state that the subscription is in. |
| `"zone"` | A simple zone object. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}/action/append`

#### BillSubsApiAddressValidationResponseSingle

| Field | Description |
| --- | --- |
| `"address"` | Address line 1. |
| `"address2"` | Address line 2. |
| `"city"` | City. |
| `"country"` | Country code. |
| `"state"` | State or province. |
| `"zipcode"` | Postal or zip code. |

Operations: Create.

API path: `/billing/address-validation`

#### BillSubsApiBadDebtResponseSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/billing/bad-debt`

#### BillSubsApiBillingHistoryCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/user/billing/history`

#### BillSubsApiBillingResponseSingle

| Field | Description |
| --- | --- |
| `"address"` | Street address line 1. |
| `"address2"` | Street address line 2 (apt, suite, etc.). |
| `"billing_email"` | Primary billing email address. |
| `"buying_rate_plan"` | Rate plan being purchased right after profile setup. |
| `"captcha_challenge_jwt"` | Captcha challenge JWT issued during onboarding. |
| `"cf_turnstile_response"` | Cloudflare Turnstile response. |
| `"city"` | City on the billing profile. |
| `"company"` | Company name on the billing profile. |
| `"country"` | ISO 3166-1 alpha-2 country code. |
| `"first_name"` | First name on the billing profile. |
| `"h_captcha_response"` | hCaptcha response. |
| `"last_name"` | Last name on the billing profile. |
| `"preferred_locale"` | Preferred locale for invoice rendering (BCP 47). |
| `"result"` |  |
| `"secondary_billing_email"` | Secondary billing email address for CC on invoices. |
| `"state"` | State or region on the billing profile. |
| `"tax_id_type"` | Type of tax ID provided. |
| `"telephone"` | Contact phone number. |
| `"vat"` | VAT identifier. |
| `"zipcode"` | ZIP or postal code. |

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/billing/profile`

#### BillSubsApiCancelReasonResponseSingle

| Field | Description |
| --- | --- |
| `"other"` | Additional cancellation details. |
| `"reason_code"` | The cancellation reason codes. |
| `"result"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason`

#### BillSubsApiClientSecretResponseSingle

| Field | Description |
| --- | --- |
| `"invoice_id"` | The identifier of the invoice to pay. |
| `"payment_method_id"` | The payment method to use. |
| `"validate_payment_method"` | Whether to validate the payment method before processing. |

Operations: Create.

API path: `/accounts/{account_id}/pay-bad-debt`

#### BillSubsApiPaymentIntentResponseSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Create.

API path: `/accounts/{account_id}/billing/profile/payment-method`

#### BillSubsApiPaymentMethodResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/payment-methods`

#### BillSubsApiPaymentMethodResponseSingle

| Field | Description |
| --- | --- |
| `"address"` | Billing address line 1. |
| `"address2"` | Billing address line 2. |
| `"bank_account_type"` | Bank account type. |
| `"bank_code"` | Bank code. |
| `"bank_country"` | Bank country. |
| `"bank_name"` | Bank name for bank-based payment methods. |
| `"bank_routing_number"` | Bank routing number. |
| `"cashapp_cash_tag"` | Cash App cash tag. |
| `"city"` | Billing city. |
| `"country"` | Billing country. |
| `"default"` | Whether this is the default payment method. |
| `"device_data"` | Device data for fraud prevention. |
| `"expiration_date"` | Card expiration date. |
| `"first_name"` | Billing first name. |
| `"id"` | Payment method identifier. |
| `"last_four"` | Last four digits of the card number. |
| `"last_name"` | Billing last name. |
| `"nick_name"` | A nickname for the payment method. |
| `"payment_account_email"` | Email associated with the payment account. |
| `"payment_email"` | Payment email address. |
| `"payment_gateway"` | The payment gateway used. |
| `"payment_nonce"` | Payment nonce for tokenized payments. |
| `"result"` |  |
| `"state"` | Billing state. |
| `"type"` | The payment method type. |
| `"zipcode"` | Billing zip code. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/payment-methods`

#### BillSubsApiPlanResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/available_rate_plans`

#### BillSubsApiRatePlanSimple

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/billing/rate_plans/{public_key}`

#### BillSubsApiUnpaidInvoicesResponseSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/billing/unpaid-invoice`

#### BillSubsApiUserSubscriptionResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/user/subscriptions`

#### BillSubsApiUserSubscriptionResponseSingle

| Field | Description |
| --- | --- |
| `"app"` | Cloudflare Apps Marketplace is sunset. |
| `"component_values"` | Configurable component values for the subscription. |
| `"currency"` | The monetary unit in which pricing information is displayed. |
| `"current_period_end"` | The end of the current period and also when the next billing is due. |
| `"current_period_start"` | When the current billing period started. |
| `"frequency"` | How often the subscription is renewed automatically. |
| `"id"` | Subscription identifier tag. |
| `"price"` | The price of the subscription that will be billed, in US dollars. |
| `"rate_plan"` | The rate plan applied to the subscription. |
| `"state"` | The state that the subscription is in. |
| `"zone"` | A simple zone object. |

Operations: Create, Update.

API path: `/user/subscriptions`

#### BillSubsApiZoneSubscriptionResponseSingle

| Field | Description |
| --- | --- |
| `"app"` | Cloudflare Apps Marketplace is sunset. |
| `"component_values"` | Configurable component values for the subscription. |
| `"currency"` | The monetary unit in which pricing information is displayed. |
| `"current_period_end"` | The end of the current period and also when the next billing is due. |
| `"current_period_start"` | When the current billing period started. |
| `"frequency"` | How often the subscription is renewed automatically. |
| `"id"` | Subscription identifier tag. |
| `"price"` | The price of the subscription that will be billed, in US dollars. |
| `"rate_plan"` | The rate plan applied to the subscription. |
| `"result"` |  |
| `"state"` | The state that the subscription is in. |
| `"zone"` | A simple zone object. |

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/subscription`

#### BillableUsage

| Field | Description |
| --- | --- |
| `"errors"` | Contains error details if the request failed. |
| `"messages"` | Contains informational notices about the response. |
| `"result"` | Contains the array of billable usage records. |
| `"success"` | Indicates whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/billable-usage`

#### BillableUsageApiUsageInfo

| Field | Description |
| --- | --- |
| `"errors"` | Contains error details if the request failed. |
| `"messages"` | Contains any informational messages from the API. |
| `"result"` | Contains the usage info. |
| `"success"` | Indicates whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/billable-usage/info`

#### BillableUsageApiV2AccountBillableMetric

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/billable/usage/billable-metrics`

#### BillableUsageApiV2Usage

| Field | Description |
| --- | --- |
| `"FilterBy"` | Usage filters. |
| `"GroupBy"` | Grouping definitions used to split result rows. |
| `"TimePeriod"` | Charge period to query, i.e. |
| `"errors"` | Contains error details if the request failed. |
| `"messages"` | Contains informational notices about the response. |
| `"result"` | Contains the array of cost and usage records. |
| `"success"` | Indicates whether the API call was successful. |

Operations: Create, List.

API path: `/accounts/{account_id}/billable/usage`

#### CancelDowngrade

| Field | Description |
| --- | --- |
| `"subscription_ids"` | List of subscription identifiers to cancel downgrades for. |

Operations: Create.

API path: `/accounts/{account_id}/subscriptions/cancel-downgrade`

#### Entitlement

| Field | Description |
| --- | --- |
| `"errors"` | List of errors, empty on success. |
| `"messages"` | List of informational messages. |
| `"result"` | List of entitlements for the requested object. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/entitlements`

#### Invoice

| Field | Description |
| --- | --- |
| `"toggle"` | Whether to enable or disable PDF invoice generation. |

Operations: Update.

API path: `/accounts/{account_id}/invoices`

#### PaymentMethod

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/payment-methods/{payment_method_id}`

#### SetAsDefault

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: Create.

API path: `/accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default`

#### Usage

| Field | Description |
| --- | --- |
| `"errors"` | List of errors, empty on success. |
| `"messages"` | List of informational messages. |
| `"result"` | Array of billing usage data points for the requested time range. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/billing/usage`

#### UserSubscription

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/user/subscriptions/{identifier}`

#### ZoneRatePlan

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: List, Load.

API path: `/zones/{zone_id}/available_plans`

#### ZoneSubscription

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/zones/{zone_id}/subscription`



## Entities


### AccountBilling

Create an instance: `accountBilling := client.AccountBilling(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
accountBilling, err := client.AccountBilling(nil).Load(map[string]any{"account_id": "account_id", "receipt_id": "receipt_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountBilling) // the loaded record
```


### AccountBillingProfile

Create an instance: `accountBillingProfile := client.AccountBillingProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### AccountSubscription

Create an instance: `accountSubscription := client.AccountSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BillSubsApiAccountBillingHistoryCollection

Create an instance: `billSubsApiAccountBillingHistoryCollection := client.BillSubsApiAccountBillingHistoryCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
billSubsApiAccountBillingHistoryCollections, err := client.BillSubsApiAccountBillingHistoryCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiAccountBillingHistoryCollections) // the array of records
```


### BillSubsApiAccountCredit

Create an instance: `billSubsApiAccountCredit := client.BillSubsApiAccountCredit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
billSubsApiAccountCredit, err := client.BillSubsApiAccountCredit(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiAccountCredit) // the loaded record
```


### BillSubsApiAccountSubscriptionResponseCollection

Create an instance: `billSubsApiAccountSubscriptionResponseCollection := client.BillSubsApiAccountSubscriptionResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
billSubsApiAccountSubscriptionResponseCollections, err := client.BillSubsApiAccountSubscriptionResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiAccountSubscriptionResponseCollections) // the array of records
```


### BillSubsApiAccountSubscriptionResponseSingle

Create an instance: `billSubsApiAccountSubscriptionResponseSingle := client.BillSubsApiAccountSubscriptionResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `map[string]any` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `[]any` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `float64` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `map[string]any` | The rate plan applied to the subscription. |
| `result` | `map[string]any` |  |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `map[string]any` | A simple zone object. |

#### Example: Load

```go
billSubsApiAccountSubscriptionResponseSingle, err := client.BillSubsApiAccountSubscriptionResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "subscription_identifier": "subscription_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiAccountSubscriptionResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.BillSubsApiAccountSubscriptionResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiAddressValidationResponseSingle

Create an instance: `billSubsApiAddressValidationResponseSingle := client.BillSubsApiAddressValidationResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.BillSubsApiAddressValidationResponseSingle(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiBadDebtResponseSingle

Create an instance: `billSubsApiBadDebtResponseSingle := client.BillSubsApiBadDebtResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
billSubsApiBadDebtResponseSingle, err := client.BillSubsApiBadDebtResponseSingle(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiBadDebtResponseSingle) // the loaded record
```


### BillSubsApiBillingHistoryCollection

Create an instance: `billSubsApiBillingHistoryCollection := client.BillSubsApiBillingHistoryCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
billSubsApiBillingHistoryCollections, err := client.BillSubsApiBillingHistoryCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiBillingHistoryCollections) // the array of records
```


### BillSubsApiBillingResponseSingle

Create an instance: `billSubsApiBillingResponseSingle := client.BillSubsApiBillingResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `result` | `map[string]any` |  |
| `secondary_billing_email` | `string` | Secondary billing email address for CC on invoices. |
| `state` | `string` | State or region on the billing profile. |
| `tax_id_type` | `string` | Type of tax ID provided. |
| `telephone` | `string` | Contact phone number. |
| `vat` | `string` | VAT identifier. |
| `zipcode` | `string` | ZIP or postal code. |

#### Example: Load

```go
billSubsApiBillingResponseSingle, err := client.BillSubsApiBillingResponseSingle(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiBillingResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.BillSubsApiBillingResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiCancelReasonResponseSingle

Create an instance: `billSubsApiCancelReasonResponseSingle := client.BillSubsApiCancelReasonResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `other` | `string` | Additional cancellation details. |
| `reason_code` | `[]any` | The cancellation reason codes. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
billSubsApiCancelReasonResponseSingle, err := client.BillSubsApiCancelReasonResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "subscription_identifier": "subscription_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiCancelReasonResponseSingle) // the loaded record
```

#### Example: Create

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


### BillSubsApiClientSecretResponseSingle

Create an instance: `billSubsApiClientSecretResponseSingle := client.BillSubsApiClientSecretResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `invoice_id` | `string` | The identifier of the invoice to pay. |
| `payment_method_id` | `string` | The payment method to use. |
| `validate_payment_method` | `bool` | Whether to validate the payment method before processing. |

#### Example: Create

```go
result, err := client.BillSubsApiClientSecretResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiPaymentIntentResponseSingle

Create an instance: `billSubsApiPaymentIntentResponseSingle := client.BillSubsApiPaymentIntentResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.BillSubsApiPaymentIntentResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiPaymentMethodResponseCollection

Create an instance: `billSubsApiPaymentMethodResponseCollection := client.BillSubsApiPaymentMethodResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
billSubsApiPaymentMethodResponseCollections, err := client.BillSubsApiPaymentMethodResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiPaymentMethodResponseCollections) // the array of records
```


### BillSubsApiPaymentMethodResponseSingle

Create an instance: `billSubsApiPaymentMethodResponseSingle := client.BillSubsApiPaymentMethodResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `default` | `bool` | Whether this is the default payment method. |
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
| `result` | `map[string]any` |  |
| `state` | `string` | Billing state. |
| `type` | `string` | The payment method type. |
| `zipcode` | `string` | Billing zip code. |

#### Example: Load

```go
billSubsApiPaymentMethodResponseSingle, err := client.BillSubsApiPaymentMethodResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "payment_method_id": "payment_method_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiPaymentMethodResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.BillSubsApiPaymentMethodResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiPlanResponseCollection

Create an instance: `billSubsApiPlanResponseCollection := client.BillSubsApiPlanResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
billSubsApiPlanResponseCollections, err := client.BillSubsApiPlanResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiPlanResponseCollections) // the array of records
```


### BillSubsApiRatePlanSimple

Create an instance: `billSubsApiRatePlanSimple := client.BillSubsApiRatePlanSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
billSubsApiRatePlanSimple, err := client.BillSubsApiRatePlanSimple(nil).Load(map[string]any{"public_key": "public_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiRatePlanSimple) // the loaded record
```


### BillSubsApiUnpaidInvoicesResponseSingle

Create an instance: `billSubsApiUnpaidInvoicesResponseSingle := client.BillSubsApiUnpaidInvoicesResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
billSubsApiUnpaidInvoicesResponseSingle, err := client.BillSubsApiUnpaidInvoicesResponseSingle(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiUnpaidInvoicesResponseSingle) // the loaded record
```


### BillSubsApiUserSubscriptionResponseCollection

Create an instance: `billSubsApiUserSubscriptionResponseCollection := client.BillSubsApiUserSubscriptionResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
billSubsApiUserSubscriptionResponseCollections, err := client.BillSubsApiUserSubscriptionResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiUserSubscriptionResponseCollections) // the array of records
```


### BillSubsApiUserSubscriptionResponseSingle

Create an instance: `billSubsApiUserSubscriptionResponseSingle := client.BillSubsApiUserSubscriptionResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `map[string]any` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `[]any` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `float64` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `map[string]any` | The rate plan applied to the subscription. |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `map[string]any` | A simple zone object. |

#### Example: Create

```go
result, err := client.BillSubsApiUserSubscriptionResponseSingle(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillSubsApiZoneSubscriptionResponseSingle

Create an instance: `billSubsApiZoneSubscriptionResponseSingle := client.BillSubsApiZoneSubscriptionResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `map[string]any` | Cloudflare Apps Marketplace is sunset. |
| `component_values` | `[]any` | Configurable component values for the subscription. |
| `currency` | `string` | The monetary unit in which pricing information is displayed. |
| `current_period_end` | `string` | The end of the current period and also when the next billing is due. |
| `current_period_start` | `string` | When the current billing period started. |
| `frequency` | `string` | How often the subscription is renewed automatically. |
| `id` | `string` | Subscription identifier tag. |
| `price` | `float64` | The price of the subscription that will be billed, in US dollars. |
| `rate_plan` | `map[string]any` | The rate plan applied to the subscription. |
| `result` | `map[string]any` |  |
| `state` | `string` | The state that the subscription is in. |
| `zone` | `map[string]any` | A simple zone object. |

#### Example: Load

```go
billSubsApiZoneSubscriptionResponseSingle, err := client.BillSubsApiZoneSubscriptionResponseSingle(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billSubsApiZoneSubscriptionResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.BillSubsApiZoneSubscriptionResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillableUsage

Create an instance: `billableUsage := client.BillableUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | Contains error details if the request failed. |
| `messages` | `[]any` | Contains informational notices about the response. |
| `result` | `[]any` | Contains the array of billable usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```go
billableUsages, err := client.BillableUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billableUsages) // the array of records
```


### BillableUsageApiUsageInfo

Create an instance: `billableUsageApiUsageInfo := client.BillableUsageApiUsageInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | Contains error details if the request failed. |
| `messages` | `[]any` | Contains any informational messages from the API. |
| `result` | `map[string]any` | Contains the usage info. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```go
billableUsageApiUsageInfos, err := client.BillableUsageApiUsageInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billableUsageApiUsageInfos) // the array of records
```


### BillableUsageApiV2AccountBillableMetric

Create an instance: `billableUsageApiV2AccountBillableMetric := client.BillableUsageApiV2AccountBillableMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
billableUsageApiV2AccountBillableMetrics, err := client.BillableUsageApiV2AccountBillableMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billableUsageApiV2AccountBillableMetrics) // the array of records
```


### BillableUsageApiV2Usage

Create an instance: `billableUsageApiV2Usage := client.BillableUsageApiV2Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `FilterBy` | `map[string]any` | Usage filters. |
| `GroupBy` | `[]any` | Grouping definitions used to split result rows. |
| `TimePeriod` | `map[string]any` | Charge period to query, i.e. |
| `errors` | `[]any` | Contains error details if the request failed. |
| `messages` | `[]any` | Contains informational notices about the response. |
| `result` | `[]any` | Contains the array of cost and usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```go
billableUsageApiV2Usages, err := client.BillableUsageApiV2Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billableUsageApiV2Usages) // the array of records
```

#### Example: Create

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


### CancelDowngrade

Create an instance: `cancelDowngrade := client.CancelDowngrade(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subscription_ids` | `[]any` | List of subscription identifiers to cancel downgrades for. |

#### Example: Create

```go
result, err := client.CancelDowngrade(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Entitlement

Create an instance: `entitlement := client.Entitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of errors, empty on success. |
| `messages` | `[]any` | List of informational messages. |
| `result` | `[]any` | List of entitlements for the requested object. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
entitlements, err := client.Entitlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(entitlements) // the array of records
```


### Invoice

Create an instance: `invoice := client.Invoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `toggle` | `bool` | Whether to enable or disable PDF invoice generation. |


### PaymentMethod

Create an instance: `paymentMethod := client.PaymentMethod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SetAsDefault

Create an instance: `setAsDefault := client.SetAsDefault(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Create

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


### Usage

Create an instance: `usage := client.Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of errors, empty on success. |
| `messages` | `[]any` | List of informational messages. |
| `result` | `[]any` | Array of billing usage data points for the requested time range. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
usages, err := client.Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usages) // the array of records
```


### UserSubscription

Create an instance: `userSubscription := client.UserSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ZoneRatePlan

Create an instance: `zoneRatePlan := client.ZoneRatePlan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zoneRatePlan, err := client.ZoneRatePlan(nil).Load(map[string]any{"plan_identifier": "plan_identifier", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneRatePlan) // the loaded record
```

#### Example: List

```go
zoneRatePlans, err := client.ZoneRatePlan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneRatePlans) // the array of records
```


### ZoneSubscription

Create an instance: `zoneSubscription := client.ZoneSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-billing-sdk/go/
├── cloudflare-billing.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-billing-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
billsubsapibaddebtresponsesingle := client.BillSubsApiBadDebtResponseSingle(nil)
billsubsapibaddebtresponsesingle.Load(map[string]any{"account_id": "example"}, nil)

// billsubsapibaddebtresponsesingle.Data() now returns the billsubsapibaddebtresponsesingle data from the last load
// billsubsapibaddebtresponsesingle.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
