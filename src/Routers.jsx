import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';         
import Signup from './Signup/Signup';
import Login from './Login/Login';         
import BodyLayout from './Layout';
import StudentDashboard from './StudentDashboard';
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="Layout" element={< BodyLayout/>} />
          <Route path="StudentDashboard" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
