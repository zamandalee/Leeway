import React from 'react';
import { Link } from 'react-router-dom';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {

  visibleChannels() {
    const orderedChannels = {};
    this.props.channels.map( (channel) => {
      orderedChannels.push()
    });

    const usersChannels = this.props.channels.map( (channel, idx) => {
      return <ChannelListItem channel={channel} key={idx} />;
    });

    return usersChannels;
  }

  render() {
    return (
      <div className="channel-sidebar">

        <div className="channels-header">
          <h2>Channels</h2>
          <Link className="create-channel-button" to="/channels/new">&oplus;</Link>
        </div>

        <div className="channel-ul">
          <ul>
            {this.visibleChannels()}
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

export default connect(mapStateToProps)(ChannelList);
