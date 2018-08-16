import React from 'react';
import { Link } from 'react-router-dom';
import DMListItem from './dm_list_item';

class DMList extends React.Component {

  visibleDMs() {
    const usersDMs = this.props.directMessages.map( (dm, idx) => {
      return <DMListItem dm={dm} key={idx} />;
    });

    return usersDMs;
  }

  render() {
    return (
      <div className="dm-sidebar">
        <div className="dms-header">
          <h2>Direct Messages</h2>
          <Link className="create-dm-button" to="/directmessages/new">&oplus;</Link>
        </div>
        <div className="dm-ul">
          <ul>
            {this.visibleDMs()}
          </ul>
        </div>
      </div>
    );
  }
}

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  directMessages: Object.values(state.entities.directMessages)
});

export default connect(mapStateToProps)(DMList);
