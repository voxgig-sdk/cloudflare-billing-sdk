-- CloudflareBilling SDK exists test

local sdk = require("cloudflare-billing_sdk")

describe("CloudflareBillingSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
