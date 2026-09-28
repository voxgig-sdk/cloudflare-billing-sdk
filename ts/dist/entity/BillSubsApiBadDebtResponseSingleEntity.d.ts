import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiBadDebtResponseSingle, BillSubsApiBadDebtResponseSingleLoadMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiBadDebtResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiBadDebtResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiBadDebtResponseSingleEntity): BillSubsApiBadDebtResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiBadDebtResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiBadDebtResponseSingleEntity>;
}
export { BillSubsApiBadDebtResponseSingleEntity };
