-- Typed models for the CloudflareBilling SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AccountBilling

---@class AccountBillingLoadMatch
---@field account_id string
---@field receipt_id string
---@field doctype? string

---@class AccountBillingProfile

---@class AccountBillingProfileRemoveMatch
---@field account_id string

---@class AccountSubscription
---@field id? string

---@class AccountSubscriptionRemoveMatch
---@field account_id string
---@field id string

---@class BillSubsApiAccountBillingHistoryCollection
---@field result? table

---@class BillSubsApiAccountBillingHistoryCollectionListMatch
---@field account_id string
---@field page? number
---@field per_page? number
---@field status? string

---@class BillSubsApiAccountCredit
---@field result? table

---@class BillSubsApiAccountCreditLoadMatch
---@field account_id string

---@class BillSubsApiAccountSubscriptionResponseCollection
---@field result? table

---@class BillSubsApiAccountSubscriptionResponseCollectionListMatch
---@field account_id string

---@class BillSubsApiAccountSubscriptionResponseSingle
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field result? table
---@field state? string
---@field zone? table

---@class BillSubsApiAccountSubscriptionResponseSingleLoadMatch
---@field account_id string
---@field subscription_identifier string

---@class BillSubsApiAccountSubscriptionResponseSingleCreateData
---@field account_id string
---@field subscription_id? string
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field result? table
---@field state? string
---@field zone? table

---@class BillSubsApiAccountSubscriptionResponseSingleUpdateData
---@field account_id string
---@field subscription_identifier string
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field result? table
---@field state? string
---@field zone? table

---@class BillSubsApiAddressValidationResponseSingle
---@field address? string
---@field address2? string
---@field city? string
---@field country? string
---@field state? string
---@field zipcode? string

---@class BillSubsApiAddressValidationResponseSingleCreateData
---@field address? string
---@field address2? string
---@field city? string
---@field country? string
---@field state? string
---@field zipcode? string

---@class BillSubsApiBadDebtResponseSingle
---@field result? table

---@class BillSubsApiBadDebtResponseSingleLoadMatch
---@field account_id string

---@class BillSubsApiBillingHistoryCollection
---@field result? table

---@class BillSubsApiBillingHistoryCollectionListMatch
---@field action? string
---@field occurred_at? string
---@field order? string
---@field page? number
---@field per_page? number
---@field type? string

---@class BillSubsApiBillingResponseSingle
---@field address? string
---@field address2? string
---@field billing_email? string
---@field buying_rate_plan? string
---@field captcha_challenge_jwt? string
---@field cf_turnstile_response? string
---@field city? string
---@field company? string
---@field country? string
---@field first_name? string
---@field h_captcha_response? string
---@field last_name? string
---@field preferred_locale? string
---@field result? table
---@field secondary_billing_email? string
---@field state? string
---@field tax_id_type? string
---@field telephone? string
---@field vat? string
---@field zipcode? string

---@class BillSubsApiBillingResponseSingleLoadMatch
---@field address? string
---@field address2? string
---@field billing_email? string
---@field buying_rate_plan? string
---@field captcha_challenge_jwt? string
---@field cf_turnstile_response? string
---@field city? string
---@field company? string
---@field country? string
---@field first_name? string
---@field h_captcha_response? string
---@field last_name? string
---@field preferred_locale? string
---@field result? table
---@field secondary_billing_email? string
---@field state? string
---@field tax_id_type? string
---@field telephone? string
---@field vat? string
---@field zipcode? string

---@class BillSubsApiBillingResponseSingleCreateData
---@field account_id string
---@field address? string
---@field address2? string
---@field billing_email? string
---@field buying_rate_plan? string
---@field captcha_challenge_jwt? string
---@field cf_turnstile_response? string
---@field city? string
---@field company? string
---@field country? string
---@field first_name? string
---@field h_captcha_response? string
---@field last_name? string
---@field preferred_locale? string
---@field result? table
---@field secondary_billing_email? string
---@field state? string
---@field tax_id_type? string
---@field telephone? string
---@field vat? string
---@field zipcode? string

