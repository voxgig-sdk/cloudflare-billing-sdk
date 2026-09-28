import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiPaymentMethodResponseSingle, BillSubsApiPaymentMethodResponseSingleLoadMatch, BillSubsApiPaymentMethodResponseSingleCreateData, BillSubsApiPaymentMethodResponseSingleUpdateData } from '../CloudflareBillingTypes';
declare class BillSubsApiPaymentMethodResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiPaymentMethodResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiPaymentMethodResponseSingleEntity): BillSubsApiPaymentMethodResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiPaymentMethodResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiPaymentMethodResponseSingleEntity>;
    create(this: any, reqdata?: BillSubsApiPaymentMethodResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiPaymentMethodResponseSingleEntity>;
    update(this: any, reqdata?: BillSubsApiPaymentMethodResponseSingleUpdateData, ctrl?: Control): Promise<BillSubsApiPaymentMethodResponseSingleEntity>;
}
export { BillSubsApiPaymentMethodResponseSingleEntity };
