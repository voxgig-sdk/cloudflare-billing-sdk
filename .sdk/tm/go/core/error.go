package core

type CloudflareBillingError struct {
	IsCloudflareBillingError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareBillingError(code string, msg string, ctx *Context) *CloudflareBillingError {
	return &CloudflareBillingError{
		IsCloudflareBillingError: true,
		Sdk:              "CloudflareBilling",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareBillingError) Error() string {
	return e.Msg
}
