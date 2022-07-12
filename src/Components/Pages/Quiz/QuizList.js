import React from "react";
import { Footer, Header } from "../../admin";
import SideBar from "../../admin/sidebar";


export const QuizList = () => {
 return (
    <div id="app">
      <Header />
      <SideBar />
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div className="section-header col-12">
            <h1 >Quiz List</h1>
              </div>

              <div className="card card-primary">


                <div className="card-body">
                  <form
                  >

                    <div className="row">
                      <div className="form-group col-6">

                        <input
                          id="user-list"
                          type="text"
                          className="form-control"
                          name="user-list"
                          placeholder="Search..."
                          autoFocus

                        />
                      </div>
                      <div >
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block form-control"
                        >
                          Search
                        </button>
                      </div>

                    </div>


                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12" >
            <table className="userlist-table col-10  offset-sm-1 offset-md-2  offset-lg-2  offset-xl-2">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Quiz Name</th>
                  <th scope="col">No. of Questions</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td> 1 </td>
                  <td> 123@gmial.com </td>
                  <td>suresh</td>
                  <td><a>Active</a></td>
                 

                </tr>
                <tr>
                  <td> 1 </td>
                  <td> 123@gmial.com </td>
                  <td>suresh</td>
                  <td><a>Active</a></td>
                 

                </tr>
                <tr>
                  <td> 1 </td>
                  <td> 123@gmial.com </td>
                  <td>suresh</td>
                  <td><a>Active</a></td>
                 

                </tr>

              </tbody>


            </table>
            <div className="pagination-button" style={{display:"flex"}}>
           
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block col-1 offset-md-2 mt-2"
              >
                Back
              </button>
            
              
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block col-1 offset-md-2 mt-2"
              >
                Next
              </button>
              
             
            </div>
            
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}


