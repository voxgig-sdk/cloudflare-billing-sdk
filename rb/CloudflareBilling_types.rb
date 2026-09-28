# frozen_string_literal: true

# Typed models for the CloudflareBilling SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AccountBilling entity data model.
class AccountBilling
end

# Request payload for AccountBilling#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] receipt_id
#   @return [String]
#
# @!attribute [rw] doctype
#   @return [String, nil]
AccountBillingLoadMatch = Struct.new(
  :account_id,
  :receipt_id,
  :doctype,
  keyword_init: true
)

# AccountBillingProfile entity data model.
class AccountBillingProfile
end

# Request payload for AccountBillingProfile#remove.
#
# @!attribute [rw] account_id
#   @return [String]
AccountBillingProfileRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AccountSubscription entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
AccountSubscription = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AccountSubscription#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AccountSubscriptionRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# BillSubsApiAccountBillingHistoryCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiAccountBillingHistoryCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiAccountBillingHistoryCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
BillSubsApiAccountBillingHistoryCollectionListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# BillSubsApiAccountCredit entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiAccountCredit = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiAccountCredit#load.
#
# @!attribute [rw] account_id
#   @return [String]
BillSubsApiAccountCreditLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# BillSubsApiAccountSubscriptionResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiAccountSubscriptionResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiAccountSubscriptionResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
BillSubsApiAccountSubscriptionResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# BillSubsApiAccountSubscriptionResponseSingle entity data model.
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiAccountSubscriptionResponseSingle = Struct.new(
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :result,
  :state,
  :zone,
  keyword_init: true
)

# Request payload for BillSubsApiAccountSubscriptionResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subscription_identifier
#   @return [String]
BillSubsApiAccountSubscriptionResponseSingleLoadMatch = Struct.new(
  :account_id,
  :subscription_identifier,
  keyword_init: true
)

# Request payload for BillSubsApiAccountSubscriptionResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subscription_id
#   @return [String, nil]
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiAccountSubscriptionResponseSingleCreateData = Struct.new(
  :account_id,
  :subscription_id,
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :result,
  :state,
  :zone,
  keyword_init: true
)

# Request payload for BillSubsApiAccountSubscriptionResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subscription_identifier
#   @return [String]
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiAccountSubscriptionResponseSingleUpdateData = Struct.new(
  :account_id,
  :subscription_identifier,
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :result,
  :state,
  :zone,
  keyword_init: true
)

# BillSubsApiAddressValidationResponseSingle entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiAddressValidationResponseSingle = Struct.new(
  :address,
  :address2,
  :city,
  :country,
  :state,
  :zipcode,
  keyword_init: true
)

# Request payload for BillSubsApiAddressValidationResponseSingle#create.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiAddressValidationResponseSingleCreateData = Struct.new(
  :address,
  :address2,
  :city,
  :country,
  :state,
  :zipcode,
  keyword_init: true
)

# BillSubsApiBadDebtResponseSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiBadDebtResponseSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiBadDebtResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
BillSubsApiBadDebtResponseSingleLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# BillSubsApiBillingHistoryCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiBillingHistoryCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiBillingHistoryCollection#list.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] occurred_at
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
BillSubsApiBillingHistoryCollectionListMatch = Struct.new(
  :action,
  :occurred_at,
  :order,
  :page,
  :per_page,
  :type,
  keyword_init: true
)

# BillSubsApiBillingResponseSingle entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] billing_email
#   @return [String, nil]
#
# @!attribute [rw] buying_rate_plan
#   @return [String, nil]
#
# @!attribute [rw] captcha_challenge_jwt
#   @return [String, nil]
#
# @!attribute [rw] cf_turnstile_response
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] h_captcha_response
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] preferred_locale
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secondary_billing_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] tax_id_type
#   @return [String, nil]
#
# @!attribute [rw] telephone
#   @return [String, nil]
#
# @!attribute [rw] vat
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiBillingResponseSingle = Struct.new(
  :address,
  :address2,
  :billing_email,
  :buying_rate_plan,
  :captcha_challenge_jwt,
  :cf_turnstile_response,
  :city,
  :company,
  :country,
  :first_name,
  :h_captcha_response,
  :last_name,
  :preferred_locale,
  :result,
  :secondary_billing_email,
  :state,
  :tax_id_type,
  :telephone,
  :vat,
  :zipcode,
  keyword_init: true
)

