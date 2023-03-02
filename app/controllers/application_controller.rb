class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    before_action :authorized_investor


    def current_investor
      # byebug
      @user ||= Investor.find_by(id: session[:user_id]) if session[:user_id]
      # byebug
    end

    def authorized_investor
       render json: {errors: "No ones home!"}, status: :unauthorized unless current_investor
      
    end
  

    



    private
    def not_found invalid
      render json: {error: `#{invalid.model} This resource isn't found.`}, status: :not_found
    end

    def invalid invalid
      render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
   
end
