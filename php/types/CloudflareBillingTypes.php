<?php
declare(strict_types=1);

// Typed models for the CloudflareBilling SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AccountBilling entity data model. */
class AccountBilling
{
}

/** Request payload for AccountBilling#load. */
class AccountBillingLoadMatch
{
    public string $account_id;
    public string $receipt_id;
    public ?string $doctype = null;
}

/** AccountBillingProfile entity data model. */
class AccountBillingProfile
{
}

/** Request payload for AccountBillingProfile#remove. */
class AccountBillingProfileRemoveMatch
{
    public string $account_id;
}

/** AccountSubscription entity data model. */
class AccountSubscription
{
    public ?string $id = null;
}

/** Request payload for AccountSubscription#remove. */
class AccountSubscriptionRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** BillSubsApiAccountBillingHistoryCollection entity data model. */
class BillSubsApiAccountBillingHistoryCollection
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiAccountBillingHistoryCollection#list. */
class BillSubsApiAccountBillingHistoryCollectionListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $status = null;
}

/** BillSubsApiAccountCredit entity data model. */
class BillSubsApiAccountCredit
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiAccountCredit#load. */
class BillSubsApiAccountCreditLoadMatch
{
    public string $account_id;
}

/** BillSubsApiAccountSubscriptionResponseCollection entity data model. */
class BillSubsApiAccountSubscriptionResponseCollection
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiAccountSubscriptionResponseCollection#list. */
class BillSubsApiAccountSubscriptionResponseCollectionListMatch
{
    public string $account_id;
}

