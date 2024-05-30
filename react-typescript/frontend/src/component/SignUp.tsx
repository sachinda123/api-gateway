import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup, errorreset } from "../actions/signup.actions";
import { RootState } from "../types/index";

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.signup);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const register = () => {
    dispatch(signup(firstName, lastName, email));
  };
  const errorReset = () => {
    if (error) {
      dispatch(errorreset());
    }
  };

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="First Name"
                      onChange={(e) => {
                        errorReset();
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Last Name"
                      onChange={(e) => {
                        errorReset();
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    placeholder="Email Address"
                    onChange={(e) => {
                      errorReset();
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <button className="btn btn-primary btn-user btn-block" onClick={register} disabled={loading}>
                  {loading ? (
                    <div className="spinner-border " role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Register Account"
                  )}
                </button>

                <div className="form-group">
                  <span className={error && error.message ? " badge badge-danger" : "badge bg-warning"}>{error && error.message ? error.message : "  Registed email recive tempory password"}</span>
                </div>
                <hr />
                <button className="btn btn-google btn-user btn-block">
                  <i className="fab fa-google fa-fw"></i> Register with Google
                </button>
                <button className="btn btn-facebook btn-user btn-block">
                  <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </button>
                <hr />
                <div className="text-center">
                  <a className="small" href="/forgotpassword">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="small" href="/login">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
