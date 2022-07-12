import React, { useState } from "react";
import { Footer, Header } from "../../admin";
import SideBar from "../../admin/sidebar";

export const UsersList = () => {
  // const[userSearch,setUserSearch]=useState("")
  //   const[userlist]=useState[{
  //     id:1,
  //     email:"roy@gmail.com",
  //     name:"Roy",
  //     status:"Active",
  // notification:"send new notification",
  // action:""

  //   },
  //   {
  //     id:2,
  //     email:"suresh@gmail.com",
  //     name:"Suresh",
  //     status:"Active",
  // notification:"send new notification",
  // action:""

  //   },
  //   {
  //     id:3,
  //     email:"sureshroy@gmail.com",
  //     name:"Suresh Roy",
  //     status:"Active",
  // notification:"send new notification",
  // action:""

  //   }
  // ];


  // const filterUser = (e) => {
  //   e.preventDefault();

  //   setUserSearch(e.target.value);
  //     if (e.target.value) {
  //       let filteredArr = userlist.filter(
  //         (user1) =>
  //         user1.id.toString().includes(e.target.value) ||
  //         user1.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //         user1.email.toLowerCase().includes(e.target.value.toLowerCase())
  //       );
  //       // console.log('filterArr', filteredArr);

  //       setUserList(filteredArr);
  //     } 
  //   };




  return (
    <div id="app">
      <Header />
      <SideBar />
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div className="section-header col-12">
            <h1 >User List</h1>
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
                  <th scope="col">Email</th>
                  <th scope="col">First Name Last Name</th>
                  <th scope="col">Account Status</th>
                  <th scope="col">Send New Notification</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td> 1 </td>
                  <td> 123@gmial.com </td>
                  <td>suresh</td>
                  <td><a>Active</a></td>
                  <td>Send New Notification</td>
                  <td>Edit</td>

                </tr>
                <tr>
                  <td> 1 </td>
                  <td> 123@gmial.com </td>
                  <td>suresh</td>
                  <td><a>Active</a></td>
                  <td>Send New Notification</td>
                  <td>Edit</td>

                </tr>
                <tr>
                  <td> 1 </td>
                  <td> 123@gmial.com </td>
                  <td>suresh</td>
                  <td><a>Active</a></td>
                  <td>Send New Notification</td>
                  <td>Edit</td>

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
         
           
           <button style={{marginleftt:"100px"}}
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


