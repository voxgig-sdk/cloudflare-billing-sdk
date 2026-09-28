package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareBilling",
			"slug": "cloudflare-billing",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"account_billing": map[string]any{},
				"account_billing_profile": map[string]any{},
				"account_subscription": map[string]any{},
				"bill_subs_api_account_billing_history_collection": map[string]any{},
				"bill_subs_api_account_credit": map[string]any{},
				"bill_subs_api_account_subscription_response_collection": map[string]any{},
				"bill_subs_api_account_subscription_response_single": map[string]any{},
				"bill_subs_api_address_validation_response_single": map[string]any{},
				"bill_subs_api_bad_debt_response_single": map[string]any{},
				"bill_subs_api_billing_history_collection": map[string]any{},
				"bill_subs_api_billing_response_single": map[string]any{},
				"bill_subs_api_cancel_reason_response_single": map[string]any{},
				"bill_subs_api_client_secret_response_single": map[string]any{},
				"bill_subs_api_payment_intent_response_single": map[string]any{},
				"bill_subs_api_payment_method_response_collection": map[string]any{},
				"bill_subs_api_payment_method_response_single": map[string]any{},
				"bill_subs_api_plan_response_collection": map[string]any{},
				"bill_subs_api_rate_plan_simple": map[string]any{},
				"bill_subs_api_unpaid_invoices_response_single": map[string]any{},
				"bill_subs_api_user_subscription_response_collection": map[string]any{},
				"bill_subs_api_user_subscription_response_single": map[string]any{},
				"bill_subs_api_zone_subscription_response_single": map[string]any{},
				"billable_usage": map[string]any{},
				"billable_usage_api_usage_info": map[string]any{},
				"billable_usage_api_v2_account_billable_metric": map[string]any{},
				"billable_usage_api_v2_usage": map[string]any{},
				"cancel_downgrade": map[string]any{},
				"entitlement": map[string]any{},
				"invoice": map[string]any{},
				"payment_method": map[string]any{},
				"set_as_default": map[string]any{},
				"usage": map[string]any{},
				"user_subscription": map[string]any{},
				"zone_rate_plan": map[string]any{},
				"zone_subscription": map[string]any{},
			},
		},
		"entity": map[string]any{
			"account_billing": map[string]any{
				"fields": []any{},
				"name": "account_billing",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/receipts/{receipt_id}/pdf",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "receipts",
									},
									map[string]any{
										"var": "receipt_id",
									},
									map[string]any{
										"lit": "pdf",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"receipts",
									"{receipt_id}",
									"pdf",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "receipt_id",
											"orig": "receipt_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "doctype",
											"orig": "doctype",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"doctype",
										"receipt_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_billing_profile": map[string]any{
				"fields": []any{},
				"name": "account_billing_profile",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/billing/profile",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account_subscription",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/subscriptions/{subscription_identifier}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "subscription_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_account_billing_history_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "bill_subs_api_account_billing_history_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billing/history",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"status",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_account_credit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_account_credit",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billing/credits",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "credits",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"credits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_account_subscription_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "bill_subs_api_account_subscription_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_account_subscription_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app",
						"title": "App",
						"type": "`$OBJECT`",
						"short": "Cloudflare Apps Marketplace is sunset.",
						"deprecated": true,
					},
					map[string]any{
						"name": "component_values",
						"title": "Component Values",
						"type": "`$ARRAY`",
						"short": "Configurable component values for the subscription.",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"short": "The monetary unit in which pricing information is displayed.",
						"readOnly": true,
					},
					map[string]any{
						"name": "current_period_end",
						"title": "Current Period End",
						"type": "`$STRING`",
						"short": "The end of the current period and also when the next billing is due.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "current_period_start",
						"title": "Current Period Start",
						"type": "`$STRING`",
						"short": "When the current billing period started.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "frequency",
						"title": "Frequency",
						"type": "`$STRING`",
						"short": "How often the subscription is renewed automatically.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Subscription identifier tag.",
						"readOnly": true,
					},
					map[string]any{
						"name": "price",
						"title": "Price",
						"type": "`$NUMBER`",
						"short": "The price of the subscription that will be billed, in US dollars.",
						"readOnly": true,
					},
					map[string]any{
						"name": "rate_plan",
						"title": "Rate Plan",
						"type": "`$OBJECT`",
						"short": "The rate plan applied to the subscription.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "The state that the subscription is in.",
						"readOnly": true,
					},
					map[string]any{
						"name": "zone",
						"title": "Zone",
						"type": "`$OBJECT`",
						"short": "A simple zone object.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bill_subs_api_account_subscription_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/subscriptions/{subscription_identifier}/action/append",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "action",
									},
									map[string]any{
										"lit": "append",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"{subscription_id}",
									"action",
									"append",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_identifier": "subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/subscriptions/{subscription_identifier}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_identifier",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"{subscription_identifier}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "subscription_identifier",
											"orig": "subscription_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"subscription_identifier",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/subscriptions/{subscription_identifier}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_identifier",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"{subscription_identifier}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "subscription_identifier",
											"orig": "subscription_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"subscription_identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_address_validation_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"short": "Address line 1.",
					},
					map[string]any{
						"name": "address2",
						"title": "Address2",
						"type": "`$STRING`",
						"short": "Address line 2.",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"short": "City.",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"short": "Country code.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "State or province.",
					},
					map[string]any{
						"name": "zipcode",
						"title": "Zipcode",
						"type": "`$STRING`",
						"short": "Postal or zip code.",
					},
				},
				"name": "bill_subs_api_address_validation_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/billing/address-validation",
								"segments": []any{
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "address-validation",
									},
								},
								"parts": []any{
									"billing",
									"address-validation",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_bad_debt_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_bad_debt_response_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billing/bad-debt",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "bad-debt",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"bad-debt",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_billing_history_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "bill_subs_api_billing_history_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/billing/history",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"user",
									"billing",
									"history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
											"kind": "query",
											"example": "subscription",
										},
										map[string]any{
											"name": "occurred_at",
											"orig": "occurred_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2014-03-01T12:21:59.3456Z",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "occurred_at",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "charge",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action",
										"occurred_at",
										"order",
										"page",
										"per_page",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_billing_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"short": "Street address line 1.",
					},
					map[string]any{
						"name": "address2",
						"title": "Address2",
						"type": "`$STRING`",
						"short": "Street address line 2 (apt, suite, etc.).",
					},
					map[string]any{
						"name": "billing_email",
						"title": "Billing Email",
						"type": "`$STRING`",
						"short": "Primary billing email address.",
					},
					map[string]any{
						"name": "buying_rate_plan",
						"title": "Buying Rate Plan",
						"type": "`$STRING`",
						"short": "Rate plan being purchased right after profile setup.",
					},
					map[string]any{
						"name": "captcha_challenge_jwt",
						"title": "Captcha Challenge Jwt",
						"type": "`$STRING`",
						"short": "Captcha challenge JWT issued during onboarding.",
					},
					map[string]any{
						"name": "cf_turnstile_response",
						"title": "Cf Turnstile Response",
						"type": "`$STRING`",
						"short": "Cloudflare Turnstile response.",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"short": "City on the billing profile.",
					},
					map[string]any{
						"name": "company",
						"title": "Company",
						"type": "`$STRING`",
						"short": "Company name on the billing profile.",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"short": "ISO 3166-1 alpha-2 country code.",
					},
					map[string]any{
						"name": "first_name",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "First name on the billing profile.",
					},
					map[string]any{
						"name": "h_captcha_response",
						"title": "H Captcha Response",
						"type": "`$STRING`",
						"short": "hCaptcha response.",
					},
					map[string]any{
						"name": "last_name",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "Last name on the billing profile.",
					},
					map[string]any{
						"name": "preferred_locale",
						"title": "Preferred Locale",
						"type": "`$STRING`",
						"short": "Preferred locale for invoice rendering (BCP 47).",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "secondary_billing_email",
						"title": "Secondary Billing Email",
						"type": "`$STRING`",
						"short": "Secondary billing email address for CC on invoices.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "State or region on the billing profile.",
					},
					map[string]any{
						"name": "tax_id_type",
						"title": "Tax Id Type",
						"type": "`$STRING`",
						"short": "Type of tax ID provided.",
					},
					map[string]any{
						"name": "telephone",
						"title": "Telephone",
						"type": "`$STRING`",
						"short": "Contact phone number.",
					},
					map[string]any{
						"name": "vat",
						"title": "Vat",
						"type": "`$STRING`",
						"short": "VAT identifier.",
					},
					map[string]any{
						"name": "zipcode",
						"title": "Zipcode",
						"type": "`$STRING`",
						"short": "ZIP or postal code.",
					},
				},
				"name": "bill_subs_api_billing_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/billing/profile",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billing/profile",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/billing/profile",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"user",
									"billing",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/billing/profile",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/billing/profile",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_cancel_reason_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "other",
						"title": "Other",
						"type": "`$STRING`",
						"short": "Additional cancellation details.",
					},
					map[string]any{
						"name": "reason_code",
						"title": "Reason Code",
						"type": "`$ARRAY`",
						"short": "The cancellation reason codes.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_cancel_reason_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_identifier",
									},
									map[string]any{
										"lit": "cancel-reason",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"{subscription_identifier}",
									"cancel-reason",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "subscription_identifier",
											"orig": "subscription_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"subscription_identifier",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_identifier",
									},
									map[string]any{
										"lit": "cancel-reason",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"{subscription_identifier}",
									"cancel-reason",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "subscription_identifier",
											"orig": "subscription_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"subscription_identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_client_secret_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "invoice_id",
						"title": "Invoice Id",
						"type": "`$STRING`",
						"short": "The identifier of the invoice to pay.",
					},
					map[string]any{
						"name": "payment_method_id",
						"title": "Payment Method Id",
						"type": "`$STRING`",
						"short": "The payment method to use.",
					},
					map[string]any{
						"name": "validate_payment_method",
						"title": "Validate Payment Method",
						"type": "`$BOOLEAN`",
						"short": "Whether to validate the payment method before processing.",
					},
				},
				"name": "bill_subs_api_client_secret_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/pay-bad-debt",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "pay-bad-debt",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"pay-bad-debt",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/pay-invoice",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "pay-invoice",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"pay-invoice",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_payment_intent_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_payment_intent_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/billing/profile/payment-method",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "profile",
									},
									map[string]any{
										"lit": "payment-method",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"profile",
									"payment-method",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_payment_method_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "bill_subs_api_payment_method_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/payment-methods",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "payment-methods",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"payment-methods",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_payment_method_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"short": "Billing address line 1.",
					},
					map[string]any{
						"name": "address2",
						"title": "Address2",
						"type": "`$STRING`",
						"short": "Billing address line 2.",
					},
					map[string]any{
						"name": "bank_account_type",
						"title": "Bank Account Type",
						"type": "`$STRING`",
						"short": "Bank account type.",
					},
					map[string]any{
						"name": "bank_code",
						"title": "Bank Code",
						"type": "`$STRING`",
						"short": "Bank code.",
					},
					map[string]any{
						"name": "bank_country",
						"title": "Bank Country",
						"type": "`$STRING`",
						"short": "Bank country.",
					},
					map[string]any{
						"name": "bank_name",
						"title": "Bank Name",
						"type": "`$STRING`",
						"short": "Bank name for bank-based payment methods.",
					},
					map[string]any{
						"name": "bank_routing_number",
						"title": "Bank Routing Number",
						"type": "`$STRING`",
						"short": "Bank routing number.",
					},
					map[string]any{
						"name": "cashapp_cash_tag",
						"title": "Cashapp Cash Tag",
						"type": "`$STRING`",
						"short": "Cash App cash tag.",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"short": "Billing city.",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"short": "Billing country.",
					},
					map[string]any{
						"name": "default",
						"title": "Default",
						"type": "`$BOOLEAN`",
						"short": "Whether this is the default payment method.",
					},
					map[string]any{
						"name": "device_data",
						"title": "Device Data",
						"type": "`$STRING`",
						"short": "Device data for fraud prevention.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "expiration_date",
						"title": "Expiration Date",
						"type": "`$STRING`",
						"short": "Card expiration date.",
						"readOnly": true,
					},
					map[string]any{
						"name": "first_name",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "Billing first name.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Payment method identifier.",
						"readOnly": true,
					},
					map[string]any{
						"name": "last_four",
						"title": "Last Four",
						"type": "`$STRING`",
						"short": "Last four digits of the card number.",
						"readOnly": true,
					},
					map[string]any{
						"name": "last_name",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "Billing last name.",
					},
					map[string]any{
						"name": "nick_name",
						"title": "Nick Name",
						"type": "`$STRING`",
						"short": "A nickname for the payment method.",
					},
					map[string]any{
						"name": "payment_account_email",
						"title": "Payment Account Email",
						"type": "`$STRING`",
						"short": "Email associated with the payment account.",
					},
					map[string]any{
						"name": "payment_email",
						"title": "Payment Email",
						"type": "`$STRING`",
						"short": "Payment email address.",
					},
					map[string]any{
						"name": "payment_gateway",
						"title": "Payment Gateway",
						"type": "`$STRING`",
						"short": "The payment gateway used.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "payment_nonce",
						"title": "Payment Nonce",
						"type": "`$STRING`",
						"short": "Payment nonce for tokenized payments.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "Billing state.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "The payment method type.",
					},
					map[string]any{
						"name": "zipcode",
						"title": "Zipcode",
						"type": "`$STRING`",
						"short": "Billing zip code.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bill_subs_api_payment_method_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/payment-methods",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "payment-methods",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"payment-methods",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/payment-methods/{payment_method_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "payment-methods",
									},
									map[string]any{
										"var": "payment_method_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"payment-methods",
									"{payment_method_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "payment_method_id",
											"orig": "payment_method_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"payment_method_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/payment-methods/{payment_method_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "payment-methods",
									},
									map[string]any{
										"var": "payment_method_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"payment-methods",
									"{payment_method_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "payment_method_id",
											"orig": "payment_method_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"payment_method_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.payment_method",
						},
					},
				},
			},
			"bill_subs_api_plan_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "bill_subs_api_plan_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/available_rate_plans",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "available_rate_plans",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"available_rate_plans",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_rate_plan_simple": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_rate_plan_simple",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/billing/rate_plans/{public_key}",
								"segments": []any{
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "rate_plans",
									},
									map[string]any{
										"var": "public_key",
									},
								},
								"parts": []any{
									"billing",
									"rate_plans",
									"{public_key}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "public_key",
											"orig": "public_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "teams_free",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"public_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_unpaid_invoices_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_unpaid_invoices_response_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billing/unpaid-invoice",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "unpaid-invoice",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"unpaid-invoice",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_user_subscription_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "bill_subs_api_user_subscription_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"user",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_user_subscription_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app",
						"title": "App",
						"type": "`$OBJECT`",
						"short": "Cloudflare Apps Marketplace is sunset.",
						"deprecated": true,
					},
					map[string]any{
						"name": "component_values",
						"title": "Component Values",
						"type": "`$ARRAY`",
						"short": "Configurable component values for the subscription.",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"short": "The monetary unit in which pricing information is displayed.",
						"readOnly": true,
					},
					map[string]any{
						"name": "current_period_end",
						"title": "Current Period End",
						"type": "`$STRING`",
						"short": "The end of the current period and also when the next billing is due.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "current_period_start",
						"title": "Current Period Start",
						"type": "`$STRING`",
						"short": "When the current billing period started.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "frequency",
						"title": "Frequency",
						"type": "`$STRING`",
						"short": "How often the subscription is renewed automatically.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Subscription identifier tag.",
						"readOnly": true,
					},
					map[string]any{
						"name": "price",
						"title": "Price",
						"type": "`$NUMBER`",
						"short": "The price of the subscription that will be billed, in US dollars.",
						"readOnly": true,
					},
					map[string]any{
						"name": "rate_plan",
						"title": "Rate Plan",
						"type": "`$OBJECT`",
						"short": "The rate plan applied to the subscription.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "The state that the subscription is in.",
						"readOnly": true,
					},
					map[string]any{
						"name": "zone",
						"title": "Zone",
						"type": "`$OBJECT`",
						"short": "A simple zone object.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bill_subs_api_user_subscription_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/user/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"user",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/user/subscriptions/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "identifier",
									},
								},
								"parts": []any{
									"user",
									"subscriptions",
									"{identifier}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "identifier",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_zone_subscription_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app",
						"title": "App",
						"type": "`$OBJECT`",
						"short": "Cloudflare Apps Marketplace is sunset.",
						"deprecated": true,
					},
					map[string]any{
						"name": "component_values",
						"title": "Component Values",
						"type": "`$ARRAY`",
						"short": "Configurable component values for the subscription.",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"short": "The monetary unit in which pricing information is displayed.",
						"readOnly": true,
					},
					map[string]any{
						"name": "current_period_end",
						"title": "Current Period End",
						"type": "`$STRING`",
						"short": "The end of the current period and also when the next billing is due.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "current_period_start",
						"title": "Current Period Start",
						"type": "`$STRING`",
						"short": "When the current billing period started.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "frequency",
						"title": "Frequency",
						"type": "`$STRING`",
						"short": "How often the subscription is renewed automatically.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Subscription identifier tag.",
						"readOnly": true,
					},
					map[string]any{
						"name": "price",
						"title": "Price",
						"type": "`$NUMBER`",
						"short": "The price of the subscription that will be billed, in US dollars.",
						"readOnly": true,
					},
					map[string]any{
						"name": "rate_plan",
						"title": "Rate Plan",
						"type": "`$OBJECT`",
						"short": "The rate plan applied to the subscription.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "The state that the subscription is in.",
						"readOnly": true,
					},
					map[string]any{
						"name": "zone",
						"title": "Zone",
						"type": "`$OBJECT`",
						"short": "A simple zone object.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bill_subs_api_zone_subscription_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/subscription",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "subscription",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"subscription",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/subscription",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "subscription",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"subscription",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/subscription",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "subscription",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"subscription",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billable_usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains error details if the request failed.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains informational notices about the response.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains the array of billable usage records.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful.",
					},
				},
				"name": "billable_usage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billable-usage",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billable-usage",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billable-usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-01",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-31",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"from",
										"to",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billable_usage_api_usage_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains error details if the request failed.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains any informational messages from the API.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Contains the usage info.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful.",
					},
				},
				"name": "billable_usage_api_usage_info",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billable-usage/info",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billable-usage",
									},
									map[string]any{
										"lit": "info",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billable-usage",
									"info",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billable_usage_api_v2_account_billable_metric": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "billable_usage_api_v2_account_billable_metric",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billable/usage/billable-metrics",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billable",
									},
									map[string]any{
										"lit": "usage",
									},
									map[string]any{
										"lit": "billable-metrics",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billable",
									"usage",
									"billable-metrics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-01",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-31",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"from",
										"to",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billable_usage_api_v2_usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "FilterBy",
						"title": "Filter By",
						"type": "`$OBJECT`",
						"short": "Usage filters.",
					},
					map[string]any{
						"name": "GroupBy",
						"title": "Group By",
						"type": "`$ARRAY`",
						"short": "Grouping definitions used to split result rows.",
					},
					map[string]any{
						"name": "TimePeriod",
						"title": "Time Period",
						"type": "`$OBJECT`",
						"short": "Charge period to query, i.e.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains error details if the request failed.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains informational notices about the response.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains the array of cost and usage records.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful.",
					},
				},
				"name": "billable_usage_api_v2_usage",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/billable/usage",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billable",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billable",
									"usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"FilterBy": "`reqdata.filter_by`",
										"GroupBy": "`reqdata.group_by`",
										"TimePeriod": "`reqdata.time_period`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billable/usage",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billable",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billable",
									"usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-01",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-31",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"from",
										"to",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cancel_downgrade": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "subscription_ids",
						"title": "Subscription Ids",
						"type": "`$ARRAY`",
						"short": "List of subscription identifiers to cancel downgrades for.",
					},
				},
				"name": "cancel_downgrade",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/subscriptions/cancel-downgrade",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "cancel-downgrade",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"subscriptions",
									"cancel-downgrade",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"entitlement": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of errors, empty on success.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of informational messages.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of entitlements for the requested object.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "entitlement",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/entitlements",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "entitlements",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"entitlements",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/entitlements",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "entitlements",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"entitlements",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"invoice": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "toggle",
						"title": "Toggle",
						"type": "`$BOOLEAN`",
						"short": "Whether to enable or disable PDF invoice generation.",
					},
				},
				"name": "invoice",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/invoices",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "invoices",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"invoices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payment_method": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "payment_method",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/payment-methods/{payment_method_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "payment-methods",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"payment-methods",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"payment_method_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "payment_method_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"set_as_default": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "set_as_default",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "payment-methods",
									},
									map[string]any{
										"var": "payment_method_id",
									},
									map[string]any{
										"lit": "set-as-default",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"payment-methods",
									"{payment_method_id}",
									"set-as-default",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "payment_method_id",
											"orig": "payment_method_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"payment_method_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.payment_method",
						},
					},
				},
			},
			"usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of errors, empty on success.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"short": "List of informational messages.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of billing usage data points for the requested time range.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "usage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/billing/usage",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"billing",
									"usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
											"kind": "query",
											"example": "streamMinutesViewed",
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2023-09-01T00:00:00Z",
										},
										map[string]any{
											"name": "time_delta",
											"orig": "time_delta",
											"type": "`$STRING`",
											"kind": "query",
											"example": "hour",
										},
										map[string]any{
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2023-09-01T06:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"filter",
										"limit",
										"metric",
										"since",
										"time_delta",
										"until",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_subscription",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/user/subscriptions/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"subscriptions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "506e3185e9c882d175a2d0cb0093d9f2",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zone_rate_plan": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "zone_rate_plan",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/available_plans",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "available_plans",
									},
								},
								"parts": []any{
									"zones",
									"{id}",
									"available_plans",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"zone_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "available_plans",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/available_plans/{plan_identifier}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "available_plans",
									},
									map[string]any{
										"var": "plan_identifier",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"available_plans",
									"{plan_identifier}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "plan_identifier",
											"orig": "plan_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"plan_identifier",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zone_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "zone_subscription",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/subscription",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "subscription",
									},
								},
								"parts": []any{
									"zones",
									"{id}",
									"subscription",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"zone_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"zones",
									"{id}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"zone_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
