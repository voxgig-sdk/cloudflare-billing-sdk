

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


describe('BillableUsageApiV2UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillableUsageApiV2Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'billable_usage_api_v2_usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"FilterBy":{"a":true,"h":"Filter By","n":"FilterBy","r":false,"sh":"Usage filters.","t":"`$OBJECT`","key$":"FilterBy","index$":0},"GroupBy":{"a":true,"h":"Group By","n":"GroupBy","r":false,"sh":"Grouping definitions used to split result rows.","t":"`$ARRAY`","key$":"GroupBy","index$":1},"TimePeriod":{"a":true,"h":"Time Period","n":"TimePeriod","r":false,"sh":"Charge period to query, i.e.","t":"`$OBJECT`","key$":"TimePeriod","index$":2},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Contains error details if the request failed.","t":"`$ARRAY`","key$":"errors","index$":3},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Contains informational notices about the response.","t":"`$ARRAY`","key$":"messages","index$":4},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Contains the array of cost and usage records.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":4},"key$":"result","index$":5},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":6}},"name":"billable_usage_api_v2_usage","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/billable/usage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/billable/usage","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billable"},{"lit":"usage"}],"t":{"req":{"FilterBy":"`reqdata.filter_by`","GroupBy":"`reqdata.group_by`","TimePeriod":"`reqdata.time_period`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/billable/usage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"2025-05-01","k":"query","n":"from","or":"from","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2025-05-31","k":"query","n":"to","or":"to","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/billable/usage","q":{"exist":["account_id","from","to"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billable"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"billable_usage_api_v2_usage","name__orig":"billable_usage_api_v2_usage","Name":"BillableUsageApiV2Usage","name_":"billable_usage_api_v2_usage","name-":"billable-usage-api-v2-usage","NAME":"BILLABLE_USAGE_API_V2_USAGE","index$":25}, {"active":true,"entity":"billable_usage_api_v2_usage","key$":"BasicBillableUsageApiV2UsageFlow","kind":"basic","name":"BasicBillableUsageApiV2UsageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"billable_usage_api_v2_usage_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"billable_usage_api_v2_usage_ref01"}}],"index$":1}]}, 'BillableUsageApiV2Usage', {"POST /accounts/{account_id}/billable/usage":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Filter criteria for a usage query. Every field is optional; an empty object is equivalent to omitting the body entirely. Unknown fields are rejected.","type":"object","properties":{"FilterBy":{"description":"Usage filters. Filters of different kinds are combined with AND, so a record must match every filter present to be returned.","type":"object","properties":{"MetricIds":{"description":"Restrict results to rows whose `x_BillableMetricId` matches one of these billable metric ids (e.g. `workers_standard_requests`). Values must be unique.","type":"array","items":{"maxLength":128,"type":"string"},"example":["workers_standard_requests","http_transferred_bytes"],"maxItems":20,"uniqueItems":true},"ProductFamilyIds":{"description":"Restrict results to billable metrics belonging to these product families. Values must be unique UUIDs.","type":"array","items":{"format":"uuid","type":"string"},"example":["3f1b9c1e-0000-4000-8000-000000000000"],"maxItems":10,"uniqueItems":true},"Tags":{"description":"Restrict results by resource tags. Filters for different keys are combined with AND, while values within one filter are combined with OR. Keys must be unique and are case-sensitive.","type":"array","items":{"description":"Values accepted for one resource-tag key.","type":"object","properties":{},"additionalProperties":false,"required":[],"x-ref":"#/components/schemas/billable-usage-api_v2_tag_filter"},"maxItems":10,"uniqueItems":true}},"additionalProperties":false,"x-ref":"#/components/schemas/billable-usage-api_v2_filter_by","key$":"FilterBy"},"GroupBy":{"description":"Grouping definitions used to split result rows. At most two unique keys may be supplied.","type":"array","items":{"description":"A definition used to split result rows. TAG groups by a case-sensitive resource-tag key. DIMENSION groups by a usage dimension key — account_id, zone_id and region are the documented keys, and any other dimension key carried by the usage data is accepted and returned under that same key.","type":"object","properties":{"Key":{"description":"Case-sensitive resource-tag key (for TAG) or dimension key (for DIMENSION), e.g. team, region, account_id or zone_id.","type":"string","example":"region","maxLength":256,"minLength":1},"Type":{"description":"Group category.","type":"string","example":"DIMENSION","enum":[]}},"additionalProperties":false,"required":["Type","Key"],"x-ref":"#/components/schemas/billable-usage-api_v2_group_by"},"maxItems":2,"uniqueItems":true,"key$":"GroupBy"},"TimePeriod":{"description":"Charge period to query, i.e. when consumption happened, not when it was billed. `From` is inclusive and `To` is exclusive. `From` and `To` must be supplied together; supplying one without the other is an error. When both are omitted the range defaults to the start of the current month through today.","type":"object","properties":{"From":{"description":"Start of the range (ISO 8601). Required if `To` is set.","type":"string","format":"date-time","example":"2025-05-01T00:00:00Z"},"To":{"description":"End of the range (ISO 8601). Required if `From` is set. Must be after `From` and no more than 31 days after it.","type":"string","format":"date-time","example":"2025-05-31T00:00:00Z"}},"additionalProperties":false,"x-ref":"#/components/schemas/billable-usage-api_v2_time_period","key$":"TimePeriod"}},"additionalProperties":false,"x-ref":"#/components/schemas/billable-usage-api_v2_usage_query","index$":1}}}},"parameters":[{"description":"Identifies the Cloudflare account.","in":"path","name":"account_id","required":true,"schema":{"description":"Represents a Cloudflare resource identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"pattern":"^[0-9a-f]{32}$","x-ref":"#/components/schemas/billable-usage-api_identifier"},"x-ref":"#/components/parameters/billable-usage-api_account_id","index$":0}]},"GET /accounts/{account_id}/billable/usage":{"protocol":"http","parameters":[{"description":"Identifies the Cloudflare account.","in":"path","name":"account_id","required":true,"schema":{"description":"Represents a Cloudflare resource identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"pattern":"^[0-9a-f]{32}$","x-ref":"#/components/schemas/billable-usage-api_identifier"},"x-ref":"#/components/parameters/billable-usage-api_account_id","index$":0},{"description":"Start date for the usage query (ISO 8601). Required if `to` is set. When omitted along with `to`, defaults to the start of the current month. Filters by charge period (when consumption happened), not billing period. The maximum date range is 31 days.","in":"query","name":"from","schema":{"type":"string","format":"date","example":"2025-05-01"},"x-ref":"#/components/parameters/billable-usage-api_v2_from","index$":1},{"description":"End date for the usage query (ISO 8601). Required if `from` is set. When omitted along with `from`, defaults to today. Filters by charge period (when consumption happened), not billing period. The maximum date range is 31 days.","in":"query","name":"to","schema":{"type":"string","format":"date","example":"2025-05-31"},"x-ref":"#/components/parameters/billable-usage-api_v2_to","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const billable_usage_api_v2_usage_ref01_ent = client.BillableUsageApiV2Usage()
    let billable_usage_api_v2_usage_ref01_data = setup.data.new.billable_usage_api_v2_usage['billable_usage_api_v2_usage_ref01']
    billable_usage_api_v2_usage_ref01_data['account_id'] = setup.idmap['account01']

    billable_usage_api_v2_usage_ref01_data = (await billable_usage_api_v2_usage_ref01_ent.create(billable_usage_api_v2_usage_ref01_data)).data()
    assert(null != billable_usage_api_v2_usage_ref01_data)


    // LIST
    const billable_usage_api_v2_usage_ref01_match: any = {}
    billable_usage_api_v2_usage_ref01_match['account_id'] = setup.idmap['account01']

    const billable_usage_api_v2_usage_ref01_list = (await billable_usage_api_v2_usage_ref01_ent.list(billable_usage_api_v2_usage_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/billable_usage_api_v2_usage/BillableUsageApiV2UsageTestData.json')

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
    ['billable_usage_api_v2_usage01','billable_usage_api_v2_usage02','billable_usage_api_v2_usage03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILLABLE_USAGE_API_V2_USAGE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILLABLE_USAGE_API_V2_USAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILLABLE_USAGE_API_V2_USAGE_ENTID']
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
  
