// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\components\Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/KRISWORTH LOGO PROFILE.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle smooth scroll for anchor links on home page
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    
    // If we're not on home page, navigate to home then scroll
    if (location.pathname !== '/') {
      // Navigate to home page with state to trigger scroll
      window.location.href = `/#${targetId.replace('#', '')}`;
    } else {
      // On home page, just scroll
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img 
            src={logoImage} 
            alt="Krisworth Growth Solutions" 
            className="logo-image"
          />
          <div className="logo-text-wrapper">
            <div className="logo-main">
              <span className="logo-text">Growth Solutions</span>
            </div>
            <span className="logo-tagline">Structure. Scale. Succeed.</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            } 
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            } 
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/service" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            } 
            onClick={closeMenu}
          >
            Services
          </NavLink>
          
          {/* Toolkits - Direct Link */}
          <NavLink 
            to="/toolkits" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            } 
            onClick={closeMenu}
          >
            Toolkits
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            } 
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>

        {/* Right Side Icons - Free Programme Button */}
        <div className="nav-icons">
          <button 
            className="apply-button"
            onClick={(e) => handleAnchorClick(e, '#programme')}
          >
            Free Programme
          </button>
          
          {/* Hamburger Menu */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;