<?php
declare(strict_types=1);

// SetAsDefault entity test

require_once __DIR__ . '/../cloudflarebilling_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class SetAsDefaultEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareBillingSDK::test(null, null);
        $ent = $testsdk->SetAsDefault(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = set_as_default_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "set_as_default." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $set_as_default_ref01_ent = $client->SetAsDefault(null);
        $set_as_default_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.set_as_default"), "set_as_default_ref01"));
        $set_as_default_ref01_data["account_id"] = $setup["idmap"]["account01"];
        $set_as_default_ref01_data["payment_method_id"] = $setup["idmap"]["payment_method01"];

        $set_as_default_ref01_data_result = $set_as_default_ref01_ent->create($set_as_default_ref01_data, null);
        $set_as_default_ref01_data = Helpers::to_map(is_object($set_as_default_ref01_data_result) && method_exists($set_as_default_ref01_data_result, 'data_get') ? $set_as_default_ref01_data_result->data_get() : $set_as_default_ref01_data_result);
        $this->assertNotNull($set_as_default_ref01_data);

    }
}

function set_as_default_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/set_as_default/SetAsDefaultTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareBillingSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["set_as_default01", "set_as_default02", "set_as_default03", "payment_method01", "payment_method02", "payment_method03", "account01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID" => $idmap,
        "CLOUDFLARE_BILLING_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_BILLING_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_BILLING_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CLOUDFLARE_BILLING_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_BILLING_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareBillingSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_BILLING_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_BILLING_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
