import React from 'react';
import { Link } from 'react-router-dom';
// import WorkspaceContainer from '../splash/workspace_container';
import MessageFeed from '../message/message_feed';
import MessageInput from '../message/message_input';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="workspace">
        <h1>WORKSPACE</h1>
        <MessageFeed />
        <MessageInput />
      </div>
    );
  }
}

export default Workspace;
