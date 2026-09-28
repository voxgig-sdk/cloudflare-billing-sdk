// Typed models for the CloudflareBilling SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-billing-sdk/go/core"
)

// AccountBilling is the typed data model for the account_billing entity.
type AccountBilling struct {
}

// AccountBillingLoadMatch is the typed request payload for AccountBilling.LoadTyped.
type AccountBillingLoadMatch struct {
	AccountId string `json:"account_id"`
	ReceiptId string `json:"receipt_id"`
	Doctype *string `json:"doctype,omitempty"`
}

// AccountBillingProfile is the typed data model for the account_billing_profile entity.
type AccountBillingProfile struct {
}

// AccountBillingProfileRemoveMatch is the typed request payload for AccountBillingProfile.RemoveTyped.
type AccountBillingProfileRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// AccountSubscription is the typed data model for the account_subscription entity.
type AccountSubscription struct {
}

// AccountSubscriptionRemoveMatch is the typed request payload for AccountSubscription.RemoveTyped.
type AccountSubscriptionRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// BillSubsApiAccountBillingHistoryCollection is the typed data model for the bill_subs_api_account_billing_history_collection entity.
type BillSubsApiAccountBillingHistoryCollection struct {
}

// BillSubsApiAccountBillingHistoryCollectionListMatch is the typed request payload for BillSubsApiAccountBillingHistoryCollection.ListTyped.
type BillSubsApiAccountBillingHistoryCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// BillSubsApiAccountCredit is the typed data model for the bill_subs_api_account_credit entity.
type BillSubsApiAccountCredit struct {
}

// BillSubsApiAccountCreditLoadMatch is the typed request payload for BillSubsApiAccountCredit.LoadTyped.
type BillSubsApiAccountCreditLoadMatch struct {
	AccountId string `json:"account_id"`
}

// BillSubsApiAccountSubscriptionResponseCollection is the typed data model for the bill_subs_api_account_subscription_response_collection entity.
type BillSubsApiAccountSubscriptionResponseCollection struct {
}

// BillSubsApiAccountSubscriptionResponseCollectionListMatch is the typed request payload for BillSubsApiAccountSubscriptionResponseCollection.ListTyped.
type BillSubsApiAccountSubscriptionResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// BillSubsApiAccountSubscriptionResponseSingle is the typed data model for the bill_subs_api_account_subscription_response_single entity.
type BillSubsApiAccountSubscriptionResponseSingle struct {
}

// BillSubsApiAccountSubscriptionResponseSingleLoadMatch is the typed request payload for BillSubsApiAccountSubscriptionResponseSingle.LoadTyped.
type BillSubsApiAccountSubscriptionResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	SubscriptionIdentifier string `json:"subscription_identifier"`
}

// BillSubsApiAccountSubscriptionResponseSingleCreateData is the typed request payload for BillSubsApiAccountSubscriptionResponseSingle.CreateTyped.
type BillSubsApiAccountSubscriptionResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	SubscriptionId *string `json:"subscription_id,omitempty"`
	App *map[string]any `json:"app,omitempty"`
	ComponentValues *[]any `json:"component_values,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentPeriodEnd *string `json:"current_period_end,omitempty"`
	CurrentPeriodStart *string `json:"current_period_start,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Id *string `json:"id,omitempty"`
	Price *float64 `json:"price,omitempty"`
	RatePlan *map[string]any `json:"rate_plan,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Zone *map[string]any `json:"zone,omitempty"`
}

// BillSubsApiAccountSubscriptionResponseSingleUpdateData is the typed request payload for BillSubsApiAccountSubscriptionResponseSingle.UpdateTyped.
type BillSubsApiAccountSubscriptionResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	SubscriptionIdentifier string `json:"subscription_identifier"`
	App *map[string]any `json:"app,omitempty"`
	ComponentValues *[]any `json:"component_values,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentPeriodEnd *string `json:"current_period_end,omitempty"`
	CurrentPeriodStart *string `json:"current_period_start,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Id *string `json:"id,omitempty"`
	Price *float64 `json:"price,omitempty"`
	RatePlan *map[string]any `json:"rate_plan,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Zone *map[string]any `json:"zone,omitempty"`
}

