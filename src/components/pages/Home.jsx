import { useContext, useEffect, useState } from "react";
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function Home () {
  const {user,setUser,setLogin,login}= useContext(AuthContext);



 const handleChange = (e) => {
  setLogin(false);
  setUser({username:"",role:"",isAdmin:false})
};
    
    return ( 
 
 login? 
  <header
  className="fs-1 text-center py-5 bg-image  w-100"
  style={{
    backgroundImage:`url('/src/assets/top-view-books-with-copy-space.jpg')`,
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
    <h1>Welocme to Bookify {user.username}</h1>

   <p className="fs-3 pt-2 ">Your current role is {user.role}        </p> 
      <Link  className="btn mx-2 btn-danger" onClick={handleChange}>
       <FaSignInAlt className="me-1" />log out?
      </Link> 
 </header>

 :  <header
  className="fs-1 text-center py-5 bg-image  w-100"
  style={{
    backgroundImage:`url('/src/assets/top-view-books-with-copy-space.jpg')`,
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
    <h1>Welocme to Bookify</h1>

   <p className="fs-3 pt-2 ">To use our service you must  
    <Link  className="btn mx-2 btn-primary" to="/login">
       <FaSignInAlt className="me-1" />log in
      </Link>  first</p> 
     
 </header>


    


    )
}

export default Home;