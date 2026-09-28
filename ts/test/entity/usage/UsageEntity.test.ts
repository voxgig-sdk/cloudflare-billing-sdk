

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


describe('UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"List of errors, empty on success.","t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":false,"sh":"List of informational messages.","t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Array of billing usage data points for the requested time range.","t":"`$ARRAY`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"usage","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/billing/usage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"streamMinutesViewed","k":"query","n":"metric","or":"metric","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"2023-09-01T00:00:00Z","k":"query","n":"since","or":"since","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"hour","k":"query","n":"time_delta","or":"time_delta","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"2023-09-01T06:00:00Z","k":"query","n":"until","or":"until","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/accounts/{account_id}/billing/usage","q":{"exist":["account_id","filter","limit","metric","since","time_delta","until"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billing"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"usage","name__orig":"usage","Name":"Usage","name_":"usage","name-":"usage","NAME":"USAGE","index$":31}, {"active":true,"entity":"usage","key$":"BasicUsageFlow","kind":"basic","name":"BasicUsageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"usage_ref01"}}],"index$":0}]}, 'Usage', {"GET /accounts/{account_id}/billing/usage":{"protocol":"http","parameters":[{"description":"Standard Cloudflare hex account identifier. The API gateway translates this to an internal numeric ID before forwarding to the backend service.\n","in":"path","name":"account_id","required":true,"schema":{"description":"Cloudflare resource identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/usage-analytics_identifier"},"x-ref":"#/components/parameters/usage-analytics_account_id","index$":0},{"description":"Comma-separated list of metrics to include in the response. Available metrics depend on the endpoint. Billing usage supports: streamMinutesViewed, rateLimitingRequestsAllowed, loadBalancingQueries, argoAcceleratedBytes, workersRequests, workersKVReads, imageResizingRequests, spectrumBytesTransferred, mediaUniqueTransformations. Stream/media usage supports: streamMinutesViewed.\n","in":"query","name":"metrics","schema":{"type":"string","example":"streamMinutesViewed"},"x-ref":"#/components/parameters/usage-analytics_metrics","index$":1},{"description":"Start of the time range for the query (inclusive). ISO 8601 timestamp. Defaults to 6 hours before the current time.\n","in":"query","name":"since","schema":{"type":"string","format":"date-time","example":"2023-09-01T00:00:00Z"},"x-ref":"#/components/parameters/usage-analytics_since","index$":2},{"description":"End of the time range for the query (inclusive). ISO 8601 timestamp. Defaults to the current time.\n","in":"query","name":"until","schema":{"type":"string","format":"date-time","example":"2023-09-01T06:00:00Z"},"x-ref":"#/components/parameters/usage-analytics_until","index$":3},{"description":"Time unit to aggregate usage observations into. Data retention is approximately 18 months. The effective number of data points returned depends on the time range and granularity selected. For example, requesting hourly granularity over 18 months could produce up to ~13,000 data points; use the limit parameter to cap results and be aware that responses may be truncated.\n","in":"query","name":"time_delta","schema":{"type":"string","example":"hour","default":"hour","enum":["hour","day","week","month","quarter","year"]},"x-ref":"#/components/parameters/usage-analytics_time_delta","index$":4},{"description":"Maximum number of data points to return. The actual number of results depends on the interaction between the time range (since/until) and time_delta granularity. Results are truncated to this limit without error if the time range produces more data points than the limit allows.\n","in":"query","name":"limit","schema":{"type":"integer","example":100,"default":100,"maximum":10000,"minimum":1},"x-ref":"#/components/parameters/usage-analytics_limit","index$":5},{"description":"Filter expressions to apply to the query. Format: field==value. Multiple filters can be combined.\n","in":"query","name":"filters","schema":{"type":"string","example":""},"x-ref":"#/components/parameters/usage-analytics_filters","index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_ref01_data = Object.values(setup.data.existing.usage)[0] as any

    // LIST
    const usage_ref01_ent = client.Usage()
    const usage_ref01_match: any = {}
    usage_ref01_match['account_id'] = setup.idmap['account01']

    const usage_ref01_list = (await usage_ref01_ent.list(usage_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage/UsageTestData.json')

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
    ['usage01','usage02','usage03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_USAGE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_USAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_USAGE_ENTID']
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
  
