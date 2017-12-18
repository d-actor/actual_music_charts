class Api::SongsController < ApplicationController
  before_action :set_song, only: [:show, :udpate, :destroy]

  def index
    render json: Song.all
  end

  def show
    render json: @song
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render json: @song, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @song.destroy
  end

  private

  def set_song
    @song = current_chart.songs.find(params[:chart_id])
  end

  def song_params
    params.require(song).permit(:title, :artist, :rank, :prior_rank)
  end

end
