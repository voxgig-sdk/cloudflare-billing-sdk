import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { CancelDowngrade, CancelDowngradeCreateData } from '../CloudflareBillingTypes';
declare class CancelDowngradeEntity extends CloudflareBillingEntityBase<CancelDowngrade> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: CancelDowngradeEntity): CancelDowngradeEntity;
    create(this: any, reqdata?: CancelDowngradeCreateData, ctrl?: Control): Promise<CancelDowngradeEntity>;
}
export { CancelDowngradeEntity };
