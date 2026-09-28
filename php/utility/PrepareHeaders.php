<?php
declare(strict_types=1);

// CloudflareBilling SDK utility: prepare_headers

class CloudflareBillingPrepareHeaders
{
    public static function call(CloudflareBillingContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
