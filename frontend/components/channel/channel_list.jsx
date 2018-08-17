import React from 'react';
import { Link } from 'react-router-dom';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {

  visibleChannels() {
    //sort the channels alphabetically
    let orderedChannels = Object.values(this.props.channels);
    orderedChannels = orderedChannels.sort( (a, b) => a.title > b.title );

    const usersChannels = orderedChannels.map( (channel, idx) => {
      if( !channel.is_dm ) {
        return <ChannelListItem channel={channel} key={idx} />;
      }
    });

    return usersChannels;
  }

  render() {
    return (
      <div className="channel-sidebar">

        <div className="channels-header">
          <div className="channels-h2"><h2>Channels</h2></div>
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
