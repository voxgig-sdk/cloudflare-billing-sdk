

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


describe('BillSubsApiAddressValidationResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillSubsApiAddressValidationResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bill_subs_api_address_validation_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"address":{"a":true,"h":"Address","n":"address","r":false,"sh":"Address line 1.","t":"`$STRING`","key$":"address","index$":0},"address2":{"a":true,"h":"Address2","n":"address2","r":false,"sh":"Address line 2.","t":"`$STRING`","key$":"address2","index$":1},"city":{"a":true,"h":"City","n":"city","r":false,"sh":"City.","t":"`$STRING`","key$":"city","index$":2},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country code.","t":"`$STRING`","key$":"country","index$":3},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"State or province.","t":"`$STRING`","key$":"state","index$":4},"zipcode":{"a":true,"h":"Zipcode","n":"zipcode","r":false,"sh":"Postal or zip code.","t":"`$STRING`","key$":"zipcode","index$":5}},"name":"bill_subs_api_address_validation_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /billing/address-validation","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/billing/address-validation","q":{},"r":{},"s":[{"lit":"billing"},{"lit":"address-validation"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"bill_subs_api_address_validation_response_single","name__orig":"bill_subs_api_address_validation_response_single","Name":"BillSubsApiAddressValidationResponseSingle","name_":"bill_subs_api_address_validation_response_single","name-":"bill-subs-api-address-validation-response-single","NAME":"BILL_SUBS_API_ADDRESS_VALIDATION_RESPONSE_SINGLE","index$":7}, {"active":true,"entity":"bill_subs_api_address_validation_response_single","key$":"BasicBillSubsApiAddressValidationResponseSingleFlow","kind":"basic","name":"BasicBillSubsApiAddressValidationResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bill_subs_api_address_validation_response_single_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'BillSubsApiAddressValidationResponseSingle', {"POST /billing/address-validation":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"address":{"description":"Address line 1.","type":"string","key$":"address"},"address2":{"description":"Address line 2.","type":"string","key$":"address2"},"city":{"description":"City.","type":"string","key$":"city"},"country":{"description":"Country code.","type":"string","key$":"country"},"state":{"description":"State or province.","type":"string","key$":"state"},"zipcode":{"description":"Postal or zip code.","type":"string","key$":"zipcode"}},"x-ref":"#/components/schemas/bill-subs-api_address_validation_request","index$":1}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bill_subs_api_address_validation_response_single_ref01_ent = client.BillSubsApiAddressValidationResponseSingle()
    let bill_subs_api_address_validation_response_single_ref01_data = setup.data.new.bill_subs_api_address_validation_response_single['bill_subs_api_address_validation_response_single_ref01']

    bill_subs_api_address_validation_response_single_ref01_data = (await bill_subs_api_address_validation_response_single_ref01_ent.create(bill_subs_api_address_validation_response_single_ref01_data)).data()
    assert(null != bill_subs_api_address_validation_response_single_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bill_subs_api_address_validation_response_single/BillSubsApiAddressValidationResponseSingleTestData.json')

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
    ['bill_subs_api_address_validation_response_single01','bill_subs_api_address_validation_response_single02','bill_subs_api_address_validation_response_single03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ADDRESS_VALIDATION_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ADDRESS_VALIDATION_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_ADDRESS_VALIDATION_RESPONSE_SINGLE_ENTID']
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
  
