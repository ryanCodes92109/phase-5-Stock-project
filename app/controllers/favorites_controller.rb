class FavoritesController < ApplicationController
    before_action :find_favorite, only: [:show, :destroy]

    def index
        render json: Favorite.all
    end

    def show
        render json: @favorite, status: :ok
    end

    def destroy 
        @favorite.destroy
        head :no_content
    end

    def update
        @favorite.update!(favorite_params)
        render json: @favorite, status: :ok
    end

    def create
       newFavorite =  Favorite.create!(favorite_params)
       render json: newFavorite, status: :created
    end

    private
    def find_favorite
        @favorite = Favorite.find(params[:id])
    end

    def favorite_params
        params.permit(:investor_id, :stock_id)
    end

end
