import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { AccountBilling, AccountBillingLoadMatch } from '../CloudflareBillingTypes';
declare class AccountBillingEntity extends CloudflareBillingEntityBase<AccountBilling> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: AccountBillingEntity): AccountBillingEntity;
    load(this: any, reqmatch?: AccountBillingLoadMatch, ctrl?: Control): Promise<AccountBillingEntity>;
}
export { AccountBillingEntity };
