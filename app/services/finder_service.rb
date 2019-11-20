# frozen_string_literal: true
class FinderService
  attr_reader :params

  def initialize(params, founder = FOUNDER)
    @params = params
    @founder = founder

    # dinamically generate "slice_by_#{param_key}"
    params.each do |k, v|
      name = "slice_by_#{k}".to_sym
      self.class.send(:define_method, name) do |current_founder|
        search_match(founder: current_founder, json_key: k.to_s, param_value: v)
      end
    end
  end

  def call
    return if params.to_h.empty?

    params.keys.each { |k| self.founder = send("slice_by_#{k}", founder) }
    self.founder = nil if founder == []
    founder
  end

  private

  attr_accessor :founder

  def search_match(founder:, json_key:, param_value:)
    founder&.select do |hash|
      hash[json_key].downcase =~ /^#{param_value.downcase}/
    end
  end
end
