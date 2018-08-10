Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    
    resource :session, only: [:create, :destroy]

    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :messages, only: [:create, :destroy]
    end

    resources :direct_messages, only: [:index, :show, :create, :destroy] do
      resources :messages, only: [:create, :destroy]
    end
  end

  mount ActionCable.server => '/cable'
end
