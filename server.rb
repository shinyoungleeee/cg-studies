require 'sinatra'
require "sinatra/json"
require "json"
require 'pry'

def read_studies
  JSON.parse(File.read("studies.json"))
end

get "/api/v1/studies" do
  @studies = read_studies

  content_type :json
  json @studies
end

get "/api/v1/studies/:id" do
  @studies = read_studies
  study_data = @studies["studies"]

  @study = study_data.find do |study|
    study["id"] == params[:id].to_i
  end

  content_type :json
  json @study
end

get '*' do
  send_file File.expand_path('index.html', settings.public_folder)
end
