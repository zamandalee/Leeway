import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then( users => {
      return dispatch(receiveUsers(users));
    });
  };
};

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});
