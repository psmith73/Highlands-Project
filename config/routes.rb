Rails.application.routes.draw do
  get 'pages/index'
  root 'pages#index'
  match '/', to: 'pages#index', via: :all
  match '/products', to: 'pages#index', via: :all
  match '/send_data' => 'send_data#save', via: :post
  match '/get_data' => 'get_data#pull', via: :get
  match '/search' => 'search#search', via: :get
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
