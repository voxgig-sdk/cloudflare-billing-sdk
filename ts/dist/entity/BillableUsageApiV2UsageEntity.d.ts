import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillableUsageApiV2Usage, BillableUsageApiV2UsageListMatch, BillableUsageApiV2UsageCreateData } from '../CloudflareBillingTypes';
declare class BillableUsageApiV2UsageEntity extends CloudflareBillingEntityBase<BillableUsageApiV2Usage> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillableUsageApiV2UsageEntity): BillableUsageApiV2UsageEntity;
    list(this: any, reqmatch?: BillableUsageApiV2UsageListMatch, ctrl?: Control): Promise<BillableUsageApiV2UsageEntity[]>;
    create(this: any, reqdata?: BillableUsageApiV2UsageCreateData, ctrl?: Control): Promise<BillableUsageApiV2UsageEntity>;
}
export { BillableUsageApiV2UsageEntity };
