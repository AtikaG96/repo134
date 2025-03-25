import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => setActiveLink('home')}>Hjem</Link>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <Link to="/about" onClick={() => setActiveLink('about')}>Om meg</Link>
        </li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <Link to="/myprojects" onClick={() => setActiveLink('projects')}>Prosjekter</Link>
        </li>
        <li className={activeLink === 'experience' ? 'active' : ''}>
          <Link to="/experience" onClick={() => setActiveLink('experience')}>Arbeidserfaring</Link>
        </li>
        <li className={activeLink === 'certifications' ? 'active' : ''}>
          <Link to="/certifications" onClick={() => setActiveLink('certifications')}>Sertifiseringer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
