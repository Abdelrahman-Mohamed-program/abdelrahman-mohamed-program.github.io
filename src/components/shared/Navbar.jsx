import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider";
export default function Navbar(){
    const {login}= useContext(AuthContext);
  return(
    login?
    <nav className="navbar navbar-expand-lg text-light navbar-dark bg-dark">
    <div className="container ">
      <Link className="navbar-brand fw-bold fs-2" to="/">Bookify</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav d-flex w-100 justify-content-end ">
          <li className="nav-item text-light mx-2 fs-5">
            <Link className="nav-link" to="/">Home</Link>
          </li>
  
          <li className="nav-item mx-2 fs-5">
            <Link className="nav-link " to="/admin">AdminDashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

:
<nav className="navbar navbar-expand-lg text-light navbar-dark bg-dark">
<div className="container ">
  <Link className="navbar-brand fw-bold fs-2" to="/">Bookify</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav d-flex w-100 justify-content-end ">
      <li className="nav-item text-light mx-2 fs-5">
        <Link className="nav-link" to="/">Home</Link>
      </li>

      <li className="nav-item mx-2 fs-5">
        <Link className="nav-link " to="/login">login</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    


  )
}