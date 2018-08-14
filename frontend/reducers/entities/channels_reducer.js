import { merge } from 'lodash';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, SELECT_CHANNEL } from '../../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_CHANNELS:
      return action.payload;
    case RECEIVE_CHANNEL:
      return merge( {}, state,
        {[action.payload.channel.id]: action.payload.channel});
    default:
      return state;
  }
};

export default channelsReducer;
