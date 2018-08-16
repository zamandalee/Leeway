import React from 'react';

class DMListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectChannel(this.props.dm.id);
  }

//REFACTOR CLASSNAMES TO BE "CHAT" EVERYTHING LATER
  render() {
    const { dm, selectedChannelId } = this.props;
    const selected = (dm.id === selectedChannelId ? "selected-channel" : "");
    console.log(dm.user_ids.length);

    return (
      <div className="channel-li" id={selected} onClick={this.handleClick}>
        <li>
          <button>
            <div className="dm-user-num-square" id={`${selected}-dm-symbol`}>
              {dm.user_ids.length}
            </div>

            <div className="chat-title">{dm.title}</div>
          </button>
        </li>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { selectChannel } from '../../actions/session_actions';

const mapStateToProps = ({ entities: {channels}, session }, ownProps) => ({
  dm: ownProps.dm,
  channels: channels,
  selectedChannelId: session.selectedChannelId
});

const mapDispatchToProps = dispatch => ({
  selectChannel: id => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DMListItem);
