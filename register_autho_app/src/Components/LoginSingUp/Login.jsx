import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyleSL.css";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";
import axios from "axios";

const Login = () => {
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const handleChangeLogin = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (!formDataLogin.email || !formDataLogin.password) {
        alert("Please fill in all fields.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        formDataLogin
      );

      console.log(response.data);
      alert("User Login successfully");
      history("/dashboard"); // Navigate to the desired route
    } catch (error) {
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
      <div className="text">
        <p>
          Not a member? <a href="/signup">Register</a>
        </p>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
