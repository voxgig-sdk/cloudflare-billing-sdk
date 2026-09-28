

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareBillingSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('BillSubsApiClientSecretResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillSubsApiClientSecretResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bill_subs_api_client_secret_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"invoice_id":{"a":true,"h":"Invoice Id","n":"invoice_id","r":false,"sh":"The identifier of the invoice to pay.","t":"`$STRING`","key$":"invoice_id","index$":0},"payment_method_id":{"a":true,"h":"Payment Method Id","n":"payment_method_id","r":false,"sh":"The payment method to use.","t":"`$STRING`","key$":"payment_method_id","index$":1},"validate_payment_method":{"a":true,"h":"Validate Payment Method","n":"validate_payment_method","r":false,"sh":"Whether to validate the payment method before processing.","t":"`$BOOLEAN`","key$":"validate_payment_method","index$":2}},"name":"bill_subs_api_client_secret_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/pay-bad-debt","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/pay-bad-debt","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"pay-bad-debt"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/pay-invoice","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/pay-invoice","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"pay-invoice"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"bill_subs_api_client_secret_response_single","name__orig":"bill_subs_api_client_secret_response_single","Name":"BillSubsApiClientSecretResponseSingle","name_":"bill_subs_api_client_secret_response_single","name-":"bill-subs-api-client-secret-response-single","NAME":"BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE","index$":12}, {"active":true,"entity":"bill_subs_api_client_secret_response_single","key$":"BasicBillSubsApiClientSecretResponseSingleFlow","kind":"basic","name":"BasicBillSubsApiClientSecretResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bill_subs_api_client_secret_response_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'BillSubsApiClientSecretResponseSingle', {"POST /accounts/{account_id}/pay-bad-debt":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"payment_method_id":{"description":"The payment method to use. If omitted, the default payment method is used.","type":"string","key$":"payment_method_id"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]},"POST /accounts/{account_id}/pay-invoice":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"invoice_id":{"description":"The identifier of the invoice to pay.","type":"string","key$":"invoice_id"},"payment_method_id":{"description":"The payment method to use. If omitted, the default payment method is used.","type":"string","key$":"payment_method_id"},"validate_payment_method":{"description":"Whether to validate the payment method before processing.","type":"boolean","key$":"validate_payment_method"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bill_subs_api_client_secret_response_single_ref01_ent = client.BillSubsApiClientSecretResponseSingle()
    let bill_subs_api_client_secret_response_single_ref01_data = setup.data.new.bill_subs_api_client_secret_response_single['bill_subs_api_client_secret_response_single_ref01']
    bill_subs_api_client_secret_response_single_ref01_data['account_id'] = setup.idmap['account01']

    bill_subs_api_client_secret_response_single_ref01_data = (await bill_subs_api_client_secret_response_single_ref01_ent.create(bill_subs_api_client_secret_response_single_ref01_data)).data()
    assert(null != bill_subs_api_client_secret_response_single_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bill_subs_api_client_secret_response_single/BillSubsApiClientSecretResponseSingleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareBillingSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['bill_subs_api_client_secret_response_single01','bill_subs_api_client_secret_response_single02','bill_subs_api_client_secret_response_single03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_CLIENT_SECRET_RESPONSE_SINGLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareBillingSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
