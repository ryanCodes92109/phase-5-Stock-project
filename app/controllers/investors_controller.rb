class InvestorsController < ApplicationController
    # before_action :find_investor, only: [:show, :destroy, :update]
    skip_before_action :authorized_investor, only: [:create]

    def index 
        render json: Investor.all, status: :ok
    end

    def show
        render json: @user, status: :ok
    end

    def create
        new_investor = Investor.create!(investor_params)
        session[:user_id] = new_investor.id
        render json: new_investor, status: :created
    end

    def destroy
        @user.destroy
        head :no_content, status: 204
    end

    def update
       render json: @user.update!(investor_params), status: :ok
    end

    private
    def investor_params
        params.permit(:first_name, :last_name, :email, :password)
    end

    def find_investor
        @investor = Investor.find(params[:id])
    end


end
