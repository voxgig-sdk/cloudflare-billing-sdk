<?php
declare(strict_types=1);

// CloudflareBilling SDK utility: result_headers

class CloudflareBillingResultHeaders
{
    public static function call(CloudflareBillingContext $ctx): ?CloudflareBillingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
