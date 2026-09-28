# Typed models for the CloudflareBilling SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccountBilling(TypedDict):
    pass


class AccountBillingLoadMatchRequired(TypedDict):
    account_id: str
    receipt_id: str


class AccountBillingLoadMatch(AccountBillingLoadMatchRequired, total=False):
    doctype: str


class AccountBillingProfile(TypedDict):
    pass


class AccountBillingProfileRemoveMatch(TypedDict):
    account_id: str


class AccountSubscription(TypedDict, total=False):
    id: str


class AccountSubscriptionRemoveMatch(TypedDict):
    account_id: str
    id: str


class BillSubsApiAccountBillingHistoryCollection(TypedDict, total=False):
    result: list


class BillSubsApiAccountBillingHistoryCollectionListMatchRequired(TypedDict):
    account_id: str


class BillSubsApiAccountBillingHistoryCollectionListMatch(BillSubsApiAccountBillingHistoryCollectionListMatchRequired, total=False):
    page: int
    per_page: int
    status: str


class BillSubsApiAccountCredit(TypedDict, total=False):
    result: dict


class BillSubsApiAccountCreditLoadMatch(TypedDict):
    account_id: str


class BillSubsApiAccountSubscriptionResponseCollection(TypedDict, total=False):
    result: list


class BillSubsApiAccountSubscriptionResponseCollectionListMatch(TypedDict):
    account_id: str


