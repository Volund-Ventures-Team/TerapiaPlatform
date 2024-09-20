import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const [showSmallNavbar, setShowSmallNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowSmallNavbar(true);
      } else {
        setShowSmallNavbar(false);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY > 50) {
        setNavbarClass('scrolled');
      } else {
        setNavbarClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className="small-navbar"
        style={{ transform: showSmallNavbar ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="small-navbar-container">
          <div className="contact-info">
            <Link 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <img src="what.webp" alt="WhatsApp Logo" className="contact-logo" />
              WhatsApp
            </Link>
          </div>
          <div className="contact-info">
            <img src="M.jpeg" alt="Phone Logo" className="contact-logo" />
            Service-Hotline: +212 (0)77 77 77 77
          </div>
          <div className="contact-info calendar-info">
            <img src="cale.jpg" alt="Calendar Logo" className="calendar-logo" />
            Calendar: Mon. – Fri.: 9am – 6pm
          </div>
          <div className="small-navbar-login">
            <Link to="/login" className="nav-links">
              <img src="logu.png" alt="Login Logo" className="login-logo" />
              Login
            </Link>
          </div>
        </div>
      </div>
      <nav className={`navbar ${navbarClass}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Terapia
          </Link>
          <ul className="nav-menu">
            {/* Removed Home link */}
            <li className="nav-item">
              <Link to="/courses" className="nav-links">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">About Us</Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-links">Welcome, {user.name}</span>
                </li>
                <li className="nav-item">
                  <button onClick={onLogout} className="nav-links-button">Logout</button>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
