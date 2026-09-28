import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiRatePlanSimple, BillSubsApiRatePlanSimpleLoadMatch } from '../CloudflareBillingTypes';
declare class BillSubsApiRatePlanSimpleEntity extends CloudflareBillingEntityBase<BillSubsApiRatePlanSimple> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiRatePlanSimpleEntity): BillSubsApiRatePlanSimpleEntity;
    load(this: any, reqmatch?: BillSubsApiRatePlanSimpleLoadMatch, ctrl?: Control): Promise<BillSubsApiRatePlanSimpleEntity>;
}
export { BillSubsApiRatePlanSimpleEntity };
