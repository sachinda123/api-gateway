import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");

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
                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                  </div>
                  <button className="btn btn-primary btn-user btn-block">Register Account</button>

                  <div className="form-group">
                    <span className="badge bg-warning">Registed email recive tempory password</span>
                  </div>
                  <hr />
                  <button className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw"></i> Register with Google
                  </button>
                  <button className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                  </button>
                </form>
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
