package voxgigcloudflarebillingsdk

import (
	"github.com/voxgig-sdk/cloudflare-billing-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-billing-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-billing-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-billing-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareBillingSDK = core.CloudflareBillingSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareBillingEntity = core.CloudflareBillingEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareBillingError = core.CloudflareBillingError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccountBillingEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewAccountBillingEntity(client, entopts)
	}
	core.NewAccountBillingProfileEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewAccountBillingProfileEntity(client, entopts)
	}
	core.NewAccountSubscriptionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewAccountSubscriptionEntity(client, entopts)
	}
	core.NewBillSubsApiAccountBillingHistoryCollectionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiAccountBillingHistoryCollectionEntity(client, entopts)
	}
	core.NewBillSubsApiAccountCreditEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiAccountCreditEntity(client, entopts)
	}
	core.NewBillSubsApiAccountSubscriptionResponseCollectionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiAccountSubscriptionResponseCollectionEntity(client, entopts)
	}
	core.NewBillSubsApiAccountSubscriptionResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiAccountSubscriptionResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiAddressValidationResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiAddressValidationResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiBadDebtResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiBadDebtResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiBillingHistoryCollectionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiBillingHistoryCollectionEntity(client, entopts)
	}
	core.NewBillSubsApiBillingResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiBillingResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiCancelReasonResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiCancelReasonResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiClientSecretResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiClientSecretResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiPaymentIntentResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiPaymentIntentResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiPaymentMethodResponseCollectionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiPaymentMethodResponseCollectionEntity(client, entopts)
	}
	core.NewBillSubsApiPaymentMethodResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiPaymentMethodResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiPlanResponseCollectionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiPlanResponseCollectionEntity(client, entopts)
	}
	core.NewBillSubsApiRatePlanSimpleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiRatePlanSimpleEntity(client, entopts)
	}
	core.NewBillSubsApiUnpaidInvoicesResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiUnpaidInvoicesResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiUserSubscriptionResponseCollectionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiUserSubscriptionResponseCollectionEntity(client, entopts)
	}
	core.NewBillSubsApiUserSubscriptionResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiUserSubscriptionResponseSingleEntity(client, entopts)
	}
	core.NewBillSubsApiZoneSubscriptionResponseSingleEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillSubsApiZoneSubscriptionResponseSingleEntity(client, entopts)
	}
	core.NewBillableUsageEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillableUsageEntity(client, entopts)
	}
	core.NewBillableUsageApiUsageInfoEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillableUsageApiUsageInfoEntity(client, entopts)
	}
	core.NewBillableUsageApiV2AccountBillableMetricEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillableUsageApiV2AccountBillableMetricEntity(client, entopts)
	}
	core.NewBillableUsageApiV2UsageEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewBillableUsageApiV2UsageEntity(client, entopts)
	}
	core.NewCancelDowngradeEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewCancelDowngradeEntity(client, entopts)
	}
	core.NewEntitlementEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewEntitlementEntity(client, entopts)
	}
	core.NewInvoiceEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewInvoiceEntity(client, entopts)
	}
	core.NewPaymentMethodEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewPaymentMethodEntity(client, entopts)
	}
	core.NewSetAsDefaultEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewSetAsDefaultEntity(client, entopts)
	}
	core.NewUsageEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewUsageEntity(client, entopts)
	}
	core.NewUserSubscriptionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewUserSubscriptionEntity(client, entopts)
	}
	core.NewZoneRatePlanEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewZoneRatePlanEntity(client, entopts)
	}
	core.NewZoneSubscriptionEntityFunc = func(client *core.CloudflareBillingSDK, entopts map[string]any) core.CloudflareBillingEntity {
		return entity.NewZoneSubscriptionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareBillingSDK = core.NewCloudflareBillingSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareBillingSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareBillingSDK  { return NewCloudflareBillingSDK(nil) }
func Test() *CloudflareBillingSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
