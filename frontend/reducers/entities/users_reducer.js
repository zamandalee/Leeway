import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CHANNEL:
      return merge({}, state, action.payload.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
