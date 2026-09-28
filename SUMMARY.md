# Cloudflare Billing

Cloudflare billing and subscriptions: usage, invoices, receipts, payment methods, plans, entitlements, and subscriptions.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 35 entities and 55 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AccountBilling](docs/api/account_billing.html)

Results: Receipt PDF document.

SDK operations: `load`.

### [AccountBillingProfile](docs/api/account_billing_profile.html)

Results: Delete Billing Profile response.

SDK operations: `remove`.

### [AccountSubscription](docs/api/account_subscription.html)

Results: Delete Subscription response.

SDK operations: `remove`.

### [BillSubsApiAccountBillingHistoryCollection](docs/api/bill_subs_api_account_billing_history_collection.html)

Results: Get Account Billing History response.

SDK operations: `list`.

### [BillSubsApiAccountCredit](docs/api/bill_subs_api_account_credit.html)

Results: Get Account Credits response.

SDK operations: `load`.

### [BillSubsApiAccountSubscriptionResponseCollection](docs/api/bill_subs_api_account_subscription_response_collection.html)

Results: List Subscriptions response.

SDK operations: `list`.

### [BillSubsApiAccountSubscriptionResponseSingle](docs/api/bill_subs_api_account_subscription_response_single.html)

Results: Append Subscription Action response; Create Subscription response; Get Subscription response; Update Subscription response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `app`: Cloudflare Apps Marketplace is sunset. This field is retained for legacy grandfathered app subscriptions only.
- `component_values`: Configurable component values for the subscription.
- `currency`: The monetary unit in which pricing information is displayed.
- `current_period_end`: The end of the current period and also when the next billing is due.
- `current_period_start`: When the current billing period started. May match initial_period_start if this is the first period.

### [BillSubsApiAddressValidationResponseSingle](docs/api/bill_subs_api_address_validation_response_single.html)

Results: Validate Billing Address response.

SDK operations: `create`.

Key fields to recognise:

- `address`: Validated address line 1.
- `address2`: Validated address line 2.
- `city`: Validated city.
- `country`: Validated country code.
- `state`: Validated state or province.

### [BillSubsApiBadDebtResponseSingle](docs/api/bill_subs_api_bad_debt_response_single.html)

Results: Get Account Bad Debt response.

SDK operations: `load`.

### [BillSubsApiBillingHistoryCollection](docs/api/bill_subs_api_billing_history_collection.html)

Results: Billing History Details response.

SDK operations: `list`.

### [BillSubsApiBillingResponseSingle](docs/api/bill_subs_api_billing_response_single.html)

Results: Create Billing Profile response; Billing Profile Details response; Update Billing Email response; Update Billing Profile response.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `address`: Street address line 1.
- `address2`: Street address line 2 (apt, suite, etc.).
- `billing_email`: Primary billing email address.
- `buying_rate_plan`: Rate plan being purchased right after profile setup.
- `captcha_challenge_jwt`: Captcha challenge JWT issued during onboarding.

### [BillSubsApiCancelReasonResponseSingle](docs/api/bill_subs_api_cancel_reason_response_single.html)

Results: Create Cancel Reason response; Get Cancel Reason response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `other`: Additional cancellation details.
- `reason_code`: The cancellation reason codes.

### [BillSubsApiClientSecretResponseSingle](docs/api/bill_subs_api_client_secret_response_single.html)

Results: Pay Bad Debt response; Pay Invoice response.

SDK operations: `create`.

Key fields to recognise:

- `invoice_id`: The identifier of the invoice to pay.
- `payment_method_id`: The payment method to use.
- `validate_payment_method`: Whether to validate the payment method before processing.

### [BillSubsApiPaymentIntentResponseSingle](docs/api/bill_subs_api_payment_intent_response_single.html)

Results: Create Payment Intent response.

SDK operations: `create`.

### [BillSubsApiPaymentMethodResponseCollection](docs/api/bill_subs_api_payment_method_response_collection.html)

Results: List Payment Methods response.

SDK operations: `list`.

### [BillSubsApiPaymentMethodResponseSingle](docs/api/bill_subs_api_payment_method_response_single.html)

