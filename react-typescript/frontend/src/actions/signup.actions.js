import axios from "axios";
import { API_URL } from "../config/url.config";

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_ERROR_RESET } from "../types";

export const signup = (firstName, lastName, email) => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST });
  try {
    const response = await axios.post(API_URL + "auth/signup", { firstName, lastName, email });
    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, payload: error.response.data });
  }
};

export const errorreset = () => (dispatch) => {
  dispatch({ type: SIGN_UP_ERROR_RESET, payload: null });
};
