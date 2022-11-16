import {
  RECEIVE_AUTHED_USER,
  SET_AUTHED_USER,
  UN_AUTH,
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action.id,
      };
    case RECEIVE_AUTHED_USER:
      return action.authedUser;
    case UN_AUTH:
      return null;
    default:
      return state;
  }
}
