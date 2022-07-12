import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validEmail } from "./utils/Regex";
import logo from '../../assets/images/company-logo.svg'



export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);


  const userForgotPassword = (e) => {
    e.preventDefault();
  }

  const emailValidate = (e) => {
    setEmail(e.target.value)
    validEmail.test(email) ? setEmailErr(true) : setEmailErr(false)
  }


  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div className="login-brand">
                <img
                  src={logo}
                  alt="logo"
                  width="120"
                  className="shadow-light rounded-circle"
                />
              </div>

              <div className="card card-primary">
                <div className="card-header">
                  <h4>Forgot Password</h4>
                </div>

                <div className="card-body">
                  <p className="text-muted">
                    We will send a link to reset your password
                  </p>
                  <form method="POST"
                    onSubmit={userForgotPassword}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control mb-2"
                        name="email"
                        tabIndex="1"
                        required
                        autoFocus
                        onChange={emailValidate}


                      />
                      {emailErr && <p className="text-danger text-small">Your email is invalid</p>}
                      {
                        !emailErr && email.length < 1 && <p className="text-info">Enter Your email</p>
                      }

                    </div>

                    <div className="form-group">
                      <Link to="/reset-password"   ><button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block form-control"
                        tabIndex="4"
                      >
                        Forgot Password
                      </button></Link>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="simple-footer">Copyright &copy; Stisla 2018</div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


