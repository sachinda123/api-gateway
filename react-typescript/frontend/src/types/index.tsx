export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const SIGN_UP_ERROR_RESET = "SIGN_UP_ERROR_RESET";

export interface AuthState {
  // Define properties for auth slice of state
}

export interface SignupState {
  loading: boolean;
  error: {
    message: string;
  };
  data: object;
  // Define properties for signup slice of state
}

export interface RootState {
  auth: AuthState;
  signup: SignupState;
}
