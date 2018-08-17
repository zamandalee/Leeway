import React from 'react';
import { Link } from 'react-router-dom';
import DMListItem from './dm_list_item';

class DMList extends React.Component {

  visibleDMs() {
    const usersDMs = this.props.channels.map( (channel, idx) => {
      if( channel.is_dm ) {
        return <DMListItem dm={channel} key={idx} />;
      }
    });

    return usersDMs;
  }

  render() {
    return (
      <div className="channel-sidebar">
        <div className="channels-header">
          <div className="dms-h2"><h2>Direct Messages</h2></div>

          <div>
            <Link className="create-dm-button"
                  to="/directmessages/new">&oplus;
            </Link>
          </div>
        </div>

        <div className="channel-ul">
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
  // currentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels)
});

export default connect(mapStateToProps)(DMList);
