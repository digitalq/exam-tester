import React, { useState } from "react";
import { Footer, Header } from "../../admin";
import SideBar from "../../admin/sidebar";
import { validEmail } from "../../Auth/utils/Regex";
export const AddNewUser = () => {


  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);


  const userRegister = (e) => {
    e.preventDefault();
  }

  const emailValidate = (e) => {
    setEmail(e.target.value)
    validEmail.test(email) ? setEmailErr(true) : setEmailErr(false)
  }

  return (
    <div id="app">
      <Header />
      <SideBar />
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <div className="section-header col-12">
                <h1 >Add New User</h1>
              </div>


              <div className="card card-primary">
                {/* <div className="card-header">
                  <h4>Register</h4>
                </div> */}

                <div className="card-body">
                  <form method="POST"
                    onSubmit={userRegister}>

                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="first_name">First Name</label>
                        <input
                          id="first_name"
                          type="text"
                          className="form-control"
                          name="first_name"
                          autoFocus

                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          id="last_name"
                          type="text"
                          className="form-control"
                          name="last_name"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={emailValidate}
                      />
                      {emailErr && <p className="text-danger text-small">Your email is invalid</p>}
                      {
                        !emailErr && email.length < 1 && <p className="text-info">Enter Your email</p>
                      }


                      <div className="invalid-feedback"></div>
                    </div>

                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="password" className="d-block">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control pwstrength"
                          data-indicator="pwindicator"
                          name="password"
                        />
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="password2" className="d-block">
                          Password Confirmation
                        </label>
                        <input
                          id="password2"
                          type="password"
                          className="form-control"
                          name="password-confirm"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactnumber">Contact Number</label>
                      <input
                        id="number"
                        type="tel"
                        className="form-control"
                        name="contactnumber"
                      />
                      <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-divider"></div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label>Select Group</label>
                        <select className="form-control selectric">
                          <option>Free(Price: 0)</option>
                          <option>Premium(Price:100)</option>
                          <option>Group-3(Price: 2500)</option>

                        </select>
                      </div>
                      <div className="form-group col-6">
                        <label>Account Type</label>
                        <select className="form-control selectric">
                          <option>Administrator</option>
                          <option>User</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="subscription" className="d-block">
                        Subscription Expired
                      </label>
                      <input
                        id="subscription"
                        type="text"
                        className="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="subscription"
                      />
                      <div id="pwindicator" className="pwindicator">
                        <div className="bar"></div>
                        <div className="label"></div>
                      </div>
                      {/* <div className="form-group col-6">
                          <label>Subscription Expired</label>
                          <select className="form-control selectric">
                            <option>West Java</option>
                            <option>East Java</option>
                          </select>
                        </div> */}
                    </div>
                    {/* <div className="row">
                        <div className="form-group col-6">
                          <label>City</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-6">
                          <label>Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div> */}

                    <div className="form-group">
                      {/* <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          name="agree"
                          className="custom-control-input"
                          id="agree"
                        />
                        <label className="custom-control-label" htmlFor="agree">
                          I agree with the terms and conditions
                        </label>
                      </div> */}
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block form-control"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

              </div>
              {/* <div className="text-muted text-center mb-2">
                Already have an account?{" "}
                <Link to='/' >Login</Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}


