package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-billing-sdk/go"
	"github.com/voxgig-sdk/cloudflare-billing-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-billing-sdk/go/utility/struct"
)

func TestBillSubsApiPaymentMethodResponseSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BillSubsApiPaymentMethodResponseSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil BillSubsApiPaymentMethodResponseSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := bill_subs_api_payment_method_response_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "bill_subs_api_payment_method_response_single." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		billSubsApiPaymentMethodResponseSingleRef01Ent := client.BillSubsApiPaymentMethodResponseSingle(nil)
		billSubsApiPaymentMethodResponseSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "bill_subs_api_payment_method_response_single"}), "bill_subs_api_payment_method_response_single_ref01"))
		billSubsApiPaymentMethodResponseSingleRef01Data["account_id"] = setup.idmap["account01"]

		billSubsApiPaymentMethodResponseSingleRef01DataResult, err := billSubsApiPaymentMethodResponseSingleRef01Ent.Create(billSubsApiPaymentMethodResponseSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		billSubsApiPaymentMethodResponseSingleRef01Data = core.ToMapAny(entityData(billSubsApiPaymentMethodResponseSingleRef01DataResult))
		if billSubsApiPaymentMethodResponseSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if billSubsApiPaymentMethodResponseSingleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		billSubsApiPaymentMethodResponseSingleRef01DataUp0Up := map[string]any{
			"id": billSubsApiPaymentMethodResponseSingleRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Name := "address"
		billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-bill_subs_api_payment_method_response_single_ref01_%d", setup.now)
		billSubsApiPaymentMethodResponseSingleRef01DataUp0Up[billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Name] = billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Value

		billSubsApiPaymentMethodResponseSingleRef01ResdataUp0Result, err := billSubsApiPaymentMethodResponseSingleRef01Ent.Update(billSubsApiPaymentMethodResponseSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		billSubsApiPaymentMethodResponseSingleRef01ResdataUp0 := core.ToMapAny(entityData(billSubsApiPaymentMethodResponseSingleRef01ResdataUp0Result))
		if billSubsApiPaymentMethodResponseSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if billSubsApiPaymentMethodResponseSingleRef01ResdataUp0["id"] != billSubsApiPaymentMethodResponseSingleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if billSubsApiPaymentMethodResponseSingleRef01ResdataUp0[billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Name] != billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Name, billSubsApiPaymentMethodResponseSingleRef01ResdataUp0[billSubsApiPaymentMethodResponseSingleRef01MarkdefUp0Name])
		}

		// LOAD
		billSubsApiPaymentMethodResponseSingleRef01MatchDt0 := map[string]any{
			"id": billSubsApiPaymentMethodResponseSingleRef01Data["id"],
		}
		billSubsApiPaymentMethodResponseSingleRef01DataDt0Loaded, err := billSubsApiPaymentMethodResponseSingleRef01Ent.Load(billSubsApiPaymentMethodResponseSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		billSubsApiPaymentMethodResponseSingleRef01DataDt0LoadResult := core.ToMapAny(entityData(billSubsApiPaymentMethodResponseSingleRef01DataDt0Loaded))
		if billSubsApiPaymentMethodResponseSingleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if billSubsApiPaymentMethodResponseSingleRef01DataDt0LoadResult["id"] != billSubsApiPaymentMethodResponseSingleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func bill_subs_api_payment_method_response_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "bill_subs_api_payment_method_response_single", "BillSubsApiPaymentMethodResponseSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read bill_subs_api_payment_method_response_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse bill_subs_api_payment_method_response_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"bill_subs_api_payment_method_response_single01", "bill_subs_api_payment_method_response_single02", "bill_subs_api_payment_method_response_single03", "payment_method01", "payment_method02", "payment_method03", "account01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_BILLING_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_BILLING_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_BILLING_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}

	if env["CLOUDFLARE_BILLING_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_BILLING_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareBillingSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_BILLING_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_BILLING_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
