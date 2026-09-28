import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiAccountCredit, BillSubsApiAccountCreditLoadMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiAccountCreditEntity extends CloudflareBillingEntityBase<BillSubsApiAccountCredit> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiAccountCreditEntity): BillSubsApiAccountCreditEntity;
    load(this: any, reqmatch?: BillSubsApiAccountCreditLoadMatch, ctrl?: Control): Promise<BillSubsApiAccountCreditEntity>;
}
export { BillSubsApiAccountCreditEntity };