// BillSubsApiAddressValidationResponseSingle is the typed data model for the bill_subs_api_address_validation_response_single entity.
type BillSubsApiAddressValidationResponseSingle struct {
}

// BillSubsApiAddressValidationResponseSingleCreateData is the typed request payload for BillSubsApiAddressValidationResponseSingle.CreateTyped.
type BillSubsApiAddressValidationResponseSingleCreateData struct {
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	State *string `json:"state,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// BillSubsApiBadDebtResponseSingle is the typed data model for the bill_subs_api_bad_debt_response_single entity.
type BillSubsApiBadDebtResponseSingle struct {
}

// BillSubsApiBadDebtResponseSingleLoadMatch is the typed request payload for BillSubsApiBadDebtResponseSingle.LoadTyped.
type BillSubsApiBadDebtResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
}

// BillSubsApiBillingHistoryCollection is the typed data model for the bill_subs_api_billing_history_collection entity.
type BillSubsApiBillingHistoryCollection struct {
}

// BillSubsApiBillingHistoryCollectionListMatch is the typed request payload for BillSubsApiBillingHistoryCollection.ListTyped.
type BillSubsApiBillingHistoryCollectionListMatch struct {
	Action *string `json:"action,omitempty"`
	OccurredAt *string `json:"occurred_at,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Type *string `json:"type,omitempty"`
}

// BillSubsApiBillingResponseSingle is the typed data model for the bill_subs_api_billing_response_single entity.
type BillSubsApiBillingResponseSingle struct {
}

// BillSubsApiBillingResponseSingleLoadMatch is the typed request payload for BillSubsApiBillingResponseSingle.LoadTyped.
type BillSubsApiBillingResponseSingleLoadMatch struct {
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	BillingEmail *string `json:"billing_email,omitempty"`
	BuyingRatePlan *string `json:"buying_rate_plan,omitempty"`
	CaptchaChallengeJwt *string `json:"captcha_challenge_jwt,omitempty"`
	CfTurnstileResponse *string `json:"cf_turnstile_response,omitempty"`
	City *string `json:"city,omitempty"`
	Company *string `json:"company,omitempty"`
	Country *string `json:"country,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	HCaptchaResponse *string `json:"h_captcha_response,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	PreferredLocale *string `json:"preferred_locale,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SecondaryBillingEmail *string `json:"secondary_billing_email,omitempty"`
	State *string `json:"state,omitempty"`
	TaxIdType *string `json:"tax_id_type,omitempty"`
	Telephone *string `json:"telephone,omitempty"`
	Vat *string `json:"vat,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// BillSubsApiBillingResponseSingleCreateData is the typed request payload for BillSubsApiBillingResponseSingle.CreateTyped.
type BillSubsApiBillingResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	BillingEmail *string `json:"billing_email,omitempty"`
	BuyingRatePlan *string `json:"buying_rate_plan,omitempty"`
	CaptchaChallengeJwt *string `json:"captcha_challenge_jwt,omitempty"`
	CfTurnstileResponse *string `json:"cf_turnstile_response,omitempty"`
	City *string `json:"city,omitempty"`
	Company *string `json:"company,omitempty"`
	Country *string `json:"country,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	HCaptchaResponse *string `json:"h_captcha_response,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	PreferredLocale *string `json:"preferred_locale,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SecondaryBillingEmail *string `json:"secondary_billing_email,omitempty"`
	State *string `json:"state,omitempty"`
	TaxIdType *string `json:"tax_id_type,omitempty"`
	Telephone *string `json:"telephone,omitempty"`
	Vat *string `json:"vat,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// BillSubsApiBillingResponseSingleUpdateData is the typed request payload for BillSubsApiBillingResponseSingle.UpdateTyped.
type BillSubsApiBillingResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	BillingEmail *string `json:"billing_email,omitempty"`
	BuyingRatePlan *string `json:"buying_rate_plan,omitempty"`
	CaptchaChallengeJwt *string `json:"captcha_challenge_jwt,omitempty"`
	CfTurnstileResponse *string `json:"cf_turnstile_response,omitempty"`
	City *string `json:"city,omitempty"`
	Company *string `json:"company,omitempty"`
	Country *string `json:"country,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	HCaptchaResponse *string `json:"h_captcha_response,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	PreferredLocale *string `json:"preferred_locale,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SecondaryBillingEmail *string `json:"secondary_billing_email,omitempty"`
	State *string `json:"state,omitempty"`
	TaxIdType *string `json:"tax_id_type,omitempty"`
	Telephone *string `json:"telephone,omitempty"`
	Vat *string `json:"vat,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// BillSubsApiCancelReasonResponseSingle is the typed data model for the bill_subs_api_cancel_reason_response_single entity.
type BillSubsApiCancelReasonResponseSingle struct {
}

// BillSubsApiCancelReasonResponseSingleLoadMatch is the typed request payload for BillSubsApiCancelReasonResponseSingle.LoadTyped.
type BillSubsApiCancelReasonResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	SubscriptionIdentifier string `json:"subscription_identifier"`
}

// BillSubsApiCancelReasonResponseSingleCreateData is the typed request payload for BillSubsApiCancelReasonResponseSingle.CreateTyped.
type BillSubsApiCancelReasonResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	SubscriptionIdentifier string `json:"subscription_identifier"`
	Other *string `json:"other,omitempty"`
	ReasonCode *[]any `json:"reason_code,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// BillSubsApiClientSecretResponseSingle is the typed data model for the bill_subs_api_client_secret_response_single entity.
type BillSubsApiClientSecretResponseSingle struct {
}

// BillSubsApiClientSecretResponseSingleCreateData is the typed request payload for BillSubsApiClientSecretResponseSingle.CreateTyped.
type BillSubsApiClientSecretResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	InvoiceId *string `json:"invoice_id,omitempty"`
	PaymentMethodId *string `json:"payment_method_id,omitempty"`
	ValidatePaymentMethod *bool `json:"validate_payment_method,omitempty"`
}

