<?php
declare(strict_types=1);

// CloudflareBilling SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareBillingSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareBillingUtility();
        $this->_utility = $utility;

        $config = CloudflareBillingConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareBillingHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareBillingHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareBillingFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareBillingFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareBillingUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareBillingHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareBillingHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareBillingHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareBillingSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareBillingError($op . "_allow",
                "CloudflareBillingSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareBillingHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareBillingHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareBillingError("graphql_error",
                "CloudflareBillingSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_account_billing = null;

    // Canonical facade: $client->AccountBilling()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_billing()
    // resolves here too.
    public function AccountBilling($data = null)
    {
        require_once __DIR__ . '/entity/account_billing_entity.php';
        if ($data === null) {
            if ($this->_account_billing === null) {
                $this->_account_billing = new AccountBillingEntity($this, null);
            }
            return $this->_account_billing;
        }
        return new AccountBillingEntity($this, $data);
    }


    private $_account_billing_profile = null;

    // Canonical facade: $client->AccountBillingProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_billing_profile()
    // resolves here too.
    public function AccountBillingProfile($data = null)
    {
        require_once __DIR__ . '/entity/account_billing_profile_entity.php';
        if ($data === null) {
            if ($this->_account_billing_profile === null) {
                $this->_account_billing_profile = new AccountBillingProfileEntity($this, null);
            }
            return $this->_account_billing_profile;
        }
        return new AccountBillingProfileEntity($this, $data);
    }


    private $_account_subscription = null;

    // Canonical facade: $client->AccountSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_subscription()
    // resolves here too.
    public function AccountSubscription($data = null)
    {
        require_once __DIR__ . '/entity/account_subscription_entity.php';
        if ($data === null) {
            if ($this->_account_subscription === null) {
                $this->_account_subscription = new AccountSubscriptionEntity($this, null);
            }
            return $this->_account_subscription;
        }
        return new AccountSubscriptionEntity($this, $data);
    }


    private $_bill_subs_api_account_billing_history_collection = null;

    // Canonical facade: $client->BillSubsApiAccountBillingHistoryCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_account_billing_history_collection()
    // resolves here too.
    public function BillSubsApiAccountBillingHistoryCollection($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_account_billing_history_collection_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_account_billing_history_collection === null) {
                $this->_bill_subs_api_account_billing_history_collection = new BillSubsApiAccountBillingHistoryCollectionEntity($this, null);
            }
            return $this->_bill_subs_api_account_billing_history_collection;
        }
        return new BillSubsApiAccountBillingHistoryCollectionEntity($this, $data);
    }


    private $_bill_subs_api_account_credit = null;

    // Canonical facade: $client->BillSubsApiAccountCredit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_account_credit()
    // resolves here too.
    public function BillSubsApiAccountCredit($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_account_credit_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_account_credit === null) {
                $this->_bill_subs_api_account_credit = new BillSubsApiAccountCreditEntity($this, null);
            }
            return $this->_bill_subs_api_account_credit;
        }
        return new BillSubsApiAccountCreditEntity($this, $data);
    }


    private $_bill_subs_api_account_subscription_response_collection = null;

    // Canonical facade: $client->BillSubsApiAccountSubscriptionResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_account_subscription_response_collection()
    // resolves here too.
    public function BillSubsApiAccountSubscriptionResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_account_subscription_response_collection_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_account_subscription_response_collection === null) {
                $this->_bill_subs_api_account_subscription_response_collection = new BillSubsApiAccountSubscriptionResponseCollectionEntity($this, null);
            }
            return $this->_bill_subs_api_account_subscription_response_collection;
        }
        return new BillSubsApiAccountSubscriptionResponseCollectionEntity($this, $data);
    }


    private $_bill_subs_api_account_subscription_response_single = null;

    // Canonical facade: $client->BillSubsApiAccountSubscriptionResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_account_subscription_response_single()
    // resolves here too.
    public function BillSubsApiAccountSubscriptionResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_account_subscription_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_account_subscription_response_single === null) {
                $this->_bill_subs_api_account_subscription_response_single = new BillSubsApiAccountSubscriptionResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_account_subscription_response_single;
        }
        return new BillSubsApiAccountSubscriptionResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_address_validation_response_single = null;

    // Canonical facade: $client->BillSubsApiAddressValidationResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_address_validation_response_single()
    // resolves here too.
    public function BillSubsApiAddressValidationResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_address_validation_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_address_validation_response_single === null) {
                $this->_bill_subs_api_address_validation_response_single = new BillSubsApiAddressValidationResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_address_validation_response_single;
        }
        return new BillSubsApiAddressValidationResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_bad_debt_response_single = null;

    // Canonical facade: $client->BillSubsApiBadDebtResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_bad_debt_response_single()
    // resolves here too.
    public function BillSubsApiBadDebtResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_bad_debt_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_bad_debt_response_single === null) {
                $this->_bill_subs_api_bad_debt_response_single = new BillSubsApiBadDebtResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_bad_debt_response_single;
        }
        return new BillSubsApiBadDebtResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_billing_history_collection = null;

    // Canonical facade: $client->BillSubsApiBillingHistoryCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_billing_history_collection()
    // resolves here too.
    public function BillSubsApiBillingHistoryCollection($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_billing_history_collection_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_billing_history_collection === null) {
                $this->_bill_subs_api_billing_history_collection = new BillSubsApiBillingHistoryCollectionEntity($this, null);
            }
            return $this->_bill_subs_api_billing_history_collection;
        }
        return new BillSubsApiBillingHistoryCollectionEntity($this, $data);
    }


    private $_bill_subs_api_billing_response_single = null;

    // Canonical facade: $client->BillSubsApiBillingResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_billing_response_single()
    // resolves here too.
    public function BillSubsApiBillingResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_billing_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_billing_response_single === null) {
                $this->_bill_subs_api_billing_response_single = new BillSubsApiBillingResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_billing_response_single;
        }
        return new BillSubsApiBillingResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_cancel_reason_response_single = null;

    // Canonical facade: $client->BillSubsApiCancelReasonResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_cancel_reason_response_single()
    // resolves here too.
    public function BillSubsApiCancelReasonResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_cancel_reason_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_cancel_reason_response_single === null) {
                $this->_bill_subs_api_cancel_reason_response_single = new BillSubsApiCancelReasonResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_cancel_reason_response_single;
        }
        return new BillSubsApiCancelReasonResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_client_secret_response_single = null;

    // Canonical facade: $client->BillSubsApiClientSecretResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_client_secret_response_single()
    // resolves here too.
    public function BillSubsApiClientSecretResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_client_secret_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_client_secret_response_single === null) {
                $this->_bill_subs_api_client_secret_response_single = new BillSubsApiClientSecretResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_client_secret_response_single;
        }
        return new BillSubsApiClientSecretResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_payment_intent_response_single = null;

    // Canonical facade: $client->BillSubsApiPaymentIntentResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_payment_intent_response_single()
    // resolves here too.
    public function BillSubsApiPaymentIntentResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_payment_intent_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_payment_intent_response_single === null) {
                $this->_bill_subs_api_payment_intent_response_single = new BillSubsApiPaymentIntentResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_payment_intent_response_single;
        }
        return new BillSubsApiPaymentIntentResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_payment_method_response_collection = null;

    // Canonical facade: $client->BillSubsApiPaymentMethodResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_payment_method_response_collection()
    // resolves here too.
    public function BillSubsApiPaymentMethodResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_payment_method_response_collection_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_payment_method_response_collection === null) {
                $this->_bill_subs_api_payment_method_response_collection = new BillSubsApiPaymentMethodResponseCollectionEntity($this, null);
            }
            return $this->_bill_subs_api_payment_method_response_collection;
        }
        return new BillSubsApiPaymentMethodResponseCollectionEntity($this, $data);
    }


    private $_bill_subs_api_payment_method_response_single = null;

    // Canonical facade: $client->BillSubsApiPaymentMethodResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_payment_method_response_single()
    // resolves here too.
    public function BillSubsApiPaymentMethodResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_payment_method_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_payment_method_response_single === null) {
                $this->_bill_subs_api_payment_method_response_single = new BillSubsApiPaymentMethodResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_payment_method_response_single;
        }
        return new BillSubsApiPaymentMethodResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_plan_response_collection = null;

    // Canonical facade: $client->BillSubsApiPlanResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_plan_response_collection()
    // resolves here too.
    public function BillSubsApiPlanResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_plan_response_collection_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_plan_response_collection === null) {
                $this->_bill_subs_api_plan_response_collection = new BillSubsApiPlanResponseCollectionEntity($this, null);
            }
            return $this->_bill_subs_api_plan_response_collection;
        }
        return new BillSubsApiPlanResponseCollectionEntity($this, $data);
    }


    private $_bill_subs_api_rate_plan_simple = null;

    // Canonical facade: $client->BillSubsApiRatePlanSimple()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_rate_plan_simple()
    // resolves here too.
    public function BillSubsApiRatePlanSimple($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_rate_plan_simple_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_rate_plan_simple === null) {
                $this->_bill_subs_api_rate_plan_simple = new BillSubsApiRatePlanSimpleEntity($this, null);
            }
            return $this->_bill_subs_api_rate_plan_simple;
        }
        return new BillSubsApiRatePlanSimpleEntity($this, $data);
    }


    private $_bill_subs_api_unpaid_invoices_response_single = null;

    // Canonical facade: $client->BillSubsApiUnpaidInvoicesResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_unpaid_invoices_response_single()
    // resolves here too.
    public function BillSubsApiUnpaidInvoicesResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_unpaid_invoices_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_unpaid_invoices_response_single === null) {
                $this->_bill_subs_api_unpaid_invoices_response_single = new BillSubsApiUnpaidInvoicesResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_unpaid_invoices_response_single;
        }
        return new BillSubsApiUnpaidInvoicesResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_user_subscription_response_collection = null;

    // Canonical facade: $client->BillSubsApiUserSubscriptionResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_user_subscription_response_collection()
    // resolves here too.
    public function BillSubsApiUserSubscriptionResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_user_subscription_response_collection_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_user_subscription_response_collection === null) {
                $this->_bill_subs_api_user_subscription_response_collection = new BillSubsApiUserSubscriptionResponseCollectionEntity($this, null);
            }
            return $this->_bill_subs_api_user_subscription_response_collection;
        }
        return new BillSubsApiUserSubscriptionResponseCollectionEntity($this, $data);
    }


    private $_bill_subs_api_user_subscription_response_single = null;

    // Canonical facade: $client->BillSubsApiUserSubscriptionResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_user_subscription_response_single()
    // resolves here too.
    public function BillSubsApiUserSubscriptionResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_user_subscription_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_user_subscription_response_single === null) {
                $this->_bill_subs_api_user_subscription_response_single = new BillSubsApiUserSubscriptionResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_user_subscription_response_single;
        }
        return new BillSubsApiUserSubscriptionResponseSingleEntity($this, $data);
    }


    private $_bill_subs_api_zone_subscription_response_single = null;

    // Canonical facade: $client->BillSubsApiZoneSubscriptionResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_zone_subscription_response_single()
    // resolves here too.
    public function BillSubsApiZoneSubscriptionResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_zone_subscription_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_zone_subscription_response_single === null) {
                $this->_bill_subs_api_zone_subscription_response_single = new BillSubsApiZoneSubscriptionResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_zone_subscription_response_single;
        }
        return new BillSubsApiZoneSubscriptionResponseSingleEntity($this, $data);
    }


    private $_billable_usage = null;

    // Canonical facade: $client->BillableUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billable_usage()
    // resolves here too.
    public function BillableUsage($data = null)
    {
        require_once __DIR__ . '/entity/billable_usage_entity.php';
        if ($data === null) {
            if ($this->_billable_usage === null) {
                $this->_billable_usage = new BillableUsageEntity($this, null);
            }
            return $this->_billable_usage;
        }
        return new BillableUsageEntity($this, $data);
    }


    private $_billable_usage_api_usage_info = null;

    // Canonical facade: $client->BillableUsageApiUsageInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billable_usage_api_usage_info()
    // resolves here too.
    public function BillableUsageApiUsageInfo($data = null)
    {
        require_once __DIR__ . '/entity/billable_usage_api_usage_info_entity.php';
        if ($data === null) {
            if ($this->_billable_usage_api_usage_info === null) {
                $this->_billable_usage_api_usage_info = new BillableUsageApiUsageInfoEntity($this, null);
            }
            return $this->_billable_usage_api_usage_info;
        }
        return new BillableUsageApiUsageInfoEntity($this, $data);
    }


    private $_billable_usage_api_v2_account_billable_metric = null;

    // Canonical facade: $client->BillableUsageApiV2AccountBillableMetric()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billable_usage_api_v2_account_billable_metric()
    // resolves here too.
    public function BillableUsageApiV2AccountBillableMetric($data = null)
    {
        require_once __DIR__ . '/entity/billable_usage_api_v2_account_billable_metric_entity.php';
        if ($data === null) {
            if ($this->_billable_usage_api_v2_account_billable_metric === null) {
                $this->_billable_usage_api_v2_account_billable_metric = new BillableUsageApiV2AccountBillableMetricEntity($this, null);
            }
            return $this->_billable_usage_api_v2_account_billable_metric;
        }
        return new BillableUsageApiV2AccountBillableMetricEntity($this, $data);
    }


    private $_billable_usage_api_v2_usage = null;

    // Canonical facade: $client->BillableUsageApiV2Usage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billable_usage_api_v2_usage()
    // resolves here too.
    public function BillableUsageApiV2Usage($data = null)
    {
        require_once __DIR__ . '/entity/billable_usage_api_v2_usage_entity.php';
        if ($data === null) {
            if ($this->_billable_usage_api_v2_usage === null) {
                $this->_billable_usage_api_v2_usage = new BillableUsageApiV2UsageEntity($this, null);
            }
            return $this->_billable_usage_api_v2_usage;
        }
        return new BillableUsageApiV2UsageEntity($this, $data);
    }


    private $_cancel_downgrade = null;

    // Canonical facade: $client->CancelDowngrade()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cancel_downgrade()
    // resolves here too.
    public function CancelDowngrade($data = null)
    {
        require_once __DIR__ . '/entity/cancel_downgrade_entity.php';
        if ($data === null) {
            if ($this->_cancel_downgrade === null) {
                $this->_cancel_downgrade = new CancelDowngradeEntity($this, null);
            }
            return $this->_cancel_downgrade;
        }
        return new CancelDowngradeEntity($this, $data);
    }


    private $_entitlement = null;

    // Canonical facade: $client->Entitlement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->entitlement()
    // resolves here too.
    public function Entitlement($data = null)
    {
        require_once __DIR__ . '/entity/entitlement_entity.php';
        if ($data === null) {
            if ($this->_entitlement === null) {
                $this->_entitlement = new EntitlementEntity($this, null);
            }
            return $this->_entitlement;
        }
        return new EntitlementEntity($this, $data);
    }


    private $_invoice = null;

    // Canonical facade: $client->Invoice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invoice()
    // resolves here too.
    public function Invoice($data = null)
    {
        require_once __DIR__ . '/entity/invoice_entity.php';
        if ($data === null) {
            if ($this->_invoice === null) {
                $this->_invoice = new InvoiceEntity($this, null);
            }
            return $this->_invoice;
        }
        return new InvoiceEntity($this, $data);
    }


    private $_payment_method = null;

    // Canonical facade: $client->PaymentMethod()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_method()
    // resolves here too.
    public function PaymentMethod($data = null)
    {
        require_once __DIR__ . '/entity/payment_method_entity.php';
        if ($data === null) {
            if ($this->_payment_method === null) {
                $this->_payment_method = new PaymentMethodEntity($this, null);
            }
            return $this->_payment_method;
        }
        return new PaymentMethodEntity($this, $data);
    }


    private $_set_as_default = null;

    // Canonical facade: $client->SetAsDefault()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->set_as_default()
    // resolves here too.
    public function SetAsDefault($data = null)
    {
        require_once __DIR__ . '/entity/set_as_default_entity.php';
        if ($data === null) {
            if ($this->_set_as_default === null) {
                $this->_set_as_default = new SetAsDefaultEntity($this, null);
            }
            return $this->_set_as_default;
        }
        return new SetAsDefaultEntity($this, $data);
    }


    private $_usage = null;

    // Canonical facade: $client->Usage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage()
    // resolves here too.
    public function Usage($data = null)
    {
        require_once __DIR__ . '/entity/usage_entity.php';
        if ($data === null) {
            if ($this->_usage === null) {
                $this->_usage = new UsageEntity($this, null);
            }
            return $this->_usage;
        }
        return new UsageEntity($this, $data);
    }


    private $_user_subscription = null;

    // Canonical facade: $client->UserSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_subscription()
    // resolves here too.
    public function UserSubscription($data = null)
    {
        require_once __DIR__ . '/entity/user_subscription_entity.php';
        if ($data === null) {
            if ($this->_user_subscription === null) {
                $this->_user_subscription = new UserSubscriptionEntity($this, null);
            }
            return $this->_user_subscription;
        }
        return new UserSubscriptionEntity($this, $data);
    }


    private $_zone_rate_plan = null;

    // Canonical facade: $client->ZoneRatePlan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zone_rate_plan()
    // resolves here too.
    public function ZoneRatePlan($data = null)
    {
        require_once __DIR__ . '/entity/zone_rate_plan_entity.php';
        if ($data === null) {
            if ($this->_zone_rate_plan === null) {
                $this->_zone_rate_plan = new ZoneRatePlanEntity($this, null);
            }
            return $this->_zone_rate_plan;
        }
        return new ZoneRatePlanEntity($this, $data);
    }


    private $_zone_subscription = null;

    // Canonical facade: $client->ZoneSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zone_subscription()
    // resolves here too.
    public function ZoneSubscription($data = null)
    {
        require_once __DIR__ . '/entity/zone_subscription_entity.php';
        if ($data === null) {
            if ($this->_zone_subscription === null) {
                $this->_zone_subscription = new ZoneSubscriptionEntity($this, null);
            }
            return $this->_zone_subscription;
        }
        return new ZoneSubscriptionEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareBillingSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
