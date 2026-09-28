import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { UserSubscription, UserSubscriptionRemoveMatch } from '../CloudflareBillingTypes';
declare class UserSubscriptionEntity extends CloudflareBillingEntityBase<UserSubscription> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: UserSubscriptionEntity): UserSubscriptionEntity;
    remove(this: any, reqmatch?: UserSubscriptionRemoveMatch, ctrl?: Control): Promise<UserSubscriptionEntity>;
}
export { UserSubscriptionEntity };
