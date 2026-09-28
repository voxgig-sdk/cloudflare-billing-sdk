import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiAddressValidationResponseSingle, BillSubsApiAddressValidationResponseSingleCreateData } from '../CloudflareBillingTypes';
declare class BillSubsApiAddressValidationResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiAddressValidationResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiAddressValidationResponseSingleEntity): BillSubsApiAddressValidationResponseSingleEntity;
    create(this: any, reqdata?: BillSubsApiAddressValidationResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiAddressValidationResponseSingleEntity>;
}
export { BillSubsApiAddressValidationResponseSingleEntity };
