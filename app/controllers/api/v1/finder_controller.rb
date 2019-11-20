class Api::V1::FinderController < ApplicationController
  def index; end

  def search_by_json
    render json: FinderService.new(set_params).call
  end

  private

  def set_params
    params.permit(:name, :address, :city, :region, :country, :birthday)
          .select { |_k, v| v.present? }
  end
end
