import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './footer.css';  // Hvis du har en egen CSS-fil for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Atika Gondal</p>
        <a href="https://github.com/brukernavn" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
