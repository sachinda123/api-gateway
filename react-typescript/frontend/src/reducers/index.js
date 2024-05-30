import { createStore, combineReducers } from "redux";
import authReducer from "./auth.reducer";
import signUpReducer from "./signup.reducer";

export default combineReducers({
  auth: authReducer,
  signup: signUpReducer,
});
