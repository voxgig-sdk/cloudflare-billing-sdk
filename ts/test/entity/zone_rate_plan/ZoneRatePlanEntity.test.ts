

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


describe('ZoneRatePlanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.ZoneRatePlan()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zone_rate_plan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":1}},"id":{"field":"id","name":"id"},"name":"zone_rate_plan","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/available_plans","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/available_plans","q":{"$action":"available_plans","exist":["id"]},"r":{"param":{"zone_id":"id"}},"s":[{"lit":"zones"},{"var":"id"},{"lit":"available_plans"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/available_plans/{plan_identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"plan_identifier","or":"plan_identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/available_plans/{plan_identifier}","q":{"exist":["plan_identifier","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"available_plans"},{"var":"plan_identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"zone_rate_plan","name__orig":"zone_rate_plan","Name":"ZoneRatePlan","name_":"zone_rate_plan","name-":"zone-rate-plan","NAME":"ZONE_RATE_PLAN","index$":33}, {"active":true,"entity":"zone_rate_plan","key$":"BasicZoneRatePlanFlow","kind":"basic","name":"BasicZoneRatePlanFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"zone_rate_plan_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"zone_rate_plan_ref01","srcdatavar":"zone_rate_plan_ref01_data","suffix":"_dt0"},"m":{"id":"zone_rate_plan01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zone_rate_plan_ref01"}}],"index$":1}]}, 'ZoneRatePlan', {"GET /zones/{zone_id}/available_plans":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]},"GET /zones/{zone_id}/available_plans/{plan_identifier}":{"protocol":"http","parameters":[{"name":"plan_identifier","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zone_rate_plan_ref01_data = Object.values(setup.data.existing.zone_rate_plan)[0] as any

    // LIST
    const zone_rate_plan_ref01_ent = client.ZoneRatePlan()
    const zone_rate_plan_ref01_match: any = {}
    zone_rate_plan_ref01_match['zone_id'] = setup.idmap['zone01']

    const zone_rate_plan_ref01_list = (await zone_rate_plan_ref01_ent.list(zone_rate_plan_ref01_match)).map((e: any) => e.data())


    // LOAD
    const zone_rate_plan_ref01_match_dt0: any = {}
    zone_rate_plan_ref01_match_dt0.id = zone_rate_plan_ref01_data.id
    const zone_rate_plan_ref01_data_dt0 = (await zone_rate_plan_ref01_ent.load(zone_rate_plan_ref01_match_dt0)).data()
    assert(zone_rate_plan_ref01_data_dt0.id === zone_rate_plan_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zone_rate_plan/ZoneRatePlanTestData.json')

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
    ['zone_rate_plan01','zone_rate_plan02','zone_rate_plan03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_ZONE_RATE_PLAN_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_ZONE_RATE_PLAN_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_ZONE_RATE_PLAN_ENTID']
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
  
