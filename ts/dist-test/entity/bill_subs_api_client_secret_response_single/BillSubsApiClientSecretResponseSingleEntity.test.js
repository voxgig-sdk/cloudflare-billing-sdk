"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('BillSubsApiClientSecretResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareBillingSDK.test();
        const ent = testsdk.BillSubsApiClientSecretResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'bill_subs_api_client_secret_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "invoice_id": { "a": true, "h": "Invoice Id", "n": "invoice_id", "r": false, "sh": "The identifier of the invoice to pay.", "t": "`$STRING`", "key$": "invoice_id", "index$": 0 }, "payment_method_id": { "a": true, "h": "Payment Method Id", "n": "payment_method_id", "r": false, "sh": "The payment method to use.", "t": "`$STRING`", "key$": "payment_method_id", "index$": 1 }, "validate_payment_method": { "a": true, "h": "Validate Payment Method", "n": "validate_payment_method", "r": false, "sh": "Whether to validate the payment method before processing.", "t": "`$BOOLEAN`", "key$": "validate_payment_method", "index$": 2 } }, "name": "bill_subs_api_client_secret_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/pay-bad-debt", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/pay-bad-debt", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "pay-bad-debt" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/pay-invoice", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/pay-invoice", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "pay-invoice" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "bill_subs_api_client_secret_response_single", "name__orig": "bill_subs_api_client_secret_response_single", "Name": "BillSubsApiClientSecretResponseSingle", "name_": "bill_subs_api_client_secret_response_single", "name-": "bill-subs-api-client-secret-response-single", "NAME": "BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE", "index$": 12 }, { "active": true, "entity": "bill_subs_api_client_secret_response_single", "key$": "BasicBillSubsApiClientSecretResponseSingleFlow", "kind": "basic", "name": "BasicBillSubsApiClientSecretResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "bill_subs_api_client_secret_response_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'BillSubsApiClientSecretResponseSingle', { "POST /accounts/{account_id}/pay-bad-debt": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "payment_method_id": { "description": "The payment method to use. If omitted, the default payment method is used.", "type": "string", "key$": "payment_method_id" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 0 }] }, "POST /accounts/{account_id}/pay-invoice": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "invoice_id": { "description": "The identifier of the invoice to pay.", "type": "string", "key$": "invoice_id" }, "payment_method_id": { "description": "The payment method to use. If omitted, the default payment method is used.", "type": "string", "key$": "payment_method_id" }, "validate_payment_method": { "description": "Whether to validate the payment method before processing.", "type": "boolean", "key$": "validate_payment_method" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const bill_subs_api_client_secret_response_single_ref01_ent = client.BillSubsApiClientSecretResponseSingle();
        let bill_subs_api_client_secret_response_single_ref01_data = setup.data.new.bill_subs_api_client_secret_response_single['bill_subs_api_client_secret_response_single_ref01'];
        bill_subs_api_client_secret_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        bill_subs_api_client_secret_response_single_ref01_data = (await bill_subs_api_client_secret_response_single_ref01_ent.create(bill_subs_api_client_secret_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != bill_subs_api_client_secret_response_single_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/bill_subs_api_client_secret_response_single/BillSubsApiClientSecretResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['bill_subs_api_client_secret_response_single01', 'bill_subs_api_client_secret_response_single02', 'bill_subs_api_client_secret_response_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_BILLING_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareBillingSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_BILLING_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_BILLING_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=BillSubsApiClientSecretResponseSingleEntity.test.js.map