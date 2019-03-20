class TeamsController < ApplicationController
  def index
    @teams = Team.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @teams}
    end
  end

  def show
    @team = Team.find(params[:id])
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @team}
    end
  end

  def new
    @team = Team.new

  end

  def create
    @team = Team.find(team_params)
    respond_to do |f|
      f.html {render :create}
      f.json {render json: @team}
    end
  end

  private
  def team_params
    params.require(:team).permit(:name, :wins, :losses)
  end
end
