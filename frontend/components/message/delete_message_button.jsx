import React from 'react';

class DeleteMessageButton extends React.Component {

  render() {
    const visible = this.props.visible ? "" : "hidden";

    return (
      <button
        className={`delete-message-button ${visible}`}
        onClick={this.props.deleteMessage(this.props.message)}>
        &times;
      </button>
    );
  }

}

import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => ({
  deleteMessage: (message) => () => dispatch(deleteMessage(message))
});

export default connect(null, mapDispatchToProps)(DeleteMessageButton);
