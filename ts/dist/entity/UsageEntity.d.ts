import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { Usage, UsageListMatch } from '../CloudflareBillingTypes';
declare class UsageEntity extends CloudflareBillingEntityBase<Usage> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: UsageEntity): UsageEntity;
    list(this: any, reqmatch?: UsageListMatch, ctrl?: Control): Promise<UsageEntity[]>;
}
export { UsageEntity };
