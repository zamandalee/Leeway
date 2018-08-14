# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all

User.create(username: 'hermione_granger', password: '123456')
User.create(username: 'harry_potter', password: '123456')
User.create(username: 'ron_weasley', password: '123456')
User.create(username: 'neville_longbottom', password: '123456')
User.create(username: 'draco_malfoy', password: '123456')
User.create(username: 'albus_dumbledore', password: '123456')
User.create(username: 'remus_lupin', password: '123456')
User.create(username: 'fred_weasley', password: '123456')
User.create(username: 'george_weasley', password: '123456')
User.create(username: 'oliver_wood', password: '123456')

Channel.create(title: 'Dumbledore\'s Army')
Channel.create(title: 'Golden Trio 🦁')
Channel.create(title: 'Gryffindor Quidditch 🏆')
Channel.create(title: 'Hogwarts Residents')
Channel.create(title: 'S.P.E.W')
Channel.create(title: 'Weasley Family')

Message.create(body: 'Welcome back everyone, practice at 6am tomorrow!', author_id: 10, messageable_type: "Channel", messageable_id: 3)
Message.create(body: 'Seriously, Oliver?? 6am?!', author_id: 9, messageable_type: "Channel", messageable_id: 3)
Message.create(body: 'It\'s the first week of school!', author_id: 9, messageable_type: "Channel", messageable_id: 3)
