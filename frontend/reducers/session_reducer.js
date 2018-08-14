import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { SELECT_CHANNEL } from '../actions/session_actions';

//selectedChannelId defaults to the #general channel's id
//selectedChannelId refactor later
const sessionReducer = (state = {id: null, selectedChannelId: 3}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch( action.type ) {
    case RECEIVE_CURRENT_USER:
      newState.id = action.currentUser.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      newState.id = null;
      return newState;
    case SELECT_CHANNEL:
      return merge( {}, state, {selectedChannelId: action.id});
    default:
      return state;
  }
};

export default sessionReducer;
