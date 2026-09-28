import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiZoneSubscriptionResponseSingle, BillSubsApiZoneSubscriptionResponseSingleLoadMatch, BillSubsApiZoneSubscriptionResponseSingleCreateData, BillSubsApiZoneSubscriptionResponseSingleUpdateData } from '../CloudflareBillingTypes';
declare class BillSubsApiZoneSubscriptionResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiZoneSubscriptionResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiZoneSubscriptionResponseSingleEntity): BillSubsApiZoneSubscriptionResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiZoneSubscriptionResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiZoneSubscriptionResponseSingleEntity>;
    create(this: any, reqdata?: BillSubsApiZoneSubscriptionResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiZoneSubscriptionResponseSingleEntity>;
    update(this: any, reqdata?: BillSubsApiZoneSubscriptionResponseSingleUpdateData, ctrl?: Control): Promise<BillSubsApiZoneSubscriptionResponseSingleEntity>;
}
export { BillSubsApiZoneSubscriptionResponseSingleEntity };
