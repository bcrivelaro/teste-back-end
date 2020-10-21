Rails.application.routes.draw do
  namespace :v1 do
    resources :visits, only: [:index, :create]
  end
end
