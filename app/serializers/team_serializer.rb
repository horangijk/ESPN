class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :wins, :losses
  has_many :players
end
