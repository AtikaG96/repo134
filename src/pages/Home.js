import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Velkommen til mitt <span className="creative-touch">portfolio</span></h1>
        <h2>En <span className="creative-touch">dyktig</span> og <span className="creative-touch">kreativ</span> dataingeniør</h2>
        <Link to="/about" className="cta-button">
          Bli mer kjent med meg
        </Link>
      </div>
    </div>
  );
};

export default Home;