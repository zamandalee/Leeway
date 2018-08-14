import React from 'react';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectChannel(this.props.channel.id);
  }

  selected() {
    const { channel, selectedChannelId } = this.props;
    return channel.id === selectedChannelId ? "selected-channel" : "";
  }

  render() {
    return (
      <div className="channel-li" id={this.selected()}>
        <li onClick={this.handleClick}>
          <button>{this.props.channel.title}</button>
        </li>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { selectChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: state.entities.channels,
  selectedChannelId: state.entities.channels.selectedChannelId
});

const mapDispatchToProps = dispatch => ({
  selectChannel: id => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