Results: Create Payment Method response; Get Payment Method response; Update Payment Method response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `address`: Billing address line 1.
- `address2`: Billing address line 2.
- `bank_account_type`: Bank account type.
- `bank_code`: Bank code.
- `bank_country`: Bank country.

### [BillSubsApiPlanResponseCollection](docs/api/bill_subs_api_plan_response_collection.html)

Results: List Available Rate Plans response.

SDK operations: `list`.

### [BillSubsApiRatePlanSimple](docs/api/bill_subs_api_rate_plan_simple.html)

Results: Get Rate Plan response.

SDK operations: `load`.

### [BillSubsApiUnpaidInvoicesResponseSingle](docs/api/bill_subs_api_unpaid_invoices_response_single.html)

Results: Get Unpaid Invoices response.

SDK operations: `load`.

### [BillSubsApiUserSubscriptionResponseCollection](docs/api/bill_subs_api_user_subscription_response_collection.html)

Results: Get User Subscriptions response.

SDK operations: `list`.

### [BillSubsApiUserSubscriptionResponseSingle](docs/api/bill_subs_api_user_subscription_response_single.html)

Results: Create User Subscription response; Update User Subscription response.

SDK operations: `create`, `update`.

Key fields to recognise:

- `app`: Cloudflare Apps Marketplace is sunset.
- `component_values`: Configurable component values for the subscription.
- `currency`: The monetary unit in which pricing information is displayed.
- `current_period_end`: The end of the current period and also when the next billing is due.
- `current_period_start`: When the current billing period started.

### [BillSubsApiZoneSubscriptionResponseSingle](docs/api/bill_subs_api_zone_subscription_response_single.html)

Results: Create Zone Subscription response; Zone Subscription Details response; Update Zone Subscription response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `app`: Cloudflare Apps Marketplace is sunset. This field is retained for legacy grandfathered app subscriptions only.
- `component_values`: Configurable component values for the subscription.
- `currency`: The monetary unit in which pricing information is displayed.
- `current_period_end`: The end of the current period and also when the next billing is due.
- `current_period_start`: When the current billing period started. May match initial_period_start if this is the first period.

### [BillableUsage](docs/api/billable_usage.html)

Results: Indicates account usage data was successfully retrieved.

SDK operations: `list`.

Key fields to recognise:

- `errors`: Contains error details if the request failed.
- `messages`: Contains informational notices about the response.
- `result`: Contains the array of billable usage records.
- `success`: Indicates whether the API call was successful.

### [BillableUsageApiUsageInfo](docs/api/billable_usage_api_usage_info.html)

Results: Indicates account usage data was successfully retrieved.

SDK operations: `list`.

Key fields to recognise:

- `errors`: Contains error details if the request failed.
- `messages`: Contains any informational messages from the API.
- `result`: Contains the usage info.
- `success`: Indicates whether the API call was successful.

### [BillableUsageApiV2AccountBillableMetric](docs/api/billable_usage_api_v2_account_billable_metric.html)

Results: Account billable metrics were successfully retrieved.

SDK operations: `list`.

Key fields to recognise:

- `errors`: Contains error details describing why the request failed.
- `messages`: Contains informational notices about the response.
- `result`: Contains the response payload (always null on failure).
- `success`: Indicates whether the API call was successful.

### [BillableUsageApiV2Usage](docs/api/billable_usage_api_v2_usage.html)

Results: Account usage data was successfully retrieved.

SDK operations: `create`, `list`.

Key fields to recognise:

- `FilterBy`: Usage filters.
- `GroupBy`: Grouping definitions used to split result rows.
- `TimePeriod`: Charge period to query, that is
- `errors`: Contains error details if the request failed.
- `messages`: Contains informational notices about the response.

### [CancelDowngrade](docs/api/cancel_downgrade.html)

Results: Cancel Delayed Downgrade response; Cancel Delayed Downgrade response (no content).

SDK operations: `create`.

Key fields to recognise:

- `subscription_ids`: List of subscription identifiers to cancel downgrades for.

### [Entitlement](docs/api/entitlement.html)

