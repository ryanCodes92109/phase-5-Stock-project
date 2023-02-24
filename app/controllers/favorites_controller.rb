class FavoritesController < ApplicationController

    def index
        render json:Favorite.all
    end

    def show
        render json: favorite, status: :ok
    end

    private
    def find_favorite
        favorite = Favorite.find(params[:id])
    end

end
