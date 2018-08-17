<p align="center"><img src="./app/assets/images/leewaylogo2.png" /></p>

<h1 align="center">Leeway</h1>
<p align="center"><a href="https://leewayapp.herokuapp.com/">Live Demo!</a></p>

<!--  "actioncable": "^5.2.1", "react": "^16.4.2", "redux": "^4.0.0" "npm": "6.3.0"-->

<p align="center">
  <a href="#technologies">Technologies</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#pending-features">Pending Features</a>
</p>

<p align="center">A Slack clone implemented using a Rails backend and React/Redux frontend framework. Users can create channels or direct messages to converse with a single person or multiple people.</p>

<p align="center"><img src="./app/assets/images/leewayfeatures.png" /></p>

## Technologies
- ActionCable
- React 16.4.2
- Redux
- npm
- Postgresql Database

## Key Features
#### Live Chat
Leeway utilizes ActionCable, a WebSocket framework for Rails, allowing open connections for real-time server communication.

On the backend, messages are broadcasted to all users who are subscribed to the specified channel:
```
#app/models/message.rb
after_create_commit do
  ActionCable.server.broadcast "chat-#{messageable_id}:messages",
    id: id,
    body: body,
    author_id: author_id,
    author: author.format_username,
    messageable_type: messageable_type,
    timestamp: created_at.strftime("%-I:%M %p")
end
```

```
#app/assets/javascripts/channels/messages.js.erb
<% Channel.all.each do |channel| %>
    App[`chat-${<%=channel.id%>}:messages`] = App.cable.subscriptions.create(
      {channel: "MessagesChannel", messageable_id: <%=channel.id%>}, {
        received: (data) => data
      }
    );
<% end %>
```

```app/channels/messages_channel.rb
#
def subscribed
  stream_from "chat-#{params['messageable_id']}:messages"
end
```

#### Channel and Direct Message Creation

#### Message Editing and Deletion

## Pending Features

## Pending Features
- Channel/direct message editing and deletion
- Search for a channel or direct message chat
- Message search
