

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


describe('BillableUsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillableUsage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'billable_usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Contains error details if the request failed.","t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Contains informational notices about the response.","t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Contains the array of billable usage records.","t":"`$ARRAY`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"billable_usage","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/billable-usage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"2025-05-01","k":"query","n":"from","or":"from","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2025-05-31","k":"query","n":"to","or":"to","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/billable-usage","q":{"exist":["account_id","from","to"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billable-usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"billable_usage","name__orig":"billable_usage","Name":"BillableUsage","name_":"billable_usage","name-":"billable-usage","NAME":"BILLABLE_USAGE","index$":22}, {"active":true,"entity":"billable_usage","key$":"BasicBillableUsageFlow","kind":"basic","name":"BasicBillableUsageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"billable_usage_ref01"}}],"index$":0}]}, 'BillableUsage', {"GET /accounts/{account_id}/billable-usage":{"protocol":"http","parameters":[{"description":"Identifies the Cloudflare account.","in":"path","name":"account_id","required":true,"schema":{"description":"Represents a Cloudflare resource identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"pattern":"^[0-9a-f]{32}$","x-ref":"#/components/schemas/billable-usage-api_identifier"},"x-ref":"#/components/parameters/billable-usage-api_account_id","index$":0},{"description":"Start date for the usage query (ISO 8601). The provided time range must include the subscription billing cycle anchor day, otherwise no usage data is returned. Use the info endpoint to retrieve the subscription anchor day.","in":"query","name":"from","schema":{"type":"string","format":"date","example":"2025-05-01"},"x-ref":"#/components/parameters/billable-usage-api_from","index$":1},{"description":"End date for the usage query (ISO 8601).","in":"query","name":"to","schema":{"type":"string","format":"date","example":"2025-05-31"},"x-ref":"#/components/parameters/billable-usage-api_to","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let billable_usage_ref01_data = Object.values(setup.data.existing.billable_usage)[0] as any

    // LIST
    const billable_usage_ref01_ent = client.BillableUsage()
    const billable_usage_ref01_match: any = {}
    billable_usage_ref01_match['account_id'] = setup.idmap['account01']

    const billable_usage_ref01_list = (await billable_usage_ref01_ent.list(billable_usage_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/billable_usage/BillableUsageTestData.json')

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
    ['billable_usage01','billable_usage02','billable_usage03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILLABLE_USAGE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILLABLE_USAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILLABLE_USAGE_ENTID']
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
  
