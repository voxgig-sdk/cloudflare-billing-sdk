import { CloudflareBillingEntityBase } from '../CloudflareBillingEntityBase';
import type { CloudflareBillingSDK } from '../CloudflareBillingSDK';
import type { Control } from '../types';
import type { SetAsDefault, SetAsDefaultCreateData } from '../CloudflareBillingTypes';
declare class SetAsDefaultEntity extends CloudflareBillingEntityBase<SetAsDefault> {
    constructor(client: CloudflareBillingSDK, entopts: any);
    make(this: SetAsDefaultEntity): SetAsDefaultEntity;
    create(this: any, reqdata?: SetAsDefaultCreateData, ctrl?: Control): Promise<SetAsDefaultEntity>;
}
export { SetAsDefaultEntity };
