import React from 'react';
import { Link } from 'react-router-dom';
// import WorkspaceContainer from '../splash/workspace_container';
import MessageFeed from '../message/message_feed';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="workspace">
        <div className="index-col">
          <h1>Hogwarts</h1>
        </div>
        <MessageFeed />
      </div>
    );
  }
}

export default Workspace;
