import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiUserSubscriptionResponseSingle, BillSubsApiUserSubscriptionResponseSingleCreateData, BillSubsApiUserSubscriptionResponseSingleUpdateData } from '../CloudflareBillingTypes';
declare class BillSubsApiUserSubscriptionResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiUserSubscriptionResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiUserSubscriptionResponseSingleEntity): BillSubsApiUserSubscriptionResponseSingleEntity;
    create(this: any, reqdata?: BillSubsApiUserSubscriptionResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiUserSubscriptionResponseSingleEntity>;
    update(this: any, reqdata?: BillSubsApiUserSubscriptionResponseSingleUpdateData, ctrl?: Control): Promise<BillSubsApiUserSubscriptionResponseSingleEntity>;
}
export { BillSubsApiUserSubscriptionResponseSingleEntity };
