class InvestorsController < ApplicationController
    # before_action :find_investor, only: [:show, :destroy, :update]
    skip_before_action :authorized_investor, only: [:create, :oauth]

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

    def oauth
        # byebug
        user = Investor.find_or_create_by(email:params[:email]) do |u|
            u.first_name = params[:given_name]
            u.last_name = params[:family_name]
            u.email = params[:email]
            u.password = SecureRandom.hex(16)
        end
        if user.id
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {message: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def investor_params
        params.permit(:id, :first_name, :last_name, :email, :password)
    end

    def find_investor
        @investor = Investor.find(params[:id])
    end


end
