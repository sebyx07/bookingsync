module Api::V1
  class TokenController < ApplicationController
    def index
      render json: { token: ApplicationController::TOKEN, crsf: form_authenticity_token}
    end
  end
end