package entity

import (
	"github.com/voxgig-sdk/cloudflare-billing-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-billing-sdk/go/utility/struct"
)

type BillSubsApiBillingResponseSingleEntity struct {
	name    string
	client  *core.CloudflareBillingSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
	deleted bool
}

func NewBillSubsApiBillingResponseSingleEntity(client *core.CloudflareBillingSDK, entopts map[string]any) *BillSubsApiBillingResponseSingleEntity {
	if entopts == nil {
		entopts = map[string]any{}
	}
	if _, ok := entopts["active"]; !ok {
		entopts["active"] = true
	} else if entopts["active"] == false {
		// keep false
	} else {
		entopts["active"] = true
	}

	e := &BillSubsApiBillingResponseSingleEntity{
		name:    "bill_subs_api_billing_response_single",
		client:  client,
		utility: client.GetUtility(),
		entopts: entopts,
		data:    map[string]any{},
		match:   map[string]any{},
	}

	e.entctx = e.utility.MakeContext(map[string]any{
		"entity":  e,
		"entopts": entopts,
	}, client.GetRootCtx())

	e.utility.FeatureHook(e.entctx, "PostConstructEntity")

	return e
}

func (e *BillSubsApiBillingResponseSingleEntity) GetName() string { return e.name }

func (e *BillSubsApiBillingResponseSingleEntity) MarkDeleted() {
	e.deleted = true
}


// Deleted reports whether a successful Remove has resolved on this instance.
func (e *BillSubsApiBillingResponseSingleEntity) Deleted() bool {
	return e.deleted
}


func (e *BillSubsApiBillingResponseSingleEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewBillSubsApiBillingResponseSingleEntity(e.client, opts)
}

func (e *BillSubsApiBillingResponseSingleEntity) Data(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.data = core.ToMapAny(vs.Clone(args[0]))
		if e.data == nil {
			e.data = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetData")
	}

	e.utility.FeatureHook(e.entctx, "GetData")
	out := vs.Clone(e.data)
	return out
}

func (e *BillSubsApiBillingResponseSingleEntity) Match(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.match = core.ToMapAny(vs.Clone(args[0]))
		if e.match == nil {
			e.match = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetMatch")
	}

	e.utility.FeatureHook(e.entctx, "GetMatch")
	out := vs.Clone(e.match)
	return out
}

