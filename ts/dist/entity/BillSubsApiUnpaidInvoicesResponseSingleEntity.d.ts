import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiUnpaidInvoicesResponseSingle, BillSubsApiUnpaidInvoicesResponseSingleLoadMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiUnpaidInvoicesResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiUnpaidInvoicesResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiUnpaidInvoicesResponseSingleEntity): BillSubsApiUnpaidInvoicesResponseSingleEntity;
    load(this: any, reqmatch?: BillSubsApiUnpaidInvoicesResponseSingleLoadMatch, ctrl?: Control): Promise<BillSubsApiUnpaidInvoicesResponseSingleEntity>;
}
export { BillSubsApiUnpaidInvoicesResponseSingleEntity };
