Rails.application.routes.draw do
  root to: 'finder#index'
  namespace :api do
    namespace :v1 do
      get 'search_by_json', to: 'finder#search_by_json'
    end
  end
end