# Request payload for BillSubsApiBillingResponseSingle#load.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] billing_email
#   @return [String, nil]
#
# @!attribute [rw] buying_rate_plan
#   @return [String, nil]
#
# @!attribute [rw] captcha_challenge_jwt
#   @return [String, nil]
#
# @!attribute [rw] cf_turnstile_response
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] h_captcha_response
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] preferred_locale
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secondary_billing_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] tax_id_type
#   @return [String, nil]
#
# @!attribute [rw] telephone
#   @return [String, nil]
#
# @!attribute [rw] vat
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiBillingResponseSingleLoadMatch = Struct.new(
  :address,
  :address2,
  :billing_email,
  :buying_rate_plan,
  :captcha_challenge_jwt,
  :cf_turnstile_response,
  :city,
  :company,
  :country,
  :first_name,
  :h_captcha_response,
  :last_name,
  :preferred_locale,
  :result,
  :secondary_billing_email,
  :state,
  :tax_id_type,
  :telephone,
  :vat,
  :zipcode,
  keyword_init: true
)

# Request payload for BillSubsApiBillingResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] billing_email
#   @return [String, nil]
#
# @!attribute [rw] buying_rate_plan
#   @return [String, nil]
#
# @!attribute [rw] captcha_challenge_jwt
#   @return [String, nil]
#
# @!attribute [rw] cf_turnstile_response
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] h_captcha_response
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] preferred_locale
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secondary_billing_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] tax_id_type
#   @return [String, nil]
#
# @!attribute [rw] telephone
#   @return [String, nil]
#
# @!attribute [rw] vat
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiBillingResponseSingleCreateData = Struct.new(
  :account_id,
  :address,
  :address2,
  :billing_email,
  :buying_rate_plan,
  :captcha_challenge_jwt,
  :cf_turnstile_response,
  :city,
  :company,
  :country,
  :first_name,
  :h_captcha_response,
  :last_name,
  :preferred_locale,
  :result,
  :secondary_billing_email,
  :state,
  :tax_id_type,
  :telephone,
  :vat,
  :zipcode,
  keyword_init: true
)

# Request payload for BillSubsApiBillingResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] billing_email
#   @return [String, nil]
#
# @!attribute [rw] buying_rate_plan
#   @return [String, nil]
#
# @!attribute [rw] captcha_challenge_jwt
#   @return [String, nil]
#
# @!attribute [rw] cf_turnstile_response
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] h_captcha_response
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] preferred_locale
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secondary_billing_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] tax_id_type
#   @return [String, nil]
#
# @!attribute [rw] telephone
#   @return [String, nil]
#
# @!attribute [rw] vat
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiBillingResponseSingleUpdateData = Struct.new(
  :account_id,
  :address,
  :address2,
  :billing_email,
  :buying_rate_plan,
  :captcha_challenge_jwt,
  :cf_turnstile_response,
  :city,
  :company,
  :country,
  :first_name,
  :h_captcha_response,
  :last_name,
  :preferred_locale,
  :result,
  :secondary_billing_email,
  :state,
  :tax_id_type,
  :telephone,
  :vat,
  :zipcode,
  keyword_init: true
)

