<?php
declare(strict_types=1);

// BillSubsApiPaymentMethodResponseCollection entity test

require_once __DIR__ . '/../cloudflarebilling_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class BillSubsApiPaymentMethodResponseCollectionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareBillingSDK::test(null, null);
        $ent = $testsdk->BillSubsApiPaymentMethodResponseCollection(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "bill_subs_api_payment_method_response_collection" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudflareBillingSDK::test($seed, null);
        $seen = iterator_to_array($base->BillSubsApiPaymentMethodResponseCollection(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudflareBillingConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudflareBillingSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->BillSubsApiPaymentMethodResponseCollection(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = bill_subs_api_payment_method_response_collection_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "bill_subs_api_payment_method_response_collection." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_COLLECTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $bill_subs_api_payment_method_response_collection_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.bill_subs_api_payment_method_response_collection")));
        $bill_subs_api_payment_method_response_collection_ref01_data = null;
        if (count($bill_subs_api_payment_method_response_collection_ref01_data_raw) > 0) {
            $bill_subs_api_payment_method_response_collection_ref01_data = Helpers::to_map($bill_subs_api_payment_method_response_collection_ref01_data_raw[0][1]);
        }

        // LIST
        $bill_subs_api_payment_method_response_collection_ref01_ent = $client->BillSubsApiPaymentMethodResponseCollection(null);
        $bill_subs_api_payment_method_response_collection_ref01_match = [
            "account_id" => $setup["idmap"]["account01"],
        ];

        $bill_subs_api_payment_method_response_collection_ref01_list_result = $bill_subs_api_payment_method_response_collection_ref01_ent->list($bill_subs_api_payment_method_response_collection_ref01_match, null);
        $this->assertIsArray($bill_subs_api_payment_method_response_collection_ref01_list_result);

    }
}

function bill_subs_api_payment_method_response_collection_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/bill_subs_api_payment_method_response_collection/BillSubsApiPaymentMethodResponseCollectionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareBillingSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["bill_subs_api_payment_method_response_collection01", "bill_subs_api_payment_method_response_collection02", "bill_subs_api_payment_method_response_collection03", "account01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_COLLECTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_COLLECTION_ENTID" => $idmap,
        "CLOUDFLARE_BILLING_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_BILLING_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_BILLING_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_COLLECTION_ENTID"]);
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
