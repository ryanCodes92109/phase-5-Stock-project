Rails.application.routes.draw do
  resources :sessions
  resources :favorites
  resources :stocks
  resources :investors
  resources :portfolios
  resources :portfolio_stocks

  post "/login", to: "sessions#login"
  delete '/logout', to: "sessions#logout"
  get "/authorized_investor", to: "investors#show"
  post '/signup', to:'investors#create'
  
end
