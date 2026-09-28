import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiBillingHistoryCollection, BillSubsApiBillingHistoryCollectionListMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiBillingHistoryCollectionEntity extends CloudflareBillingEntityBase<BillSubsApiBillingHistoryCollection> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiBillingHistoryCollectionEntity): BillSubsApiBillingHistoryCollectionEntity;
    list(this: any, reqmatch?: BillSubsApiBillingHistoryCollectionListMatch, ctrl?: Control): Promise<BillSubsApiBillingHistoryCollectionEntity[]>;
}
export { BillSubsApiBillingHistoryCollectionEntity };
