import React from 'react';
import { connect } from 'react-redux';
import MessageFeed from '../message/message_feed';
import IndexSidebar from './index_sidebar';
import ChatView from './chat_view';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderChatView() {
    if(this.props.channels.length === 0) {
      return <div></div>;
    } else {
      return <ChatView />;
    }
  }

  render() {
    return (
      <div className="workspace">
        <IndexSidebar />
        {this.renderChatView()}
      </div>
    );
  }
}

const mapStateToProps = ({ entities: {channels} }) => ({
  channels: Object.values(channels)
});

export default connect(mapStateToProps)(Workspace);
