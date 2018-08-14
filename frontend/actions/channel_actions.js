import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export const fetchChannels = () => {
  return dispatch => {
    return ChannelApiUtil.fetchChannels().then( channels => {
      return dispatch(receiveChannels(channels));
    });
  };
};

export const fetchChannel = (id) => {
  return dispatch => {
    return ChannelApiUtil.fetchChannel(id).then( channel => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const selectChannel = (id) => ({
  type: SELECT_CHANNEL,
  id
});

const receiveChannels = (payload) => ({
  type: RECEIVE_CHANNELS,
  payload
});

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
});
