import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiUserSubscriptionResponseCollection, BillSubsApiUserSubscriptionResponseCollectionListMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiUserSubscriptionResponseCollectionEntity extends CloudflareBillingEntityBase<BillSubsApiUserSubscriptionResponseCollection> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiUserSubscriptionResponseCollectionEntity): BillSubsApiUserSubscriptionResponseCollectionEntity;
    list(this: any, reqmatch?: BillSubsApiUserSubscriptionResponseCollectionListMatch, ctrl?: Control): Promise<BillSubsApiUserSubscriptionResponseCollectionEntity[]>;
}
export { BillSubsApiUserSubscriptionResponseCollectionEntity };
