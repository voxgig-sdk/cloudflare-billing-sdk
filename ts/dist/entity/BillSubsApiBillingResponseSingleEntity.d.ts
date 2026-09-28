import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiBillingResponseSingle, BillSubsApiBillingResponseSingleLoadMatch, BillSubsApiBillingResponseSingleCreateData, BillSubsApiBillingResponseSingleUpdateData } from '../CloudflareBillingTypes';
declare class BillSubsApiBillingResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiBillingResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiBillingResponseSingleEntity): BillSubsApiBillingResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiBillingResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiBillingResponseSingleEntity>;
    create(this: any, reqdata?: BillSubsApiBillingResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiBillingResponseSingleEntity>;
    update(this: any, reqdata?: BillSubsApiBillingResponseSingleUpdateData, ctrl?: Control): Promise<BillSubsApiBillingResponseSingleEntity>;
}
export { BillSubsApiBillingResponseSingleEntity };
