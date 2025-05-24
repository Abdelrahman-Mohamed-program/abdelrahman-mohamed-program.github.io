import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
function Login() {

  const {user,setUser,setLogin}= useContext(AuthContext);
  const navigateToHome=useNavigate();  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username===""||user.role==="") {
        withReactContent(Swal).fire({ 
            icon: "error",
            title: "All inputs are required!",
            text: "Please fill all inputs",
          });
          return;
        }
    if (user.role=="admin") {
        setUser({...user,isAdmin:true});
    }
    setLogin(true);
  navigateToHome('/');
};


  const handleChange = (e) => {
    setUser({...user,role:e.target.value});
  };

  return (
   
      <div className="card p-4 shadow-lg mx-auto mt-4" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                onChange={e => setUser({...user,username:e.target.value})}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Select Your Role</label>
            <select
            id='role'
              className="form-select"
              onChange={handleChange}
            >
              <option value="">-- Select a role --</option>
              <option value="guest">Guest</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
    </div>
  );
}

export default Login;