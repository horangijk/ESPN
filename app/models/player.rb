class Player < ApplicationRecord
  has_many :stats
  has_many :comments
  belongs_to :team, optional: true
end
