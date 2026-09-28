

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


describe('BillSubsApiBillingHistoryCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillSubsApiBillingHistoryCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bill_subs_api_billing_history_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"bill_subs_api_billing_history_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /user/billing/history","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"subscription","k":"query","n":"action","or":"action","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2014-03-01T12:21:59.3456Z","k":"query","n":"occurred_at","or":"occurred_at","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"occurred_at","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"ex":"charge","k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/user/billing/history","q":{"exist":["action","occurred_at","order","page","per_page","type"]},"r":{},"s":[{"lit":"user"},{"lit":"billing"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"bill_subs_api_billing_history_collection","name__orig":"bill_subs_api_billing_history_collection","Name":"BillSubsApiBillingHistoryCollection","name_":"bill_subs_api_billing_history_collection","name-":"bill-subs-api-billing-history-collection","NAME":"BILL_SUBS_API_BILLING_HISTORY_COLLECTION","index$":9}, {"active":true,"entity":"bill_subs_api_billing_history_collection","key$":"BasicBillSubsApiBillingHistoryCollectionFlow","kind":"basic","name":"BasicBillSubsApiBillingHistoryCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"bill_subs_api_billing_history_collection_ref01"}}],"index$":0}]}, 'BillSubsApiBillingHistoryCollection', {"GET /user/billing/history":{"protocol":"http","parameters":[{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":0},{"name":"per_page","in":"query","schema":{"description":"Number of items per page.","type":"number","default":20,"maximum":50,"minimum":5},"index$":1},{"name":"order","in":"query","schema":{"description":"Field to order billing history by.","type":"string","example":"occurred_at","enum":["type","occurred_at","action"]},"index$":2},{"name":"occurred_at","in":"query","schema":{"description":"When the billing item was created.","type":"string","format":"date-time","example":"2014-03-01T12:21:59.3456Z","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_occurred_at"},"index$":3},{"name":"type","in":"query","schema":{"description":"The billing item type.","type":"string","example":"charge","maxLength":30,"readOnly":true},"index$":4},{"name":"action","in":"query","schema":{"description":"The billing item action.","type":"string","example":"subscription","maxLength":30,"readOnly":true},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bill_subs_api_billing_history_collection_ref01_data = Object.values(setup.data.existing.bill_subs_api_billing_history_collection)[0] as any

    // LIST
    const bill_subs_api_billing_history_collection_ref01_ent = client.BillSubsApiBillingHistoryCollection()
    const bill_subs_api_billing_history_collection_ref01_match: any = {}

    const bill_subs_api_billing_history_collection_ref01_list = (await bill_subs_api_billing_history_collection_ref01_ent.list(bill_subs_api_billing_history_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bill_subs_api_billing_history_collection/BillSubsApiBillingHistoryCollectionTestData.json')

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
    ['bill_subs_api_billing_history_collection01','bill_subs_api_billing_history_collection02','bill_subs_api_billing_history_collection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_BILLING_HISTORY_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_BILLING_HISTORY_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_BILLING_HISTORY_COLLECTION_ENTID']
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
  
