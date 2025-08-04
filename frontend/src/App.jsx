import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/feed" : "/login"} />} />
        <Route path="/login" element={<Login onAuth={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<Signup onAuth={() => setIsAuthenticated(true)} />} />
        <Route path="/feed" element={isAuthenticated ? <Feed /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
