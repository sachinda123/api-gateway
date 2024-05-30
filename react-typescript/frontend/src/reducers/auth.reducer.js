import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_ERROR_RESET } from "../types";

const initialState = {
  loggedIn: false,
  loading: false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        error: action.payload,
        user: null,
      };
    case LOGIN_ERROR_RESET:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
