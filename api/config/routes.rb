Rails.application.routes.draw do
  post "/uploads", to: 'uploads#create'
  get "/posts", to: 'uploads#index'
end
