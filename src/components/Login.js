import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  },[]);

  const handlelogin = async () => {
      let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({  email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();  
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    }
    else{
      alert("Please enter correct details");
    }
  };
  return (
    <div className="signupdiv">
      <h1 className="register">Log in</h1>

      <input
        type="text"
        className="inputdata"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="text"
        className="inputdata"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button type="submit" onClick={handlelogin} className="btnsignup">
    Log in
      </button>
    </div>
  );
};

export default Login;
