import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
            optspec: {
                entity: string;
                net: string;
            };
            strict: boolean;
            transport: string;
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
            name: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            account_billing: {};
            account_billing_profile: {};
            account_subscription: {};
            bill_subs_api_account_billing_history_collection: {};
            bill_subs_api_account_credit: {};
            bill_subs_api_account_subscription_response_collection: {};
            bill_subs_api_account_subscription_response_single: {};
            bill_subs_api_address_validation_response_single: {};
            bill_subs_api_bad_debt_response_single: {};
            bill_subs_api_billing_history_collection: {};
            bill_subs_api_billing_response_single: {};
            bill_subs_api_cancel_reason_response_single: {};
            bill_subs_api_client_secret_response_single: {};
            bill_subs_api_payment_intent_response_single: {};
            bill_subs_api_payment_method_response_collection: {};
            bill_subs_api_payment_method_response_single: {};
            bill_subs_api_plan_response_collection: {};
            bill_subs_api_rate_plan_simple: {};
            bill_subs_api_unpaid_invoices_response_single: {};
            bill_subs_api_user_subscription_response_collection: {};
            bill_subs_api_user_subscription_response_single: {};
            bill_subs_api_zone_subscription_response_single: {};
            billable_usage: {};
            billable_usage_api_usage_info: {};
            billable_usage_api_v2_account_billable_metric: {};
            billable_usage_api_v2_usage: {};
            cancel_downgrade: {};
            entitlement: {};
            invoice: {};
            payment_method: {};
            set_as_default: {};
            usage: {};
            user_subscription: {};
            zone_rate_plan: {};
            zone_subscription: {};
        };
    };
    entity: {
        account_billing: {
            fields: never[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        account_billing_profile: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        account_subscription: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscription_identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_account_billing_history_collection: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_account_credit: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_account_subscription_response_collection: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_account_subscription_response_single: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                readOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated?: undefined;
                readOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                deprecated?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                format: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                deprecated?: undefined;
                readOnly?: undefined;
                format?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                subscription_identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_address_validation_response_single: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_bad_debt_response_single: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_billing_history_collection: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_billing_response_single: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                    })[];
                };
                patch: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_cancel_reason_response_single: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_client_secret_response_single: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_payment_intent_response_single: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_payment_method_response_collection: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_payment_method_response_single: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                writeOnly?: undefined;
                readOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                writeOnly: boolean;
                readOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                writeOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                writeOnly?: undefined;
                readOnly?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        bill_subs_api_plan_response_collection: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_rate_plan_simple: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_unpaid_invoices_response_single: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_user_subscription_response_collection: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_user_subscription_response_single: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                readOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated?: undefined;
                readOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                deprecated?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                format: string;
                deprecated?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        bill_subs_api_zone_subscription_response_single: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated: boolean;
                readOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                deprecated?: undefined;
                readOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                deprecated?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                readOnly: boolean;
                format: string;
                deprecated?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                deprecated?: undefined;
                readOnly?: undefined;
                format?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        billable_usage: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        billable_usage_api_usage_info: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        billable_usage_api_v2_account_billable_metric: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        billable_usage_api_v2_usage: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                FilterBy: string;
                                GroupBy: string;
                                TimePeriod: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        cancel_downgrade: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        entitlement: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        invoice: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        payment_method: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                payment_method_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        set_as_default: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        usage: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        user_subscription: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                identifier: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        zone_rate_plan: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                zone_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        zone_subscription: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                zone_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
