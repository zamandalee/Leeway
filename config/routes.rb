Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]

    resource :session, only: [:create, :destroy]

    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :messages, only: [:create, :update, :destroy]
    end

    resources :direct_messages, only: [:index, :show, :create, :destroy] do
      resources :messages, only: [:create, :update, :destroy]
    end

    resources :permissions, only: [:index]
  end

  mount ActionCable.server => '/cable'
end
