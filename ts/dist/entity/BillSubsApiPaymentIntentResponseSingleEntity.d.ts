import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiPaymentIntentResponseSingle, BillSubsApiPaymentIntentResponseSingleCreateData } from '../CloudflareBillingTypes';
declare class BillSubsApiPaymentIntentResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiPaymentIntentResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiPaymentIntentResponseSingleEntity): BillSubsApiPaymentIntentResponseSingleEntity;
    create(this: any, reqdata?: BillSubsApiPaymentIntentResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiPaymentIntentResponseSingleEntity>;
}
export { BillSubsApiPaymentIntentResponseSingleEntity };
