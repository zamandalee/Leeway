import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const SELECT_DM = 'SELECT_DM';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => (
  dispatch => (
    SessionApiUtil.signup(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      ({responseJSON}) => dispatch(receiveErrors(responseJSON))
    )
  )
);

export const login = (user) => (
  dispatch => (
    SessionApiUtil.login(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      ({responseJSON}) => dispatch(receiveErrors(responseJSON))
    )
  )
);

export const logout = () => (
  dispatch => (
    SessionApiUtil.logout().then(
      () => dispatch(logoutCurrentUser()),
      ({responseJSON}) => dispatch(receiveErrors(responseJSON))
    )
  )
);


export const selectChannel = (id) => ({
  type: SELECT_CHANNEL,
  id
});

export const selectDM = (id) => ({
  type: SELECT_DM,
  id
});
