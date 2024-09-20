import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import Courses from './Components/Courses';
import Services from './Components/Services';
import About from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import SplashScreen from './Components/SplashScreen';
import './App.css';
import './Home.css';

function AppContent({ user, handleLogin, handleSignUp, handleLogout }) {
  const location = useLocation();

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        </Routes>
      </div>
      {location.pathname === '/' && <Footer />}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <AppContent 
          user={user}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleLogout={handleLogout}
        />
      )}
    </Router>
  );
}

export default App;