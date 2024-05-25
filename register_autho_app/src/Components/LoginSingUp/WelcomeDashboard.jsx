// WelcomeDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import { Link } from 'react-router-dom';
import "./StyleSL.css";




function WelcomeDashboard({ username }) {
  const history = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, remove authentication token)
    // After logout, redirect to the login page
    history("/");
  };


  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">API PROGRAM WELCOME</div>
        <div className="underline"></div>
      </div>
      <div>
        <p style={mystyle}>You are logged in successfully.</p>
      </div>

      <div className="dashboard">
      
      <ul>
        <li><Link to="/dashboard/option-one">10 ppm Criteria</Link></li>

      </ul>

 
    </div>

      <div className="submit-container">
        <button type="button" className="submit" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default WelcomeDashboard;
