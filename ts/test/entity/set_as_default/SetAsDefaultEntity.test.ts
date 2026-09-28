

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


describe('SetAsDefaultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.SetAsDefault()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'set_as_default.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","op":{"create":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$ANY`","union":{"branches":3,"count":1,"depth":0},"key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"set_as_default","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"payment_method_id","or":"payment_method_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default","q":{"exist":["account_id","payment_method_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"payment-methods"},{"var":"payment_method_id"},{"lit":"set-as-default"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.payment_method"]]},"key$":"set_as_default","name__orig":"set_as_default","Name":"SetAsDefault","name_":"set_as_default","name-":"set-as-default","NAME":"SET_AS_DEFAULT","index$":30}, {"active":true,"entity":"set_as_default","key$":"BasicSetAsDefaultFlow","kind":"basic","name":"BasicSetAsDefaultFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"set_as_default_ref01"},"m":{"account_id":"account01","payment_method_id":"payment_method01"},"o":"create","s":[],"v":[],"index$":0}]}, 'SetAsDefault', {"POST /accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0},{"name":"payment_method_id","in":"path","description":"Payment method identifier.","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const set_as_default_ref01_ent = client.SetAsDefault()
    let set_as_default_ref01_data = setup.data.new.set_as_default['set_as_default_ref01']
    set_as_default_ref01_data['account_id'] = setup.idmap['account01']
    set_as_default_ref01_data['payment_method_id'] = setup.idmap['payment_method01']

    set_as_default_ref01_data = (await set_as_default_ref01_ent.create(set_as_default_ref01_data)).data()
    assert(null != set_as_default_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/set_as_default/SetAsDefaultTestData.json')

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
    ['set_as_default01','set_as_default02','set_as_default03','payment_method01','payment_method02','payment_method03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_SET_AS_DEFAULT_ENTID']
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
  
