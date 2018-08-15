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
    const { channels, selectedChannelId } = this.props;
    return (
      <div className="chat-col">
        <div className="workspace-title"><h1>{`#${channels[selectedChannelId - 1].title}`}</h1></div>
        <div className="messaging">
          {this.renderMessageFeed()}
          <MessageInputContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: {channels}, session : {selectedChannelId} }) => ({
  channels: Object.values(channels),
  selectedChannelId
});

export default connect(mapStateToProps)(ChatView);
