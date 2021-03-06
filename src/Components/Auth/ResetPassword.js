import React,{useState} from "react";
import { Link } from "react-router-dom";
import { validEmail} from "./utils/Regex";
import logo from '../../assets/images/company-logo.svg'
export const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  const userResetPass = (e) => {
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
                  <h4>Reset Password</h4>
                </div>

                <div className="card-body">
                  <p className="text-muted">
                    We will send a link to reset your password
                  </p>
                  <form method="POST"
                    onSubmit={userResetPass}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
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
                      <label htmlFor="password">New Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="password"
                        tabIndex="2"
                        required
                      />
                      <div id="pwindicator" className="pwindicator">
                        <div className="bar"></div>
                        <div className="label"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password-confirm">Confirm Password</label>
                      <input
                        id="password-confirm"
                        type="password"
                        className="form-control mb-2"
                        name="confirm-password"
                        tabIndex="2"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <Link to="/" > <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block form-control"
                        tabIndex="4"
                      >
                        Reset Password
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


