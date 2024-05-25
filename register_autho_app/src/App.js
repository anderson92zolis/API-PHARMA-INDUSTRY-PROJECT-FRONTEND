import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from "./Components/LoginSingUp/SingUp";
import LoginPage from "./Components/LoginSingUp/Login";
import Dashboard from "./Components/LoginSingUp/WelcomeDashboard";
import "./Components/LoginSingUp/StyleSL.css";

function App() { 
  return ( 
      <div className="App"> 
      <Router> 
  
            <Routes> 
            <Route path="/" element={<LoginPage/>} /> 
            <Route path="/signup" element={ <SignupPage/>} /> 
                <Route path = "/dashboard" element={<Dashboard/>}/> 
            </Routes> 
  
      </Router> 
      </div> 
  ); 
} 
  
export default App; 
