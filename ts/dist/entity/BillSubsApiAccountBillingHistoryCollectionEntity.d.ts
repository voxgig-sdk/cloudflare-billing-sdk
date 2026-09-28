import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiAccountBillingHistoryCollection, BillSubsApiAccountBillingHistoryCollectionListMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiAccountBillingHistoryCollectionEntity extends CloudflareBillingEntityBase<BillSubsApiAccountBillingHistoryCollection> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiAccountBillingHistoryCollectionEntity): BillSubsApiAccountBillingHistoryCollectionEntity;
    list(this: any, reqmatch?: BillSubsApiAccountBillingHistoryCollectionListMatch, ctrl?: Control): Promise<BillSubsApiAccountBillingHistoryCollectionEntity[]>;
}
export { BillSubsApiAccountBillingHistoryCollectionEntity };
