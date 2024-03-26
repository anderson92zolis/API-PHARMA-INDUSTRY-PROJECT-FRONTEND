import React from "react";
import "./LoginSingUp.css";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";
const LoginSingUp = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text"> Sing Up</div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password"> Lost password <span>clic here</span></div>
      <div className="submit-container">
        <div  className="submit">Submit up</div>
        <div  className="submit">Login</div>

      </div>  

    </div>
  );
};

export default LoginSingUp;
