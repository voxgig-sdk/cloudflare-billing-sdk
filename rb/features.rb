# CloudflareBilling SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareBillingFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareBillingBaseFeature.new
    when "test"
      CloudflareBillingTestFeature.new
    else
      CloudflareBillingBaseFeature.new
    end
  end
end
