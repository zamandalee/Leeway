import { CREATE_CHANNEL_MODAL,
         CLEAR_MODAL,
         EDIT_CHANNEL_MODAL } from '../../actions/modal_actions.js';

import { RECEIVE_CHANNEL } from '../../actions/channel_actions.js';

const ModalUIReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_CHANNEL_MODAL:
      return CREATE_CHANNEL_MODAL;
    case EDIT_CHANNEL_MODAL:
      return EDIT_CHANNEL_MODAL;
    case CLEAR_MODAL:
    case RECEIVE_CHANNEL:
      return null;
    default:
      return state;
  }
};

export default ModalUIReducer;
