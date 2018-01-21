module Api::V1
  class BaseController < ApplicationController
    include JSONAPI::ActsAsResourceController
  end
end