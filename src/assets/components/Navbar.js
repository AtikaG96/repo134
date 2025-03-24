import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Hvis du bruker React Router
import './Navbar.css'; // Importer CSS-filen for styling

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Standard aktiv lenke

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
        <Link to="/myprojects" onClick={() => setActiveLink('myprojects')}>Prosjekter</Link>
        
                </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <Link to="/experience" onClick={() => setActiveLink('experience')}>Arbeidserfaring</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;