import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillableUsageApiUsageInfo, BillableUsageApiUsageInfoListMatch } from '../CloudflareBillingTypes';
declare class BillableUsageApiUsageInfoEntity extends CloudflareBillingEntityBase<BillableUsageApiUsageInfo> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillableUsageApiUsageInfoEntity): BillableUsageApiUsageInfoEntity;
    list(this: any, reqmatch?: BillableUsageApiUsageInfoListMatch, ctrl?: Control): Promise<BillableUsageApiUsageInfoEntity[]>;
}
export { BillableUsageApiUsageInfoEntity };
