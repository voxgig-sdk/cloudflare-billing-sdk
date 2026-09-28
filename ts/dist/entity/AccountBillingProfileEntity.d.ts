import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { AccountBillingProfile, AccountBillingProfileRemoveMatch } from '../CloudflareBillingTypes';
declare class AccountBillingProfileEntity extends CloudflareBillingEntityBase<AccountBillingProfile> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: AccountBillingProfileEntity): AccountBillingProfileEntity;
    remove(this: any, reqmatch?: AccountBillingProfileRemoveMatch, ctrl?: Control): Promise<AccountBillingProfileEntity>;
}
export { AccountBillingProfileEntity };