// BillSubsApiPaymentIntentResponseSingle is the typed data model for the bill_subs_api_payment_intent_response_single entity.
type BillSubsApiPaymentIntentResponseSingle struct {
}

// BillSubsApiPaymentIntentResponseSingleCreateData is the typed request payload for BillSubsApiPaymentIntentResponseSingle.CreateTyped.
type BillSubsApiPaymentIntentResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// BillSubsApiPaymentMethodResponseCollection is the typed data model for the bill_subs_api_payment_method_response_collection entity.
type BillSubsApiPaymentMethodResponseCollection struct {
}

// BillSubsApiPaymentMethodResponseCollectionListMatch is the typed request payload for BillSubsApiPaymentMethodResponseCollection.ListTyped.
type BillSubsApiPaymentMethodResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// BillSubsApiPaymentMethodResponseSingle is the typed data model for the bill_subs_api_payment_method_response_single entity.
type BillSubsApiPaymentMethodResponseSingle struct {
}

// BillSubsApiPaymentMethodResponseSingleLoadMatch is the typed request payload for BillSubsApiPaymentMethodResponseSingle.LoadTyped.
type BillSubsApiPaymentMethodResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	PaymentMethodId string `json:"payment_method_id"`
}

// BillSubsApiPaymentMethodResponseSingleCreateData is the typed request payload for BillSubsApiPaymentMethodResponseSingle.CreateTyped.
type BillSubsApiPaymentMethodResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	BankAccountType *string `json:"bank_account_type,omitempty"`
	BankCode *string `json:"bank_code,omitempty"`
	BankCountry *string `json:"bank_country,omitempty"`
	BankName *string `json:"bank_name,omitempty"`
	BankRoutingNumber *string `json:"bank_routing_number,omitempty"`
	CashappCashTag *string `json:"cashapp_cash_tag,omitempty"`
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Default *bool `json:"default,omitempty"`
	DeviceData *string `json:"device_data,omitempty"`
	ExpirationDate *string `json:"expiration_date,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	Id *string `json:"id,omitempty"`
	LastFour *string `json:"last_four,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	NickName *string `json:"nick_name,omitempty"`
	PaymentAccountEmail *string `json:"payment_account_email,omitempty"`
	PaymentEmail *string `json:"payment_email,omitempty"`
	PaymentGateway *string `json:"payment_gateway,omitempty"`
	PaymentNonce *string `json:"payment_nonce,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// BillSubsApiPaymentMethodResponseSingleUpdateData is the typed request payload for BillSubsApiPaymentMethodResponseSingle.UpdateTyped.
type BillSubsApiPaymentMethodResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	PaymentMethodId string `json:"payment_method_id"`
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	BankAccountType *string `json:"bank_account_type,omitempty"`
	BankCode *string `json:"bank_code,omitempty"`
	BankCountry *string `json:"bank_country,omitempty"`
	BankName *string `json:"bank_name,omitempty"`
	BankRoutingNumber *string `json:"bank_routing_number,omitempty"`
	CashappCashTag *string `json:"cashapp_cash_tag,omitempty"`
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Default *bool `json:"default,omitempty"`
	DeviceData *string `json:"device_data,omitempty"`
	ExpirationDate *string `json:"expiration_date,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	Id *string `json:"id,omitempty"`
	LastFour *string `json:"last_four,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	NickName *string `json:"nick_name,omitempty"`
	PaymentAccountEmail *string `json:"payment_account_email,omitempty"`
	PaymentEmail *string `json:"payment_email,omitempty"`
	PaymentGateway *string `json:"payment_gateway,omitempty"`
	PaymentNonce *string `json:"payment_nonce,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// BillSubsApiPlanResponseCollection is the typed data model for the bill_subs_api_plan_response_collection entity.
