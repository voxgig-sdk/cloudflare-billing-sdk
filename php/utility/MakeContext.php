<?php
declare(strict_types=1);

// CloudflareBilling SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareBillingMakeContext
{
    public static function call(array $ctxmap, ?CloudflareBillingContext $basectx): CloudflareBillingContext
    {
        return new CloudflareBillingContext($ctxmap, $basectx);
    }
}
