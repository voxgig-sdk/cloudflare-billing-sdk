import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiPaymentMethodResponseCollection, BillSubsApiPaymentMethodResponseCollectionListMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiPaymentMethodResponseCollectionEntity extends CloudflareBillingEntityBase<BillSubsApiPaymentMethodResponseCollection> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiPaymentMethodResponseCollectionEntity): BillSubsApiPaymentMethodResponseCollectionEntity;
    list(this: any, reqmatch?: BillSubsApiPaymentMethodResponseCollectionListMatch, ctrl?: Control): Promise<BillSubsApiPaymentMethodResponseCollectionEntity[]>;
}
export { BillSubsApiPaymentMethodResponseCollectionEntity };
