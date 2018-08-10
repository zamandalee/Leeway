import { merge } from 'lodash';
import {
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../../actions/message_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_CHANNEL:
      return merge({}, state, action.payload.messages);
    case RECEIVE_MESSAGE:
      return merge({}, state, {[action.message.id]: action.message});
    case REMOVE_MESSAGE:
      const newState = merge({}, state);
      delete newState[action.message.id];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