class BillSubsApiAccountSubscriptionResponseSingle(TypedDict, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    result: dict
    state: str
    zone: dict


class BillSubsApiAccountSubscriptionResponseSingleLoadMatch(TypedDict):
    account_id: str
    subscription_identifier: str


class BillSubsApiAccountSubscriptionResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiAccountSubscriptionResponseSingleCreateData(BillSubsApiAccountSubscriptionResponseSingleCreateDataRequired, total=False):
    subscription_id: str
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    result: dict
    state: str
    zone: dict


class BillSubsApiAccountSubscriptionResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    subscription_identifier: str


class BillSubsApiAccountSubscriptionResponseSingleUpdateData(BillSubsApiAccountSubscriptionResponseSingleUpdateDataRequired, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    result: dict
    state: str
    zone: dict


class BillSubsApiAddressValidationResponseSingle(TypedDict, total=False):
    address: str
    address2: str
    city: str
    country: str
    state: str
    zipcode: str


class BillSubsApiAddressValidationResponseSingleCreateData(TypedDict, total=False):
    address: str
    address2: str
    city: str
    country: str
    state: str
    zipcode: str


class BillSubsApiBadDebtResponseSingle(TypedDict, total=False):
    result: dict


class BillSubsApiBadDebtResponseSingleLoadMatch(TypedDict):
    account_id: str


class BillSubsApiBillingHistoryCollection(TypedDict, total=False):
    result: list


class BillSubsApiBillingHistoryCollectionListMatch(TypedDict, total=False):
    action: str
    occurred_at: str
    order: str
    page: float
    per_page: float
    type: str


class BillSubsApiBillingResponseSingle(TypedDict, total=False):
    address: str
    address2: str
    billing_email: str
    buying_rate_plan: str
    captcha_challenge_jwt: str
    cf_turnstile_response: str
    city: str
    company: str
    country: str
    first_name: str
    h_captcha_response: str
    last_name: str
    preferred_locale: str
    result: dict
    secondary_billing_email: str
    state: str
    tax_id_type: str
    telephone: str
    vat: str
    zipcode: str


class BillSubsApiBillingResponseSingleLoadMatch(TypedDict, total=False):
    address: str
    address2: str
    billing_email: str
    buying_rate_plan: str
    captcha_challenge_jwt: str
    cf_turnstile_response: str
    city: str
    company: str
    country: str
    first_name: str
    h_captcha_response: str
    last_name: str
    preferred_locale: str
    result: dict
    secondary_billing_email: str
    state: str
    tax_id_type: str
    telephone: str
    vat: str
    zipcode: str


class BillSubsApiBillingResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiBillingResponseSingleCreateData(BillSubsApiBillingResponseSingleCreateDataRequired, total=False):
    address: str
    address2: str
    billing_email: str
    buying_rate_plan: str
    captcha_challenge_jwt: str
    cf_turnstile_response: str
    city: str
    company: str
    country: str
    first_name: str
    h_captcha_response: str
    last_name: str
    preferred_locale: str
    result: dict
    secondary_billing_email: str
    state: str
    tax_id_type: str
    telephone: str
    vat: str
    zipcode: str


class BillSubsApiBillingResponseSingleUpdateDataRequired(TypedDict):
    account_id: str


class BillSubsApiBillingResponseSingleUpdateData(BillSubsApiBillingResponseSingleUpdateDataRequired, total=False):
    address: str
    address2: str
    billing_email: str
    buying_rate_plan: str
    captcha_challenge_jwt: str
    cf_turnstile_response: str
    city: str
    company: str
    country: str
    first_name: str
    h_captcha_response: str
    last_name: str
    preferred_locale: str
    result: dict
    secondary_billing_email: str
    state: str
    tax_id_type: str
    telephone: str
    vat: str
    zipcode: str


class BillSubsApiCancelReasonResponseSingle(TypedDict, total=False):
    other: str
    reason_code: list
    result: dict


class BillSubsApiCancelReasonResponseSingleLoadMatch(TypedDict):
    account_id: str
    subscription_identifier: str


class BillSubsApiCancelReasonResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    subscription_identifier: str


class BillSubsApiCancelReasonResponseSingleCreateData(BillSubsApiCancelReasonResponseSingleCreateDataRequired, total=False):
    other: str
    reason_code: list
    result: dict


class BillSubsApiClientSecretResponseSingle(TypedDict, total=False):
    invoice_id: str
    payment_method_id: str
    validate_payment_method: bool


class BillSubsApiClientSecretResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiClientSecretResponseSingleCreateData(BillSubsApiClientSecretResponseSingleCreateDataRequired, total=False):
    invoice_id: str
    payment_method_id: str
    validate_payment_method: bool


class BillSubsApiPaymentIntentResponseSingle(TypedDict, total=False):
    result: dict


class BillSubsApiPaymentIntentResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiPaymentIntentResponseSingleCreateData(BillSubsApiPaymentIntentResponseSingleCreateDataRequired, total=False):
    result: dict


class BillSubsApiPaymentMethodResponseCollection(TypedDict, total=False):
    result: list


class BillSubsApiPaymentMethodResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class BillSubsApiPaymentMethodResponseCollectionListMatch(BillSubsApiPaymentMethodResponseCollectionListMatchRequired, total=False):
    page: int
    per_page: int


class BillSubsApiPaymentMethodResponseSingle(TypedDict, total=False):
    address: str
    address2: str
    bank_account_type: str
    bank_code: str
    bank_country: str
    bank_name: str
    bank_routing_number: str
    cashapp_cash_tag: str
    city: str
    country: str
    default: bool
    device_data: str
    expiration_date: str
    first_name: str
    id: str
    last_four: str
    last_name: str
    nick_name: str
    payment_account_email: str
    payment_email: str
    payment_gateway: str
    payment_nonce: str
    result: dict
    state: str
    type: str
    zipcode: str


class BillSubsApiPaymentMethodResponseSingleLoadMatch(TypedDict):
    account_id: str
    payment_method_id: str


class BillSubsApiPaymentMethodResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiPaymentMethodResponseSingleCreateData(BillSubsApiPaymentMethodResponseSingleCreateDataRequired, total=False):
    address: str
    address2: str
    bank_account_type: str
    bank_code: str
    bank_country: str
    bank_name: str
    bank_routing_number: str
    cashapp_cash_tag: str
    city: str
    country: str
    default: bool
    device_data: str
    expiration_date: str
    first_name: str
    id: str
    last_four: str
    last_name: str
    nick_name: str
    payment_account_email: str
    payment_email: str
    payment_gateway: str
    payment_nonce: str
    result: dict
    state: str
    type: str
    zipcode: str


class BillSubsApiPaymentMethodResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    payment_method_id: str


class BillSubsApiPaymentMethodResponseSingleUpdateData(BillSubsApiPaymentMethodResponseSingleUpdateDataRequired, total=False):
    address: str
    address2: str
    bank_account_type: str
    bank_code: str
    bank_country: str
    bank_name: str
    bank_routing_number: str
    cashapp_cash_tag: str
    city: str
    country: str
    default: bool
    device_data: str
    expiration_date: str
    first_name: str
    id: str
    last_four: str
    last_name: str
    nick_name: str
    payment_account_email: str
    payment_email: str
    payment_gateway: str
    payment_nonce: str
    result: dict
    state: str
    type: str
    zipcode: str


class BillSubsApiPlanResponseCollection(TypedDict, total=False):
    result: list


class BillSubsApiPlanResponseCollectionListMatch(TypedDict):
    zone_id: str


class BillSubsApiRatePlanSimple(TypedDict, total=False):
    result: dict


class BillSubsApiRatePlanSimpleLoadMatch(TypedDict):
    public_key: str


class BillSubsApiUnpaidInvoicesResponseSingle(TypedDict, total=False):
    result: dict


class BillSubsApiUnpaidInvoicesResponseSingleLoadMatch(TypedDict):
    account_id: str


class BillSubsApiUserSubscriptionResponseCollection(TypedDict, total=False):
    result: list


class BillSubsApiUserSubscriptionResponseCollectionListMatch(TypedDict, total=False):
    result: list


class BillSubsApiUserSubscriptionResponseSingle(TypedDict, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    state: str
    zone: dict


class BillSubsApiUserSubscriptionResponseSingleCreateData(TypedDict, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    state: str
    zone: dict


class BillSubsApiUserSubscriptionResponseSingleUpdateDataRequired(TypedDict):
    identifier: str


class BillSubsApiUserSubscriptionResponseSingleUpdateData(BillSubsApiUserSubscriptionResponseSingleUpdateDataRequired, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    state: str
    zone: dict


class BillSubsApiZoneSubscriptionResponseSingle(TypedDict, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    result: dict
    state: str
    zone: dict


class BillSubsApiZoneSubscriptionResponseSingleLoadMatch(TypedDict):
    zone_id: str


class BillSubsApiZoneSubscriptionResponseSingleCreateDataRequired(TypedDict):
    zone_id: str


class BillSubsApiZoneSubscriptionResponseSingleCreateData(BillSubsApiZoneSubscriptionResponseSingleCreateDataRequired, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    result: dict
    state: str
    zone: dict


class BillSubsApiZoneSubscriptionResponseSingleUpdateDataRequired(TypedDict):
    zone_id: str


class BillSubsApiZoneSubscriptionResponseSingleUpdateData(BillSubsApiZoneSubscriptionResponseSingleUpdateDataRequired, total=False):
    app: dict
    component_values: list
    currency: str
    current_period_end: str
    current_period_start: str
    frequency: str
    id: str
    price: float
    rate_plan: dict
    result: dict
    state: str
    zone: dict


class BillableUsage(TypedDict):
    errors: list
    messages: list
    result: list
    success: bool


class BillableUsageListMatchRequired(TypedDict):
    account_id: str


class BillableUsageListMatch(BillableUsageListMatchRequired, total=False):
    to: str


class BillableUsageApiUsageInfo(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class BillableUsageApiUsageInfoListMatch(TypedDict):
    account_id: str


class BillableUsageApiV2AccountBillableMetric(TypedDict):
    errors: list
    messages: list
    result: list
    success: bool


class BillableUsageApiV2AccountBillableMetricListMatchRequired(TypedDict):
    account_id: str


class BillableUsageApiV2AccountBillableMetricListMatch(BillableUsageApiV2AccountBillableMetricListMatchRequired, total=False):
    to: str


class BillableUsageApiV2UsageRequired(TypedDict):
    errors: list
    messages: list
    result: list
    success: bool


class BillableUsageApiV2Usage(BillableUsageApiV2UsageRequired, total=False):
    FilterBy: dict
    GroupBy: list
    TimePeriod: dict


class BillableUsageApiV2UsageListMatchRequired(TypedDict):
    account_id: str


class BillableUsageApiV2UsageListMatch(BillableUsageApiV2UsageListMatchRequired, total=False):
    to: str


class BillableUsageApiV2UsageCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: list
    success: bool


class BillableUsageApiV2UsageCreateData(BillableUsageApiV2UsageCreateDataRequired, total=False):
    FilterBy: dict
    GroupBy: list
    TimePeriod: dict


class CancelDowngrade(TypedDict, total=False):
    subscription_ids: list


class CancelDowngradeCreateDataRequired(TypedDict):
    account_id: str


class CancelDowngradeCreateData(CancelDowngradeCreateDataRequired, total=False):
    subscription_ids: list


class Entitlement(TypedDict):
    errors: list
    messages: list
    result: list
    success: bool


class EntitlementListMatch(TypedDict):
    account_id: str


class Invoice(TypedDict, total=False):
    toggle: bool


class InvoiceUpdateDataRequired(TypedDict):
    account_id: str


class InvoiceUpdateData(InvoiceUpdateDataRequired, total=False):
    toggle: bool


class PaymentMethod(TypedDict, total=False):
    id: str


class PaymentMethodRemoveMatch(TypedDict):
    account_id: str
    id: str


class SetAsDefault(TypedDict):
    errors: list
    messages: list
    result: Any
    success: bool


class SetAsDefaultCreateData(TypedDict):
    account_id: str
    payment_method_id: str
    errors: list
    messages: list
    result: Any
    success: bool


class UsageRequired(TypedDict):
    errors: list
    result: list
    success: bool


class Usage(UsageRequired, total=False):
    messages: list


class UsageListMatchRequired(TypedDict):
    account_id: str


class UsageListMatch(UsageListMatchRequired, total=False):
    filter: str
    limit: int
    metric: str
    since: str
    time_delta: str
    until: str


class UserSubscription(TypedDict, total=False):
    id: str


class UserSubscriptionRemoveMatch(TypedDict):
    id: str


class ZoneRatePlan(TypedDict, total=False):
    id: str
    result: dict


class ZoneRatePlanLoadMatch(TypedDict):
    plan_identifier: str
    zone_id: str


class ZoneRatePlanListMatch(TypedDict):
    id: str


class ZoneSubscription(TypedDict, total=False):
    id: str


class ZoneSubscriptionRemoveMatch(TypedDict):
    id: str