type BillSubsApiPlanResponseCollection struct {
}

// BillSubsApiPlanResponseCollectionListMatch is the typed request payload for BillSubsApiPlanResponseCollection.ListTyped.
type BillSubsApiPlanResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
}

// BillSubsApiRatePlanSimple is the typed data model for the bill_subs_api_rate_plan_simple entity.
type BillSubsApiRatePlanSimple struct {
}

// BillSubsApiRatePlanSimpleLoadMatch is the typed request payload for BillSubsApiRatePlanSimple.LoadTyped.
type BillSubsApiRatePlanSimpleLoadMatch struct {
	PublicKey string `json:"public_key"`
}

// BillSubsApiUnpaidInvoicesResponseSingle is the typed data model for the bill_subs_api_unpaid_invoices_response_single entity.
type BillSubsApiUnpaidInvoicesResponseSingle struct {
}

// BillSubsApiUnpaidInvoicesResponseSingleLoadMatch is the typed request payload for BillSubsApiUnpaidInvoicesResponseSingle.LoadTyped.
type BillSubsApiUnpaidInvoicesResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
}

// BillSubsApiUserSubscriptionResponseCollection is the typed data model for the bill_subs_api_user_subscription_response_collection entity.
type BillSubsApiUserSubscriptionResponseCollection struct {
}

// BillSubsApiUserSubscriptionResponseCollectionListMatch is the typed request payload for BillSubsApiUserSubscriptionResponseCollection.ListTyped.
type BillSubsApiUserSubscriptionResponseCollectionListMatch struct {
	Result *[]any `json:"result,omitempty"`
}

// BillSubsApiUserSubscriptionResponseSingle is the typed data model for the bill_subs_api_user_subscription_response_single entity.
type BillSubsApiUserSubscriptionResponseSingle struct {
}

// BillSubsApiUserSubscriptionResponseSingleCreateData is the typed request payload for BillSubsApiUserSubscriptionResponseSingle.CreateTyped.
type BillSubsApiUserSubscriptionResponseSingleCreateData struct {
	App *map[string]any `json:"app,omitempty"`
	ComponentValues *[]any `json:"component_values,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentPeriodEnd *string `json:"current_period_end,omitempty"`
	CurrentPeriodStart *string `json:"current_period_start,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Id *string `json:"id,omitempty"`
	Price *float64 `json:"price,omitempty"`
	RatePlan *map[string]any `json:"rate_plan,omitempty"`
	State *string `json:"state,omitempty"`
	Zone *map[string]any `json:"zone,omitempty"`
}

