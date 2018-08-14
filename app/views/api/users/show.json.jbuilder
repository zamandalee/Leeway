json.extract! @user, :id, :username
json.photo @user.photo
json.photoUrl url_for(@user.photo)
