class InvestorsController < ApplicationController
    before_action :find_investor, onlty: [:show, :destroy]

    def index 
        render json: Investor.all
    end

    def show
        render json: @investor, status: :ok
    end

    def create
        new_investor = Investor.create!(investor_params)
        render json: new_investor, status: :created
    end

    def destroy
        @investor.destroy
        head :no_content
    end

    def update
        @investor.update!(investor_params), status: :ok
    end

    private
    def investor_params
        params.permit(:first_name, :last_name, :email, :password)
    end

    def find_investor
        @investor = Investor.find(params[:id])
    end


end
