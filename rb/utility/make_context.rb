# CloudflareBilling SDK utility: make_context
require_relative '../core/context'
module CloudflareBillingUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareBillingContext.new(ctxmap, basectx)
  }
end
