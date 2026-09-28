# BillSubsApiUnpaidInvoicesResponseSingle entity test

import json
import os
import time

import pytest

from cloudflarebilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarebilling_sdk import CloudflareBillingSDK
from cloudflarebilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestBillSubsApiUnpaidInvoicesResponseSingleEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareBillingSDK.test(None, None)
        ent = testsdk.BillSubsApiUnpaidInvoicesResponseSingle(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _bill_subs_api_unpaid_invoices_response_single_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "bill_subs_api_unpaid_invoices_response_single." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_UNPAID_INVOICES_RESPONSE_SINGLE_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        bill_subs_api_unpaid_invoices_response_single_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.bill_subs_api_unpaid_invoices_response_single")))
        bill_subs_api_unpaid_invoices_response_single_ref01_data = None
        if len(bill_subs_api_unpaid_invoices_response_single_ref01_data_raw) > 0:
            bill_subs_api_unpaid_invoices_response_single_ref01_data = helpers.to_map(bill_subs_api_unpaid_invoices_response_single_ref01_data_raw[0][1])

        # LOAD
        bill_subs_api_unpaid_invoices_response_single_ref01_ent = client.BillSubsApiUnpaidInvoicesResponseSingle(None)
        bill_subs_api_unpaid_invoices_response_single_ref01_match_dt0 = {}
        bill_subs_api_unpaid_invoices_response_single_ref01_data_dt0_loaded = bill_subs_api_unpaid_invoices_response_single_ref01_ent.load(bill_subs_api_unpaid_invoices_response_single_ref01_match_dt0, None)
        assert bill_subs_api_unpaid_invoices_response_single_ref01_data_dt0_loaded is not None



def _bill_subs_api_unpaid_invoices_response_single_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/bill_subs_api_unpaid_invoices_response_single/BillSubsApiUnpaidInvoicesResponseSingleTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["bill_subs_api_unpaid_invoices_response_single01", "bill_subs_api_unpaid_invoices_response_single02", "bill_subs_api_unpaid_invoices_response_single03"],
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
        "CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_UNPAID_INVOICES_RESPONSE_SINGLE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_UNPAID_INVOICES_RESPONSE_SINGLE_ENTID": idmap,
        "CLOUDFLARE_BILLING_TEST_LIVE": "FALSE",
        "CLOUDFLARE_BILLING_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_BILLING_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_UNPAID_INVOICES_RESPONSE_SINGLE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
