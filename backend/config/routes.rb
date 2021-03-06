Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :rentals
      jsonapi_resources :bookings

      get 'token', to: 'token#index'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
