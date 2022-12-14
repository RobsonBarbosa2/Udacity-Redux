export const RECEIVE_AUTHED_USER = "RECEIVE_AUTHED_USER";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UN_AUTH = "UN_AUTH";

export function receiveAuthedUser(authedUser) {
  return {
    type: RECEIVE_AUTHED_USER,
    authedUser,
  };
}

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function logoutUser() {
  return {
    type: UN_AUTH,
  };
}
