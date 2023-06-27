import React from "react";
import { Link } from "react-router-dom";

function UserList({userList,DeleteUser,EditUser}) {
  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home" className="btn btn-success">
              Home
            </Link>
            <Link to="/adduser" className="btn btn-success">
              AddUser
            </Link>
             
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
            <div className="col">
{userList.map((user,index)=><div key={index} className="row">
<div className="col text-start">
<h3>ID:{user.id}</h3>
<h4>USERNAME:{user.username}</h4>
<h4>PROFILE:{user.profile}</h4>
</div>
<div className="col my-auto">
    <div className=" btn-group ">
    <button className="btn btn-warning" onClick={()=>EditUser(user,index)}>Edit</button>
<button className="btn btn-danger" onClick={()=>DeleteUser(index)}>delete</button>
    </div>

</div>



</div>)}
            </div>
        </div>

      </div>
    </>)
}
export default UserList;




 