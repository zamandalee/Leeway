<% allChats = Channel.all.concat(DirectMessage.all) %>

<% allChats.each do |chat| %>
    App[`chat-${<%=chat.id%>}:messages`] = App.cable.subscriptions.create(
      {channel: "MessagesChannel", messageable_id: <%=chat.id%>}, {
        received: (data) => data
      }
    );
<% end %>
