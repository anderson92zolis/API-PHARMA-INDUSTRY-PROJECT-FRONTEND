import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./Components/LoginSingUp/SingUp";
import LoginPage from "./Components/LoginSingUp/Login";
import Dashboard from "./Components/LoginSingUp/WelcomeDashboard";


import OptionOneForm from './Components/LoginSingUp/OptionOneForm';
import DosisDiariaTerapeutica from './Components/LoginSingUp/dosisDiariaTerapeutica';

// https://www.geeksforgeeks.org/spring-security-login-page-with-react/

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/option-one" element={<OptionOneForm />} />
          <Route path="/dashboard/maco" element={<DosisDiariaTerapeutica />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
