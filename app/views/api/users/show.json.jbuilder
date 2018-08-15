json.extract! @user, :id, :username
json.photo @user.photo

if @user.photo.attached?
  json.photoUrl url_for(@user.photo)
end
