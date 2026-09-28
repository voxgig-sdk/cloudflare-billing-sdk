import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { PaymentMethod, PaymentMethodRemoveMatch } from '../CloudflareBillingTypes';
declare class PaymentMethodEntity extends CloudflareBillingEntityBase<PaymentMethod> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: PaymentMethodEntity): PaymentMethodEntity;
    remove(this: any, reqmatch?: PaymentMethodRemoveMatch, ctrl?: Control): Promise<PaymentMethodEntity>;
}
export { PaymentMethodEntity };
