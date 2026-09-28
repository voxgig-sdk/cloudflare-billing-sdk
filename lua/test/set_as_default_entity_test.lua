-- SetAsDefault entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-billing_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("SetAsDefaultEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SetAsDefault(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = set_as_default_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "set_as_default." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local set_as_default_ref01_ent = client:SetAsDefault(nil)
    local set_as_default_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.set_as_default"), "set_as_default_ref01"))
    set_as_default_ref01_data["account_id"] = setup.idmap["account01"]
    set_as_default_ref01_data["payment_method_id"] = setup.idmap["payment_method01"]

    local set_as_default_ref01_data_result, err = set_as_default_ref01_ent:create(set_as_default_ref01_data, nil)
    assert.is_nil(err)
    set_as_default_ref01_data = helpers.to_map(type(set_as_default_ref01_data_result) == 'table' and set_as_default_ref01_data_result.data_get and set_as_default_ref01_data_result:data_get() or set_as_default_ref01_data_result)
    assert.is_not_nil(set_as_default_ref01_data)

  end)
end)

function set_as_default_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/set_as_default/SetAsDefaultTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read set_as_default test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "set_as_default01", "set_as_default02", "set_as_default03", "payment_method01", "payment_method02", "payment_method03", "account01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID"] = idmap,
    ["CLOUDFLARE_BILLING_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_BILLING_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_BILLING_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_BILLING_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_BILLING_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_BILLING_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_BILLING_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
