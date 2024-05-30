import axios from "axios";
import { API_URL } from "../config/url.config";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_ERROR_RESET } from "../types/index";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const response = await axios.post(API_URL + "auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      let errormsg = "some error happen";
      if (error && error.message) {
        errormsg = error.message;
      }
      console.log("errormsg", errormsg);
      dispatch({ type: LOGIN_FAILURE, payload: { message: errormsg } });
    }
  };
};

export const errorreset = () => (dispatch) => {
  dispatch({ type: LOGIN_ERROR_RESET, payload: null });
};
