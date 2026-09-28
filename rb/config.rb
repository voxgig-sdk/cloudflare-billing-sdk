# CloudflareBilling SDK configuration

module CloudflareBillingConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CloudflareBilling",
        "slug" => "cloudflare-billing",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://api.cloudflare.com/client/v4",
        "auth" => {
          "prefix" => "",
          "name" => "X-Auth-Email",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "account_billing" => {},
          "account_billing_profile" => {},
          "account_subscription" => {},
          "bill_subs_api_account_billing_history_collection" => {},
          "bill_subs_api_account_credit" => {},
          "bill_subs_api_account_subscription_response_collection" => {},
          "bill_subs_api_account_subscription_response_single" => {},
          "bill_subs_api_address_validation_response_single" => {},
          "bill_subs_api_bad_debt_response_single" => {},
          "bill_subs_api_billing_history_collection" => {},
          "bill_subs_api_billing_response_single" => {},
          "bill_subs_api_cancel_reason_response_single" => {},
          "bill_subs_api_client_secret_response_single" => {},
          "bill_subs_api_payment_intent_response_single" => {},
          "bill_subs_api_payment_method_response_collection" => {},
          "bill_subs_api_payment_method_response_single" => {},
          "bill_subs_api_plan_response_collection" => {},
          "bill_subs_api_rate_plan_simple" => {},
          "bill_subs_api_unpaid_invoices_response_single" => {},
          "bill_subs_api_user_subscription_response_collection" => {},
          "bill_subs_api_user_subscription_response_single" => {},
          "bill_subs_api_zone_subscription_response_single" => {},
          "billable_usage" => {},
          "billable_usage_api_usage_info" => {},
          "billable_usage_api_v2_account_billable_metric" => {},
          "billable_usage_api_v2_usage" => {},
          "cancel_downgrade" => {},
          "entitlement" => {},
          "invoice" => {},
          "payment_method" => {},
          "set_as_default" => {},
          "usage" => {},
          "user_subscription" => {},
          "zone_rate_plan" => {},
          "zone_subscription" => {},
        },
      },
      "entity" => {
        "account_billing" => {
          "fields" => [],
          "name" => "account_billing",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/receipts/{receipt_id}/pdf",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "receipts",
                    },
                    {
                      "var" => "receipt_id",
                    },
                    {
                      "lit" => "pdf",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "receipts",
                    "{receipt_id}",
                    "pdf",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "receipt_id",
                        "orig" => "receipt_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "doctype",
                        "orig" => "doctype",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "doctype",
                      "receipt_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "account_billing_profile" => {
          "fields" => [],
          "name" => "account_billing_profile",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/accounts/{account_id}/billing/profile",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "account_subscription" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "account_subscription",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/accounts/{account_id}/subscriptions/{subscription_identifier}",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "subscription_identifier" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "id",
                        "orig" => "subscription_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_account_billing_history_collection" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "bill_subs_api_account_billing_history_collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billing/history",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "history",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "history",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 20,
                      },
                      {
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "page",
                      "per_page",
                      "status",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_account_credit" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "bill_subs_api_account_credit",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billing/credits",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "credits",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "credits",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_account_subscription_response_collection" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "bill_subs_api_account_subscription_response_collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/subscriptions",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_account_subscription_response_single" => {
          "fields" => [
            {
              "name" => "app",
              "title" => "App",
              "type" => "`$OBJECT`",
              "short" => "Cloudflare Apps Marketplace is sunset.",
              "deprecated" => true,
            },
            {
              "name" => "component_values",
              "title" => "Component Values",
              "type" => "`$ARRAY`",
              "short" => "Configurable component values for the subscription.",
            },
            {
              "name" => "currency",
              "title" => "Currency",
              "type" => "`$STRING`",
              "short" => "The monetary unit in which pricing information is displayed.",
              "readOnly" => true,
            },
            {
              "name" => "current_period_end",
              "title" => "Current Period End",
              "type" => "`$STRING`",
              "short" => "The end of the current period and also when the next billing is due.",
              "readOnly" => true,
              "format" => "date-time",
            },
            {
              "name" => "current_period_start",
              "title" => "Current Period Start",
              "type" => "`$STRING`",
              "short" => "When the current billing period started.",
              "readOnly" => true,
              "format" => "date-time",
            },
            {
              "name" => "frequency",
              "title" => "Frequency",
              "type" => "`$STRING`",
              "short" => "How often the subscription is renewed automatically.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Subscription identifier tag.",
              "readOnly" => true,
            },
            {
              "name" => "price",
              "title" => "Price",
              "type" => "`$NUMBER`",
              "short" => "The price of the subscription that will be billed, in US dollars.",
              "readOnly" => true,
            },
            {
              "name" => "rate_plan",
              "title" => "Rate Plan",
              "type" => "`$OBJECT`",
              "short" => "The rate plan applied to the subscription.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "The state that the subscription is in.",
              "readOnly" => true,
            },
            {
              "name" => "zone",
              "title" => "Zone",
              "type" => "`$OBJECT`",
              "short" => "A simple zone object.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "bill_subs_api_account_subscription_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/subscriptions/{subscription_identifier}/action/append",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "subscription_id",
                    },
                    {
                      "lit" => "action",
                    },
                    {
                      "lit" => "append",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "{subscription_id}",
                    "action",
                    "append",
                  ],
                  "rename" => {
                    "param" => {
                      "subscription_identifier" => "subscription_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "subscription_id",
                        "orig" => "subscription_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "subscription_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/subscriptions",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/subscriptions/{subscription_identifier}",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "subscription_identifier",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "{subscription_identifier}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "subscription_identifier",
                        "orig" => "subscription_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "subscription_identifier",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/accounts/{account_id}/subscriptions/{subscription_identifier}",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "subscription_identifier",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "{subscription_identifier}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "subscription_identifier",
                        "orig" => "subscription_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "subscription_identifier",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_address_validation_response_single" => {
          "fields" => [
            {
              "name" => "address",
              "title" => "Address",
              "type" => "`$STRING`",
              "short" => "Address line 1.",
            },
            {
              "name" => "address2",
              "title" => "Address2",
              "type" => "`$STRING`",
              "short" => "Address line 2.",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
              "short" => "City.",
            },
            {
              "name" => "country",
              "title" => "Country",
              "type" => "`$STRING`",
              "short" => "Country code.",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "State or province.",
            },
            {
              "name" => "zipcode",
              "title" => "Zipcode",
              "type" => "`$STRING`",
              "short" => "Postal or zip code.",
            },
          ],
          "name" => "bill_subs_api_address_validation_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/billing/address-validation",
                  "segments" => [
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "address-validation",
                    },
                  ],
                  "parts" => [
                    "billing",
                    "address-validation",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_bad_debt_response_single" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "bill_subs_api_bad_debt_response_single",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billing/bad-debt",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "bad-debt",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "bad-debt",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_billing_history_collection" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "bill_subs_api_billing_history_collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/user/billing/history",
                  "segments" => [
                    {
                      "lit" => "user",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "history",
                    },
                  ],
                  "parts" => [
                    "user",
                    "billing",
                    "history",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "action",
                        "orig" => "action",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "subscription",
                      },
                      {
                        "name" => "occurred_at",
                        "orig" => "occurred_at",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2014-03-01T12:21:59.3456Z",
                      },
                      {
                        "name" => "order",
                        "orig" => "order",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "occurred_at",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "example" => 20,
                      },
                      {
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "charge",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "action",
                      "occurred_at",
                      "order",
                      "page",
                      "per_page",
                      "type",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_billing_response_single" => {
          "fields" => [
            {
              "name" => "address",
              "title" => "Address",
              "type" => "`$STRING`",
              "short" => "Street address line 1.",
            },
            {
              "name" => "address2",
              "title" => "Address2",
              "type" => "`$STRING`",
              "short" => "Street address line 2 (apt, suite, etc.).",
            },
            {
              "name" => "billing_email",
              "title" => "Billing Email",
              "type" => "`$STRING`",
              "short" => "Primary billing email address.",
            },
            {
              "name" => "buying_rate_plan",
              "title" => "Buying Rate Plan",
              "type" => "`$STRING`",
              "short" => "Rate plan being purchased right after profile setup.",
            },
            {
              "name" => "captcha_challenge_jwt",
              "title" => "Captcha Challenge Jwt",
              "type" => "`$STRING`",
              "short" => "Captcha challenge JWT issued during onboarding.",
            },
            {
              "name" => "cf_turnstile_response",
              "title" => "Cf Turnstile Response",
              "type" => "`$STRING`",
              "short" => "Cloudflare Turnstile response.",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
              "short" => "City on the billing profile.",
            },
            {
              "name" => "company",
              "title" => "Company",
              "type" => "`$STRING`",
              "short" => "Company name on the billing profile.",
            },
            {
              "name" => "country",
              "title" => "Country",
              "type" => "`$STRING`",
              "short" => "ISO 3166-1 alpha-2 country code.",
            },
            {
              "name" => "first_name",
              "title" => "First Name",
              "type" => "`$STRING`",
              "short" => "First name on the billing profile.",
            },
            {
              "name" => "h_captcha_response",
              "title" => "H Captcha Response",
              "type" => "`$STRING`",
              "short" => "hCaptcha response.",
            },
            {
              "name" => "last_name",
              "title" => "Last Name",
              "type" => "`$STRING`",
              "short" => "Last name on the billing profile.",
            },
            {
              "name" => "preferred_locale",
              "title" => "Preferred Locale",
              "type" => "`$STRING`",
              "short" => "Preferred locale for invoice rendering (BCP 47).",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "secondary_billing_email",
              "title" => "Secondary Billing Email",
              "type" => "`$STRING`",
              "short" => "Secondary billing email address for CC on invoices.",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "State or region on the billing profile.",
            },
            {
              "name" => "tax_id_type",
              "title" => "Tax Id Type",
              "type" => "`$STRING`",
              "short" => "Type of tax ID provided.",
            },
            {
              "name" => "telephone",
              "title" => "Telephone",
              "type" => "`$STRING`",
              "short" => "Contact phone number.",
            },
            {
              "name" => "vat",
              "title" => "Vat",
              "type" => "`$STRING`",
              "short" => "VAT identifier.",
            },
            {
              "name" => "zipcode",
              "title" => "Zipcode",
              "type" => "`$STRING`",
              "short" => "ZIP or postal code.",
            },
          ],
          "name" => "bill_subs_api_billing_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/billing/profile",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billing/profile",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/user/billing/profile",
                  "segments" => [
                    {
                      "lit" => "user",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "user",
                    "billing",
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "patch" => {
              "input" => "data",
              "name" => "patch",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/accounts/{account_id}/billing/profile",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/accounts/{account_id}/billing/profile",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_cancel_reason_response_single" => {
          "fields" => [
            {
              "name" => "other",
              "title" => "Other",
              "type" => "`$STRING`",
              "short" => "Additional cancellation details.",
            },
            {
              "name" => "reason_code",
              "title" => "Reason Code",
              "type" => "`$ARRAY`",
              "short" => "The cancellation reason codes.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "bill_subs_api_cancel_reason_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "subscription_identifier",
                    },
                    {
                      "lit" => "cancel-reason",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "{subscription_identifier}",
                    "cancel-reason",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "subscription_identifier",
                        "orig" => "subscription_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "subscription_identifier",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "subscription_identifier",
                    },
                    {
                      "lit" => "cancel-reason",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "{subscription_identifier}",
                    "cancel-reason",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "subscription_identifier",
                        "orig" => "subscription_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "subscription_identifier",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_client_secret_response_single" => {
          "fields" => [
            {
              "name" => "invoice_id",
              "title" => "Invoice Id",
              "type" => "`$STRING`",
              "short" => "The identifier of the invoice to pay.",
            },
            {
              "name" => "payment_method_id",
              "title" => "Payment Method Id",
              "type" => "`$STRING`",
              "short" => "The payment method to use.",
            },
            {
              "name" => "validate_payment_method",
              "title" => "Validate Payment Method",
              "type" => "`$BOOLEAN`",
              "short" => "Whether to validate the payment method before processing.",
            },
          ],
          "name" => "bill_subs_api_client_secret_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/pay-bad-debt",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "pay-bad-debt",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "pay-bad-debt",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/pay-invoice",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "pay-invoice",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "pay-invoice",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_payment_intent_response_single" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "bill_subs_api_payment_intent_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/billing/profile/payment-method",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "profile",
                    },
                    {
                      "lit" => "payment-method",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "profile",
                    "payment-method",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_payment_method_response_collection" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "bill_subs_api_payment_method_response_collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/payment-methods",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "payment-methods",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "payment-methods",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 20,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "page",
                      "per_page",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_payment_method_response_single" => {
          "fields" => [
            {
              "name" => "address",
              "title" => "Address",
              "type" => "`$STRING`",
              "short" => "Billing address line 1.",
            },
            {
              "name" => "address2",
              "title" => "Address2",
              "type" => "`$STRING`",
              "short" => "Billing address line 2.",
            },
            {
              "name" => "bank_account_type",
              "title" => "Bank Account Type",
              "type" => "`$STRING`",
              "short" => "Bank account type.",
            },
            {
              "name" => "bank_code",
              "title" => "Bank Code",
              "type" => "`$STRING`",
              "short" => "Bank code.",
            },
            {
              "name" => "bank_country",
              "title" => "Bank Country",
              "type" => "`$STRING`",
              "short" => "Bank country.",
            },
            {
              "name" => "bank_name",
              "title" => "Bank Name",
              "type" => "`$STRING`",
              "short" => "Bank name for bank-based payment methods.",
            },
            {
              "name" => "bank_routing_number",
              "title" => "Bank Routing Number",
              "type" => "`$STRING`",
              "short" => "Bank routing number.",
            },
            {
              "name" => "cashapp_cash_tag",
              "title" => "Cashapp Cash Tag",
              "type" => "`$STRING`",
              "short" => "Cash App cash tag.",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
              "short" => "Billing city.",
            },
            {
              "name" => "country",
              "title" => "Country",
              "type" => "`$STRING`",
              "short" => "Billing country.",
            },
            {
              "name" => "default",
              "title" => "Default",
              "type" => "`$BOOLEAN`",
              "short" => "Whether this is the default payment method.",
            },
            {
              "name" => "device_data",
              "title" => "Device Data",
              "type" => "`$STRING`",
              "short" => "Device data for fraud prevention.",
              "writeOnly" => true,
            },
            {
              "name" => "expiration_date",
              "title" => "Expiration Date",
              "type" => "`$STRING`",
              "short" => "Card expiration date.",
              "readOnly" => true,
            },
            {
              "name" => "first_name",
              "title" => "First Name",
              "type" => "`$STRING`",
              "short" => "Billing first name.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Payment method identifier.",
              "readOnly" => true,
            },
            {
              "name" => "last_four",
              "title" => "Last Four",
              "type" => "`$STRING`",
              "short" => "Last four digits of the card number.",
              "readOnly" => true,
            },
            {
              "name" => "last_name",
              "title" => "Last Name",
              "type" => "`$STRING`",
              "short" => "Billing last name.",
            },
            {
              "name" => "nick_name",
              "title" => "Nick Name",
              "type" => "`$STRING`",
              "short" => "A nickname for the payment method.",
            },
            {
              "name" => "payment_account_email",
              "title" => "Payment Account Email",
              "type" => "`$STRING`",
              "short" => "Email associated with the payment account.",
            },
            {
              "name" => "payment_email",
              "title" => "Payment Email",
              "type" => "`$STRING`",
              "short" => "Payment email address.",
            },
            {
              "name" => "payment_gateway",
              "title" => "Payment Gateway",
              "type" => "`$STRING`",
              "short" => "The payment gateway used.",
              "writeOnly" => true,
            },
            {
              "name" => "payment_nonce",
              "title" => "Payment Nonce",
              "type" => "`$STRING`",
              "short" => "Payment nonce for tokenized payments.",
              "writeOnly" => true,
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "Billing state.",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "The payment method type.",
            },
            {
              "name" => "zipcode",
              "title" => "Zipcode",
              "type" => "`$STRING`",
              "short" => "Billing zip code.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "bill_subs_api_payment_method_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/payment-methods",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "payment-methods",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "payment-methods",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/payment-methods/{payment_method_id}",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "payment-methods",
                    },
                    {
                      "var" => "payment_method_id",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "payment-methods",
                    "{payment_method_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "payment_method_id",
                        "orig" => "payment_method_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "payment_method_id",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/accounts/{account_id}/payment-methods/{payment_method_id}",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "payment-methods",
                    },
                    {
                      "var" => "payment_method_id",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "payment-methods",
                    "{payment_method_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "payment_method_id",
                        "orig" => "payment_method_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "payment_method_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.payment_method",
              ],
            ],
          },
        },
        "bill_subs_api_plan_response_collection" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "bill_subs_api_plan_response_collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/zones/{zone_id}/available_rate_plans",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "available_rate_plans",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "available_rate_plans",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_rate_plan_simple" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "bill_subs_api_rate_plan_simple",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/billing/rate_plans/{public_key}",
                  "segments" => [
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "rate_plans",
                    },
                    {
                      "var" => "public_key",
                    },
                  ],
                  "parts" => [
                    "billing",
                    "rate_plans",
                    "{public_key}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "public_key",
                        "orig" => "public_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "teams_free",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "public_key",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_unpaid_invoices_response_single" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "bill_subs_api_unpaid_invoices_response_single",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billing/unpaid-invoice",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "unpaid-invoice",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "unpaid-invoice",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_user_subscription_response_collection" => {
          "fields" => [
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "bill_subs_api_user_subscription_response_collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/user/subscriptions",
                  "segments" => [
                    {
                      "lit" => "user",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "user",
                    "subscriptions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_user_subscription_response_single" => {
          "fields" => [
            {
              "name" => "app",
              "title" => "App",
              "type" => "`$OBJECT`",
              "short" => "Cloudflare Apps Marketplace is sunset.",
              "deprecated" => true,
            },
            {
              "name" => "component_values",
              "title" => "Component Values",
              "type" => "`$ARRAY`",
              "short" => "Configurable component values for the subscription.",
            },
            {
              "name" => "currency",
              "title" => "Currency",
              "type" => "`$STRING`",
              "short" => "The monetary unit in which pricing information is displayed.",
              "readOnly" => true,
            },
            {
              "name" => "current_period_end",
              "title" => "Current Period End",
              "type" => "`$STRING`",
              "short" => "The end of the current period and also when the next billing is due.",
              "readOnly" => true,
              "format" => "date-time",
            },
            {
              "name" => "current_period_start",
              "title" => "Current Period Start",
              "type" => "`$STRING`",
              "short" => "When the current billing period started.",
              "readOnly" => true,
              "format" => "date-time",
            },
            {
              "name" => "frequency",
              "title" => "Frequency",
              "type" => "`$STRING`",
              "short" => "How often the subscription is renewed automatically.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Subscription identifier tag.",
              "readOnly" => true,
            },
            {
              "name" => "price",
              "title" => "Price",
              "type" => "`$NUMBER`",
              "short" => "The price of the subscription that will be billed, in US dollars.",
              "readOnly" => true,
            },
            {
              "name" => "rate_plan",
              "title" => "Rate Plan",
              "type" => "`$OBJECT`",
              "short" => "The rate plan applied to the subscription.",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "The state that the subscription is in.",
              "readOnly" => true,
            },
            {
              "name" => "zone",
              "title" => "Zone",
              "type" => "`$OBJECT`",
              "short" => "A simple zone object.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "bill_subs_api_user_subscription_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/user/subscriptions",
                  "segments" => [
                    {
                      "lit" => "user",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "user",
                    "subscriptions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/user/subscriptions/{identifier}",
                  "segments" => [
                    {
                      "lit" => "user",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "identifier",
                    },
                  ],
                  "parts" => [
                    "user",
                    "subscriptions",
                    "{identifier}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "identifier",
                        "orig" => "identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "identifier",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "bill_subs_api_zone_subscription_response_single" => {
          "fields" => [
            {
              "name" => "app",
              "title" => "App",
              "type" => "`$OBJECT`",
              "short" => "Cloudflare Apps Marketplace is sunset.",
              "deprecated" => true,
            },
            {
              "name" => "component_values",
              "title" => "Component Values",
              "type" => "`$ARRAY`",
              "short" => "Configurable component values for the subscription.",
            },
            {
              "name" => "currency",
              "title" => "Currency",
              "type" => "`$STRING`",
              "short" => "The monetary unit in which pricing information is displayed.",
              "readOnly" => true,
            },
            {
              "name" => "current_period_end",
              "title" => "Current Period End",
              "type" => "`$STRING`",
              "short" => "The end of the current period and also when the next billing is due.",
              "readOnly" => true,
              "format" => "date-time",
            },
            {
              "name" => "current_period_start",
              "title" => "Current Period Start",
              "type" => "`$STRING`",
              "short" => "When the current billing period started.",
              "readOnly" => true,
              "format" => "date-time",
            },
            {
              "name" => "frequency",
              "title" => "Frequency",
              "type" => "`$STRING`",
              "short" => "How often the subscription is renewed automatically.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Subscription identifier tag.",
              "readOnly" => true,
            },
            {
              "name" => "price",
              "title" => "Price",
              "type" => "`$NUMBER`",
              "short" => "The price of the subscription that will be billed, in US dollars.",
              "readOnly" => true,
            },
            {
              "name" => "rate_plan",
              "title" => "Rate Plan",
              "type" => "`$OBJECT`",
              "short" => "The rate plan applied to the subscription.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "The state that the subscription is in.",
              "readOnly" => true,
            },
            {
              "name" => "zone",
              "title" => "Zone",
              "type" => "`$OBJECT`",
              "short" => "A simple zone object.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "bill_subs_api_zone_subscription_response_single",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/zones/{zone_id}/subscription",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "subscription",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "subscription",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/zones/{zone_id}/subscriptions",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "subscriptions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/zones/{zone_id}/subscription",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "subscription",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "subscription",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/zones/{zone_id}/subscription",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "subscription",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "subscription",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/zones/{zone_id}/subscriptions",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "subscriptions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "billable_usage" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains error details if the request failed.",
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains informational notices about the response.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains the array of billable usage records.",
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the API call was successful.",
            },
          ],
          "name" => "billable_usage",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billable-usage",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billable-usage",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billable-usage",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-05-01",
                      },
                      {
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-05-31",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "from",
                      "to",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "billable_usage_api_usage_info" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains error details if the request failed.",
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains any informational messages from the API.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Contains the usage info.",
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the API call was successful.",
            },
          ],
          "name" => "billable_usage_api_usage_info",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billable-usage/info",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billable-usage",
                    },
                    {
                      "lit" => "info",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billable-usage",
                    "info",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "billable_usage_api_v2_account_billable_metric" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
          ],
          "name" => "billable_usage_api_v2_account_billable_metric",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billable/usage/billable-metrics",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billable",
                    },
                    {
                      "lit" => "usage",
                    },
                    {
                      "lit" => "billable-metrics",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billable",
                    "usage",
                    "billable-metrics",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-05-01",
                      },
                      {
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-05-31",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "from",
                      "to",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "billable_usage_api_v2_usage" => {
          "fields" => [
            {
              "name" => "FilterBy",
              "title" => "Filter By",
              "type" => "`$OBJECT`",
              "short" => "Usage filters.",
            },
            {
              "name" => "GroupBy",
              "title" => "Group By",
              "type" => "`$ARRAY`",
              "short" => "Grouping definitions used to split result rows.",
            },
            {
              "name" => "TimePeriod",
              "title" => "Time Period",
              "type" => "`$OBJECT`",
              "short" => "Charge period to query, i.e.",
            },
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains error details if the request failed.",
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains informational notices about the response.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Contains the array of cost and usage records.",
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the API call was successful.",
            },
          ],
          "name" => "billable_usage_api_v2_usage",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/billable/usage",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billable",
                    },
                    {
                      "lit" => "usage",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billable",
                    "usage",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "FilterBy" => "`reqdata.filter_by`",
                      "GroupBy" => "`reqdata.group_by`",
                      "TimePeriod" => "`reqdata.time_period`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billable/usage",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billable",
                    },
                    {
                      "lit" => "usage",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billable",
                    "usage",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-05-01",
                      },
                      {
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-05-31",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "from",
                      "to",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "cancel_downgrade" => {
          "fields" => [
            {
              "name" => "subscription_ids",
              "title" => "Subscription Ids",
              "type" => "`$ARRAY`",
              "short" => "List of subscription identifiers to cancel downgrades for.",
            },
          ],
          "name" => "cancel_downgrade",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/subscriptions/cancel-downgrade",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "lit" => "cancel-downgrade",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "subscriptions",
                    "cancel-downgrade",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "entitlement" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "List of errors, empty on success.",
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "List of informational messages.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "List of entitlements for the requested object.",
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the API call was successful.",
            },
          ],
          "name" => "entitlement",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/entitlements",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "entitlements",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "entitlements",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/zones/{zone_id}/entitlements",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "entitlements",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "entitlements",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "zone_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "invoice" => {
          "fields" => [
            {
              "name" => "toggle",
              "title" => "Toggle",
              "type" => "`$BOOLEAN`",
              "short" => "Whether to enable or disable PDF invoice generation.",
            },
          ],
          "name" => "invoice",
          "op" => {
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/accounts/{account_id}/invoices",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "invoices",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "invoices",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "payment_method" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "payment_method",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/accounts/{account_id}/payment-methods/{payment_method_id}",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "payment-methods",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "payment-methods",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "payment_method_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "id",
                        "orig" => "payment_method_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "set_as_default" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ANY`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$ANY`",
                },
              },
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the API call was successful",
            },
          ],
          "name" => "set_as_default",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "payment-methods",
                    },
                    {
                      "var" => "payment_method_id",
                    },
                    {
                      "lit" => "set-as-default",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "payment-methods",
                    "{payment_method_id}",
                    "set-as-default",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "payment_method_id",
                        "orig" => "payment_method_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "payment_method_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.payment_method",
              ],
            ],
          },
        },
        "usage" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "List of errors, empty on success.",
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "short" => "List of informational messages.",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Array of billing usage data points for the requested time range.",
            },
            {
              "name" => "success",
              "title" => "Success",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the API call was successful.",
            },
          ],
          "name" => "usage",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/accounts/{account_id}/billing/usage",
                  "segments" => [
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "usage",
                    },
                  ],
                  "parts" => [
                    "accounts",
                    "{account_id}",
                    "billing",
                    "usage",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "metric",
                        "orig" => "metric",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "streamMinutesViewed",
                      },
                      {
                        "name" => "since",
                        "orig" => "since",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2023-09-01T00:00:00Z",
                      },
                      {
                        "name" => "time_delta",
                        "orig" => "time_delta",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "hour",
                      },
                      {
                        "name" => "until",
                        "orig" => "until",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2023-09-01T06:00:00Z",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                      "filter",
                      "limit",
                      "metric",
                      "since",
                      "time_delta",
                      "until",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "user_subscription" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "user_subscription",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/user/subscriptions/{identifier}",
                  "segments" => [
                    {
                      "lit" => "user",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "user",
                    "subscriptions",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "identifier" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "506e3185e9c882d175a2d0cb0093d9f2",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "zone_rate_plan" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "zone_rate_plan",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/zones/{zone_id}/available_plans",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "available_plans",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{id}",
                    "available_plans",
                  ],
                  "rename" => {
                    "param" => {
                      "zone_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "available_plans",
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/zones/{zone_id}/available_plans/{plan_identifier}",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "zone_id",
                    },
                    {
                      "lit" => "available_plans",
                    },
                    {
                      "var" => "plan_identifier",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{zone_id}",
                    "available_plans",
                    "{plan_identifier}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "plan_identifier",
                        "orig" => "plan_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                      {
                        "name" => "zone_id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "plan_identifier",
                      "zone_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "zone_subscription" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "zone_subscription",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/zones/{zone_id}/subscription",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "subscription",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{id}",
                    "subscription",
                  ],
                  "rename" => {
                    "param" => {
                      "zone_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/zones/{zone_id}/subscriptions",
                  "segments" => [
                    {
                      "lit" => "zones",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "subscriptions",
                    },
                  ],
                  "parts" => [
                    "zones",
                    "{id}",
                    "subscriptions",
                  ],
                  "rename" => {
                    "param" => {
                      "zone_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "zone_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "023e105f4ecef8ad9ca31a8372d0c353",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CloudflareBillingFeatures.make_feature(name)
  end
end
