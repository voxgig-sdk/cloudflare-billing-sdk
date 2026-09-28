# SetAsDefault entity test

import json
import os
import time

import pytest

from cloudflarebilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarebilling_sdk import CloudflareBillingSDK
from cloudflarebilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSetAsDefaultEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareBillingSDK.test(None, None)
        ent = testsdk.SetAsDefault(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _set_as_default_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "set_as_default." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        set_as_default_ref01_ent = client.SetAsDefault(None)
        set_as_default_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.set_as_default"), "set_as_default_ref01"))
        set_as_default_ref01_data["account_id"] = setup["idmap"]["account01"]
        set_as_default_ref01_data["payment_method_id"] = setup["idmap"]["payment_method01"]

        set_as_default_ref01_data = helpers.to_map(runner.entity_data(set_as_default_ref01_ent.create(set_as_default_ref01_data, None)))
        assert set_as_default_ref01_data is not None



def _set_as_default_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/set_as_default/SetAsDefaultTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["set_as_default01", "set_as_default02", "set_as_default03", "payment_method01", "payment_method02", "payment_method03", "account01"],
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
        "CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID": idmap,
        "CLOUDFLARE_BILLING_TEST_LIVE": "FALSE",
        "CLOUDFLARE_BILLING_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_BILLING_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID"))
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
