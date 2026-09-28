import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { Entitlement, EntitlementListMatch } from '../CloudflareBillingTypes';
declare class EntitlementEntity extends CloudflareBillingEntityBase<Entitlement> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: EntitlementEntity): EntitlementEntity;
    list(this: any, reqmatch?: EntitlementListMatch, ctrl?: Control): Promise<EntitlementEntity[]>;
}
export { EntitlementEntity };
