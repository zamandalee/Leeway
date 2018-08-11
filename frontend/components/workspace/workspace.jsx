import React from 'react';
import { Link } from 'react-router-dom';
// import WorkspaceContainer from '../splash/workspace_container';
import MessageFeed from '../message/message_feed';
import MessageInputContainer from '../message/message_input_container';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="workspace">
        <div className="index-sidebar"></div>
        <h1>Hogwarts</h1>
        <MessageFeed />
        <MessageInputContainer />
      </div>
    );
  }
}

export default Workspace;