---@class BillSubsApiBillingResponseSingleUpdateData
---@field account_id string
---@field address? string
---@field address2? string
---@field billing_email? string
---@field buying_rate_plan? string
---@field captcha_challenge_jwt? string
---@field cf_turnstile_response? string
---@field city? string
---@field company? string
---@field country? string
---@field first_name? string
---@field h_captcha_response? string
---@field last_name? string
---@field preferred_locale? string
---@field result? table
---@field secondary_billing_email? string
---@field state? string
---@field tax_id_type? string
---@field telephone? string
---@field vat? string
---@field zipcode? string

---@class BillSubsApiCancelReasonResponseSingle
---@field other? string
---@field reason_code? table
---@field result? table

---@class BillSubsApiCancelReasonResponseSingleLoadMatch
---@field account_id string
---@field subscription_identifier string

---@class BillSubsApiCancelReasonResponseSingleCreateData
---@field account_id string
---@field subscription_identifier string
---@field other? string
---@field reason_code? table
---@field result? table

---@class BillSubsApiClientSecretResponseSingle
---@field invoice_id? string
---@field payment_method_id? string
---@field validate_payment_method? boolean

---@class BillSubsApiClientSecretResponseSingleCreateData
---@field account_id string
---@field invoice_id? string
---@field payment_method_id? string
---@field validate_payment_method? boolean

---@class BillSubsApiPaymentIntentResponseSingle
---@field result? table

---@class BillSubsApiPaymentIntentResponseSingleCreateData
---@field account_id string
---@field result? table

---@class BillSubsApiPaymentMethodResponseCollection
---@field result? table

---@class BillSubsApiPaymentMethodResponseCollectionListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class BillSubsApiPaymentMethodResponseSingle
---@field address? string
---@field address2? string
---@field bank_account_type? string
---@field bank_code? string
---@field bank_country? string
---@field bank_name? string
---@field bank_routing_number? string
---@field cashapp_cash_tag? string
---@field city? string
---@field country? string
---@field default? boolean
---@field device_data? string
---@field expiration_date? string
---@field first_name? string
---@field id? string
---@field last_four? string
---@field last_name? string
---@field nick_name? string
---@field payment_account_email? string
---@field payment_email? string
---@field payment_gateway? string
---@field payment_nonce? string
---@field result? table
---@field state? string
---@field type? string
---@field zipcode? string

---@class BillSubsApiPaymentMethodResponseSingleLoadMatch
---@field account_id string
---@field payment_method_id string

---@class BillSubsApiPaymentMethodResponseSingleCreateData
---@field account_id string
---@field address? string
---@field address2? string
---@field bank_account_type? string
---@field bank_code? string
---@field bank_country? string
---@field bank_name? string
---@field bank_routing_number? string
---@field cashapp_cash_tag? string
---@field city? string
---@field country? string
---@field default? boolean
---@field device_data? string
---@field expiration_date? string
---@field first_name? string
---@field id? string
---@field last_four? string
---@field last_name? string
---@field nick_name? string
---@field payment_account_email? string
---@field payment_email? string
---@field payment_gateway? string
---@field payment_nonce? string
---@field result? table
---@field state? string
---@field type? string
---@field zipcode? string

---@class BillSubsApiPaymentMethodResponseSingleUpdateData
---@field account_id string
---@field payment_method_id string
---@field address? string
---@field address2? string
---@field bank_account_type? string
---@field bank_code? string
---@field bank_country? string
---@field bank_name? string
---@field bank_routing_number? string
---@field cashapp_cash_tag? string
---@field city? string
---@field country? string
---@field default? boolean
---@field device_data? string
---@field expiration_date? string
---@field first_name? string
---@field id? string
---@field last_four? string
---@field last_name? string
---@field nick_name? string
---@field payment_account_email? string
---@field payment_email? string
---@field payment_gateway? string
---@field payment_nonce? string
---@field result? table
---@field state? string
---@field type? string
---@field zipcode? string

