import React from 'react';

const DeleteMessageButton = props => {
  const { visible, message } = props;
  const visibility = visible ? 'visible' : '';

  return (
    <button
      className={ `delete-message-button-${visibility}` }
      onClick={ props.deleteMessage(message) }>
      &times;
    </button>
  );
};

import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => ({
  deleteMessage: (message) => () => dispatch(deleteMessage(message))
});

export default connect(null, mapDispatchToProps)(DeleteMessageButton);
