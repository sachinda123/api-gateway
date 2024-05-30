import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, errorreset } from "../actions/auth.actions";
import { RootState } from "../types/index";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, loggedIn, error } = useSelector((state: RootState) => state.auth);

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  const log = () => {
    dispatch(login(email, password));
  };
  const errorReset = () => {
    if (error) {
      dispatch(errorreset());
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        onChange={(e) => {
                          errorReset();
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                        onChange={(e) => {
                          errorReset();
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button className="btn btn-primary btn-user btn-block" onClick={log} disabled={loading}>
                      {loading ? (
                        <div className="spinner-border " role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Login"
                      )}
                    </button>

                    {error && error.message ? (
                      <div className="form-group">
                        <span className=" badge badge-danger">{error.message}</span>
                      </div>
                    ) : (
                      ""
                    )}
                    <hr />
                    <button className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </button>
                    <button className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </button>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="/forgotpassword">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/signup">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
