

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


describe('BillSubsApiRatePlanSimpleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillSubsApiRatePlanSimple()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bill_subs_api_rate_plan_simple.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0}},"name":"bill_subs_api_rate_plan_simple","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /billing/rate_plans/{public_key}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"teams_free","k":"param","n":"public_key","or":"public_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/billing/rate_plans/{public_key}","q":{"exist":["public_key"]},"r":{},"s":[{"lit":"billing"},{"lit":"rate_plans"},{"var":"public_key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bill_subs_api_rate_plan_simple","name__orig":"bill_subs_api_rate_plan_simple","Name":"BillSubsApiRatePlanSimple","name_":"bill_subs_api_rate_plan_simple","name-":"bill-subs-api-rate-plan-simple","NAME":"BILL_SUBS_API_RATE_PLAN_SIMPLE","index$":17}, {"active":true,"entity":"bill_subs_api_rate_plan_simple","key$":"BasicBillSubsApiRatePlanSimpleFlow","kind":"basic","name":"BasicBillSubsApiRatePlanSimpleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bill_subs_api_rate_plan_simple_ref01","srcdatavar":"bill_subs_api_rate_plan_simple_ref01_data","suffix":"_dt0"},"m":{"id":"bill_subs_api_rate_plan_simple01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bill_subs_api_rate_plan_simple_ref01"}}],"index$":0}]}, 'BillSubsApiRatePlanSimple', {"GET /billing/rate_plans/{public_key}":{"protocol":"http","parameters":[{"name":"public_key","in":"path","description":"The public key identifier for the rate plan.","required":true,"schema":{"type":"string","example":"teams_free"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bill_subs_api_rate_plan_simple_ref01_data = Object.values(setup.data.existing.bill_subs_api_rate_plan_simple)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const bill_subs_api_rate_plan_simple_ref01_ent = client.BillSubsApiRatePlanSimple()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bill_subs_api_rate_plan_simple/BillSubsApiRatePlanSimpleTestData.json')

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
    ['bill_subs_api_rate_plan_simple01','bill_subs_api_rate_plan_simple02','bill_subs_api_rate_plan_simple03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_RATE_PLAN_SIMPLE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_RATE_PLAN_SIMPLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_RATE_PLAN_SIMPLE_ENTID']
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
  
