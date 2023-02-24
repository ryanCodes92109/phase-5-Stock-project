Rails.application.routes.draw do
  resources :favorites
  resources :stocks
  resources :investors
  resources :portfolios
  resources :portfolio_stocks
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"



end
