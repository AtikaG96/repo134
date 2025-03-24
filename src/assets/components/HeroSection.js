import React from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Welcome to My Portfolio</h1>
      <h2>
        <Typewriter
          options={{
            strings: ['Hi, my name is Gondal', 'I am a Data Engineer', 'I build Full-stack Applications'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <a href="#about" className="cta-button">Learn More</a>
    </div>
  );
};

export default HeroSection;
