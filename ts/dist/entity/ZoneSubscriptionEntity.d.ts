import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { ZoneSubscription, ZoneSubscriptionRemoveMatch } from '../CloudflareBillingTypes';
declare class ZoneSubscriptionEntity extends CloudflareBillingEntityBase<ZoneSubscription> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: ZoneSubscriptionEntity): ZoneSubscriptionEntity;
    remove(this: any, reqmatch?: ZoneSubscriptionRemoveMatch, ctrl?: Control): Promise<ZoneSubscriptionEntity>;
}
export { ZoneSubscriptionEntity };
