# CloudflareBilling SDK exists test

import pytest
from cloudflarebilling_sdk import CloudflareBillingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareBillingSDK.test(None, None)
        assert testsdk is not None
