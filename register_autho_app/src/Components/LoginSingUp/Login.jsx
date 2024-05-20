import React, { useState } from "react";
import "./StyleSL.css";

import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

import axios from "axios";

const Login = () => {
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };

  // online https://www.geeksforgeeks.org/spring-security-login-page-with-react/

  const handleSubmit = async () => {
    try {
      // Check for empty fields
      if (!formDataLogin.email || !formDataLogin.password) {
        alert("Please fill in all fields.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        formDataLogin
      );
      // Handle successful signup
      console.log(response.data);
      alert("User Login successfully");
    } catch (error) {
      // Handle signup error
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      alert("An error occurred");
    }
  };

  return (
    <div className="container">
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formDataLogin.email}
            onChange={handleChangeLogin}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formDataLogin.password}
            onChange={handleChangeLogin}
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
