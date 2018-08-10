import { combineReducers } from 'redux';
import users from './entities/users_reducer';
import channels from './entities/channels_reducer';
import directMessages from './entities/direct_messages_reducer';
import messages from './entities/messages_reducer';

export default combineReducers({
  users,
  channels,
  directMessages,
  messages
});
