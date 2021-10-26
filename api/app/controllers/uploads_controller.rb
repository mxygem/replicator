class UploadsController < ApplicationController

  def index
    @uploads = Upload.all
    render json: @uploads
  end

  def create
    @Upload = Upload.create(upload_params)
    render json: Upload.where("id = '#{@Upload.id}'").first
  end

  private
  def upload_params
    params.permit(:title, :config, :file)
  end
end
