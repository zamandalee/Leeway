import React from 'react';
import Cable from 'actioncable';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveMessage } from '../../actions/message_actions';


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
      chatId: this.props.currentChatId
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => {
        data.chatId = this.props.currentChatId;
        this.props.receiveMessage(data);
      }
    });
  }

  render() {
    return (
      <ul class="message-feed">
        {
          Object.values(this.props.messages).map( (message) => (
            <li className="message" key={message.id}>
              {message.body}
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ entities }) => ({
  currentChat: entities.channels[1],
  messages: entities.messages
  //need messages, bc upon change in messages, will rerender -> live
});

const mapDispatchToProps = dispatch => ({
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(mapStateToProps)(MessageFeed);
