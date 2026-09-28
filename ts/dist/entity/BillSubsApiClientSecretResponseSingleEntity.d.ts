import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { BillSubsApiClientSecretResponseSingle, BillSubsApiClientSecretResponseSingleCreateData } from '../CloudflareBillingTypes';
declare class BillSubsApiClientSecretResponseSingleEntity extends CloudflareBillingEntityBase<BillSubsApiClientSecretResponseSingle> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: BillSubsApiClientSecretResponseSingleEntity): BillSubsApiClientSecretResponseSingleEntity;
    create(this: any, reqdata?: BillSubsApiClientSecretResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiClientSecretResponseSingleEntity>;
}
export { BillSubsApiClientSecretResponseSingleEntity };
