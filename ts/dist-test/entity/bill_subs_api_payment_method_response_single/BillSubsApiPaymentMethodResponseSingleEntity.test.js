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
(0, node_test_1.describe)('BillSubsApiPaymentMethodResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareBillingSDK.test();
        const ent = testsdk.BillSubsApiPaymentMethodResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'bill_subs_api_payment_method_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": false, "sh": "Billing address line 1.", "t": "`$STRING`", "key$": "address", "index$": 0 }, "address2": { "a": true, "h": "Address2", "n": "address2", "r": false, "sh": "Billing address line 2.", "t": "`$STRING`", "key$": "address2", "index$": 1 }, "bank_account_type": { "a": true, "h": "Bank Account Type", "n": "bank_account_type", "r": false, "sh": "Bank account type.", "t": "`$STRING`", "key$": "bank_account_type", "index$": 2 }, "bank_code": { "a": true, "h": "Bank Code", "n": "bank_code", "r": false, "sh": "Bank code.", "t": "`$STRING`", "key$": "bank_code", "index$": 3 }, "bank_country": { "a": true, "h": "Bank Country", "n": "bank_country", "r": false, "sh": "Bank country.", "t": "`$STRING`", "key$": "bank_country", "index$": 4 }, "bank_name": { "a": true, "h": "Bank Name", "n": "bank_name", "r": false, "sh": "Bank name for bank-based payment methods.", "t": "`$STRING`", "key$": "bank_name", "index$": 5 }, "bank_routing_number": { "a": true, "h": "Bank Routing Number", "n": "bank_routing_number", "r": false, "sh": "Bank routing number.", "t": "`$STRING`", "key$": "bank_routing_number", "index$": 6 }, "cashapp_cash_tag": { "a": true, "h": "Cashapp Cash Tag", "n": "cashapp_cash_tag", "r": false, "sh": "Cash App cash tag.", "t": "`$STRING`", "key$": "cashapp_cash_tag", "index$": 7 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "Billing city.", "t": "`$STRING`", "key$": "city", "index$": 8 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Billing country.", "t": "`$STRING`", "key$": "country", "index$": 9 }, "default": { "a": true, "h": "Default", "n": "default", "r": false, "sh": "Whether this is the default payment method.", "t": "`$BOOLEAN`", "key$": "default", "index$": 10 }, "device_data": { "a": true, "h": "Device Data", "n": "device_data", "r": false, "sh": "Device data for fraud prevention.", "t": "`$STRING`", "wo": true, "key$": "device_data", "index$": 11 }, "expiration_date": { "a": true, "h": "Expiration Date", "n": "expiration_date", "r": false, "ro": true, "sh": "Card expiration date.", "t": "`$STRING`", "key$": "expiration_date", "index$": 12 }, "first_name": { "a": true, "h": "First Name", "n": "first_name", "r": false, "sh": "Billing first name.", "t": "`$STRING`", "key$": "first_name", "index$": 13 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "ro": true, "sh": "Payment method identifier.", "t": "`$STRING`", "key$": "id", "index$": 14 }, "last_four": { "a": true, "h": "Last Four", "n": "last_four", "r": false, "ro": true, "sh": "Last four digits of the card number.", "t": "`$STRING`", "key$": "last_four", "index$": 15 }, "last_name": { "a": true, "h": "Last Name", "n": "last_name", "r": false, "sh": "Billing last name.", "t": "`$STRING`", "key$": "last_name", "index$": 16 }, "nick_name": { "a": true, "h": "Nick Name", "n": "nick_name", "r": false, "sh": "A nickname for the payment method.", "t": "`$STRING`", "key$": "nick_name", "index$": 17 }, "payment_account_email": { "a": true, "h": "Payment Account Email", "n": "payment_account_email", "r": false, "sh": "Email associated with the payment account.", "t": "`$STRING`", "key$": "payment_account_email", "index$": 18 }, "payment_email": { "a": true, "h": "Payment Email", "n": "payment_email", "r": false, "sh": "Payment email address.", "t": "`$STRING`", "key$": "payment_email", "index$": 19 }, "payment_gateway": { "a": true, "h": "Payment Gateway", "n": "payment_gateway", "r": false, "sh": "The payment gateway used.", "t": "`$STRING`", "wo": true, "key$": "payment_gateway", "index$": 20 }, "payment_nonce": { "a": true, "h": "Payment Nonce", "n": "payment_nonce", "r": false, "sh": "Payment nonce for tokenized payments.", "t": "`$STRING`", "wo": true, "key$": "payment_nonce", "index$": 21 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 22 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "Billing state.", "t": "`$STRING`", "key$": "state", "index$": 23 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The payment method type.", "t": "`$STRING`", "key$": "type", "index$": 24 }, "zipcode": { "a": true, "h": "Zipcode", "n": "zipcode", "r": false, "sh": "Billing zip code.", "t": "`$STRING`", "key$": "zipcode", "index$": 25 } }, "id": { "field": "id", "name": "id" }, "name": "bill_subs_api_payment_method_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/payment-methods", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/payment-methods", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "payment-methods" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/payment-methods/{payment_method_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "payment_method_id", "or": "payment_method_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/payment-methods/{payment_method_id}", "q": { "exist": ["account_id", "payment_method_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "payment-methods" }, { "var": "payment_method_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/payment-methods/{payment_method_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "payment_method_id", "or": "payment_method_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/payment-methods/{payment_method_id}", "q": { "exist": ["account_id", "payment_method_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "payment-methods" }, { "var": "payment_method_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.payment_method"]] }, "key$": "bill_subs_api_payment_method_response_single", "name__orig": "bill_subs_api_payment_method_response_single", "Name": "BillSubsApiPaymentMethodResponseSingle", "name_": "bill_subs_api_payment_method_response_single", "name-": "bill-subs-api-payment-method-response-single", "NAME": "BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE", "index$": 15 }, { "active": true, "entity": "bill_subs_api_payment_method_response_single", "key$": "BasicBillSubsApiPaymentMethodResponseSingleFlow", "kind": "basic", "name": "BasicBillSubsApiPaymentMethodResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "bill_subs_api_payment_method_response_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "bill_subs_api_payment_method_response_single_ref01", "srcdatavar": "bill_subs_api_payment_method_response_single_ref01_data", "suffix": "_up0", "textfield": "address" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bill_subs_api_payment_method_response_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "bill_subs_api_payment_method_response_single_ref01", "srcdatavar": "bill_subs_api_payment_method_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "bill_subs_api_payment_method_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bill_subs_api_payment_method_response_single_ref01" } }], "index$": 2 }] }, 'BillSubsApiPaymentMethodResponseSingle', { "POST /accounts/{account_id}/payment-methods": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "address": { "description": "Billing address line 1.", "type": "string", "key$": "address" }, "address2": { "description": "Billing address line 2.", "type": "string", "key$": "address2" }, "bank_account_type": { "description": "Bank account type.", "type": "string", "key$": "bank_account_type" }, "bank_code": { "description": "Bank code.", "type": "string", "key$": "bank_code" }, "bank_country": { "description": "Bank country.", "type": "string", "key$": "bank_country" }, "bank_name": { "description": "Bank name for bank-based payment methods.", "type": "string", "key$": "bank_name" }, "bank_routing_number": { "description": "Bank routing number.", "type": "string", "key$": "bank_routing_number" }, "cashapp_cash_tag": { "description": "Cash App cash tag.", "type": "string", "key$": "cashapp_cash_tag" }, "city": { "description": "Billing city.", "type": "string", "key$": "city" }, "country": { "description": "Billing country.", "type": "string", "key$": "country" }, "default": { "description": "Whether this is the default payment method.", "type": "boolean", "key$": "default" }, "device_data": { "description": "Device data for fraud prevention.", "type": "string", "writeOnly": true, "key$": "device_data" }, "expiration_date": { "description": "Card expiration date.", "readOnly": true, "type": "string", "key$": "expiration_date" }, "first_name": { "description": "Billing first name.", "type": "string", "key$": "first_name" }, "id": { "description": "Payment method identifier.", "readOnly": true, "type": "string", "key$": "id" }, "last_four": { "description": "Last four digits of the card number.", "example": "4242", "readOnly": true, "type": "string", "key$": "last_four" }, "last_name": { "description": "Billing last name.", "type": "string", "key$": "last_name" }, "nick_name": { "description": "A nickname for the payment method.", "type": "string", "key$": "nick_name" }, "payment_account_email": { "description": "Email associated with the payment account.", "type": "string", "key$": "payment_account_email" }, "payment_email": { "description": "Payment email address.", "type": "string", "key$": "payment_email" }, "payment_gateway": { "description": "The payment gateway used.", "type": "string", "writeOnly": true, "key$": "payment_gateway" }, "payment_nonce": { "description": "Payment nonce for tokenized payments.", "type": "string", "writeOnly": true, "key$": "payment_nonce" }, "state": { "description": "Billing state.", "type": "string", "key$": "state" }, "type": { "description": "The payment method type.", "enum": ["CREDIT_CARD", "PAYPAL", "CASHAPP", "SEPA_DEBIT", "LINK", "ACH_DIRECT_DEBIT"], "example": "CREDIT_CARD", "type": "string", "key$": "type" }, "zipcode": { "description": "Billing zip code.", "type": "string", "key$": "zipcode" } }, "x-ref": "#/components/schemas/bill-subs-api_payment_method", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/payment-methods/{payment_method_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 0 }, { "name": "payment_method_id", "in": "path", "description": "Payment method identifier.", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 1 }] }, "PUT /accounts/{account_id}/payment-methods/{payment_method_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "address": { "description": "Billing address line 1.", "type": "string", "key$": "address" }, "address2": { "description": "Billing address line 2.", "type": "string", "key$": "address2" }, "bank_account_type": { "description": "Bank account type.", "type": "string", "key$": "bank_account_type" }, "bank_code": { "description": "Bank code.", "type": "string", "key$": "bank_code" }, "bank_country": { "description": "Bank country.", "type": "string", "key$": "bank_country" }, "bank_name": { "description": "Bank name for bank-based payment methods.", "type": "string", "key$": "bank_name" }, "bank_routing_number": { "description": "Bank routing number.", "type": "string", "key$": "bank_routing_number" }, "cashapp_cash_tag": { "description": "Cash App cash tag.", "type": "string", "key$": "cashapp_cash_tag" }, "city": { "description": "Billing city.", "type": "string", "key$": "city" }, "country": { "description": "Billing country.", "type": "string", "key$": "country" }, "default": { "description": "Whether this is the default payment method.", "type": "boolean", "key$": "default" }, "device_data": { "description": "Device data for fraud prevention.", "type": "string", "writeOnly": true, "key$": "device_data" }, "expiration_date": { "description": "Card expiration date.", "readOnly": true, "type": "string", "key$": "expiration_date" }, "first_name": { "description": "Billing first name.", "type": "string", "key$": "first_name" }, "id": { "description": "Payment method identifier.", "readOnly": true, "type": "string", "key$": "id" }, "last_four": { "description": "Last four digits of the card number.", "example": "4242", "readOnly": true, "type": "string", "key$": "last_four" }, "last_name": { "description": "Billing last name.", "type": "string", "key$": "last_name" }, "nick_name": { "description": "A nickname for the payment method.", "type": "string", "key$": "nick_name" }, "payment_account_email": { "description": "Email associated with the payment account.", "type": "string", "key$": "payment_account_email" }, "payment_email": { "description": "Payment email address.", "type": "string", "key$": "payment_email" }, "payment_gateway": { "description": "The payment gateway used.", "type": "string", "writeOnly": true, "key$": "payment_gateway" }, "payment_nonce": { "description": "Payment nonce for tokenized payments.", "type": "string", "writeOnly": true, "key$": "payment_nonce" }, "state": { "description": "Billing state.", "type": "string", "key$": "state" }, "type": { "description": "The payment method type.", "enum": ["CREDIT_CARD", "PAYPAL", "CASHAPP", "SEPA_DEBIT", "LINK", "ACH_DIRECT_DEBIT"], "example": "CREDIT_CARD", "type": "string", "key$": "type" }, "zipcode": { "description": "Billing zip code.", "type": "string", "key$": "zipcode" } }, "x-ref": "#/components/schemas/bill-subs-api_payment_method", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 0 }, { "name": "payment_method_id", "in": "path", "description": "Payment method identifier.", "required": true, "schema": { "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/bill-subs-api_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const bill_subs_api_payment_method_response_single_ref01_ent = client.BillSubsApiPaymentMethodResponseSingle();
        let bill_subs_api_payment_method_response_single_ref01_data = setup.data.new.bill_subs_api_payment_method_response_single['bill_subs_api_payment_method_response_single_ref01'];
        bill_subs_api_payment_method_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        bill_subs_api_payment_method_response_single_ref01_data = (await bill_subs_api_payment_method_response_single_ref01_ent.create(bill_subs_api_payment_method_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != bill_subs_api_payment_method_response_single_ref01_data.id);
        // UPDATE
        const bill_subs_api_payment_method_response_single_ref01_data_up0 = {};
        bill_subs_api_payment_method_response_single_ref01_data_up0.id = bill_subs_api_payment_method_response_single_ref01_data.id;
        bill_subs_api_payment_method_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const bill_subs_api_payment_method_response_single_ref01_markdef_up0 = { name: 'address', value: 'Mark01-bill_subs_api_payment_method_response_single_ref01_' + setup.now };
        bill_subs_api_payment_method_response_single_ref01_data_up0[bill_subs_api_payment_method_response_single_ref01_markdef_up0.name] = bill_subs_api_payment_method_response_single_ref01_markdef_up0.value;
        const bill_subs_api_payment_method_response_single_ref01_resdata_up0 = (await bill_subs_api_payment_method_response_single_ref01_ent.update(bill_subs_api_payment_method_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(bill_subs_api_payment_method_response_single_ref01_resdata_up0.id === bill_subs_api_payment_method_response_single_ref01_data_up0.id);
        (0, node_assert_1.default)(bill_subs_api_payment_method_response_single_ref01_resdata_up0[bill_subs_api_payment_method_response_single_ref01_markdef_up0.name] === bill_subs_api_payment_method_response_single_ref01_markdef_up0.value);
        // LOAD
        const bill_subs_api_payment_method_response_single_ref01_match_dt0 = {};
        bill_subs_api_payment_method_response_single_ref01_match_dt0.id = bill_subs_api_payment_method_response_single_ref01_data.id;
        const bill_subs_api_payment_method_response_single_ref01_data_dt0 = (await bill_subs_api_payment_method_response_single_ref01_ent.load(bill_subs_api_payment_method_response_single_ref01_match_dt0)).data();
        (0, node_assert_1.default)(bill_subs_api_payment_method_response_single_ref01_data_dt0.id === bill_subs_api_payment_method_response_single_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/bill_subs_api_payment_method_response_single/BillSubsApiPaymentMethodResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['bill_subs_api_payment_method_response_single01', 'bill_subs_api_payment_method_response_single02', 'bill_subs_api_payment_method_response_single03', 'payment_method01', 'payment_method02', 'payment_method03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_BILLING_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_PAYMENT_METHOD_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=BillSubsApiPaymentMethodResponseSingleEntity.test.js.map