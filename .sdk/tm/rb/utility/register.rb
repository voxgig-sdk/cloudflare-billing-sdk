# CloudflareBilling SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareBillingUtility.registrar = ->(u) {
  u.clean = CloudflareBillingUtilities::Clean
  u.done = CloudflareBillingUtilities::Done
  u.make_error = CloudflareBillingUtilities::MakeError
  u.feature_add = CloudflareBillingUtilities::FeatureAdd
  u.feature_hook = CloudflareBillingUtilities::FeatureHook
  u.feature_init = CloudflareBillingUtilities::FeatureInit
  u.fetcher = CloudflareBillingUtilities::Fetcher
  u.make_fetch_def = CloudflareBillingUtilities::MakeFetchDef
  u.make_context = CloudflareBillingUtilities::MakeContext
  u.make_options = CloudflareBillingUtilities::MakeOptions
  u.make_request = CloudflareBillingUtilities::MakeRequest
  u.make_response = CloudflareBillingUtilities::MakeResponse
  u.make_result = CloudflareBillingUtilities::MakeResult
  u.make_point = CloudflareBillingUtilities::MakePoint
  u.make_spec = CloudflareBillingUtilities::MakeSpec
  u.make_url = CloudflareBillingUtilities::MakeUrl
  u.param = CloudflareBillingUtilities::Param
  u.prepare_auth = CloudflareBillingUtilities::PrepareAuth
  u.prepare_body = CloudflareBillingUtilities::PrepareBody
  u.prepare_headers = CloudflareBillingUtilities::PrepareHeaders
  u.prepare_method = CloudflareBillingUtilities::PrepareMethod
  u.prepare_params = CloudflareBillingUtilities::PrepareParams
  u.prepare_path = CloudflareBillingUtilities::PreparePath
  u.prepare_query = CloudflareBillingUtilities::PrepareQuery
  u.graphql_body = CloudflareBillingUtilities::GraphqlBody
  u.graphql_errors = CloudflareBillingUtilities::GraphqlErrors
  u.result_basic = CloudflareBillingUtilities::ResultBasic
  u.result_body = CloudflareBillingUtilities::ResultBody
  u.result_headers = CloudflareBillingUtilities::ResultHeaders
  u.transform_request = CloudflareBillingUtilities::TransformRequest
  u.transform_response = CloudflareBillingUtilities::TransformResponse
}
