import { merge } from 'lodash';
import { RECEIVE_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from '../../actions/messageable_actions';

const directMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.payload;
    case RECEIVE_DIRECT_MESSAGE:
      return merge( {}, state, {[action.payload.direct_message.id]: action.payload} );
    default:
      return state;
  }
};

export default directMessagesReducer;