/** BillSubsApiAccountSubscriptionResponseSingle entity data model. */
class BillSubsApiAccountSubscriptionResponseSingle
{
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** Request payload for BillSubsApiAccountSubscriptionResponseSingle#load. */
class BillSubsApiAccountSubscriptionResponseSingleLoadMatch
{
    public string $account_id;
    public string $subscription_identifier;
}

/** Request payload for BillSubsApiAccountSubscriptionResponseSingle#create. */
class BillSubsApiAccountSubscriptionResponseSingleCreateData
{
    public string $account_id;
    public ?string $subscription_id = null;
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** Request payload for BillSubsApiAccountSubscriptionResponseSingle#update. */
class BillSubsApiAccountSubscriptionResponseSingleUpdateData
{
    public string $account_id;
    public string $subscription_identifier;
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** BillSubsApiAddressValidationResponseSingle entity data model. */
class BillSubsApiAddressValidationResponseSingle
{
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $state = null;
    public ?string $zipcode = null;
}

/** Request payload for BillSubsApiAddressValidationResponseSingle#create. */
class BillSubsApiAddressValidationResponseSingleCreateData
{
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $state = null;
    public ?string $zipcode = null;
}

/** BillSubsApiBadDebtResponseSingle entity data model. */
class BillSubsApiBadDebtResponseSingle
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiBadDebtResponseSingle#load. */
class BillSubsApiBadDebtResponseSingleLoadMatch
{
    public string $account_id;
}

/** BillSubsApiBillingHistoryCollection entity data model. */
class BillSubsApiBillingHistoryCollection
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiBillingHistoryCollection#list. */
class BillSubsApiBillingHistoryCollectionListMatch
{
    public ?string $action = null;
    public ?string $occurred_at = null;
    public ?string $order = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $type = null;
}

/** BillSubsApiBillingResponseSingle entity data model. */
class BillSubsApiBillingResponseSingle
{
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $billing_email = null;
    public ?string $buying_rate_plan = null;
    public ?string $captcha_challenge_jwt = null;
    public ?string $cf_turnstile_response = null;
    public ?string $city = null;
    public ?string $company = null;
    public ?string $country = null;
    public ?string $first_name = null;
    public ?string $h_captcha_response = null;
    public ?string $last_name = null;
    public ?string $preferred_locale = null;
    public ?array $result = null;
    public ?string $secondary_billing_email = null;
    public ?string $state = null;
    public ?string $tax_id_type = null;
    public ?string $telephone = null;
    public ?string $vat = null;
    public ?string $zipcode = null;
}

/** Request payload for BillSubsApiBillingResponseSingle#load. */
class BillSubsApiBillingResponseSingleLoadMatch
{
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $billing_email = null;
    public ?string $buying_rate_plan = null;
    public ?string $captcha_challenge_jwt = null;
    public ?string $cf_turnstile_response = null;
    public ?string $city = null;
    public ?string $company = null;
    public ?string $country = null;
    public ?string $first_name = null;
    public ?string $h_captcha_response = null;
    public ?string $last_name = null;
    public ?string $preferred_locale = null;
    public ?array $result = null;
    public ?string $secondary_billing_email = null;
    public ?string $state = null;
    public ?string $tax_id_type = null;
    public ?string $telephone = null;
    public ?string $vat = null;
    public ?string $zipcode = null;
}

/** Request payload for BillSubsApiBillingResponseSingle#create. */
class BillSubsApiBillingResponseSingleCreateData
{
    public string $account_id;
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $billing_email = null;
    public ?string $buying_rate_plan = null;
    public ?string $captcha_challenge_jwt = null;
    public ?string $cf_turnstile_response = null;
    public ?string $city = null;
    public ?string $company = null;
    public ?string $country = null;
    public ?string $first_name = null;
    public ?string $h_captcha_response = null;
    public ?string $last_name = null;
    public ?string $preferred_locale = null;
    public ?array $result = null;
    public ?string $secondary_billing_email = null;
    public ?string $state = null;
    public ?string $tax_id_type = null;
    public ?string $telephone = null;
    public ?string $vat = null;
    public ?string $zipcode = null;
}

/** Request payload for BillSubsApiBillingResponseSingle#update. */
class BillSubsApiBillingResponseSingleUpdateData
{
    public string $account_id;
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $billing_email = null;
    public ?string $buying_rate_plan = null;
    public ?string $captcha_challenge_jwt = null;
    public ?string $cf_turnstile_response = null;
    public ?string $city = null;
    public ?string $company = null;
    public ?string $country = null;
    public ?string $first_name = null;
    public ?string $h_captcha_response = null;
    public ?string $last_name = null;
    public ?string $preferred_locale = null;
    public ?array $result = null;
    public ?string $secondary_billing_email = null;
    public ?string $state = null;
    public ?string $tax_id_type = null;
    public ?string $telephone = null;
    public ?string $vat = null;
    public ?string $zipcode = null;
}

/** BillSubsApiCancelReasonResponseSingle entity data model. */
class BillSubsApiCancelReasonResponseSingle
{
    public ?string $other = null;
    public ?array $reason_code = null;
    public ?array $result = null;
}

/** Request payload for BillSubsApiCancelReasonResponseSingle#load. */
class BillSubsApiCancelReasonResponseSingleLoadMatch
{
    public string $account_id;
    public string $subscription_identifier;
}

/** Request payload for BillSubsApiCancelReasonResponseSingle#create. */
class BillSubsApiCancelReasonResponseSingleCreateData
{
    public string $account_id;
    public string $subscription_identifier;
    public ?string $other = null;
    public ?array $reason_code = null;
    public ?array $result = null;
}

/** BillSubsApiClientSecretResponseSingle entity data model. */
class BillSubsApiClientSecretResponseSingle
{
    public ?string $invoice_id = null;
    public ?string $payment_method_id = null;
    public ?bool $validate_payment_method = null;
}

/** Request payload for BillSubsApiClientSecretResponseSingle#create. */
class BillSubsApiClientSecretResponseSingleCreateData
{
    public string $account_id;
    public ?string $invoice_id = null;
    public ?string $payment_method_id = null;
    public ?bool $validate_payment_method = null;
}

/** BillSubsApiPaymentIntentResponseSingle entity data model. */
class BillSubsApiPaymentIntentResponseSingle
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiPaymentIntentResponseSingle#create. */
class BillSubsApiPaymentIntentResponseSingleCreateData
{
    public string $account_id;
    public ?array $result = null;
}

/** BillSubsApiPaymentMethodResponseCollection entity data model. */
class BillSubsApiPaymentMethodResponseCollection
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiPaymentMethodResponseCollection#list. */
class BillSubsApiPaymentMethodResponseCollectionListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** BillSubsApiPaymentMethodResponseSingle entity data model. */
class BillSubsApiPaymentMethodResponseSingle
{
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $bank_account_type = null;
    public ?string $bank_code = null;
    public ?string $bank_country = null;
    public ?string $bank_name = null;
    public ?string $bank_routing_number = null;
    public ?string $cashapp_cash_tag = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?bool $default = null;
    public ?string $device_data = null;
    public ?string $expiration_date = null;
    public ?string $first_name = null;
    public ?string $id = null;
    public ?string $last_four = null;
    public ?string $last_name = null;
    public ?string $nick_name = null;
    public ?string $payment_account_email = null;
    public ?string $payment_email = null;
    public ?string $payment_gateway = null;
    public ?string $payment_nonce = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?string $type = null;
    public ?string $zipcode = null;
}

/** Request payload for BillSubsApiPaymentMethodResponseSingle#load. */
class BillSubsApiPaymentMethodResponseSingleLoadMatch
{
    public string $account_id;
    public string $payment_method_id;
}

/** Request payload for BillSubsApiPaymentMethodResponseSingle#create. */
class BillSubsApiPaymentMethodResponseSingleCreateData
{
    public string $account_id;
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $bank_account_type = null;
    public ?string $bank_code = null;
    public ?string $bank_country = null;
    public ?string $bank_name = null;
    public ?string $bank_routing_number = null;
    public ?string $cashapp_cash_tag = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?bool $default = null;
    public ?string $device_data = null;
    public ?string $expiration_date = null;
    public ?string $first_name = null;
    public ?string $id = null;
    public ?string $last_four = null;
    public ?string $last_name = null;
    public ?string $nick_name = null;
    public ?string $payment_account_email = null;
    public ?string $payment_email = null;
    public ?string $payment_gateway = null;
    public ?string $payment_nonce = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?string $type = null;
    public ?string $zipcode = null;
}

/** Request payload for BillSubsApiPaymentMethodResponseSingle#update. */
class BillSubsApiPaymentMethodResponseSingleUpdateData
{
    public string $account_id;
    public string $payment_method_id;
    public ?string $address = null;
    public ?string $address2 = null;
    public ?string $bank_account_type = null;
    public ?string $bank_code = null;
    public ?string $bank_country = null;
    public ?string $bank_name = null;
    public ?string $bank_routing_number = null;
    public ?string $cashapp_cash_tag = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?bool $default = null;
    public ?string $device_data = null;
    public ?string $expiration_date = null;
    public ?string $first_name = null;
    public ?string $id = null;
    public ?string $last_four = null;
    public ?string $last_name = null;
    public ?string $nick_name = null;
    public ?string $payment_account_email = null;
    public ?string $payment_email = null;
    public ?string $payment_gateway = null;
    public ?string $payment_nonce = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?string $type = null;
    public ?string $zipcode = null;
}

/** BillSubsApiPlanResponseCollection entity data model. */
class BillSubsApiPlanResponseCollection
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiPlanResponseCollection#list. */
class BillSubsApiPlanResponseCollectionListMatch
{
    public string $zone_id;
}

/** BillSubsApiRatePlanSimple entity data model. */
class BillSubsApiRatePlanSimple
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiRatePlanSimple#load. */
class BillSubsApiRatePlanSimpleLoadMatch
{
    public string $public_key;
}

/** BillSubsApiUnpaidInvoicesResponseSingle entity data model. */
class BillSubsApiUnpaidInvoicesResponseSingle
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiUnpaidInvoicesResponseSingle#load. */
class BillSubsApiUnpaidInvoicesResponseSingleLoadMatch
{
    public string $account_id;
}

/** BillSubsApiUserSubscriptionResponseCollection entity data model. */
class BillSubsApiUserSubscriptionResponseCollection
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiUserSubscriptionResponseCollection#list. */
class BillSubsApiUserSubscriptionResponseCollectionListMatch
{
    public ?array $result = null;
}

/** BillSubsApiUserSubscriptionResponseSingle entity data model. */
class BillSubsApiUserSubscriptionResponseSingle
{
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** Request payload for BillSubsApiUserSubscriptionResponseSingle#create. */
class BillSubsApiUserSubscriptionResponseSingleCreateData
{
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** Request payload for BillSubsApiUserSubscriptionResponseSingle#update. */
class BillSubsApiUserSubscriptionResponseSingleUpdateData
{
    public string $identifier;
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** BillSubsApiZoneSubscriptionResponseSingle entity data model. */
class BillSubsApiZoneSubscriptionResponseSingle
{
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** Request payload for BillSubsApiZoneSubscriptionResponseSingle#load. */
class BillSubsApiZoneSubscriptionResponseSingleLoadMatch
{
    public string $zone_id;
}

/** Request payload for BillSubsApiZoneSubscriptionResponseSingle#create. */
class BillSubsApiZoneSubscriptionResponseSingleCreateData
{
    public string $zone_id;
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** Request payload for BillSubsApiZoneSubscriptionResponseSingle#update. */
class BillSubsApiZoneSubscriptionResponseSingleUpdateData
{
    public string $zone_id;
    public ?array $app = null;
    public ?array $component_values = null;
    public ?string $currency = null;
    public ?string $current_period_end = null;
    public ?string $current_period_start = null;
    public ?string $frequency = null;
    public ?string $id = null;
    public ?float $price = null;
    public ?array $rate_plan = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?array $zone = null;
}

/** BillableUsage entity data model. */
class BillableUsage
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for BillableUsage#list. */
class BillableUsageListMatch
{
    public string $account_id;
    public ?string $from = null;
    public ?string $to = null;
}

/** BillableUsageApiUsageInfo entity data model. */
class BillableUsageApiUsageInfo
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for BillableUsageApiUsageInfo#list. */
class BillableUsageApiUsageInfoListMatch
{
    public string $account_id;
}

/** BillableUsageApiV2AccountBillableMetric entity data model. */
class BillableUsageApiV2AccountBillableMetric
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for BillableUsageApiV2AccountBillableMetric#list. */
class BillableUsageApiV2AccountBillableMetricListMatch
{
    public string $account_id;
    public ?string $from = null;
    public ?string $to = null;
}

/** BillableUsageApiV2Usage entity data model. */
class BillableUsageApiV2Usage
{
    public ?array $FilterBy = null;
    public ?array $GroupBy = null;
    public ?array $TimePeriod = null;
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for BillableUsageApiV2Usage#list. */
class BillableUsageApiV2UsageListMatch
{
    public string $account_id;
    public ?string $from = null;
    public ?string $to = null;
}

/** Request payload for BillableUsageApiV2Usage#create. */
class BillableUsageApiV2UsageCreateData
{
    public string $account_id;
    public ?array $FilterBy = null;
    public ?array $GroupBy = null;
    public ?array $TimePeriod = null;
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** CancelDowngrade entity data model. */
class CancelDowngrade
{
    public ?array $subscription_ids = null;
}

/** Request payload for CancelDowngrade#create. */
class CancelDowngradeCreateData
{
    public string $account_id;
    public ?array $subscription_ids = null;
}

/** Entitlement entity data model. */
class Entitlement
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Entitlement#list. */
class EntitlementListMatch
{
    public string $account_id;
}

/** Invoice entity data model. */
class Invoice
{
    public ?bool $toggle = null;
}

/** Request payload for Invoice#update. */
class InvoiceUpdateData
{
    public string $account_id;
    public ?bool $toggle = null;
}

/** PaymentMethod entity data model. */
class PaymentMethod
{
    public ?string $id = null;
}

/** Request payload for PaymentMethod#remove. */
class PaymentMethodRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** SetAsDefault entity data model. */
class SetAsDefault
{
    public array $errors;
    public array $messages;
    public mixed $result;
    public bool $success;
}

/** Request payload for SetAsDefault#create. */
class SetAsDefaultCreateData
{
    public string $account_id;
    public string $payment_method_id;
    public array $errors;
    public array $messages;
    public mixed $result;
    public bool $success;
}

/** Usage entity data model. */
class Usage
{
    public array $errors;
    public ?array $messages = null;
    public array $result;
    public bool $success;
}

/** Request payload for Usage#list. */
class UsageListMatch
{
    public string $account_id;
    public ?string $filter = null;
    public ?int $limit = null;
    public ?string $metric = null;
    public ?string $since = null;
    public ?string $time_delta = null;
    public ?string $until = null;
}

/** UserSubscription entity data model. */
class UserSubscription
{
    public ?string $id = null;
}

/** Request payload for UserSubscription#remove. */
class UserSubscriptionRemoveMatch
{
    public string $id;
}

/** ZoneRatePlan entity data model. */
class ZoneRatePlan
{
    public ?string $id = null;
    public ?array $result = null;
}

/** Request payload for ZoneRatePlan#load. */
class ZoneRatePlanLoadMatch
{
    public string $plan_identifier;
    public string $zone_id;
}

/** Request payload for ZoneRatePlan#list. */
class ZoneRatePlanListMatch
{
    public string $id;
}

/** ZoneSubscription entity data model. */
class ZoneSubscription
{
    public ?string $id = null;
}

/** Request payload for ZoneSubscription#remove. */
class ZoneSubscriptionRemoveMatch
{
    public string $id;
}

