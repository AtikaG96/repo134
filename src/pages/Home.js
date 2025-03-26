import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Hjem</Link></li>
          <li><Link to="/about">Om meg</Link></li>
          <li><Link to="/projects">Prosjekter</Link></li>
          <li><Link to="/experience">Arbeidserfaring</Link></li>
          <li><Link to="/certifications">Sertifiseringer</Link></li>
        </ul>
      </nav>

      <div className="content-wrapper">
        <div className="text-card">
          <h1>En dyktig og kreativ dataingeniør</h1>
          <Link to="/about" className="cta-button">
            Bli mer kjent med meg
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;