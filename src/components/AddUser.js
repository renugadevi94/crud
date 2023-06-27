import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddUser({UpdateUser,currentUser,index,Adduser}) {
  
  
  const [user,setUser]=useState(currentUser?currentUser:{ ID:'',
  USERNAME:'',
  PROFILE:''})
  

const handlechange = (e)=>{
  setUser ({...user,[e.target.name]:e.target.value});
}

 


  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home" className="btn btn-success">
              Home
            </Link>
            <Link to="/userlist" className="btn btn-success">
              UserList
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <form className="row g-3"  >
              <div className="col-md-6 d-flex gap-2 align-items-center">
                <label htmlFor="inputId" className="form-label badge bg-secondary py-2 ">
                  Id
                </label>
                <input type="text" className="form-control" id="inputId"
                name="id" value={user.id} onChange={handlechange} required />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputName" className="form-label badge bg-secondary py-2">
                  UserName
                </label>
                <input type="text" className="form-control" id="inputName" 
                  name="username" value={user.username} onChange={handlechange} required />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputProfile" className="form-label badge bg-secondary py-2">
                  Profile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputProfile"
                  name="profile"
                  value={user.profile}
                  onChange={handlechange}
                  required
                />
              </div>
              

              <div className="col-3 mx-auto btn-group">
                <button onClick={(e)=>{ e.preventDefault();Adduser(user);}} className="btn btn-primary">
                  ADD
                </button>
               { currentUser?
                <button className="btn btn-warning" onClick={(e)=>{e.preventDefault();UpdateUser(user,index);}}>
                  Update
                </button>:<></>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
