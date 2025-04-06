import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Atika Gondal. All rights reserved.</p>
      <Link to="top" smooth={true} duration={500}>
        Back to top
      </Link>
    </footer>
  );
};

export default Footer;
