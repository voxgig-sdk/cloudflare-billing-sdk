import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiPlanResponseCollection, BillSubsApiPlanResponseCollectionListMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiPlanResponseCollectionEntity extends CloudflareBillingEntityBase<BillSubsApiPlanResponseCollection> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiPlanResponseCollectionEntity): BillSubsApiPlanResponseCollectionEntity;
    list(this: any, reqmatch?: BillSubsApiPlanResponseCollectionListMatch, ctrl?: Control): Promise<BillSubsApiPlanResponseCollectionEntity[]>;
}
export { BillSubsApiPlanResponseCollectionEntity };
