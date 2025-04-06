import '../assets/components/home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Hjem</Link></li>
          <li><Link to="/about" className="nav-link">Om meg</Link></li>
          <li><Link to="/projects" className="nav-link">Prosjekter</Link></li>
          <li><Link to="/experience" className="nav-link">Arbeidserfaring</Link></li>
          <li><Link to="/certifications" className="nav-link">Sertifiseringer</Link></li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="blue-gradient-card">
          <h1 className="main-title">Velkommen til min portfolio</h1>
          <h2 className="subtitle">En dyktig og kreativ dataingeniør</h2>
          <div className="cta-container">
            <Link to="/about" className="cta-button">
              <span className="button-text">Bli kjent med meg</span>
              <span className="button-icon">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;