// BillSubsApiUserSubscriptionResponseSingleUpdateData is the typed request payload for BillSubsApiUserSubscriptionResponseSingle.UpdateTyped.
type BillSubsApiUserSubscriptionResponseSingleUpdateData struct {
	Identifier string `json:"identifier"`
	App *map[string]any `json:"app,omitempty"`
	ComponentValues *[]any `json:"component_values,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentPeriodEnd *string `json:"current_period_end,omitempty"`
	CurrentPeriodStart *string `json:"current_period_start,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Id *string `json:"id,omitempty"`
	Price *float64 `json:"price,omitempty"`
	RatePlan *map[string]any `json:"rate_plan,omitempty"`
	State *string `json:"state,omitempty"`
	Zone *map[string]any `json:"zone,omitempty"`
}

// BillSubsApiZoneSubscriptionResponseSingle is the typed data model for the bill_subs_api_zone_subscription_response_single entity.
type BillSubsApiZoneSubscriptionResponseSingle struct {
}

// BillSubsApiZoneSubscriptionResponseSingleLoadMatch is the typed request payload for BillSubsApiZoneSubscriptionResponseSingle.LoadTyped.
type BillSubsApiZoneSubscriptionResponseSingleLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// BillSubsApiZoneSubscriptionResponseSingleCreateData is the typed request payload for BillSubsApiZoneSubscriptionResponseSingle.CreateTyped.
type BillSubsApiZoneSubscriptionResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	App *map[string]any `json:"app,omitempty"`
	ComponentValues *[]any `json:"component_values,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentPeriodEnd *string `json:"current_period_end,omitempty"`
	CurrentPeriodStart *string `json:"current_period_start,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Id *string `json:"id,omitempty"`
	Price *float64 `json:"price,omitempty"`
	RatePlan *map[string]any `json:"rate_plan,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Zone *map[string]any `json:"zone,omitempty"`
}

// BillSubsApiZoneSubscriptionResponseSingleUpdateData is the typed request payload for BillSubsApiZoneSubscriptionResponseSingle.UpdateTyped.
type BillSubsApiZoneSubscriptionResponseSingleUpdateData struct {
	ZoneId string `json:"zone_id"`
	App *map[string]any `json:"app,omitempty"`
	ComponentValues *[]any `json:"component_values,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentPeriodEnd *string `json:"current_period_end,omitempty"`
	CurrentPeriodStart *string `json:"current_period_start,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Id *string `json:"id,omitempty"`
	Price *float64 `json:"price,omitempty"`
	RatePlan *map[string]any `json:"rate_plan,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Zone *map[string]any `json:"zone,omitempty"`
}

// BillableUsage is the typed data model for the billable_usage entity.
type BillableUsage struct {
}

// BillableUsageListMatch is the typed request payload for BillableUsage.ListTyped.
type BillableUsageListMatch struct {
	AccountId string `json:"account_id"`
	From *string `json:"from,omitempty"`
	To *string `json:"to,omitempty"`
}

// BillableUsageApiUsageInfo is the typed data model for the billable_usage_api_usage_info entity.
type BillableUsageApiUsageInfo struct {
}

// BillableUsageApiUsageInfoListMatch is the typed request payload for BillableUsageApiUsageInfo.ListTyped.
type BillableUsageApiUsageInfoListMatch struct {
	AccountId string `json:"account_id"`
}

// BillableUsageApiV2AccountBillableMetric is the typed data model for the billable_usage_api_v2_account_billable_metric entity.
type BillableUsageApiV2AccountBillableMetric struct {
}

// BillableUsageApiV2AccountBillableMetricListMatch is the typed request payload for BillableUsageApiV2AccountBillableMetric.ListTyped.
type BillableUsageApiV2AccountBillableMetricListMatch struct {
	AccountId string `json:"account_id"`
	From *string `json:"from,omitempty"`
	To *string `json:"to,omitempty"`
}

