import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_ERROR_RESET } from "../types";

const initialState = {
  loading: false,
  error: null,
  registed: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        registed: null,
        error: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        registed: true,
        loading: false,
        error: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        registed: false,
      };
    case SIGN_UP_ERROR_RESET:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default signUpReducer;
