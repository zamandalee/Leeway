import React from 'react';
import Cable from 'actioncable';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';


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
      messageable_id: this.props.messageableId
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => {
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
      <ul className="message-feed">
        {
          Object.values(this.props.messages).map( (message) => {
            return (
              <li className="message" key={message.id}>
                <p>{message.author}</p>
                <p>{message.body}</p>
              </li>
            );
        })
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
  receiveMessage: message => dispatch(receiveMessage(message)),
  fetchChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
