import React from 'react';
import { connect } from 'react-redux';
import MessageFeed from '../message/message_feed';
import MessageInputContainer from '../message/message_input_container';

class ChatView extends React.Component {
  render() {
    return (
      <div className="chat-col">
        <div className="title"><h1>Channel Title</h1></div>
        <div className="messaging">
          <MessageFeed />
          <MessageInputContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }) => ({
  currentChat: entities.channels.first
});

export default connect(mapStateToProps)(ChatView);
