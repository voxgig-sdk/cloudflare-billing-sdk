<?php
declare(strict_types=1);

// CloudflareBilling SDK base feature

class CloudflareBillingBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareBillingContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareBillingContext $ctx): void {}
    public function PostConstructEntity(CloudflareBillingContext $ctx): void {}
    public function SetData(CloudflareBillingContext $ctx): void {}
    public function GetData(CloudflareBillingContext $ctx): void {}
    public function GetMatch(CloudflareBillingContext $ctx): void {}
    public function SetMatch(CloudflareBillingContext $ctx): void {}
    public function PrePoint(CloudflareBillingContext $ctx): void {}
    public function PreSpec(CloudflareBillingContext $ctx): void {}
    public function PreRequest(CloudflareBillingContext $ctx): void {}
    public function PreResponse(CloudflareBillingContext $ctx): void {}
    public function PreResult(CloudflareBillingContext $ctx): void {}
    public function PreDone(CloudflareBillingContext $ctx): void {}
    public function PreUnexpected(CloudflareBillingContext $ctx): void {}
}
