import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="container">
  <div className="imgdiv">
  <img className="logo" src="https://media.licdn.com/dms/image/C4E0BAQEQ1C9_QNFW-Q/company-logo_200_200/0/1603260669862?e=2147483647&v=beta&t=usK-7GjjLNm17mQ_nDHnhRTIc2m7cl6P_q5ROLopuKs" alt="" />
  </div>
  <div className="lidiv">
      {auth ? (
       
        <ul>
        
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Products</Link>
          </li>
          <li>
            <Link to="/update/id">Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup" onClick={logout}>
                Logout  
            </Link>
          </li>           
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          
        </ul>
        
      )}
      </div>
    </div>
  );
};

export default Nav;
