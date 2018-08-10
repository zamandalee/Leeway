import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'CREATE_MESSAGES';
export const RECEIVE_MESSAGE = 'CREATE_MESSAGE';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const createMessage = (message) => {
  return dispatch => {
    return MessageApiUtil.createMessage(message).then( newMessage => {
      return dispatch(receiveMessage(newMessage));
    });
  };
};

// export const deleteMessage = (id) => {
//   return dispatch => {
//     return MessageApiUtil.deleteMessage(id).then( message => {
//       return dispatch(removeMessage(message));
//     });
//   };
// };

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message
});
