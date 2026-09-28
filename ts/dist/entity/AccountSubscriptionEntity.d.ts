import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { AccountSubscription, AccountSubscriptionRemoveMatch } from '../CloudflareBillingTypes';
declare class AccountSubscriptionEntity extends CloudflareBillingEntityBase<AccountSubscription> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: AccountSubscriptionEntity): AccountSubscriptionEntity;
    remove(this: any, reqmatch?: AccountSubscriptionRemoveMatch, ctrl?: Control): Promise<AccountSubscriptionEntity>;
}
export { AccountSubscriptionEntity };
