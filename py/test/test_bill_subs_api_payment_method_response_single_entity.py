# BillSubsApiPaymentMethodResponseSingle entity test

import json
import os
import time

import pytest

from cloudflarebilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarebilling_sdk import CloudflareBillingSDK
from cloudflarebilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestBillSubsApiPaymentMethodResponseSingleEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareBillingSDK.test(None, None)
        ent = testsdk.BillSubsApiPaymentMethodResponseSingle(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _bill_subs_api_payment_method_response_single_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "bill_subs_api_payment_method_response_single." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        bill_subs_api_payment_method_response_single_ref01_ent = client.BillSubsApiPaymentMethodResponseSingle(None)
        bill_subs_api_payment_method_response_single_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.bill_subs_api_payment_method_response_single"), "bill_subs_api_payment_method_response_single_ref01"))
        bill_subs_api_payment_method_response_single_ref01_data["account_id"] = setup["idmap"]["account01"]

        bill_subs_api_payment_method_response_single_ref01_data = helpers.to_map(runner.entity_data(bill_subs_api_payment_method_response_single_ref01_ent.create(bill_subs_api_payment_method_response_single_ref01_data, None)))
        assert bill_subs_api_payment_method_response_single_ref01_data is not None
        assert bill_subs_api_payment_method_response_single_ref01_data["id"] is not None

        # UPDATE
        bill_subs_api_payment_method_response_single_ref01_data_up0_up = {
            "id": bill_subs_api_payment_method_response_single_ref01_data["id"],
            "account_id": setup["idmap"]["account_id"],
        }

        bill_subs_api_payment_method_response_single_ref01_markdef_up0_name = "address"
        bill_subs_api_payment_method_response_single_ref01_markdef_up0_value = "Mark01-bill_subs_api_payment_method_response_single_ref01_" + str(setup["now"])
        bill_subs_api_payment_method_response_single_ref01_data_up0_up[bill_subs_api_payment_method_response_single_ref01_markdef_up0_name] = bill_subs_api_payment_method_response_single_ref01_markdef_up0_value

        bill_subs_api_payment_method_response_single_ref01_resdata_up0 = helpers.to_map(runner.entity_data(bill_subs_api_payment_method_response_single_ref01_ent.update(bill_subs_api_payment_method_response_single_ref01_data_up0_up, None)))
        assert bill_subs_api_payment_method_response_single_ref01_resdata_up0 is not None
        assert bill_subs_api_payment_method_response_single_ref01_resdata_up0["id"] == bill_subs_api_payment_method_response_single_ref01_data_up0_up["id"]
        assert bill_subs_api_payment_method_response_single_ref01_resdata_up0[bill_subs_api_payment_method_response_single_ref01_markdef_up0_name] == bill_subs_api_payment_method_response_single_ref01_markdef_up0_value

        # LOAD
        bill_subs_api_payment_method_response_single_ref01_match_dt0 = {
            "id": bill_subs_api_payment_method_response_single_ref01_data["id"],
        }
        bill_subs_api_payment_method_response_single_ref01_data_dt0_loaded = bill_subs_api_payment_method_response_single_ref01_ent.load(bill_subs_api_payment_method_response_single_ref01_match_dt0, None)
        bill_subs_api_payment_method_response_single_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(bill_subs_api_payment_method_response_single_ref01_data_dt0_loaded))
        assert bill_subs_api_payment_method_response_single_ref01_data_dt0_load_result is not None
        assert bill_subs_api_payment_method_response_single_ref01_data_dt0_load_result["id"] == bill_subs_api_payment_method_response_single_ref01_data["id"]



def _bill_subs_api_payment_method_response_single_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/bill_subs_api_payment_method_response_single/BillSubsApiPaymentMethodResponseSingleTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["bill_subs_api_payment_method_response_single01", "bill_subs_api_payment_method_response_single02", "bill_subs_api_payment_method_response_single03", "payment_method01", "payment_method02", "payment_method03", "account01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID": idmap,
        "CLOUDFLARE_BILLING_TEST_LIVE": "FALSE",
        "CLOUDFLARE_BILLING_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_BILLING_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")

    if env.get("CLOUDFLARE_BILLING_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_BILLING_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareBillingSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_BILLING_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_BILLING_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
