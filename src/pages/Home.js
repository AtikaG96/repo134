import '../assets/components/home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
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