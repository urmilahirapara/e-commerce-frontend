import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="signupdiv">
      <h1 className="register">Register</h1>

      <input
        className="inputdata"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Username"
      />
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
      <button type="submit" onClick={collectData} className="btnsignup">
        Sign up
      </button>
    </div>
  );
};

export default Signup;
