import * as DirectMessageApiUtil from '../util/direct_message_api_util';

export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';

export const fetchDirectMessages = () => {
  return dispatch => {
    return DirectMessageApiUtil.fetchDirectMessages().then( directs => {
      return dispatch(receiveDirectMessages(directs));
    });
  };
};

export const fetchDirectMessage = (id) => {
  return dispatch => {
    return DirectMessageApiUtil.fetchDirectMessage(id).then( direct => {
      return dispatch(receiveDirectMessage(direct));
    });
  };
};

const receiveDirectMessages = (payload) => ({
  type: RECEIVE_DIRECT_MESSAGES,
  payload
});

const receiveDirectMessage = (payload) => ({
  type: RECEIVE_DIRECT_MESSAGE,
  payload
});
