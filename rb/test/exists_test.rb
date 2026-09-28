# CloudflareBilling SDK exists test

require "minitest/autorun"
require_relative "../CloudflareBilling_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareBillingSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
