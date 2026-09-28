<?php
declare(strict_types=1);

// CloudflareBilling SDK utility: result_body

class CloudflareBillingResultBody
{
    public static function call(CloudflareBillingContext $ctx): ?CloudflareBillingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
