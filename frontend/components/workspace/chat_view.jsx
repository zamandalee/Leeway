import React from 'react';
import { connect } from 'react-redux';
import MessageFeed from '../message/message_feed';
import MessageInputContainer from '../message/message_input_container';

class ChatView extends React.Component {
  renderMessageFeed() {
    if(this.props.channels.length === 0) {
      return <div></div>;
    } else {
      return <MessageFeed />;
    }
  }

  render() {
    return (
      <div className="chat-col">
        <div className="title"><h1>Channel Title</h1></div>
        <div className="messaging">
          {this.renderMessageFeed()}
          <MessageInputContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities, entities: {channels} }) => ({
  channels: Object.values(channels),
  currentChat: entities.channels.first
});

export default connect(mapStateToProps)(ChatView);
