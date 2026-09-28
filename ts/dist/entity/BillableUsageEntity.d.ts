import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillableUsage, BillableUsageListMatch } from '../CloudflareBillingTypes';
declare class BillableUsageEntity extends CloudflareBillingEntityBase<BillableUsage> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillableUsageEntity): BillableUsageEntity;
    list(this: any, reqmatch?: BillableUsageListMatch, ctrl?: Control): Promise<BillableUsageEntity[]>;
}
export { BillableUsageEntity };
