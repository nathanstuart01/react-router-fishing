Rails.application.routes.draw do

  root 'home#index'


  namespace :api do
    resources :licenses do
      resources :checkouts
    end
  end

  get '*unmatched_route', to: 'home#index'
end
