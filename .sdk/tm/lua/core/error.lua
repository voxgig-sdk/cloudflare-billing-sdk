-- CloudflareBilling SDK error

local CloudflareBillingError = {}
CloudflareBillingError.__index = CloudflareBillingError


function CloudflareBillingError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareBillingError)
  self.is_sdk_error = true
  self.sdk = "CloudflareBilling"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareBillingError:error()
  return self.msg
end


function CloudflareBillingError:__tostring()
  return self.msg
end


return CloudflareBillingError
