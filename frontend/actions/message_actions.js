import * as MessageApiUtil from '../util/message_api_util';

// export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const createMessage = (message) => {
  return dispatch => {
    MessageApiUtil.createMessage(message);
  };
};

export const deleteMessage = (message) => {
  return dispatch => {
    return MessageApiUtil.deleteMessage(message).then( messageResponse => {
      return dispatch(removeMessage(messageResponse));
    });
  };
};

// export const receiveMessages = (messages) => ({
//   type: RECEIVE_MESSAGES,
//   messages
// });

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message
});
