class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :player_id
  belongs_to :player
end
