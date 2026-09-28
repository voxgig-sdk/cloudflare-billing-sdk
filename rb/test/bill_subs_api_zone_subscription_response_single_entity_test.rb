# BillSubsApiZoneSubscriptionResponseSingle entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareBilling_sdk"
require_relative "runner"

class BillSubsApiZoneSubscriptionResponseSingleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareBillingSDK.test(nil, nil)
    ent = testsdk.BillSubsApiZoneSubscriptionResponseSingle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = bill_subs_api_zone_subscription_response_single_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "bill_subs_api_zone_subscription_response_single." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ZONE_SUBSCRIPTION_RESPONSE_SINGLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    bill_subs_api_zone_subscription_response_single_ref01_ent = client.BillSubsApiZoneSubscriptionResponseSingle(nil)
    bill_subs_api_zone_subscription_response_single_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.bill_subs_api_zone_subscription_response_single"), "bill_subs_api_zone_subscription_response_single_ref01"))
    bill_subs_api_zone_subscription_response_single_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    bill_subs_api_zone_subscription_response_single_ref01_data_result = bill_subs_api_zone_subscription_response_single_ref01_ent.create(bill_subs_api_zone_subscription_response_single_ref01_data, nil)
    bill_subs_api_zone_subscription_response_single_ref01_data = Helpers.to_map(bill_subs_api_zone_subscription_response_single_ref01_data_result.respond_to?(:data_get) ? bill_subs_api_zone_subscription_response_single_ref01_data_result.data_get : bill_subs_api_zone_subscription_response_single_ref01_data_result)
    assert !bill_subs_api_zone_subscription_response_single_ref01_data.nil?
    assert !bill_subs_api_zone_subscription_response_single_ref01_data["id"].nil?

    # UPDATE
    bill_subs_api_zone_subscription_response_single_ref01_data_up0_up = {
      "id" => bill_subs_api_zone_subscription_response_single_ref01_data["id"],
    }

    bill_subs_api_zone_subscription_response_single_ref01_markdef_up0_name = "frequency"
    bill_subs_api_zone_subscription_response_single_ref01_markdef_up0_value = "Mark01-bill_subs_api_zone_subscription_response_single_ref01_#{setup[:now]}"
    bill_subs_api_zone_subscription_response_single_ref01_data_up0_up[bill_subs_api_zone_subscription_response_single_ref01_markdef_up0_name] = bill_subs_api_zone_subscription_response_single_ref01_markdef_up0_value

    bill_subs_api_zone_subscription_response_single_ref01_resdata_up0_result = bill_subs_api_zone_subscription_response_single_ref01_ent.update(bill_subs_api_zone_subscription_response_single_ref01_data_up0_up, nil)
    bill_subs_api_zone_subscription_response_single_ref01_resdata_up0 = Helpers.to_map(bill_subs_api_zone_subscription_response_single_ref01_resdata_up0_result.respond_to?(:data_get) ? bill_subs_api_zone_subscription_response_single_ref01_resdata_up0_result.data_get : bill_subs_api_zone_subscription_response_single_ref01_resdata_up0_result)
    assert !bill_subs_api_zone_subscription_response_single_ref01_resdata_up0.nil?
    assert_equal bill_subs_api_zone_subscription_response_single_ref01_resdata_up0["id"], bill_subs_api_zone_subscription_response_single_ref01_data_up0_up["id"]
    assert_equal bill_subs_api_zone_subscription_response_single_ref01_resdata_up0[bill_subs_api_zone_subscription_response_single_ref01_markdef_up0_name], bill_subs_api_zone_subscription_response_single_ref01_markdef_up0_value

    # LOAD
    bill_subs_api_zone_subscription_response_single_ref01_match_dt0 = {
      "id" => bill_subs_api_zone_subscription_response_single_ref01_data["id"],
    }
    bill_subs_api_zone_subscription_response_single_ref01_data_dt0_loaded = bill_subs_api_zone_subscription_response_single_ref01_ent.load(bill_subs_api_zone_subscription_response_single_ref01_match_dt0, nil)
    bill_subs_api_zone_subscription_response_single_ref01_data_dt0_load_result = Helpers.to_map(bill_subs_api_zone_subscription_response_single_ref01_data_dt0_loaded.respond_to?(:data_get) ? bill_subs_api_zone_subscription_response_single_ref01_data_dt0_loaded.data_get : bill_subs_api_zone_subscription_response_single_ref01_data_dt0_loaded)
    assert !bill_subs_api_zone_subscription_response_single_ref01_data_dt0_load_result.nil?
    assert_equal bill_subs_api_zone_subscription_response_single_ref01_data_dt0_load_result["id"], bill_subs_api_zone_subscription_response_single_ref01_data["id"]

  end
end

def bill_subs_api_zone_subscription_response_single_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "bill_subs_api_zone_subscription_response_single", "BillSubsApiZoneSubscriptionResponseSingleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["bill_subs_api_zone_subscription_response_single01", "bill_subs_api_zone_subscription_response_single02", "bill_subs_api_zone_subscription_response_single03", "zone01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ZONE_SUBSCRIPTION_RESPONSE_SINGLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ZONE_SUBSCRIPTION_RESPONSE_SINGLE_ENTID" => idmap,
    "CLOUDFLARE_BILLING_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_BILLING_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_BILLING_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ZONE_SUBSCRIPTION_RESPONSE_SINGLE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_BILLING_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_BILLING_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareBillingSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_BILLING_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_BILLING_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
