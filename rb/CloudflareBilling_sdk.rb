# CloudflareBilling SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareBilling_types'


class CloudflareBillingSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareBillingUtility.new
    @_utility = utility

    config = CloudflareBillingConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareBillingHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareBillingHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareBillingFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareBillingUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareBillingSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareBillingError.new(
        "#{op}_allow",
        "CloudflareBillingSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareBillingError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareBillingHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareBillingError.new(
        "graphql_error", "CloudflareBillingSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.AccountBilling.list / client.AccountBilling.load({ "id" => ... })
  def AccountBilling(data = nil)
    require_relative 'entity/account_billing_entity'
    AccountBillingEntity.new(self, data)
  end


  # Canonical facade: client.AccountBillingProfile.list / client.AccountBillingProfile.load({ "id" => ... })
  def AccountBillingProfile(data = nil)
    require_relative 'entity/account_billing_profile_entity'
    AccountBillingProfileEntity.new(self, data)
  end


  # Canonical facade: client.AccountSubscription.list / client.AccountSubscription.load({ "id" => ... })
  def AccountSubscription(data = nil)
    require_relative 'entity/account_subscription_entity'
    AccountSubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiAccountBillingHistoryCollection.list / client.BillSubsApiAccountBillingHistoryCollection.load({ "id" => ... })
  def BillSubsApiAccountBillingHistoryCollection(data = nil)
    require_relative 'entity/bill_subs_api_account_billing_history_collection_entity'
    BillSubsApiAccountBillingHistoryCollectionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiAccountCredit.list / client.BillSubsApiAccountCredit.load({ "id" => ... })
  def BillSubsApiAccountCredit(data = nil)
    require_relative 'entity/bill_subs_api_account_credit_entity'
    BillSubsApiAccountCreditEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiAccountSubscriptionResponseCollection.list / client.BillSubsApiAccountSubscriptionResponseCollection.load({ "id" => ... })
  def BillSubsApiAccountSubscriptionResponseCollection(data = nil)
    require_relative 'entity/bill_subs_api_account_subscription_response_collection_entity'
    BillSubsApiAccountSubscriptionResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiAccountSubscriptionResponseSingle.list / client.BillSubsApiAccountSubscriptionResponseSingle.load({ "id" => ... })
  def BillSubsApiAccountSubscriptionResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_account_subscription_response_single_entity'
    BillSubsApiAccountSubscriptionResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiAddressValidationResponseSingle.list / client.BillSubsApiAddressValidationResponseSingle.load({ "id" => ... })
  def BillSubsApiAddressValidationResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_address_validation_response_single_entity'
    BillSubsApiAddressValidationResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiBadDebtResponseSingle.list / client.BillSubsApiBadDebtResponseSingle.load({ "id" => ... })
  def BillSubsApiBadDebtResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_bad_debt_response_single_entity'
    BillSubsApiBadDebtResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiBillingHistoryCollection.list / client.BillSubsApiBillingHistoryCollection.load({ "id" => ... })
  def BillSubsApiBillingHistoryCollection(data = nil)
    require_relative 'entity/bill_subs_api_billing_history_collection_entity'
    BillSubsApiBillingHistoryCollectionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiBillingResponseSingle.list / client.BillSubsApiBillingResponseSingle.load({ "id" => ... })
  def BillSubsApiBillingResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_billing_response_single_entity'
    BillSubsApiBillingResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiCancelReasonResponseSingle.list / client.BillSubsApiCancelReasonResponseSingle.load({ "id" => ... })
  def BillSubsApiCancelReasonResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_cancel_reason_response_single_entity'
    BillSubsApiCancelReasonResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiClientSecretResponseSingle.list / client.BillSubsApiClientSecretResponseSingle.load({ "id" => ... })
  def BillSubsApiClientSecretResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_client_secret_response_single_entity'
    BillSubsApiClientSecretResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiPaymentIntentResponseSingle.list / client.BillSubsApiPaymentIntentResponseSingle.load({ "id" => ... })
  def BillSubsApiPaymentIntentResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_payment_intent_response_single_entity'
    BillSubsApiPaymentIntentResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiPaymentMethodResponseCollection.list / client.BillSubsApiPaymentMethodResponseCollection.load({ "id" => ... })
  def BillSubsApiPaymentMethodResponseCollection(data = nil)
    require_relative 'entity/bill_subs_api_payment_method_response_collection_entity'
    BillSubsApiPaymentMethodResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiPaymentMethodResponseSingle.list / client.BillSubsApiPaymentMethodResponseSingle.load({ "id" => ... })
  def BillSubsApiPaymentMethodResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_payment_method_response_single_entity'
    BillSubsApiPaymentMethodResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiPlanResponseCollection.list / client.BillSubsApiPlanResponseCollection.load({ "id" => ... })
  def BillSubsApiPlanResponseCollection(data = nil)
    require_relative 'entity/bill_subs_api_plan_response_collection_entity'
    BillSubsApiPlanResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiRatePlanSimple.list / client.BillSubsApiRatePlanSimple.load({ "id" => ... })
  def BillSubsApiRatePlanSimple(data = nil)
    require_relative 'entity/bill_subs_api_rate_plan_simple_entity'
    BillSubsApiRatePlanSimpleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiUnpaidInvoicesResponseSingle.list / client.BillSubsApiUnpaidInvoicesResponseSingle.load({ "id" => ... })
  def BillSubsApiUnpaidInvoicesResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_unpaid_invoices_response_single_entity'
    BillSubsApiUnpaidInvoicesResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiUserSubscriptionResponseCollection.list / client.BillSubsApiUserSubscriptionResponseCollection.load({ "id" => ... })
  def BillSubsApiUserSubscriptionResponseCollection(data = nil)
    require_relative 'entity/bill_subs_api_user_subscription_response_collection_entity'
    BillSubsApiUserSubscriptionResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiUserSubscriptionResponseSingle.list / client.BillSubsApiUserSubscriptionResponseSingle.load({ "id" => ... })
  def BillSubsApiUserSubscriptionResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_user_subscription_response_single_entity'
    BillSubsApiUserSubscriptionResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiZoneSubscriptionResponseSingle.list / client.BillSubsApiZoneSubscriptionResponseSingle.load({ "id" => ... })
  def BillSubsApiZoneSubscriptionResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_zone_subscription_response_single_entity'
    BillSubsApiZoneSubscriptionResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillableUsage.list / client.BillableUsage.load({ "id" => ... })
  def BillableUsage(data = nil)
    require_relative 'entity/billable_usage_entity'
    BillableUsageEntity.new(self, data)
  end


  # Canonical facade: client.BillableUsageApiUsageInfo.list / client.BillableUsageApiUsageInfo.load({ "id" => ... })
  def BillableUsageApiUsageInfo(data = nil)
    require_relative 'entity/billable_usage_api_usage_info_entity'
    BillableUsageApiUsageInfoEntity.new(self, data)
  end


  # Canonical facade: client.BillableUsageApiV2AccountBillableMetric.list / client.BillableUsageApiV2AccountBillableMetric.load({ "id" => ... })
  def BillableUsageApiV2AccountBillableMetric(data = nil)
    require_relative 'entity/billable_usage_api_v2_account_billable_metric_entity'
    BillableUsageApiV2AccountBillableMetricEntity.new(self, data)
  end


  # Canonical facade: client.BillableUsageApiV2Usage.list / client.BillableUsageApiV2Usage.load({ "id" => ... })
  def BillableUsageApiV2Usage(data = nil)
    require_relative 'entity/billable_usage_api_v2_usage_entity'
    BillableUsageApiV2UsageEntity.new(self, data)
  end


  # Canonical facade: client.CancelDowngrade.list / client.CancelDowngrade.load({ "id" => ... })
  def CancelDowngrade(data = nil)
    require_relative 'entity/cancel_downgrade_entity'
    CancelDowngradeEntity.new(self, data)
  end


  # Canonical facade: client.Entitlement.list / client.Entitlement.load({ "id" => ... })
  def Entitlement(data = nil)
    require_relative 'entity/entitlement_entity'
    EntitlementEntity.new(self, data)
  end


  # Canonical facade: client.Invoice.list / client.Invoice.load({ "id" => ... })
  def Invoice(data = nil)
    require_relative 'entity/invoice_entity'
    InvoiceEntity.new(self, data)
  end


  # Canonical facade: client.PaymentMethod.list / client.PaymentMethod.load({ "id" => ... })
  def PaymentMethod(data = nil)
    require_relative 'entity/payment_method_entity'
    PaymentMethodEntity.new(self, data)
  end


  # Canonical facade: client.SetAsDefault.list / client.SetAsDefault.load({ "id" => ... })
  def SetAsDefault(data = nil)
    require_relative 'entity/set_as_default_entity'
    SetAsDefaultEntity.new(self, data)
  end


  # Canonical facade: client.Usage.list / client.Usage.load({ "id" => ... })
  def Usage(data = nil)
    require_relative 'entity/usage_entity'
    UsageEntity.new(self, data)
  end


  # Canonical facade: client.UserSubscription.list / client.UserSubscription.load({ "id" => ... })
  def UserSubscription(data = nil)
    require_relative 'entity/user_subscription_entity'
    UserSubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.ZoneRatePlan.list / client.ZoneRatePlan.load({ "id" => ... })
  def ZoneRatePlan(data = nil)
    require_relative 'entity/zone_rate_plan_entity'
    ZoneRatePlanEntity.new(self, data)
  end


  # Canonical facade: client.ZoneSubscription.list / client.ZoneSubscription.load({ "id" => ... })
  def ZoneSubscription(data = nil)
    require_relative 'entity/zone_subscription_entity'
    ZoneSubscriptionEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareBillingSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
