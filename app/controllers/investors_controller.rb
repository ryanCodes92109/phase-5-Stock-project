class InvestorsController < ApplicationController

    def index 
        render json: Investor.all
    end

    def show
        render json: @investor, status: :ok
    end
end
