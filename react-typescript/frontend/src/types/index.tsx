export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_ERROR_RESET = "LOGIN_ERROR_RESET";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const SIGN_UP_ERROR_RESET = "SIGN_UP_ERROR_RESET";

export interface AuthState {
  loggedIn: boolean;
  loading: boolean;
  error: {
    message: string;
  };
  user: object;
}

export interface SignupState {
  loading: boolean;
  error: {
    message: string;
  };
  registed: boolean;
}

export interface RootState {
  auth: AuthState;
  signup: SignupState;
}
