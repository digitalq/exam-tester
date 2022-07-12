import React from "react";
import { Footer, Header } from "../../admin";
import SideBar from "../../admin/sidebar";
export  const AddNewQuestion = () => {
return (
    <div id="app">
       <Header/>
       <SideBar/>
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div  className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div className="section-header">
            <h1 >Add New Question</h1>              </div>
             

              <div className="card card-primary">
                {/* <div className="card-header">
                  <h4>Register</h4>
                </div> */}

                <div className="card-body">
                  <form 
              >
                   <div className="form-divider"></div>
                      <div className="row">
                        <div className="form-group col-6">
                          <label>Select Question Type</label>
                          <select className="form-control selectric"  autoFocus>
                            <option>Multiple Choice Single Answer</option>
                            <option>Multiple Choice Multiple Answer</option>
                            <option>Match the Column</option>
                            <option>Long Answer</option>
                            <option>Short Answer</option>
                           
                           
                          </select>
                        </div>
                        </div>

                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="number-of-options">Number of Options</label>
                        <input
                          id="number-of-options"
                          type="text"
                          className="form-control"
                          name="number-of-options"
                         

                        />
                      </div>
           
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          name="agree"
                          className="custom-control-input"
                          id="agree"
                        />
                        <label className="custom-control-label" htmlFor="agree">
                        With Paragraph
                        </label>
                      </div>
                    </div>

                  

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block form-control"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>

              </div>
           
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
}




