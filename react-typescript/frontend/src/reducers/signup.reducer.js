import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_ERROR_RESET } from "../types";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
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
