import React, { useState } from "react";
import "./StyleSL.css";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

import axios from "axios";

const LoginSingUp = () => {
  const [action, setAction] = useState("Sing Up");

  // register

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Login

  const [loginForm, setLoginForm] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  // Login
  const handleChangeLogin = (login) => {
    setFormData({ ...loginForm, [login.target.name]: login.target.value });
  };

  //REGISTER

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", formData);
      alert("User registered successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred IN REGISTER");
    }
  };
  // Login
  const handleSubmitLogin = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        loginForm
      );
      alert("User LOGIN successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred in lOGIN");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="surname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            //value={formData.email}
            //onChange={handleChange}
            value={loginForm.emailLogin}
            onChange={handleChangeLogin}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            //value={formData.password}
            //onChange={handleChange}
            value={loginForm.passwordLogin}
            onChange={handleChangeLogin}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          {" "}
          Lost password <span>clic here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            handleSubmit();
          }}
        >
          Submit up
        </div>

        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setLoginForm("Login");
            handleSubmitLogin();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSingUp;
