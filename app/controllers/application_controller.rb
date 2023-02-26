class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    # before_action :authorized_investor

    def authorized_investor
       render json: {error: "No ones home!"}, status: :unauthorized
      unless current_investor
    end
  end

    def current_investor
      @user ||= Investor.find_by(id:session[:investor_id]) if session[:user_id]
    end



    private
    def not_found invalid
      render json: {error: `#{invalid.model} This resource isn't found.`}, status: :not_found
    end

    def invalid invalid
      render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
   
end
