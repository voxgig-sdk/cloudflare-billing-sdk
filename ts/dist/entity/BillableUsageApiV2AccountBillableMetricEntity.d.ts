import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillableUsageApiV2AccountBillableMetric, BillableUsageApiV2AccountBillableMetricListMatch } from '../CloudflareBillingTypes';
declare class BillableUsageApiV2AccountBillableMetricEntity extends CloudflareBillingEntityBase<BillableUsageApiV2AccountBillableMetric> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillableUsageApiV2AccountBillableMetricEntity): BillableUsageApiV2AccountBillableMetricEntity;
    list(this: any, reqmatch?: BillableUsageApiV2AccountBillableMetricListMatch, ctrl?: Control): Promise<BillableUsageApiV2AccountBillableMetricEntity[]>;
}
export { BillableUsageApiV2AccountBillableMetricEntity };