# BillSubsApiCancelReasonResponseSingle entity data model.
#
# @!attribute [rw] other
#   @return [String, nil]
#
# @!attribute [rw] reason_code
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiCancelReasonResponseSingle = Struct.new(
  :other,
  :reason_code,
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiCancelReasonResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subscription_identifier
#   @return [String]
BillSubsApiCancelReasonResponseSingleLoadMatch = Struct.new(
  :account_id,
  :subscription_identifier,
  keyword_init: true
)

# Request payload for BillSubsApiCancelReasonResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subscription_identifier
#   @return [String]
#
# @!attribute [rw] other
#   @return [String, nil]
#
# @!attribute [rw] reason_code
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiCancelReasonResponseSingleCreateData = Struct.new(
  :account_id,
  :subscription_identifier,
  :other,
  :reason_code,
  :result,
  keyword_init: true
)

# BillSubsApiClientSecretResponseSingle entity data model.
#
# @!attribute [rw] invoice_id
#   @return [String, nil]
#
# @!attribute [rw] payment_method_id
#   @return [String, nil]
#
# @!attribute [rw] validate_payment_method
#   @return [Boolean, nil]
BillSubsApiClientSecretResponseSingle = Struct.new(
  :invoice_id,
  :payment_method_id,
  :validate_payment_method,
  keyword_init: true
)

# Request payload for BillSubsApiClientSecretResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] invoice_id
#   @return [String, nil]
#
# @!attribute [rw] payment_method_id
#   @return [String, nil]
#
# @!attribute [rw] validate_payment_method
#   @return [Boolean, nil]
BillSubsApiClientSecretResponseSingleCreateData = Struct.new(
  :account_id,
  :invoice_id,
  :payment_method_id,
  :validate_payment_method,
  keyword_init: true
)

# BillSubsApiPaymentIntentResponseSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiPaymentIntentResponseSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiPaymentIntentResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiPaymentIntentResponseSingleCreateData = Struct.new(
  :account_id,
  :result,
  keyword_init: true
)

# BillSubsApiPaymentMethodResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiPaymentMethodResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiPaymentMethodResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
BillSubsApiPaymentMethodResponseCollectionListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# BillSubsApiPaymentMethodResponseSingle entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] bank_account_type
#   @return [String, nil]
#
# @!attribute [rw] bank_code
#   @return [String, nil]
#
# @!attribute [rw] bank_country
#   @return [String, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] bank_routing_number
#   @return [String, nil]
#
# @!attribute [rw] cashapp_cash_tag
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] device_data
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_four
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] nick_name
#   @return [String, nil]
#
# @!attribute [rw] payment_account_email
#   @return [String, nil]
#
# @!attribute [rw] payment_email
#   @return [String, nil]
#
# @!attribute [rw] payment_gateway
#   @return [String, nil]
#
# @!attribute [rw] payment_nonce
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiPaymentMethodResponseSingle = Struct.new(
  :address,
  :address2,
  :bank_account_type,
  :bank_code,
  :bank_country,
  :bank_name,
  :bank_routing_number,
  :cashapp_cash_tag,
  :city,
  :country,
  :default,
  :device_data,
  :expiration_date,
  :first_name,
  :id,
  :last_four,
  :last_name,
  :nick_name,
  :payment_account_email,
  :payment_email,
  :payment_gateway,
  :payment_nonce,
  :result,
  :state,
  :type,
  :zipcode,
  keyword_init: true
)

# Request payload for BillSubsApiPaymentMethodResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] payment_method_id
#   @return [String]
BillSubsApiPaymentMethodResponseSingleLoadMatch = Struct.new(
  :account_id,
  :payment_method_id,
  keyword_init: true
)

# Request payload for BillSubsApiPaymentMethodResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] bank_account_type
#   @return [String, nil]
#
# @!attribute [rw] bank_code
#   @return [String, nil]
#
# @!attribute [rw] bank_country
#   @return [String, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] bank_routing_number
#   @return [String, nil]
#
# @!attribute [rw] cashapp_cash_tag
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] device_data
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_four
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] nick_name
#   @return [String, nil]
#
# @!attribute [rw] payment_account_email
#   @return [String, nil]
#
# @!attribute [rw] payment_email
#   @return [String, nil]
#
# @!attribute [rw] payment_gateway
#   @return [String, nil]
#
# @!attribute [rw] payment_nonce
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiPaymentMethodResponseSingleCreateData = Struct.new(
  :account_id,
  :address,
  :address2,
  :bank_account_type,
  :bank_code,
  :bank_country,
  :bank_name,
  :bank_routing_number,
  :cashapp_cash_tag,
  :city,
  :country,
  :default,
  :device_data,
  :expiration_date,
  :first_name,
  :id,
  :last_four,
  :last_name,
  :nick_name,
  :payment_account_email,
  :payment_email,
  :payment_gateway,
  :payment_nonce,
  :result,
  :state,
  :type,
  :zipcode,
  keyword_init: true
)

# Request payload for BillSubsApiPaymentMethodResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] payment_method_id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address2
#   @return [String, nil]
#
# @!attribute [rw] bank_account_type
#   @return [String, nil]
#
# @!attribute [rw] bank_code
#   @return [String, nil]
#
# @!attribute [rw] bank_country
#   @return [String, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] bank_routing_number
#   @return [String, nil]
#
# @!attribute [rw] cashapp_cash_tag
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] device_data
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_four
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] nick_name
#   @return [String, nil]
#
# @!attribute [rw] payment_account_email
#   @return [String, nil]
#
# @!attribute [rw] payment_email
#   @return [String, nil]
#
# @!attribute [rw] payment_gateway
#   @return [String, nil]
#
# @!attribute [rw] payment_nonce
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
BillSubsApiPaymentMethodResponseSingleUpdateData = Struct.new(
  :account_id,
  :payment_method_id,
  :address,
  :address2,
  :bank_account_type,
  :bank_code,
  :bank_country,
  :bank_name,
  :bank_routing_number,
  :cashapp_cash_tag,
  :city,
  :country,
  :default,
  :device_data,
  :expiration_date,
  :first_name,
  :id,
  :last_four,
  :last_name,
  :nick_name,
  :payment_account_email,
  :payment_email,
  :payment_gateway,
  :payment_nonce,
  :result,
  :state,
  :type,
  :zipcode,
  keyword_init: true
)

# BillSubsApiPlanResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiPlanResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiPlanResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
BillSubsApiPlanResponseCollectionListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# BillSubsApiRatePlanSimple entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiRatePlanSimple = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiRatePlanSimple#load.
#
# @!attribute [rw] public_key
#   @return [String]
BillSubsApiRatePlanSimpleLoadMatch = Struct.new(
  :public_key,
  keyword_init: true
)

# BillSubsApiUnpaidInvoicesResponseSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiUnpaidInvoicesResponseSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiUnpaidInvoicesResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
BillSubsApiUnpaidInvoicesResponseSingleLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# BillSubsApiUserSubscriptionResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiUserSubscriptionResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiUserSubscriptionResponseCollection#list.
#
# @!attribute [rw] result
#   @return [Array, nil]
BillSubsApiUserSubscriptionResponseCollectionListMatch = Struct.new(
  :result,
  keyword_init: true
)

# BillSubsApiUserSubscriptionResponseSingle entity data model.
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiUserSubscriptionResponseSingle = Struct.new(
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :state,
  :zone,
  keyword_init: true
)

# Request payload for BillSubsApiUserSubscriptionResponseSingle#create.
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiUserSubscriptionResponseSingleCreateData = Struct.new(
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :state,
  :zone,
  keyword_init: true
)

# Request payload for BillSubsApiUserSubscriptionResponseSingle#update.
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiUserSubscriptionResponseSingleUpdateData = Struct.new(
  :identifier,
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :state,
  :zone,
  keyword_init: true
)

# BillSubsApiZoneSubscriptionResponseSingle entity data model.
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiZoneSubscriptionResponseSingle = Struct.new(
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :result,
  :state,
  :zone,
  keyword_init: true
)

# Request payload for BillSubsApiZoneSubscriptionResponseSingle#load.
#
# @!attribute [rw] zone_id
#   @return [String]
BillSubsApiZoneSubscriptionResponseSingleLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for BillSubsApiZoneSubscriptionResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiZoneSubscriptionResponseSingleCreateData = Struct.new(
  :zone_id,
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :result,
  :state,
  :zone,
  keyword_init: true
)

# Request payload for BillSubsApiZoneSubscriptionResponseSingle#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] app
#   @return [Hash, nil]
#
# @!attribute [rw] component_values
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_period_end
#   @return [String, nil]
#
# @!attribute [rw] current_period_start
#   @return [String, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rate_plan
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zone
#   @return [Hash, nil]
BillSubsApiZoneSubscriptionResponseSingleUpdateData = Struct.new(
  :zone_id,
  :app,
  :component_values,
  :currency,
  :current_period_end,
  :current_period_start,
  :frequency,
  :id,
  :price,
  :rate_plan,
  :result,
  :state,
  :zone,
  keyword_init: true
)

