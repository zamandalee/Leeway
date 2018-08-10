import { merge } from 'lodash';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../../actions/messageable_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_CHANNELS:
      return action.payload;
    case RECEIVE_CHANNEL:
      return merge( {}, state, {[action.payload.channel.id]: action.payload} );
    default:
      return state;
  }
};

export default channelsReducer;