// BillableUsageApiV2Usage is the typed data model for the billable_usage_api_v2_usage entity.
type BillableUsageApiV2Usage struct {
}

// BillableUsageApiV2UsageListMatch is the typed request payload for BillableUsageApiV2Usage.ListTyped.
type BillableUsageApiV2UsageListMatch struct {
	AccountId string `json:"account_id"`
	From *string `json:"from,omitempty"`
	To *string `json:"to,omitempty"`
}

// BillableUsageApiV2UsageCreateData is the typed request payload for BillableUsageApiV2Usage.CreateTyped.
type BillableUsageApiV2UsageCreateData struct {
	AccountId string `json:"account_id"`
	FilterBy *map[string]any `json:"FilterBy,omitempty"`
	GroupBy *[]any `json:"GroupBy,omitempty"`
	TimePeriod *map[string]any `json:"TimePeriod,omitempty"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result []any `json:"result"`
	Success bool `json:"success"`
}

// CancelDowngrade is the typed data model for the cancel_downgrade entity.
type CancelDowngrade struct {
}

// CancelDowngradeCreateData is the typed request payload for CancelDowngrade.CreateTyped.
type CancelDowngradeCreateData struct {
	AccountId string `json:"account_id"`
	SubscriptionIds *[]any `json:"subscription_ids,omitempty"`
}

// Entitlement is the typed data model for the entitlement entity.
type Entitlement struct {
}

// EntitlementListMatch is the typed request payload for Entitlement.ListTyped.
type EntitlementListMatch struct {
	AccountId string `json:"account_id"`
}

// Invoice is the typed data model for the invoice entity.
type Invoice struct {
}

// InvoiceUpdateData is the typed request payload for Invoice.UpdateTyped.
type InvoiceUpdateData struct {
	AccountId string `json:"account_id"`
	Toggle *bool `json:"toggle,omitempty"`
}

// PaymentMethod is the typed data model for the payment_method entity.
type PaymentMethod struct {
}

// PaymentMethodRemoveMatch is the typed request payload for PaymentMethod.RemoveTyped.
type PaymentMethodRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// SetAsDefault is the typed data model for the set_as_default entity.
type SetAsDefault struct {
}

// SetAsDefaultCreateData is the typed request payload for SetAsDefault.CreateTyped.
type SetAsDefaultCreateData struct {
	AccountId string `json:"account_id"`
	PaymentMethodId string `json:"payment_method_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result any `json:"result"`
	Success bool `json:"success"`
}

// Usage is the typed data model for the usage entity.
type Usage struct {
}

// UsageListMatch is the typed request payload for Usage.ListTyped.
type UsageListMatch struct {
	AccountId string `json:"account_id"`
	Filter *string `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metric *string `json:"metric,omitempty"`
	Since *string `json:"since,omitempty"`
	TimeDelta *string `json:"time_delta,omitempty"`
	Until *string `json:"until,omitempty"`
}

// UserSubscription is the typed data model for the user_subscription entity.
type UserSubscription struct {
}

// UserSubscriptionRemoveMatch is the typed request payload for UserSubscription.RemoveTyped.
type UserSubscriptionRemoveMatch struct {
	Id string `json:"id"`
}

// ZoneRatePlan is the typed data model for the zone_rate_plan entity.
type ZoneRatePlan struct {
}

// ZoneRatePlanLoadMatch is the typed request payload for ZoneRatePlan.LoadTyped.
type ZoneRatePlanLoadMatch struct {
	PlanIdentifier string `json:"plan_identifier"`
	ZoneId string `json:"zone_id"`
}

// ZoneRatePlanListMatch is the typed request payload for ZoneRatePlan.ListTyped.
type ZoneRatePlanListMatch struct {
	Id string `json:"id"`
}

// ZoneSubscription is the typed data model for the zone_subscription entity.
type ZoneSubscription struct {
}

// ZoneSubscriptionRemoveMatch is the typed request payload for ZoneSubscription.RemoveTyped.
type ZoneSubscriptionRemoveMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
