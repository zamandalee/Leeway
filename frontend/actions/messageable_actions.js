import * as WorkspaceApiUtil from '../util/workspace_api_util';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const RECEIVE_MESSAGE = 'CREATE_MESSAGE';

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
