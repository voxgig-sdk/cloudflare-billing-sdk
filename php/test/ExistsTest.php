<?php
declare(strict_types=1);

// CloudflareBilling SDK exists test

require_once __DIR__ . '/../cloudflarebilling_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareBillingSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
