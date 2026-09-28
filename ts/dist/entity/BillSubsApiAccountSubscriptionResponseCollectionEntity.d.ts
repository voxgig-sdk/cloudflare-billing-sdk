import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiAccountSubscriptionResponseCollection, BillSubsApiAccountSubscriptionResponseCollectionListMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiAccountSubscriptionResponseCollectionEntity extends CloudflareBillingEntityBase<BillSubsApiAccountSubscriptionResponseCollection> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiAccountSubscriptionResponseCollectionEntity): BillSubsApiAccountSubscriptionResponseCollectionEntity;
    list(this: any, reqmatch?: BillSubsApiAccountSubscriptionResponseCollectionListMatch, ctrl?: Control): Promise<BillSubsApiAccountSubscriptionResponseCollectionEntity[]>;
}
export { BillSubsApiAccountSubscriptionResponseCollectionEntity };
