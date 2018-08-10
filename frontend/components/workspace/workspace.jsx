import React from 'react';
import { Link } from 'react-router-dom';
// import WorkspaceContainer from '../splash/workspace_container';
import MessageFeed from '../message/message_feed';
import MessageInput from '../message/message_input';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  render() {
    return (
      <div className="workspace">
        <h1>Channel Name</h1>
        <MessageFeed />
        <MessageInput />
      </div>
    );
  }
}

export default Workspace;
