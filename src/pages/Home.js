import React from 'react';
import '../assets/components/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Velkommen til mitt portfolio</h1>
        <h2>En lidenskapelig dataingeniør med ekspertise i AI, webutvikling og systemutvikling.</h2>
        <p>Jeg spesialiserer meg på å skape innovative løsninger som kombinerer teknologi og kreativitet for å løse komplekse problemer.</p>
        <div className="button-container">
          <a href="/about" className="btn">Lær mer om meg</a>
        </div>
      </div>
    </div>
  );
};

export default Home;