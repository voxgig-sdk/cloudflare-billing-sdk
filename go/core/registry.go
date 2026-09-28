package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccountBillingEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewAccountBillingProfileEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewAccountSubscriptionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiAccountBillingHistoryCollectionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiAccountCreditEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiAccountSubscriptionResponseCollectionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiAccountSubscriptionResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiAddressValidationResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiBadDebtResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiBillingHistoryCollectionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiBillingResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiCancelReasonResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiClientSecretResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiPaymentIntentResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiPaymentMethodResponseCollectionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiPaymentMethodResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiPlanResponseCollectionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiRatePlanSimpleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiUnpaidInvoicesResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiUserSubscriptionResponseCollectionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiUserSubscriptionResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillSubsApiZoneSubscriptionResponseSingleEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillableUsageEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillableUsageApiUsageInfoEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillableUsageApiV2AccountBillableMetricEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewBillableUsageApiV2UsageEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewCancelDowngradeEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewEntitlementEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewInvoiceEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewPaymentMethodEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewSetAsDefaultEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewUsageEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewUserSubscriptionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewZoneRatePlanEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

var NewZoneSubscriptionEntityFunc func(client *CloudflareBillingSDK, entopts map[string]any) CloudflareBillingEntity

