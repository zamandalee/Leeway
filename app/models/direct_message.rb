class DirectMessage < ApplicationRecord
  has_many :messages, as: :messageable

end
