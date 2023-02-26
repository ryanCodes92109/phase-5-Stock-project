Rails.application.routes.draw do
  resources :sessions
  resources :favorites
  resources :stocks
  resources :investors
  resources :portfolios
  resources :portfolio_stocks

  post "/login", to: "sessions#login"

  post "/authorized_investor", to: "investor#show"
end
