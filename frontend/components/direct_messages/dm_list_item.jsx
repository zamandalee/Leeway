import React from 'react';

class DMListItem extends React.Component {
  constructor(props) {
    super(props);

    this.overflowTitle = this.overflowTitle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectChannel(this.props.dm.id);
  }

  overflowTitle() {
    if( this.props.dm.title.length > 25 ) {
      return <div className="chat-title">{this.props.dm.title.slice(0, 22).concat("...")}</div>;
    } else {
      return <div className="chat-title">{this.props.dm.title}</div>;
    }
  }

//REFACTOR CLASSNAMES TO BE "CHAT" EVERYTHING LATER
  render() {
    const { dm, selectedChannelId } = this.props;
    const selected = (dm.id === selectedChannelId ? "selected-channel" : "");

    return (
      <div className="channel-li" id={selected} onClick={this.handleClick}>
        <li>
          <button>
            <div className="dm-user-num-square" id={`${selected}-dm-symbol`}>
              {dm.user_ids.length - 1}
            </div>

            {this.overflowTitle()}
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