Results: List of entitlements for the account.; Request canceled by the client before the upstream could respond. No response body.; List of entitlements for the zone.

SDK operations: `list`.

Key fields to recognise:

- `errors`: List of errors, empty on success.
- `messages`: List of informational messages.
- `result`: List of entitlements for the requested object.
- `success`: Whether the API call was successful.

### [Invoice](docs/api/invoice.html)

Results: Toggle PDF Invoices response.

SDK operations: `update`.

Key fields to recognise:

- `toggle`: Whether to enable or disable PDF invoice generation.

### [PaymentMethod](docs/api/payment_method.html)

Results: Delete Payment Method response; Delete Payment Method response (no content).

SDK operations: `remove`.

### [SetAsDefault](docs/api/set_as_default.html)

Results: Set Default Payment Method response; Set Default Payment Method response (no content).

SDK operations: `create`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [Usage](docs/api/usage.html)

Results: Usage analytics response.

SDK operations: `list`.

Key fields to recognise:

- `errors`: List of errors, empty on success.
- `messages`: List of informational messages.
- `result`: Array of billing usage data points for the requested time range.
- `success`: Whether the API call was successful.

### [UserSubscription](docs/api/user_subscription.html)

Results: Delete User Subscription response.

SDK operations: `remove`.

### [ZoneRatePlan](docs/api/zone_rate_plan.html)

Results: List Available Plans response; Available Plan Details response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Identifier

### [ZoneSubscription](docs/api/zone_subscription.html)

Results: Delete Zone Subscription response.

