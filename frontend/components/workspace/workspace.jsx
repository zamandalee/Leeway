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
          <button className="index-logout-button" onClick={this.props.logout}>Logout</button>
        </div>
        <MessageFeed />
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
