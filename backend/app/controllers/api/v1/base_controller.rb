module Api::V1
  class BaseController < ApplicationController
    include JSONAPI::ActsAsResourceController

    before_action :verify_token

    def verify_token
      if request.headers['token'] != ApplicationController::TOKEN
        head 403
      end
    end

    protected :verify_token
  end
end