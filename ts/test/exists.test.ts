
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareBillingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareBillingSDK.test()
    equal(testsdk instanceof CloudflareBillingSDK, true,
      'CloudflareBillingSDK.test() must return a client synchronously')
  })

})
