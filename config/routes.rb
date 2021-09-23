Rails.application.routes.draw do
  # api endpoints
  # all routes in the api namespace, 
  # allow rails and react to communicate with each other
  # no more nav routes
  namespace :api do
    resources :todos do
      resources :comments
    end
  end
end
