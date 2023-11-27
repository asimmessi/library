import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import Login from './pages/user_signup_login/Login';
import {AdminSignUp} from './pages/admin_signup/AdminSignUp';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Login/>}/>


        {/* private routes */}
        <Route path="/admin-signup" element={<AdminSignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
