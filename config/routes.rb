Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :players, only: [:index, :show, :new, :create]
  resources :teams, only: [:index, :show, :new, :create]
  resources :comments, only: [:index, :show, :new, :create]

  root 'players#index'

end
