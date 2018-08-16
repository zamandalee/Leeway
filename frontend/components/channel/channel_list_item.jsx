import React from 'react';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lockicon: ""};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectChannel(this.props.channel.id);
  }

  titleSymbol() {
    if( this.props.channel.private ) {
      return <img src={window.images.lockicon} />;
    } else {
      return "#";
    }
  }

  render() {
    const { channel, selectedChannelId } = this.props;
    const selected = (channel.id === selectedChannelId ? "selected-channel" : "");
    return (
      <div className="channel-li" id={selected} onClick={this.handleClick}>
        <li>
          <button>
            <div className="title-symbol" id={`${selected}-symbol`}>{this.titleSymbol()}</div>
            <div className="chat-title">{this.props.channel.title}</div>
          </button>
        </li>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { selectChannel } from '../../actions/session_actions';

const mapStateToProps = ({ entities: {channels}, session }, ownProps) => ({
  channel: ownProps.channel,
  channels: channels,
  selectedChannelId: session.selectedChannelId
});

const mapDispatchToProps = dispatch => ({
  selectChannel: id => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
