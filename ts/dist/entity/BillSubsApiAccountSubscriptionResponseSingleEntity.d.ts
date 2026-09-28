import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiAccountSubscriptionResponseSingle, BillSubsApiAccountSubscriptionResponseSingleLoadMatch, BillSubsApiAccountSubscriptionResponseSingleCreateData, BillSubsApiAccountSubscriptionResponseSingleUpdateData } from '../CloudflareBillingTypes';
declare class BillSubsApiAccountSubscriptionResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiAccountSubscriptionResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiAccountSubscriptionResponseSingleEntity): BillSubsApiAccountSubscriptionResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiAccountSubscriptionResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiAccountSubscriptionResponseSingleEntity>;
    create(this: any, reqdata?: BillSubsApiAccountSubscriptionResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiAccountSubscriptionResponseSingleEntity>;
    update(this: any, reqdata?: BillSubsApiAccountSubscriptionResponseSingleUpdateData, ctrl?: Control): Promise<BillSubsApiAccountSubscriptionResponseSingleEntity>;
}
export { BillSubsApiAccountSubscriptionResponseSingleEntity };
