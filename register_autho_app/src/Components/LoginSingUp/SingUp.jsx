import React, { useState } from "react";
import "./StyleSL.css";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

import axios from "axios";

const SingUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // online https://www.geeksforgeeks.org/spring-security-login-page-with-react/
  const handleSubmit = async () => {
    try {
      // Check for empty fields
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert("Please fill in all fields.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("asswords do not match");
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        formData
      );
      // Handle successful signup
      console.log(response.data);
      alert("User registered successfully");
    } catch (error) {
      // Handle signup error
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );

      alert("An error occurred");
    }
  };

  return (
    <div className="container">
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Last Name"
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>
      <button  onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default SingUp;
