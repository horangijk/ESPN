class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :team_id
  has_many :comments
  has_many :stats
  belongs_to :team
end