// DataTyped is the statically-typed accessor for this entity's data. With no
// argument it returns the current data as an BillSubsApiBillingResponseSingle; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *BillSubsApiBillingResponseSingleEntity) DataTyped(data ...BillSubsApiBillingResponseSingle) BillSubsApiBillingResponseSingle {
	if len(data) > 0 {
		return typedFrom[BillSubsApiBillingResponseSingle](e.Data(asMap(data[0])))
	}
	return typedFrom[BillSubsApiBillingResponseSingle](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through BillSubsApiBillingResponseSingle (all fields
// optional at the wire level).
func (e *BillSubsApiBillingResponseSingleEntity) MatchTyped(match ...BillSubsApiBillingResponseSingle) BillSubsApiBillingResponseSingle {
	if len(match) > 0 {
		return typedFrom[BillSubsApiBillingResponseSingle](e.Match(asMap(match[0])))
	}
	return typedFrom[BillSubsApiBillingResponseSingle](e.Match())
}

func (e *BillSubsApiBillingResponseSingleEntity) Stream(action string, args map[string]any, callopts map[string]any) <-chan any {
	out := make(chan any)

	if callopts == nil {
		callopts = map[string]any{}
	}

	var signal <-chan struct{}
	switch s := callopts["signal"].(type) {
	case <-chan struct{}:
		signal = s
	case chan struct{}:
		signal = s
	}

	ctrl := map[string]any{}
	if c := core.ToMapAny(callopts["ctrl"]); c != nil {
		for k, v := range c {
			ctrl[k] = v
		}
	}

	ctxmap := map[string]any{
		"opname": action,
		"ctrl":   ctrl,
		"match":  e.match,
		"data":   e.data,
	}
	for k, v := range args {
		ctxmap[k] = v
	}

	utility := e.utility
	ctx := utility.MakeContext(ctxmap, e.entctx)
	ctx.Meta["stream"] = callopts

	// Outbound: expose the caller's payload so the request builder / transport
	// can stream it as the request body.
	if body := callopts["body"]; body != nil {
		ctx.Reqdata["body$"] = body
		ctx.Meta["stream_out"] = body
	}

	send := func(item any) bool {
		select {
		case <-signal:
			return false
		case out <- item:
			return true
		}
	}

	go func() {
		defer close(out)

		utility.FeatureHook(ctx, "PrePoint")
		point, err := utility.MakePoint(ctx)
		ctx.Out["point"] = point
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreSpec")
		spec, err := utility.MakeSpec(ctx)
		ctx.Out["spec"] = spec
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreRequest")
		req, err := utility.MakeRequest(ctx)
		ctx.Out["request"] = req
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreResponse")
		resp, err := utility.MakeResponse(ctx)
		ctx.Out["response"] = resp
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreResult")
		result, err := utility.MakeResult(ctx)
		ctx.Out["result"] = result
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreDone")

		// Inbound: prefer the streaming feature's incremental iterator; else
		// fall back to the materialised items so Stream always yields.
		if ctx.Result != nil && ctx.Result.Stream != nil {
			for item := range ctx.Result.Stream() {
				if !send(item) {
					return
				}
			}
			return
		}

		data, derr := utility.Done(ctx)
		if derr != nil {
			return
		}
		switch d := data.(type) {
		case []any:
			for _, item := range d {
				if !send(item) {
					return
				}
			}
		case nil:
			// nothing to yield
		default:
			send(d)
		}
	}()

	return out
}


func (e *BillSubsApiBillingResponseSingleEntity) Load(reqmatch map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":   "load",
		"ctrl":     ctrl,
		"match":    e.match,
		"data":     e.data,
		"reqmatch": reqmatch,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// LoadTyped is the statically-typed variant of Load: it takes an
// BillSubsApiBillingResponseSingleLoadMatch and returns an BillSubsApiBillingResponseSingle. It delegates to the untyped
// Load (identical runtime) and converts at the typed boundary.
func (e *BillSubsApiBillingResponseSingleEntity) LoadTyped(reqmatch BillSubsApiBillingResponseSingleLoadMatch, ctrl map[string]any) (BillSubsApiBillingResponseSingle, error) {
	res, err := e.Load(asMap(reqmatch), ctrl)
	if err != nil {
		return BillSubsApiBillingResponseSingle{}, err
	}
	return typedFrom[BillSubsApiBillingResponseSingle](res), nil
}



func (e *BillSubsApiBillingResponseSingleEntity) List(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("list", e.name)
}



func (e *BillSubsApiBillingResponseSingleEntity) Create(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "create",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// CreateTyped is the statically-typed variant of Create: it takes an
// BillSubsApiBillingResponseSingleCreateData and returns an BillSubsApiBillingResponseSingle. It delegates to the untyped
// Create (identical runtime) and converts at the typed boundary.
func (e *BillSubsApiBillingResponseSingleEntity) CreateTyped(reqdata BillSubsApiBillingResponseSingleCreateData, ctrl map[string]any) (BillSubsApiBillingResponseSingle, error) {
	res, err := e.Create(asMap(reqdata), ctrl)
	if err != nil {
		return BillSubsApiBillingResponseSingle{}, err
	}
	return typedFrom[BillSubsApiBillingResponseSingle](res), nil
}




func (e *BillSubsApiBillingResponseSingleEntity) Update(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "update",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// UpdateTyped is the statically-typed variant of Update: it takes an
// BillSubsApiBillingResponseSingleUpdateData and returns an BillSubsApiBillingResponseSingle. It delegates to the untyped
// Update (identical runtime) and converts at the typed boundary.
func (e *BillSubsApiBillingResponseSingleEntity) UpdateTyped(reqdata BillSubsApiBillingResponseSingleUpdateData, ctrl map[string]any) (BillSubsApiBillingResponseSingle, error) {
	res, err := e.Update(asMap(reqdata), ctrl)
	if err != nil {
		return BillSubsApiBillingResponseSingle{}, err
	}
	return typedFrom[BillSubsApiBillingResponseSingle](res), nil
}



func (e *BillSubsApiBillingResponseSingleEntity) Remove(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("remove", e.name)
}


func (e *BillSubsApiBillingResponseSingleEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
	utility := e.utility

	utility.FeatureHook(ctx, "PrePoint")
	point, err := utility.MakePoint(ctx)
	ctx.Out["point"] = point
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreSpec")
	spec, err := utility.MakeSpec(ctx)
	ctx.Out["spec"] = spec
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreRequest")
	resp, err := utility.MakeRequest(ctx)
	ctx.Out["request"] = resp
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResponse")
	resp2, err := utility.MakeResponse(ctx)
	ctx.Out["response"] = resp2
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResult")
	result, err := utility.MakeResult(ctx)
	ctx.Out["result"] = result
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreDone")
	postDone()

	out, doneErr := utility.Done(ctx)
	if doneErr != nil {
		return out, doneErr
	}

	opname := ""
	if ctx.Op != nil {
		opname = ctx.Op.Name
	}

	if ctx.Result != nil && ctx.Result.Ok && opname != "list" {
		if opname == "remove" {
			e.MarkDeleted()
		}
		return e, nil
	}

	return out, nil
}
