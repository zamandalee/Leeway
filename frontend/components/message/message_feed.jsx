import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul class="message-feed">
        {
          this.props.currentChat.messages.map( (message) => (
            <li className="message" key={message.id}>
              {message.body}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default MessageFeed;
