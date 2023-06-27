import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Homepage() {
    
    const [userList, setuserList] = useState([])
  
  return (
    <div> 
        
        <div className="container-fluid p-3 bg-dark text-white" id="adduser">
            <div className='row'>
                <div className='col col-sm-4 text-danger'></div>
                <span className="fs-3 fw-bold bg-white rounded-circle px-2">DASHBOARD</span>
          </div>
          <div className="col col-sm-3 btn-group">
            <Link to="/home" button className='btn btn-success'>Home</Link>
            <Link to="/adduser" className="btn btn-success">
              AddUser
            </Link>
            <Link to="/userlist" className="btn btn-info">
              UserList
            </Link>
          </div>
        </div>

<div className="container">
<div className="row">
  <div className="col">

  {userList.map((user,index)=><div key={index} className="row text-start"  >

<h3>ID:{user.id}</h3>
<h4>USERNAME:{user.username}</h4>
<h4>PROFILE:{user.profile}</h4>
</div>

)}
</div>
 
  </div>
</div>
</div>
 
            
  )
}

export default Homepage
