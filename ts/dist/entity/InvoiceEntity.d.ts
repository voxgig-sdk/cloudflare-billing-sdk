import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { Invoice, InvoiceUpdateData } from '../CloudflareBillingTypes';
declare class InvoiceEntity extends CloudflareBillingEntityBase<Invoice> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: InvoiceEntity): InvoiceEntity;
    update(this: any, reqdata?: InvoiceUpdateData, ctrl?: Control): Promise<InvoiceEntity>;
}
export { InvoiceEntity };
