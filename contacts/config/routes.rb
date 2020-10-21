Rails.application.routes.draw do
  namespace :v1 do
    resources :contacts, only: [:index, :create]
  end
end
