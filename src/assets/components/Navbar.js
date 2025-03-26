import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li className={activeLink === 'home' ? 'active' : ''}>
            <Link to="/" onClick={() => handleLinkClick('home')}>Hjem</Link>
          </li>
          <li className={activeLink === 'about' ? 'active' : ''}>
            <Link to="/about" onClick={() => handleLinkClick('about')}>Om meg</Link>
          </li>
          <li className={activeLink === 'projects' ? 'active' : ''}>
            <Link to="/myprojects" onClick={() => handleLinkClick('projects')}>Prosjekter</Link>
          </li>
          <li className={activeLink === 'experience' ? 'active' : ''}>
            <Link to="/experience" onClick={() => handleLinkClick('experience')}>Arbeidserfaring</Link>
          </li>
          <li className={activeLink === 'certifications' ? 'active' : ''}>
            <Link to="/certifications" onClick={() => handleLinkClick('certifications')}>Sertifiseringer</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;