# BillableUsage entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BillableUsage = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for BillableUsage#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
BillableUsageListMatch = Struct.new(
  :account_id,
  :from,
  :to,
  keyword_init: true
)

# BillableUsageApiUsageInfo entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
BillableUsageApiUsageInfo = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for BillableUsageApiUsageInfo#list.
#
# @!attribute [rw] account_id
#   @return [String]
BillableUsageApiUsageInfoListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# BillableUsageApiV2AccountBillableMetric entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BillableUsageApiV2AccountBillableMetric = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for BillableUsageApiV2AccountBillableMetric#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
BillableUsageApiV2AccountBillableMetricListMatch = Struct.new(
  :account_id,
  :from,
  :to,
  keyword_init: true
)

# BillableUsageApiV2Usage entity data model.
#
# @!attribute [rw] FilterBy
#   @return [Hash, nil]
#
# @!attribute [rw] GroupBy
#   @return [Array, nil]
#
# @!attribute [rw] TimePeriod
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BillableUsageApiV2Usage = Struct.new(
  :FilterBy,
  :GroupBy,
  :TimePeriod,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for BillableUsageApiV2Usage#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
BillableUsageApiV2UsageListMatch = Struct.new(
  :account_id,
  :from,
  :to,
  keyword_init: true
)

# Request payload for BillableUsageApiV2Usage#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] FilterBy
#   @return [Hash, nil]
#
# @!attribute [rw] GroupBy
#   @return [Array, nil]
#
# @!attribute [rw] TimePeriod
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BillableUsageApiV2UsageCreateData = Struct.new(
  :account_id,
  :FilterBy,
  :GroupBy,
  :TimePeriod,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# CancelDowngrade entity data model.
#
# @!attribute [rw] subscription_ids
#   @return [Array, nil]
CancelDowngrade = Struct.new(
  :subscription_ids,
  keyword_init: true
)

# Request payload for CancelDowngrade#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subscription_ids
#   @return [Array, nil]
CancelDowngradeCreateData = Struct.new(
  :account_id,
  :subscription_ids,
  keyword_init: true
)

# Entitlement entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
Entitlement = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Entitlement#list.
#
# @!attribute [rw] account_id
#   @return [String]
EntitlementListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Invoice entity data model.
#
# @!attribute [rw] toggle
#   @return [Boolean, nil]
Invoice = Struct.new(
  :toggle,
  keyword_init: true
)

# Request payload for Invoice#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] toggle
#   @return [Boolean, nil]
InvoiceUpdateData = Struct.new(
  :account_id,
  :toggle,
  keyword_init: true
)

# PaymentMethod entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
PaymentMethod = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PaymentMethod#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PaymentMethodRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# SetAsDefault entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
SetAsDefault = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for SetAsDefault#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] payment_method_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
SetAsDefaultCreateData = Struct.new(
  :account_id,
  :payment_method_id,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Usage entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
Usage = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Usage#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric
#   @return [String, nil]
#
# @!attribute [rw] since
#   @return [String, nil]
#
# @!attribute [rw] time_delta
#   @return [String, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
UsageListMatch = Struct.new(
  :account_id,
  :filter,
  :limit,
  :metric,
  :since,
  :time_delta,
  :until,
  keyword_init: true
)

# UserSubscription entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
UserSubscription = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UserSubscription#remove.
#
# @!attribute [rw] id
#   @return [String]
UserSubscriptionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ZoneRatePlan entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZoneRatePlan = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for ZoneRatePlan#load.
#
# @!attribute [rw] plan_identifier
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneRatePlanLoadMatch = Struct.new(
  :plan_identifier,
  :zone_id,
  keyword_init: true
)

# Request payload for ZoneRatePlan#list.
#
# @!attribute [rw] id
#   @return [String]
ZoneRatePlanListMatch = Struct.new(
  :id,
  keyword_init: true
)

# ZoneSubscription entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ZoneSubscription = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ZoneSubscription#remove.
#
# @!attribute [rw] id
#   @return [String]
ZoneSubscriptionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

