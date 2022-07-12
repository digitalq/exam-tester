import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "./utils/Regex";
import logo from '../../assets/images/company-logo.svg'

// import $ from "jquery";
export const Login = ()=>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const userLogin = (e) => {
    e.preventDefault();
   }
   const emailValidate = (e)=>{
    setEmail(e.target.value)
    validEmail.test(email) ? setEmailErr(true) : setEmailErr(false)
    console.log(emailErr);
  }
  const passValidate = (e)=>{
    setPassword(e.target.value)
    validPassword.test(password) ? setPwdError(true) : setPwdError(false)
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
                    <h4>Login</h4>
                  </div>

                  <div className="card-body">
                    <form
                      //  method="POST"
                      //  action="#"
                      //  noValidate
                      onSubmit={userLogin}
                     
                      className="needs-validation"
                    >
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          tabIndex="1"
                          autoFocus
                          onChange={emailValidate}
                    
                        />
                        
                         {emailErr && <p className="text-danger text-small">Your email is invalid</p>}
                         {
!emailErr && email.length < 1 && <p className="text-info">Enter Your email</p>
                         }
                        <div className="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Password
                          </label>    

                     
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          tabIndex="2"
                          onChange={passValidate}
                        />
                                 {pwdError && <p className="text-danger text-small">Your password is invalid</p>}
                                {!pwdError && password.length < 1 && <p className="text-info ">Enter Password</p>}


                        <div className="invalid-feedback">
                          please fill in your password
                        </div>
                        <div className="float-right">
                            <Link to='/forgot-password'   className="text-small">Forgot Password?</Link>
                          </div>
                      </div>
                    
                      <div className="form-group">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            name="remember"
                            className="custom-control-input"
                            tabIndex="3"
                            id="remember-me"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="remember-me"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>

                      <div className="form-group">
                  <Link to="/dashboard"   > <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block form-control"
                          tabIndex="4"
                        >
                          Login
                        </button></Link>  
                      </div>
                    </form>
                    <div className="text-center mt-4 mb-3">
                      <div className="text-job text-muted">
                        Login With Social
                      </div>
                    </div>  
                    <div className="row sm-gutters">
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-facebook">
                          <span className="fab fa-facebook"></span> Facebook
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-twitter">
                          <span className="fab fa-twitter"></span> Twitter
                        </a>
                  
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="text-muted text-center mb-2">
                  Don't have an account?{" "}
                  {/* <a href="auth-register.html">Create One</a> */}
<Link to='/register' >Create One</Link>
                </div>
                {/* <div className="simple-footer">
                  Copyright &copy; Stisla 2018
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }






// import React from "react";
// import { Formik, Form } from "formik";
// import { Inputfield } from "./Inputfieldd";
// import * as Yup from 'yup';
// export const Login = () => {
//     const userLogin = Yup.object({
       
//         email: Yup.string()
//           .email('Email is invalid')
//           .required('Email is required'),
//         password: Yup.string()
//           .min(6,'Password must be at least 6 charaters')
//           .required('Password is required'),
//       })
//     return (
//         <div>
//             <Formik
//                 initialValues={{
//                     email: "",
//                     password: ""
//                 }}
//                 validationSchema={userLogin}
//                 onSubmit={values => {
//                   console.log(values)
//                 }} >
//                 {formik => (
//                     <div>
//                         <h1 className="my-4 font-weight-bold-display-4">Login</h1>
//                         <Form >
//                             <Inputfield label="Email" name="email" type="email" />
//                             <Inputfield label="Password" name="password" type="password" />
//                             <button className="btn btn-dark mt-3" type="submit">Login</button>&nbsp;
//                             <button className="btn btn-dark mt-3" type="reset">Reset</button>
//                         </Form>
//                     </div>
//                 )}
//             </Formik>
//         </div>
//     )
// }