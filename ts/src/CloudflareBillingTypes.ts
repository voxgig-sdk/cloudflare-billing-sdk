// Typed models for the CloudflareBilling SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AccountBilling {
}

export interface AccountBillingLoadMatch {
  account_id: string
  receipt_id: string
  doctype?: string
}

export interface AccountBillingProfile {
}

export interface AccountBillingProfileRemoveMatch {
  account_id: string
}

export interface AccountSubscription {
  id?: string
}

export interface AccountSubscriptionRemoveMatch {
  account_id: string
  id: string
}

export interface BillSubsApiAccountBillingHistoryCollection {
  result?: any[]
}

export interface BillSubsApiAccountBillingHistoryCollectionListMatch {
  account_id: string
  page?: number
  per_page?: number
  status?: string
}

export interface BillSubsApiAccountCredit {
  result?: Record<string, any>
}

export interface BillSubsApiAccountCreditLoadMatch {
  account_id: string
}

export interface BillSubsApiAccountSubscriptionResponseCollection {
  result?: any[]
}

export interface BillSubsApiAccountSubscriptionResponseCollectionListMatch {
  account_id: string
}

export interface BillSubsApiAccountSubscriptionResponseSingle {
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  result?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiAccountSubscriptionResponseSingleLoadMatch {
  account_id: string
  subscription_identifier: string
}

export interface BillSubsApiAccountSubscriptionResponseSingleCreateData {
  account_id: string
  subscription_id?: string
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  result?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiAccountSubscriptionResponseSingleUpdateData {
  account_id: string
  subscription_identifier: string
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  result?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiAddressValidationResponseSingle {
  address?: string
  address2?: string
  city?: string
  country?: string
  state?: string
  zipcode?: string
}

export interface BillSubsApiAddressValidationResponseSingleCreateData {
  address?: string
  address2?: string
  city?: string
  country?: string
  state?: string
  zipcode?: string
}

export interface BillSubsApiBadDebtResponseSingle {
  result?: Record<string, any>
}

export interface BillSubsApiBadDebtResponseSingleLoadMatch {
  account_id: string
}

export interface BillSubsApiBillingHistoryCollection {
  result?: any[]
}

export interface BillSubsApiBillingHistoryCollectionListMatch {
  action?: string
  occurred_at?: string
  order?: string
  page?: number
  per_page?: number
  type?: string
}

export interface BillSubsApiBillingResponseSingle {
  address?: string
  address2?: string
  billing_email?: string
  buying_rate_plan?: string
  captcha_challenge_jwt?: string
  cf_turnstile_response?: string
  city?: string
  company?: string
  country?: string
  first_name?: string
  h_captcha_response?: string
  last_name?: string
  preferred_locale?: string
  result?: Record<string, any>
  secondary_billing_email?: string
  state?: string
  tax_id_type?: string
  telephone?: string
  vat?: string
  zipcode?: string
}

export interface BillSubsApiBillingResponseSingleLoadMatch {
  address?: string
  address2?: string
  billing_email?: string
  buying_rate_plan?: string
  captcha_challenge_jwt?: string
  cf_turnstile_response?: string
  city?: string
  company?: string
  country?: string
  first_name?: string
  h_captcha_response?: string
  last_name?: string
  preferred_locale?: string
  result?: Record<string, any>
  secondary_billing_email?: string
  state?: string
  tax_id_type?: string
  telephone?: string
  vat?: string
  zipcode?: string
}

export interface BillSubsApiBillingResponseSingleCreateData {
  account_id: string
  address?: string
  address2?: string
  billing_email?: string
  buying_rate_plan?: string
  captcha_challenge_jwt?: string
  cf_turnstile_response?: string
  city?: string
  company?: string
  country?: string
  first_name?: string
  h_captcha_response?: string
  last_name?: string
  preferred_locale?: string
  result?: Record<string, any>
  secondary_billing_email?: string
  state?: string
  tax_id_type?: string
  telephone?: string
  vat?: string
  zipcode?: string
}

export interface BillSubsApiBillingResponseSingleUpdateData {
  account_id: string
  address?: string
  address2?: string
  billing_email?: string
  buying_rate_plan?: string
  captcha_challenge_jwt?: string
  cf_turnstile_response?: string
  city?: string
  company?: string
  country?: string
  first_name?: string
  h_captcha_response?: string
  last_name?: string
  preferred_locale?: string
  result?: Record<string, any>
  secondary_billing_email?: string
  state?: string
  tax_id_type?: string
  telephone?: string
  vat?: string
  zipcode?: string
}

export interface BillSubsApiCancelReasonResponseSingle {
  other?: string
  reason_code?: any[]
  result?: Record<string, any>
}

export interface BillSubsApiCancelReasonResponseSingleLoadMatch {
  account_id: string
  subscription_identifier: string
}

export interface BillSubsApiCancelReasonResponseSingleCreateData {
  account_id: string
  subscription_identifier: string
  other?: string
  reason_code?: any[]
  result?: Record<string, any>
}

export interface BillSubsApiClientSecretResponseSingle {
  invoice_id?: string
  payment_method_id?: string
  validate_payment_method?: boolean
}

export interface BillSubsApiClientSecretResponseSingleCreateData {
  account_id: string
  invoice_id?: string
  payment_method_id?: string
  validate_payment_method?: boolean
}

export interface BillSubsApiPaymentIntentResponseSingle {
  result?: Record<string, any>
}

export interface BillSubsApiPaymentIntentResponseSingleCreateData {
  account_id: string
  result?: Record<string, any>
}

export interface BillSubsApiPaymentMethodResponseCollection {
  result?: any[]
}

export interface BillSubsApiPaymentMethodResponseCollectionListMatch {
  account_id: string
  page?: number
  per_page?: number
}

export interface BillSubsApiPaymentMethodResponseSingle {
  address?: string
  address2?: string
  bank_account_type?: string
  bank_code?: string
  bank_country?: string
  bank_name?: string
  bank_routing_number?: string
  cashapp_cash_tag?: string
  city?: string
  country?: string
  default?: boolean
  device_data?: string
  expiration_date?: string
  first_name?: string
  id?: string
  last_four?: string
  last_name?: string
  nick_name?: string
  payment_account_email?: string
  payment_email?: string
  payment_gateway?: string
  payment_nonce?: string
  result?: Record<string, any>
  state?: string
  type?: string
  zipcode?: string
}

export interface BillSubsApiPaymentMethodResponseSingleLoadMatch {
  account_id: string
  payment_method_id: string
}

export interface BillSubsApiPaymentMethodResponseSingleCreateData {
  account_id: string
  address?: string
  address2?: string
  bank_account_type?: string
  bank_code?: string
  bank_country?: string
  bank_name?: string
  bank_routing_number?: string
  cashapp_cash_tag?: string
  city?: string
  country?: string
  default?: boolean
  device_data?: string
  expiration_date?: string
  first_name?: string
  id?: string
  last_four?: string
  last_name?: string
  nick_name?: string
  payment_account_email?: string
  payment_email?: string
  payment_gateway?: string
  payment_nonce?: string
  result?: Record<string, any>
  state?: string
  type?: string
  zipcode?: string
}

export interface BillSubsApiPaymentMethodResponseSingleUpdateData {
  account_id: string
  payment_method_id: string
  address?: string
  address2?: string
  bank_account_type?: string
  bank_code?: string
  bank_country?: string
  bank_name?: string
  bank_routing_number?: string
  cashapp_cash_tag?: string
  city?: string
  country?: string
  default?: boolean
  device_data?: string
  expiration_date?: string
  first_name?: string
  id?: string
  last_four?: string
  last_name?: string
  nick_name?: string
  payment_account_email?: string
  payment_email?: string
  payment_gateway?: string
  payment_nonce?: string
  result?: Record<string, any>
  state?: string
  type?: string
  zipcode?: string
}

export interface BillSubsApiPlanResponseCollection {
  result?: any[]
}

export interface BillSubsApiPlanResponseCollectionListMatch {
  zone_id: string
}

export interface BillSubsApiRatePlanSimple {
  result?: Record<string, any>
}

export interface BillSubsApiRatePlanSimpleLoadMatch {
  public_key: string
}

export interface BillSubsApiUnpaidInvoicesResponseSingle {
  result?: Record<string, any>
}

export interface BillSubsApiUnpaidInvoicesResponseSingleLoadMatch {
  account_id: string
}

export interface BillSubsApiUserSubscriptionResponseCollection {
  result?: any[]
}

export interface BillSubsApiUserSubscriptionResponseCollectionListMatch {
  result?: any[]
}

export interface BillSubsApiUserSubscriptionResponseSingle {
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiUserSubscriptionResponseSingleCreateData {
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiUserSubscriptionResponseSingleUpdateData {
  identifier: string
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiZoneSubscriptionResponseSingle {
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  result?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiZoneSubscriptionResponseSingleLoadMatch {
  zone_id: string
}

export interface BillSubsApiZoneSubscriptionResponseSingleCreateData {
  zone_id: string
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  result?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillSubsApiZoneSubscriptionResponseSingleUpdateData {
  zone_id: string
  app?: Record<string, any>
  component_values?: any[]
  currency?: string
  current_period_end?: string
  current_period_start?: string
  frequency?: string
  id?: string
  price?: number
  rate_plan?: Record<string, any>
  result?: Record<string, any>
  state?: string
  zone?: Record<string, any>
}

export interface BillableUsage {
  errors: any[]
  messages: any[]
  result: any[]
  success: boolean
}

export interface BillableUsageListMatch {
  account_id: string
  from?: string
  to?: string
}

export interface BillableUsageApiUsageInfo {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface BillableUsageApiUsageInfoListMatch {
  account_id: string
}

export interface BillableUsageApiV2AccountBillableMetric {
  errors: any[]
  messages: any[]
  result: any[]
  success: boolean
}

export interface BillableUsageApiV2AccountBillableMetricListMatch {
  account_id: string
  from?: string
  to?: string
}

export interface BillableUsageApiV2Usage {
  FilterBy?: Record<string, any>
  GroupBy?: any[]
  TimePeriod?: Record<string, any>
  errors: any[]
  messages: any[]
  result: any[]
  success: boolean
}

export interface BillableUsageApiV2UsageListMatch {
  account_id: string
  from?: string
  to?: string
}

export interface BillableUsageApiV2UsageCreateData {
  account_id: string
  FilterBy?: Record<string, any>
  GroupBy?: any[]
  TimePeriod?: Record<string, any>
  errors: any[]
  messages: any[]
  result: any[]
  success: boolean
}

export interface CancelDowngrade {
  subscription_ids?: any[]
}

export interface CancelDowngradeCreateData {
  account_id: string
  subscription_ids?: any[]
}

export interface Entitlement {
  errors: any[]
  messages: any[]
  result: any[]
  success: boolean
}

export interface EntitlementListMatch {
  account_id: string
}

export interface Invoice {
  toggle?: boolean
}

export interface InvoiceUpdateData {
  account_id: string
  toggle?: boolean
}

export interface PaymentMethod {
  id?: string
}

export interface PaymentMethodRemoveMatch {
  account_id: string
  id: string
}

export interface SetAsDefault {
  errors: any[]
  messages: any[]
  result: any
  success: boolean
}

export interface SetAsDefaultCreateData {
  account_id: string
  payment_method_id: string
  errors: any[]
  messages: any[]
  result: any
  success: boolean
}

export interface Usage {
  errors: any[]
  messages?: any[]
  result: any[]
  success: boolean
}

export interface UsageListMatch {
  account_id: string
  filter?: string
  limit?: number
  metric?: string
  since?: string
  time_delta?: string
  until?: string
}

export interface UserSubscription {
  id?: string
}

export interface UserSubscriptionRemoveMatch {
  id: string
}

export interface ZoneRatePlan {
  id?: string
  result?: Record<string, any>
}

export interface ZoneRatePlanLoadMatch {
  plan_identifier: string
  zone_id: string
}

export interface ZoneRatePlanListMatch {
  id: string

  // Selects a custom action instead of the plain list:
  //   'available_plans'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ZoneSubscription {
  id?: string
}

export interface ZoneSubscriptionRemoveMatch {
  id: string
}

