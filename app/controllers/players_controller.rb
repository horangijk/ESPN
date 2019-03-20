class PlayersController < ApplicationController

  def index
    @players = Player.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @players}
    end
  end

  def show
    @player = Player.find(params[:id])
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @player}
    end
  end

  def new
    @player = Player.new
  end

  def create
    @player = Player.create(player_params)
    respond_to do |f|
      f.html {render :create}
      f.json {render json: @player}
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :position, :team_id)
  end

end
