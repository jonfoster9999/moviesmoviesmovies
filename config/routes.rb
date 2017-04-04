Rails.application.routes.draw do
  
  resources :categories
  resources :comments
  resources :locations
  resources :movies
  resources :actors
  get 'example' => 'example#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
