# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.new(username: 'hermione_granger', password: '123456')
  user1.photo.attach(io: File.open("app/assets/images/profpic1.png"), filename: 'profpic1.png')
  user1.save!

user2 = User.create(username: 'harry_potter', password: '123456')
  user2.photo.attach(io: File.open("app/assets/images/profpic2.png"), filename: 'profpic2.png')
  user2.save!

user3 = User.create(username: 'ron_weasley', password: '123456')
  user3.photo.attach(io: File.open("app/assets/images/profpic3.png"), filename: 'profpic3.png')
  user3.save!

user4 = User.create(username: 'neville_longbottom', password: '123456')
  user4.photo.attach(io: File.open("app/assets/images/profpic4.png"), filename: 'profpic4.png')
  user4.save!

user5 = User.create(username: 'draco_malfoy', password: '123456')
  user5.photo.attach(io: File.open("app/assets/images/profpic5.png"), filename: 'profpic5.png')
  user5.save!

user6 = User.create(username: 'albus_dumbledore', password: '123456')
  user6.photo.attach(io: File.open("app/assets/images/profpic6.png"), filename: 'profpic6.png')
  user6.save!

user7 = User.create(username: 'remus_lupin', password: '123456')
  user7.photo.attach(io: File.open("app/assets/images/profpic7.png"), filename: 'profpic7.png')
  user7.save!

user8 = User.create(username: 'fred_weasley', password: '123456')
  user8.photo.attach(io: File.open("app/assets/images/profpic8.png"), filename: 'profpic8.png')
  user8.save!

user9 = User.create(username: 'george_weasley', password: '123456')
  user9.photo.attach(io: File.open("app/assets/images/profpic9.png"), filename: 'profpic9.png')
  user9.save!

user10 = User.create(username: 'oliver_wood', password: '123456')
  user10.photo.attach(io: File.open("app/assets/images/profpic10.png"), filename: 'profpic10.png')
  user10.save!

user11 = User.create(username: 'ginny_weasley', password: '123456')
  user11.photo.attach(io: File.open("app/assets/images/profpic11.png"), filename: 'profpic11.png')
  user11.save!

Channel.destroy_all

channel1 = Channel.create(title: 'Dumbledore\'s Army')
channel2 = Channel.create(title: 'Golden Trio 🦁')
channel3 = Channel.create(title: 'Gryffindor Quidditch 🏆')
channel4 = Channel.create(title: 'Hogwarts Residents')
channel5 = Channel.create(title: 'S.P.E.W')
channel6 = Channel.create(title: 'Weasley Family')


Permission.destroy_all

Permission.create(user_id: user1.id, channel_id: channel1.id)
Permission.create(user_id: user2.id, channel_id: channel1.id)
Permission.create(user_id: user3.id, channel_id: channel1.id)
Permission.create(user_id: user4.id, channel_id: channel1.id)
Permission.create(user_id: user8.id, channel_id: channel1.id)
Permission.create(user_id: user9.id, channel_id: channel1.id)
Permission.create(user_id: user11.id, channel_id: channel1.id)

Permission.create(user_id: user1.id, channel_id: channel2.id)
Permission.create(user_id: user2.id, channel_id: channel2.id)
Permission.create(user_id: user3.id, channel_id: channel2.id)

Permission.create(user_id: user2.id, channel_id: channel3.id)
Permission.create(user_id: user8.id, channel_id: channel3.id)
Permission.create(user_id: user9.id, channel_id: channel3.id)
Permission.create(user_id: user10.id, channel_id: channel3.id)
Permission.create(user_id: user11.id, channel_id: channel3.id)

Permission.create(user_id: user1.id, channel_id: channel4.id)
Permission.create(user_id: user2.id, channel_id: channel4.id)
Permission.create(user_id: user3.id, channel_id: channel4.id)
Permission.create(user_id: user4.id, channel_id: channel4.id)
Permission.create(user_id: user5.id, channel_id: channel4.id)
Permission.create(user_id: user6.id, channel_id: channel4.id)
Permission.create(user_id: user7.id, channel_id: channel4.id)
Permission.create(user_id: user8.id, channel_id: channel4.id)
Permission.create(user_id: user9.id, channel_id: channel4.id)
Permission.create(user_id: user10.id, channel_id: channel4.id)
Permission.create(user_id: user11.id, channel_id: channel4.id)

Permission.create(user_id: user1.id, channel_id: channel5.id)
Permission.create(user_id: user2.id, channel_id: channel5.id)
Permission.create(user_id: user3.id, channel_id: channel5.id)
Permission.create(user_id: user4.id, channel_id: channel5.id)

Permission.create(user_id: user1.id, channel_id: channel6.id)
Permission.create(user_id: user2.id, channel_id: channel6.id)
Permission.create(user_id: user3.id, channel_id: channel6.id)
Permission.create(user_id: user8.id, channel_id: channel6.id)
Permission.create(user_id: user9.id, channel_id: channel6.id)
Permission.create(user_id: user11.id, channel_id: channel6.id)

Message.destroy_all

Message.create(body: 'Welcome back everyone, practice at 6am tomorrow!', author_id: 10, messageable_type: "Channel", messageable_id: 3)
Message.create(body: 'Seriously, Oliver?? 6am?!', author_id: 9, messageable_type: "Channel", messageable_id: 3)
Message.create(body: 'It\'s the first week of school!', author_id: 9, messageable_type: "Channel", messageable_id: 3)
