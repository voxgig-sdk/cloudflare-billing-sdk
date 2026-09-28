-- CloudflareBilling SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-billing_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareBillingSDK = {}
CloudflareBillingSDK.__index = CloudflareBillingSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareBillingSDK._make_feature = _make_feature


function CloudflareBillingSDK.new(options)
  local self = setmetatable({}, CloudflareBillingSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareBillingSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareBillingSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareBillingSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareBillingSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareBillingSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareBillingSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareBillingSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareBillingSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareBillingSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareBillingSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareBillingSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AccountBilling():list() / client:AccountBilling():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:AccountBilling(data)
  local EntityMod = require("entity.account_billing_entity")
  if data == nil then
    if self._account_billing == nil then
      self._account_billing = EntityMod.new(self, nil)
    end
    return self._account_billing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountBillingProfile():list() / client:AccountBillingProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:AccountBillingProfile(data)
  local EntityMod = require("entity.account_billing_profile_entity")
  if data == nil then
    if self._account_billing_profile == nil then
      self._account_billing_profile = EntityMod.new(self, nil)
    end
    return self._account_billing_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountSubscription():list() / client:AccountSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:AccountSubscription(data)
  local EntityMod = require("entity.account_subscription_entity")
  if data == nil then
    if self._account_subscription == nil then
      self._account_subscription = EntityMod.new(self, nil)
    end
    return self._account_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiAccountBillingHistoryCollection():list() / client:BillSubsApiAccountBillingHistoryCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiAccountBillingHistoryCollection(data)
  local EntityMod = require("entity.bill_subs_api_account_billing_history_collection_entity")
  if data == nil then
    if self._bill_subs_api_account_billing_history_collection == nil then
      self._bill_subs_api_account_billing_history_collection = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_account_billing_history_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiAccountCredit():list() / client:BillSubsApiAccountCredit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiAccountCredit(data)
  local EntityMod = require("entity.bill_subs_api_account_credit_entity")
  if data == nil then
    if self._bill_subs_api_account_credit == nil then
      self._bill_subs_api_account_credit = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_account_credit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiAccountSubscriptionResponseCollection():list() / client:BillSubsApiAccountSubscriptionResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiAccountSubscriptionResponseCollection(data)
  local EntityMod = require("entity.bill_subs_api_account_subscription_response_collection_entity")
  if data == nil then
    if self._bill_subs_api_account_subscription_response_collection == nil then
      self._bill_subs_api_account_subscription_response_collection = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_account_subscription_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiAccountSubscriptionResponseSingle():list() / client:BillSubsApiAccountSubscriptionResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiAccountSubscriptionResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_account_subscription_response_single_entity")
  if data == nil then
    if self._bill_subs_api_account_subscription_response_single == nil then
      self._bill_subs_api_account_subscription_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_account_subscription_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiAddressValidationResponseSingle():list() / client:BillSubsApiAddressValidationResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiAddressValidationResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_address_validation_response_single_entity")
  if data == nil then
    if self._bill_subs_api_address_validation_response_single == nil then
      self._bill_subs_api_address_validation_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_address_validation_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiBadDebtResponseSingle():list() / client:BillSubsApiBadDebtResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiBadDebtResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_bad_debt_response_single_entity")
  if data == nil then
    if self._bill_subs_api_bad_debt_response_single == nil then
      self._bill_subs_api_bad_debt_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_bad_debt_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiBillingHistoryCollection():list() / client:BillSubsApiBillingHistoryCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiBillingHistoryCollection(data)
  local EntityMod = require("entity.bill_subs_api_billing_history_collection_entity")
  if data == nil then
    if self._bill_subs_api_billing_history_collection == nil then
      self._bill_subs_api_billing_history_collection = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_billing_history_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiBillingResponseSingle():list() / client:BillSubsApiBillingResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiBillingResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_billing_response_single_entity")
  if data == nil then
    if self._bill_subs_api_billing_response_single == nil then
      self._bill_subs_api_billing_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_billing_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiCancelReasonResponseSingle():list() / client:BillSubsApiCancelReasonResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiCancelReasonResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_cancel_reason_response_single_entity")
  if data == nil then
    if self._bill_subs_api_cancel_reason_response_single == nil then
      self._bill_subs_api_cancel_reason_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_cancel_reason_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiClientSecretResponseSingle():list() / client:BillSubsApiClientSecretResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiClientSecretResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_client_secret_response_single_entity")
  if data == nil then
    if self._bill_subs_api_client_secret_response_single == nil then
      self._bill_subs_api_client_secret_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_client_secret_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiPaymentIntentResponseSingle():list() / client:BillSubsApiPaymentIntentResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiPaymentIntentResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_payment_intent_response_single_entity")
  if data == nil then
    if self._bill_subs_api_payment_intent_response_single == nil then
      self._bill_subs_api_payment_intent_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_payment_intent_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiPaymentMethodResponseCollection():list() / client:BillSubsApiPaymentMethodResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiPaymentMethodResponseCollection(data)
  local EntityMod = require("entity.bill_subs_api_payment_method_response_collection_entity")
  if data == nil then
    if self._bill_subs_api_payment_method_response_collection == nil then
      self._bill_subs_api_payment_method_response_collection = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_payment_method_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiPaymentMethodResponseSingle():list() / client:BillSubsApiPaymentMethodResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiPaymentMethodResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_payment_method_response_single_entity")
  if data == nil then
    if self._bill_subs_api_payment_method_response_single == nil then
      self._bill_subs_api_payment_method_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_payment_method_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiPlanResponseCollection():list() / client:BillSubsApiPlanResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiPlanResponseCollection(data)
  local EntityMod = require("entity.bill_subs_api_plan_response_collection_entity")
  if data == nil then
    if self._bill_subs_api_plan_response_collection == nil then
      self._bill_subs_api_plan_response_collection = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_plan_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiRatePlanSimple():list() / client:BillSubsApiRatePlanSimple():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiRatePlanSimple(data)
  local EntityMod = require("entity.bill_subs_api_rate_plan_simple_entity")
  if data == nil then
    if self._bill_subs_api_rate_plan_simple == nil then
      self._bill_subs_api_rate_plan_simple = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_rate_plan_simple
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiUnpaidInvoicesResponseSingle():list() / client:BillSubsApiUnpaidInvoicesResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiUnpaidInvoicesResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_unpaid_invoices_response_single_entity")
  if data == nil then
    if self._bill_subs_api_unpaid_invoices_response_single == nil then
      self._bill_subs_api_unpaid_invoices_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_unpaid_invoices_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiUserSubscriptionResponseCollection():list() / client:BillSubsApiUserSubscriptionResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiUserSubscriptionResponseCollection(data)
  local EntityMod = require("entity.bill_subs_api_user_subscription_response_collection_entity")
  if data == nil then
    if self._bill_subs_api_user_subscription_response_collection == nil then
      self._bill_subs_api_user_subscription_response_collection = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_user_subscription_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiUserSubscriptionResponseSingle():list() / client:BillSubsApiUserSubscriptionResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiUserSubscriptionResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_user_subscription_response_single_entity")
  if data == nil then
    if self._bill_subs_api_user_subscription_response_single == nil then
      self._bill_subs_api_user_subscription_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_user_subscription_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiZoneSubscriptionResponseSingle():list() / client:BillSubsApiZoneSubscriptionResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillSubsApiZoneSubscriptionResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_zone_subscription_response_single_entity")
  if data == nil then
    if self._bill_subs_api_zone_subscription_response_single == nil then
      self._bill_subs_api_zone_subscription_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_zone_subscription_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillableUsage():list() / client:BillableUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillableUsage(data)
  local EntityMod = require("entity.billable_usage_entity")
  if data == nil then
    if self._billable_usage == nil then
      self._billable_usage = EntityMod.new(self, nil)
    end
    return self._billable_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillableUsageApiUsageInfo():list() / client:BillableUsageApiUsageInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillableUsageApiUsageInfo(data)
  local EntityMod = require("entity.billable_usage_api_usage_info_entity")
  if data == nil then
    if self._billable_usage_api_usage_info == nil then
      self._billable_usage_api_usage_info = EntityMod.new(self, nil)
    end
    return self._billable_usage_api_usage_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillableUsageApiV2AccountBillableMetric():list() / client:BillableUsageApiV2AccountBillableMetric():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillableUsageApiV2AccountBillableMetric(data)
  local EntityMod = require("entity.billable_usage_api_v2_account_billable_metric_entity")
  if data == nil then
    if self._billable_usage_api_v2_account_billable_metric == nil then
      self._billable_usage_api_v2_account_billable_metric = EntityMod.new(self, nil)
    end
    return self._billable_usage_api_v2_account_billable_metric
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillableUsageApiV2Usage():list() / client:BillableUsageApiV2Usage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:BillableUsageApiV2Usage(data)
  local EntityMod = require("entity.billable_usage_api_v2_usage_entity")
  if data == nil then
    if self._billable_usage_api_v2_usage == nil then
      self._billable_usage_api_v2_usage = EntityMod.new(self, nil)
    end
    return self._billable_usage_api_v2_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CancelDowngrade():list() / client:CancelDowngrade():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:CancelDowngrade(data)
  local EntityMod = require("entity.cancel_downgrade_entity")
  if data == nil then
    if self._cancel_downgrade == nil then
      self._cancel_downgrade = EntityMod.new(self, nil)
    end
    return self._cancel_downgrade
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Entitlement():list() / client:Entitlement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:Entitlement(data)
  local EntityMod = require("entity.entitlement_entity")
  if data == nil then
    if self._entitlement == nil then
      self._entitlement = EntityMod.new(self, nil)
    end
    return self._entitlement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Invoice():list() / client:Invoice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:Invoice(data)
  local EntityMod = require("entity.invoice_entity")
  if data == nil then
    if self._invoice == nil then
      self._invoice = EntityMod.new(self, nil)
    end
    return self._invoice
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentMethod():list() / client:PaymentMethod():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:PaymentMethod(data)
  local EntityMod = require("entity.payment_method_entity")
  if data == nil then
    if self._payment_method == nil then
      self._payment_method = EntityMod.new(self, nil)
    end
    return self._payment_method
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SetAsDefault():list() / client:SetAsDefault():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:SetAsDefault(data)
  local EntityMod = require("entity.set_as_default_entity")
  if data == nil then
    if self._set_as_default == nil then
      self._set_as_default = EntityMod.new(self, nil)
    end
    return self._set_as_default
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Usage():list() / client:Usage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:Usage(data)
  local EntityMod = require("entity.usage_entity")
  if data == nil then
    if self._usage == nil then
      self._usage = EntityMod.new(self, nil)
    end
    return self._usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserSubscription():list() / client:UserSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:UserSubscription(data)
  local EntityMod = require("entity.user_subscription_entity")
  if data == nil then
    if self._user_subscription == nil then
      self._user_subscription = EntityMod.new(self, nil)
    end
    return self._user_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZoneRatePlan():list() / client:ZoneRatePlan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:ZoneRatePlan(data)
  local EntityMod = require("entity.zone_rate_plan_entity")
  if data == nil then
    if self._zone_rate_plan == nil then
      self._zone_rate_plan = EntityMod.new(self, nil)
    end
    return self._zone_rate_plan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZoneSubscription():list() / client:ZoneSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareBillingSDK:ZoneSubscription(data)
  local EntityMod = require("entity.zone_subscription_entity")
  if data == nil then
    if self._zone_subscription == nil then
      self._zone_subscription = EntityMod.new(self, nil)
    end
    return self._zone_subscription
  end
  return EntityMod.new(self, data)
end




function CloudflareBillingSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareBillingSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareBillingSDK
