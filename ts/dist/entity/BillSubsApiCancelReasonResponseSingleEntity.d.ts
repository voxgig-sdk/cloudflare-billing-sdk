import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiCancelReasonResponseSingle, BillSubsApiCancelReasonResponseSingleLoadMatch, BillSubsApiCancelReasonResponseSingleCreateData } from '../CloudflareBillingTypes';
declare class BillSubsApiCancelReasonResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiCancelReasonResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiCancelReasonResponseSingleEntity): BillSubsApiCancelReasonResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiCancelReasonResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiCancelReasonResponseSingleEntity>;
    create(this: any, reqdata?: BillSubsApiCancelReasonResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiCancelReasonResponseSingleEntity>;
}
export { BillSubsApiCancelReasonResponseSingleEntity };