---@class BillSubsApiPlanResponseCollection
---@field result? table

---@class BillSubsApiPlanResponseCollectionListMatch
---@field zone_id string

---@class BillSubsApiRatePlanSimple
---@field result? table

---@class BillSubsApiRatePlanSimpleLoadMatch
---@field public_key string

---@class BillSubsApiUnpaidInvoicesResponseSingle
---@field result? table

---@class BillSubsApiUnpaidInvoicesResponseSingleLoadMatch
---@field account_id string

---@class BillSubsApiUserSubscriptionResponseCollection
---@field result? table

---@class BillSubsApiUserSubscriptionResponseCollectionListMatch
---@field result? table

---@class BillSubsApiUserSubscriptionResponseSingle
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field state? string
---@field zone? table

---@class BillSubsApiUserSubscriptionResponseSingleCreateData
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field state? string
---@field zone? table

---@class BillSubsApiUserSubscriptionResponseSingleUpdateData
---@field identifier string
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field state? string
---@field zone? table

---@class BillSubsApiZoneSubscriptionResponseSingle
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field result? table
---@field state? string
---@field zone? table

---@class BillSubsApiZoneSubscriptionResponseSingleLoadMatch
---@field zone_id string

---@class BillSubsApiZoneSubscriptionResponseSingleCreateData
---@field zone_id string
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field result? table
---@field state? string
---@field zone? table

---@class BillSubsApiZoneSubscriptionResponseSingleUpdateData
---@field zone_id string
---@field app? table
---@field component_values? table
---@field currency? string
---@field current_period_end? string
---@field current_period_start? string
---@field frequency? string
---@field id? string
---@field price? number
---@field rate_plan? table
---@field result? table
---@field state? string
---@field zone? table

---@class BillableUsage
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class BillableUsageListMatch
---@field account_id string
---@field from? string
---@field to? string

---@class BillableUsageApiUsageInfo
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class BillableUsageApiUsageInfoListMatch
---@field account_id string

---@class BillableUsageApiV2AccountBillableMetric
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class BillableUsageApiV2AccountBillableMetricListMatch
---@field account_id string
---@field from? string
---@field to? string

---@class BillableUsageApiV2Usage
---@field FilterBy? table
---@field GroupBy? table
---@field TimePeriod? table
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class BillableUsageApiV2UsageListMatch
---@field account_id string
---@field from? string
---@field to? string

---@class BillableUsageApiV2UsageCreateData
---@field account_id string
---@field FilterBy? table
---@field GroupBy? table
---@field TimePeriod? table
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class CancelDowngrade
---@field subscription_ids? table

---@class CancelDowngradeCreateData
---@field account_id string
---@field subscription_ids? table

---@class Entitlement
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class EntitlementListMatch
---@field account_id string

---@class Invoice
---@field toggle? boolean

---@class InvoiceUpdateData
---@field account_id string
---@field toggle? boolean

---@class PaymentMethod
---@field id? string

---@class PaymentMethodRemoveMatch
---@field account_id string
---@field id string

---@class SetAsDefault
---@field errors table
---@field messages table
---@field result any
---@field success boolean

---@class SetAsDefaultCreateData
---@field account_id string
---@field payment_method_id string
---@field errors table
---@field messages table
---@field result any
---@field success boolean

---@class Usage
---@field errors table
---@field messages? table
---@field result table
---@field success boolean

---@class UsageListMatch
---@field account_id string
---@field filter? string
---@field limit? number
---@field metric? string
---@field since? string
---@field time_delta? string
---@field until? string

---@class UserSubscription
---@field id? string

---@class UserSubscriptionRemoveMatch
---@field id string

---@class ZoneRatePlan
---@field id? string
---@field result? table

---@class ZoneRatePlanLoadMatch
---@field plan_identifier string
---@field zone_id string

---@class ZoneRatePlanListMatch
---@field id string

---@class ZoneSubscription
---@field id? string

---@class ZoneSubscriptionRemoveMatch
---@field id string

local M = {}

return M
