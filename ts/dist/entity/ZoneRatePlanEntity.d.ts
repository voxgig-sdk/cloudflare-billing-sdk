import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { ZoneRatePlan, ZoneRatePlanLoadMatch, ZoneRatePlanListMatch } from '../CloudflareBillingTypes';
declare class ZoneRatePlanEntity extends CloudflareBillingEntityBase<ZoneRatePlan> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: ZoneRatePlanEntity): ZoneRatePlanEntity;
    load(this: any, reqmatch?: ZoneRatePlanLoadMatch, ctrl?: Control): Promise<ZoneRatePlanEntity>;
    list(this: any, reqmatch?: ZoneRatePlanListMatch, ctrl?: Control): Promise<ZoneRatePlanEntity[]>;
}
export { ZoneRatePlanEntity };
