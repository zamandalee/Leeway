class Channel < ApplicationRecord
  has_many :messages, as: :messageable
end
