class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @comments}
    end
  end

  def show
    @comment = Comment.find(params[:id])
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @comment}
    end
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    respond_to do |f|
      f.html {render :create}
      f.json {render json: @comment}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:description, :player_id)
  end

end
