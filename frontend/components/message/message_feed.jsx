import React from 'react';
import Cable from 'actioncable';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import MessageInputContainer from '../message/message_input_container';

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  createSocket() {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = Cable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = Cable.createConsumer('wss://leewayapp.herokuapp.com/cable');
    }
    this.chats = cable.subscriptions.create({
      channel: "MessagesChannel",
      messageable_id: 1
      // messageable_id: this.props.currentChat.id //this will be sent to messages_channel's params
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => { //data passed from js/channels/messages.js.erb
        data.chatId = this.props.currentChatId;
        console.log(data);
        this.props.receiveMessage(data);
      }
    });
  }

  componentDidMount() {
    this.props.fetchChannel(1);
    // this.props.fetchChannel(this.props.currentChat.id);
    this.createSocket();
  }

  render() {
    return (
      <div className="message-feed-div">
        <ul className="message-feed-ul">
          {
            Object.values(this.props.messages).map( (message, idx) => {
              return (
                <li className="message" key={idx}>
                  <div className="prof-pic"><img src={message.photoUrl} /></div>
                  <div className="message-author">{message.author}</div>
                  <div className="message-timestamp">{message.timestamp}</div>
                  <br></br>
                  <div className="message-body">{message.body}</div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }) => ({
  currentChat: entities.channels.first,
  messages: entities.messages
  //need messages, bc upon change in messages, will rerender -> live
});

const mapDispatchToProps = dispatch => ({
  receiveMessage: message => dispatch(receiveMessage(message)),
  fetchChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
