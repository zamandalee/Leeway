import React from 'react';
import { Link } from 'react-router-dom';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {

  visibleChannels() {
    const usersChannels = this.props.channels.map( (channel, idx) => {
      return <ChannelListItem channel={channel} key={idx} />;
    });

    return usersChannels;
  }

  render() {
    return (
      <div className="channel-sidebar">
        <div className="channels-header">
          <h2>
            Channels
            <Link className="create-channel-button" to="/channels/new">&oplus;</Link>
          </h2>
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
import { createChannelModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  createChannelModal: () => dispatch(createChannelModal()),
});

export default connect(mapStateToProps)(ChannelList);
