import * as WorkspaceApiUtil from '../util/workspace_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const RECEIVE_MESSAGE = 'CREATE_MESSAGE';

export const fetchChannel = (id) => {
  return dispatch => {
    return WorkspaceApiUtil.fetchChannel(id).then( channel => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const fetchDirectMessage = (id) => {
  return dispatch => {
    return WorkspaceApiUtil.fetchDirectMessage(id).then( direct => {
      return dispatch(receiveDirectMessage(direct));
    });
  };
};

export const createMessage = (message) => {
  return dispatch => {
    return WorkspaceApiUtil.createMessage(message).then( newMessage => {
      return dispatch(receiveMessage(newMessage));
    });
  };
};

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
});

const receiveDirectMessage = (payload) => ({
  type: RECEIVE_DIRECT_MESSAGE,
  payload
});
