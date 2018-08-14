class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  validate :ensure_photo

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message
  has_many :permissions
  has_many :channels, through: :permissions

  has_one_attached :photo

  attr_reader :password

  after_initialize :ensure_session_token

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "User must have a profile photo"
    end
  end

  def format_username
    self.username.split("_").map{ |word| word.capitalize }.join(" ").concat(" ")
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
