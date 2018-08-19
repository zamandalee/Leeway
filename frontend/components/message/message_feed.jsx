import React from 'react';
import Cable from 'actioncable';
import { selectChannelMessages } from '../../actions/selectors';
import MessageFeedItem from './message_feed_item';

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  createSocket(channelId) {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = Cable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = Cable.createConsumer('wss://leewayapp.herokuapp.com/cable');
    }
    this.chats = cable.subscriptions.create({
      channel: "MessagesChannel",
      messageable_id: channelId //this will be sent to messages_channel's params
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => { //data passed from js/channels/messages.js.erb
        data.messageable_id = channelId;
        this.props.receiveMessage(data);
      }
    });
  }

  componentDidMount() {
    this.props.channels.map( (channel) => {
      this.props.fetchChannel(channel.id);
      this.createSocket(channel.id);
    });
  }

  render() {
    const { currentUserId, currentChat, messages, users } = this.props;

    return (
      <div className="message-feed-div">
        <ul className="message-feed-ul">
          {
            selectChannelMessages(currentChat.id, messages).map( (message, idx) => {
              return (
                <MessageFeedItem
                  imgSrc={users[message.author_id].photoUrl}
                  currentUserId={currentUserId}
                  message={message}
                  key={idx}/>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { receiveMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import MessageInputContainer from '../message/message_input_container';


const mapStateToProps = ({ entities, entities: { channels }, session }) => ({
    currentUserId: session.id,
    currentChat: channels[session.selectedChannelId],
    channels: Object.values(channels),
    messages: entities.messages,
    users: entities.users
    //need messages, bc upon change in messages, will rerender -> live;
});

const mapDispatchToProps = dispatch => ({
  receiveMessage: message => dispatch(receiveMessage(message)),
  fetchChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
