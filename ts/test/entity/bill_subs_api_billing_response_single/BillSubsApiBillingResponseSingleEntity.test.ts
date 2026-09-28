

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


describe('BillSubsApiBillingResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareBillingSDK.test()
    const ent = testsdk.BillSubsApiBillingResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_BILLING_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bill_subs_api_billing_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"address":{"a":true,"h":"Address","n":"address","r":false,"sh":"Street address line 1.","t":"`$STRING`","key$":"address","index$":0},"address2":{"a":true,"h":"Address2","n":"address2","r":false,"sh":"Street address line 2 (apt, suite, etc.).","t":"`$STRING`","key$":"address2","index$":1},"billing_email":{"a":true,"h":"Billing Email","n":"billing_email","r":false,"sh":"Primary billing email address.","t":"`$STRING`","key$":"billing_email","index$":2},"buying_rate_plan":{"a":true,"h":"Buying Rate Plan","n":"buying_rate_plan","r":false,"sh":"Rate plan being purchased right after profile setup.","t":"`$STRING`","key$":"buying_rate_plan","index$":3},"captcha_challenge_jwt":{"a":true,"h":"Captcha Challenge Jwt","n":"captcha_challenge_jwt","r":false,"sh":"Captcha challenge JWT issued during onboarding.","t":"`$STRING`","key$":"captcha_challenge_jwt","index$":4},"cf_turnstile_response":{"a":true,"h":"Cf Turnstile Response","n":"cf_turnstile_response","r":false,"sh":"Cloudflare Turnstile response.","t":"`$STRING`","key$":"cf_turnstile_response","index$":5},"city":{"a":true,"h":"City","n":"city","r":false,"sh":"City on the billing profile.","t":"`$STRING`","key$":"city","index$":6},"company":{"a":true,"h":"Company","n":"company","r":false,"sh":"Company name on the billing profile.","t":"`$STRING`","key$":"company","index$":7},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"ISO 3166-1 alpha-2 country code.","t":"`$STRING`","key$":"country","index$":8},"first_name":{"a":true,"h":"First Name","n":"first_name","r":false,"sh":"First name on the billing profile.","t":"`$STRING`","key$":"first_name","index$":9},"h_captcha_response":{"a":true,"h":"H Captcha Response","n":"h_captcha_response","r":false,"sh":"hCaptcha response.","t":"`$STRING`","key$":"h_captcha_response","index$":10},"last_name":{"a":true,"h":"Last Name","n":"last_name","r":false,"sh":"Last name on the billing profile.","t":"`$STRING`","key$":"last_name","index$":11},"preferred_locale":{"a":true,"h":"Preferred Locale","n":"preferred_locale","r":false,"sh":"Preferred locale for invoice rendering (BCP 47).","t":"`$STRING`","key$":"preferred_locale","index$":12},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":13},"secondary_billing_email":{"a":true,"h":"Secondary Billing Email","n":"secondary_billing_email","r":false,"sh":"Secondary billing email address for CC on invoices.","t":"`$STRING`","key$":"secondary_billing_email","index$":14},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"State or region on the billing profile.","t":"`$STRING`","key$":"state","index$":15},"tax_id_type":{"a":true,"h":"Tax Id Type","n":"tax_id_type","r":false,"sh":"Type of tax ID provided.","t":"`$STRING`","key$":"tax_id_type","index$":16},"telephone":{"a":true,"h":"Telephone","n":"telephone","r":false,"sh":"Contact phone number.","t":"`$STRING`","key$":"telephone","index$":17},"vat":{"a":true,"h":"Vat","n":"vat","r":false,"sh":"VAT identifier.","t":"`$STRING`","key$":"vat","index$":18},"zipcode":{"a":true,"h":"Zipcode","n":"zipcode","r":false,"sh":"ZIP or postal code.","t":"`$STRING`","key$":"zipcode","index$":19}},"name":"bill_subs_api_billing_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/billing/profile","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/billing/profile","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billing"},{"lit":"profile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/billing/profile","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/billing/profile","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billing"},{"lit":"profile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /user/billing/profile","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/user/billing/profile","q":{},"r":{},"s":[{"lit":"user"},{"lit":"billing"},{"lit":"profile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/billing/profile","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/billing/profile","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billing"},{"lit":"profile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/billing/profile","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/billing/profile","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"billing"},{"lit":"profile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"bill_subs_api_billing_response_single","name__orig":"bill_subs_api_billing_response_single","Name":"BillSubsApiBillingResponseSingle","name_":"bill_subs_api_billing_response_single","name-":"bill-subs-api-billing-response-single","NAME":"BILL_SUBS_API_BILLING_RESPONSE_SINGLE","index$":10}, {"active":true,"entity":"bill_subs_api_billing_response_single","key$":"BasicBillSubsApiBillingResponseSingleFlow","kind":"basic","name":"BasicBillSubsApiBillingResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bill_subs_api_billing_response_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"bill_subs_api_billing_response_single_ref01","srcdatavar":"bill_subs_api_billing_response_single_ref01_data","suffix":"_up0","textfield":"address"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bill_subs_api_billing_response_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"bill_subs_api_billing_response_single_ref01","srcdatavar":"bill_subs_api_billing_response_single_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bill_subs_api_billing_response_single_ref01"}}],"index$":2}]}, 'BillSubsApiBillingResponseSingle', {"POST /accounts/{account_id}/billing/profile":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Request body for creating or updating a billing profile.","type":"object","properties":{"address":{"description":"Street address line 1.","type":"string","example":"123 Main Street","key$":"address"},"address2":{"description":"Street address line 2 (apt, suite, etc.).","type":"string","example":"Apt 1","key$":"address2"},"billing_email":{"description":"Primary billing email address.","type":"string","example":"billing@example.com","key$":"billing_email"},"buying_rate_plan":{"description":"Rate plan being purchased right after profile setup.","type":"string","key$":"buying_rate_plan"},"captcha_challenge_jwt":{"description":"Captcha challenge JWT issued during onboarding.","type":"string","key$":"captcha_challenge_jwt"},"cf_turnstile_response":{"description":"Cloudflare Turnstile response.","type":"string","key$":"cf_turnstile_response"},"city":{"description":"City on the billing profile.","type":"string","example":"Anytown","key$":"city"},"company":{"description":"Company name on the billing profile.","type":"string","example":"Example Inc","key$":"company"},"country":{"description":"ISO 3166-1 alpha-2 country code.","type":"string","example":"US","key$":"country"},"first_name":{"description":"First name on the billing profile.","type":"string","example":"John","key$":"first_name"},"h_captcha_response":{"description":"hCaptcha response.","type":"string","key$":"h_captcha_response"},"last_name":{"description":"Last name on the billing profile.","type":"string","example":"Doe","key$":"last_name"},"preferred_locale":{"description":"Preferred locale for invoice rendering (BCP 47).","type":"string","example":"en-US","key$":"preferred_locale"},"secondary_billing_email":{"description":"Secondary billing email address for CC on invoices.","type":"string","example":"secondary@example.com","key$":"secondary_billing_email"},"state":{"description":"State or region on the billing profile.","type":"string","example":"CA","key$":"state"},"tax_id_type":{"description":"Type of tax ID provided.","type":"string","key$":"tax_id_type"},"telephone":{"description":"Contact phone number.","type":"string","example":"+1-555-555-5555","key$":"telephone"},"vat":{"description":"VAT identifier.","type":"string","key$":"vat"},"zipcode":{"description":"ZIP or postal code.","type":"string","example":"94103","key$":"zipcode"}},"x-ref":"#/components/schemas/bill-subs-api_billing_profile_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]},"GET /accounts/{account_id}/billing/profile":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]},"GET /user/billing/profile":{"protocol":"http","parameters":[]},"PATCH /accounts/{account_id}/billing/profile":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"billing_email":{"type":"string","example":"billing@example.com","key$":"billing_email"},"preferred_locale":{"type":"string","example":"en-US","key$":"preferred_locale"},"secondary_billing_email":{"type":"string","example":"secondary@example.com","key$":"secondary_billing_email"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]},"PUT /accounts/{account_id}/billing/profile":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Request body for creating or updating a billing profile.","type":"object","properties":{"address":{"description":"Street address line 1.","type":"string","example":"123 Main Street","key$":"address"},"address2":{"description":"Street address line 2 (apt, suite, etc.).","type":"string","example":"Apt 1","key$":"address2"},"billing_email":{"description":"Primary billing email address.","type":"string","example":"billing@example.com","key$":"billing_email"},"buying_rate_plan":{"description":"Rate plan being purchased right after profile setup.","type":"string","key$":"buying_rate_plan"},"captcha_challenge_jwt":{"description":"Captcha challenge JWT issued during onboarding.","type":"string","key$":"captcha_challenge_jwt"},"cf_turnstile_response":{"description":"Cloudflare Turnstile response.","type":"string","key$":"cf_turnstile_response"},"city":{"description":"City on the billing profile.","type":"string","example":"Anytown","key$":"city"},"company":{"description":"Company name on the billing profile.","type":"string","example":"Example Inc","key$":"company"},"country":{"description":"ISO 3166-1 alpha-2 country code.","type":"string","example":"US","key$":"country"},"first_name":{"description":"First name on the billing profile.","type":"string","example":"John","key$":"first_name"},"h_captcha_response":{"description":"hCaptcha response.","type":"string","key$":"h_captcha_response"},"last_name":{"description":"Last name on the billing profile.","type":"string","example":"Doe","key$":"last_name"},"preferred_locale":{"description":"Preferred locale for invoice rendering (BCP 47).","type":"string","example":"en-US","key$":"preferred_locale"},"secondary_billing_email":{"description":"Secondary billing email address for CC on invoices.","type":"string","example":"secondary@example.com","key$":"secondary_billing_email"},"state":{"description":"State or region on the billing profile.","type":"string","example":"CA","key$":"state"},"tax_id_type":{"description":"Type of tax ID provided.","type":"string","key$":"tax_id_type"},"telephone":{"description":"Contact phone number.","type":"string","example":"+1-555-555-5555","key$":"telephone"},"vat":{"description":"VAT identifier.","type":"string","key$":"vat"},"zipcode":{"description":"ZIP or postal code.","type":"string","example":"94103","key$":"zipcode"}},"x-ref":"#/components/schemas/bill-subs-api_billing_profile_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bill_subs_api_billing_response_single_ref01_ent = client.BillSubsApiBillingResponseSingle()
    let bill_subs_api_billing_response_single_ref01_data = setup.data.new.bill_subs_api_billing_response_single['bill_subs_api_billing_response_single_ref01']
    bill_subs_api_billing_response_single_ref01_data['account_id'] = setup.idmap['account01']

    bill_subs_api_billing_response_single_ref01_data = (await bill_subs_api_billing_response_single_ref01_ent.create(bill_subs_api_billing_response_single_ref01_data)).data()
    assert(null != bill_subs_api_billing_response_single_ref01_data)


    // UPDATE
    const bill_subs_api_billing_response_single_ref01_data_up0: any = {}

    const bill_subs_api_billing_response_single_ref01_markdef_up0 = { name: 'address', value: 'Mark01-bill_subs_api_billing_response_single_ref01_' + setup.now }
    ;(bill_subs_api_billing_response_single_ref01_data_up0 as any)[bill_subs_api_billing_response_single_ref01_markdef_up0.name] = bill_subs_api_billing_response_single_ref01_markdef_up0.value

    const bill_subs_api_billing_response_single_ref01_resdata_up0 = (await bill_subs_api_billing_response_single_ref01_ent.update(bill_subs_api_billing_response_single_ref01_data_up0)).data()
    assert(null != bill_subs_api_billing_response_single_ref01_resdata_up0)

    assert((bill_subs_api_billing_response_single_ref01_resdata_up0 as any)[bill_subs_api_billing_response_single_ref01_markdef_up0.name] === bill_subs_api_billing_response_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bill_subs_api_billing_response_single/BillSubsApiBillingResponseSingleTestData.json')

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
    ['bill_subs_api_billing_response_single01','bill_subs_api_billing_response_single02','bill_subs_api_billing_response_single03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_BILLING_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_BILLING_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_BILLING_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_BILLING_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_BILLING_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_BILLING_TEST_BILL_SUBS_API_BILLING_RESPONSE_SINGLE_ENTID']
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
  
