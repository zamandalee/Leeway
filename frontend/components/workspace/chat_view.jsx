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

  chatTitle() {
    const { channels, selectedChannelId } = this.props;

    if(channels[selectedChannelId].is_dm) {
      return <div className="workspace-title">
               <h1>{`${channels[selectedChannelId].title}`}</h1>
             </div>;
    } else {
      return <div className="workspace-title">
               <h1>{`#${channels[selectedChannelId].title}`}</h1>
             </div>;
    }
  }

  render() {
    const { channels, selectedChannelId } = this.props;
    return (
      <div className="chat-col">
        {this.chatTitle()}
        <div className="messaging">
          {this.renderMessageFeed()}
          <MessageInputContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: {channels}, session : {selectedChannelId} }) => ({
  //Object.values(channels) will be an array that starts at 0, messing up selectedChannelId keying in
  channels: channels,
  selectedChannelId
});

export default connect(mapStateToProps)(ChatView);