SDK operations: `remove`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [AccountBilling](docs/api/account_billing.html) | `load` | `GET /accounts/{account_id}/receipts/{receipt_id}/pdf` | Required |
| [AccountBillingProfile](docs/api/account_billing_profile.html) | `remove` | `DELETE /accounts/{account_id}/billing/profile` | Required |
| [AccountSubscription](docs/api/account_subscription.html) | `remove` | `DELETE /accounts/{account_id}/subscriptions/{subscription_identifier}` | Required |
| [BillSubsApiAccountBillingHistoryCollection](docs/api/bill_subs_api_account_billing_history_collection.html) | `list` | `GET /accounts/{account_id}/billing/history` | Required |
| [BillSubsApiAccountCredit](docs/api/bill_subs_api_account_credit.html) | `load` | `GET /accounts/{account_id}/billing/credits` | Required |
| [BillSubsApiAccountSubscriptionResponseCollection](docs/api/bill_subs_api_account_subscription_response_collection.html) | `list` | `GET /accounts/{account_id}/subscriptions` | Required |
| [BillSubsApiAccountSubscriptionResponseSingle](docs/api/bill_subs_api_account_subscription_response_single.html) | `create` | `POST /accounts/{account_id}/subscriptions/{subscription_identifier}/action/append` | Required |
| [BillSubsApiAccountSubscriptionResponseSingle](docs/api/bill_subs_api_account_subscription_response_single.html) | `create` | `POST /accounts/{account_id}/subscriptions` | Required |
| [BillSubsApiAccountSubscriptionResponseSingle](docs/api/bill_subs_api_account_subscription_response_single.html) | `load` | `GET /accounts/{account_id}/subscriptions/{subscription_identifier}` | Required |
| [BillSubsApiAccountSubscriptionResponseSingle](docs/api/bill_subs_api_account_subscription_response_single.html) | `update` | `PUT /accounts/{account_id}/subscriptions/{subscription_identifier}` | Required |
| [BillSubsApiAddressValidationResponseSingle](docs/api/bill_subs_api_address_validation_response_single.html) | `create` | `POST /billing/address-validation` | Not required |
| [BillSubsApiBadDebtResponseSingle](docs/api/bill_subs_api_bad_debt_response_single.html) | `load` | `GET /accounts/{account_id}/billing/bad-debt` | Required |
| [BillSubsApiBillingHistoryCollection](docs/api/bill_subs_api_billing_history_collection.html) | `list` | `GET /user/billing/history` | Required |
| [BillSubsApiBillingResponseSingle](docs/api/bill_subs_api_billing_response_single.html) | `create` | `POST /accounts/{account_id}/billing/profile` | Required |
| [BillSubsApiBillingResponseSingle](docs/api/bill_subs_api_billing_response_single.html) | `load` | `GET /accounts/{account_id}/billing/profile` | Required |
| [BillSubsApiBillingResponseSingle](docs/api/bill_subs_api_billing_response_single.html) | `load` | `GET /user/billing/profile` | Required |
| [BillSubsApiBillingResponseSingle](docs/api/bill_subs_api_billing_response_single.html) | `patch` | `PATCH /accounts/{account_id}/billing/profile` | Required |
| [BillSubsApiBillingResponseSingle](docs/api/bill_subs_api_billing_response_single.html) | `update` | `PUT /accounts/{account_id}/billing/profile` | Required |
| [BillSubsApiCancelReasonResponseSingle](docs/api/bill_subs_api_cancel_reason_response_single.html) | `create` | `POST /accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason` | Required |
| [BillSubsApiCancelReasonResponseSingle](docs/api/bill_subs_api_cancel_reason_response_single.html) | `load` | `GET /accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason` | Required |
| [BillSubsApiClientSecretResponseSingle](docs/api/bill_subs_api_client_secret_response_single.html) | `create` | `POST /accounts/{account_id}/pay-bad-debt` | Required |
| [BillSubsApiClientSecretResponseSingle](docs/api/bill_subs_api_client_secret_response_single.html) | `create` | `POST /accounts/{account_id}/pay-invoice` | Required |
| [BillSubsApiPaymentIntentResponseSingle](docs/api/bill_subs_api_payment_intent_response_single.html) | `create` | `POST /accounts/{account_id}/billing/profile/payment-method` | Required |
| [BillSubsApiPaymentMethodResponseCollection](docs/api/bill_subs_api_payment_method_response_collection.html) | `list` | `GET /accounts/{account_id}/payment-methods` | Required |
| [BillSubsApiPaymentMethodResponseSingle](docs/api/bill_subs_api_payment_method_response_single.html) | `create` | `POST /accounts/{account_id}/payment-methods` | Required |
| [BillSubsApiPaymentMethodResponseSingle](docs/api/bill_subs_api_payment_method_response_single.html) | `load` | `GET /accounts/{account_id}/payment-methods/{payment_method_id}` | Required |
| [BillSubsApiPaymentMethodResponseSingle](docs/api/bill_subs_api_payment_method_response_single.html) | `update` | `PUT /accounts/{account_id}/payment-methods/{payment_method_id}` | Required |
| [BillSubsApiPlanResponseCollection](docs/api/bill_subs_api_plan_response_collection.html) | `list` | `GET /zones/{zone_id}/available_rate_plans` | Required |
| [BillSubsApiRatePlanSimple](docs/api/bill_subs_api_rate_plan_simple.html) | `load` | `GET /billing/rate_plans/{public_key}` | Not required |
| [BillSubsApiUnpaidInvoicesResponseSingle](docs/api/bill_subs_api_unpaid_invoices_response_single.html) | `load` | `GET /accounts/{account_id}/billing/unpaid-invoice` | Required |
| [BillSubsApiUserSubscriptionResponseCollection](docs/api/bill_subs_api_user_subscription_response_collection.html) | `list` | `GET /user/subscriptions` | Required |
| [BillSubsApiUserSubscriptionResponseSingle](docs/api/bill_subs_api_user_subscription_response_single.html) | `create` | `POST /user/subscriptions` | Required |
| [BillSubsApiUserSubscriptionResponseSingle](docs/api/bill_subs_api_user_subscription_response_single.html) | `update` | `PUT /user/subscriptions/{identifier}` | Required |
| [BillSubsApiZoneSubscriptionResponseSingle](docs/api/bill_subs_api_zone_subscription_response_single.html) | `create` | `POST /zones/{zone_id}/subscription` | Required |
| [BillSubsApiZoneSubscriptionResponseSingle](docs/api/bill_subs_api_zone_subscription_response_single.html) | `create` | `POST /zones/{zone_id}/subscriptions` | Required |
| [BillSubsApiZoneSubscriptionResponseSingle](docs/api/bill_subs_api_zone_subscription_response_single.html) | `load` | `GET /zones/{zone_id}/subscription` | Required |
| [BillSubsApiZoneSubscriptionResponseSingle](docs/api/bill_subs_api_zone_subscription_response_single.html) | `update` | `PUT /zones/{zone_id}/subscription` | Required |
| [BillSubsApiZoneSubscriptionResponseSingle](docs/api/bill_subs_api_zone_subscription_response_single.html) | `update` | `PUT /zones/{zone_id}/subscriptions` | Required |
| [BillableUsage](docs/api/billable_usage.html) | `list` | `GET /accounts/{account_id}/billable-usage` | Required |
| [BillableUsageApiUsageInfo](docs/api/billable_usage_api_usage_info.html) | `list` | `GET /accounts/{account_id}/billable-usage/info` | Required |
| [BillableUsageApiV2AccountBillableMetric](docs/api/billable_usage_api_v2_account_billable_metric.html) | `list` | `GET /accounts/{account_id}/billable/usage/billable-metrics` | Required |
| [BillableUsageApiV2Usage](docs/api/billable_usage_api_v2_usage.html) | `create` | `POST /accounts/{account_id}/billable/usage` | Required |
| [BillableUsageApiV2Usage](docs/api/billable_usage_api_v2_usage.html) | `list` | `GET /accounts/{account_id}/billable/usage` | Required |
| [CancelDowngrade](docs/api/cancel_downgrade.html) | `create` | `POST /accounts/{account_id}/subscriptions/cancel-downgrade` | Required |
| [Entitlement](docs/api/entitlement.html) | `list` | `GET /accounts/{account_id}/entitlements` | Required |
| [Entitlement](docs/api/entitlement.html) | `list` | `GET /zones/{zone_id}/entitlements` | Required |
| [Invoice](docs/api/invoice.html) | `update` | `PATCH /accounts/{account_id}/invoices` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `remove` | `DELETE /accounts/{account_id}/payment-methods/{payment_method_id}` | Required |
| [SetAsDefault](docs/api/set_as_default.html) | `create` | `POST /accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default` | Required |
| [Usage](docs/api/usage.html) | `list` | `GET /accounts/{account_id}/billing/usage` | Required |
| [UserSubscription](docs/api/user_subscription.html) | `remove` | `DELETE /user/subscriptions/{identifier}` | Required |
| [ZoneRatePlan](docs/api/zone_rate_plan.html) | `list` | `GET /zones/{zone_id}/available_plans` | Required |
| [ZoneRatePlan](docs/api/zone_rate_plan.html) | `load` | `GET /zones/{zone_id}/available_plans/{plan_identifier}` | Required |
| [ZoneSubscription](docs/api/zone_subscription.html) | `remove` | `DELETE /zones/{zone_id}/subscription` | Required |
| [ZoneSubscription](docs/api/zone_subscription.html) | `remove` | `DELETE /zones/{zone_id}/subscriptions` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-billing_list`: List records for an entity. Supported entities: `bill_subs_api_account_billing_history_collection`, `bill_subs_api_account_subscription_response_collection`, `bill_subs_api_billing_history_collection`, `bill_subs_api_payment_method_response_collection`, `bill_subs_api_plan_response_collection`, `bill_subs_api_user_subscription_response_collection`, `billable_usage`, `billable_usage_api_usage_info`, `billable_usage_api_v2_account_billable_metric`, `billable_usage_api_v2_usage`, `entitlement`, `usage`, `zone_rate_plan`.
- `cloudflare-billing_load`: Load one record for an entity. Supported entities: `account_billing`, `bill_subs_api_account_credit`, `bill_subs_api_account_subscription_response_single`, `bill_subs_api_bad_debt_response_single`, `bill_subs_api_billing_response_single`, `bill_subs_api_cancel_reason_response_single`, `bill_subs_api_payment_method_response_single`, `bill_subs_api_rate_plan_simple`, `bill_subs_api_unpaid_invoices_response_single`, `bill_subs_api_zone_subscription_response_single`, `zone_rate_plan`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

