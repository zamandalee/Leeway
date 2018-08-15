import React from 'react';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectChannel(this.props.channel.id);
  }

  titleSymbol() {
    return "#";
  }

  render() {
    const { channel, selectedChannelId } = this.props;
    const selected = (channel.id === selectedChannelId ? "selected-channel" : "");

    return (
      <div className="channel-li" id={selected}>
        <li key={this.props.key} onClick={this.handleClick}>
          <button>
            <div className="title-symbol">{this.titleSymbol()}</div>
            <div className="chat-title">{this.props.channel.title}</div>
          </button>
        </li>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { selectChannel } from '../../actions/session_actions';

const mapStateToProps = state => ({
  channels: state.entities.channels,
  selectedChannelId: state.entities.channels.selectedChannelId
});

const mapDispatchToProps = dispatch => ({
  selectChannel: id => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
