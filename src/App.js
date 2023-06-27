
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from "react";
import { Route,Routes,useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserList from "./components/UserList";
import AddUser from './components/AddUser';
import First from './components/First';

function App() {
  const navigate=useNavigate()
  
 
  const [userList,setUserList]=useState([])
  const [currentUser,setCurrentUser]=useState()
  const [index,setIndex]=useState()
  const EditUser = (user,index)=>{
  setCurrentUser(user)
  setIndex(index)
  console.log(user);
  navigate('/adduser')

}

const UpdateUser=(updatedUser,id)=>{
  console.log(updatedUser);
  const UserList = [...userList]
  console.log(id);
  UserList[id] ={...updatedUser}
   setUserList([...UserList])

};
  const Adduser=(user)=>{
    setUserList([...userList,user])
    console.log(userList);
  };
  const DeleteUser=(id)=>{
   const UserList = [...userList]
    const newUser=UserList.filter((user,index)=>index!==id)
    setUserList(newUser)

  };
return (

    <div className="App">

 
      <Routes>
      <Route path="/" element={<First/>}/>
       <Route path="/home" element={<Homepage userList={userList} />}/>
      <Route path="/adduser" element={<AddUser currentUser={currentUser} index={index} UpdateUser={UpdateUser} Adduser={Adduser}/>}/>
      <Route path="/userlist" element={<UserList EditUser={EditUser} userList={userList} index DeleteUser={DeleteUser} />}/>
      </Routes>
      
     </div>
  );
}

export default App;
