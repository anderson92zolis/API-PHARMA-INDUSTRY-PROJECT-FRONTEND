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
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formDataLogin.email}
            onChange={handleChangeLogin}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formDataLogin.password}
            onChange={handleChangeLogin}
          />
        </div>
      </div>
      <div className="forgot-password">
        Forgot your password? <span>Click here</span>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
