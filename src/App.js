import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './ProfileContext';
import Home from './pages/Home';
import Navbar from './assets/components/Navbar';
import About from './pages/About';
import MyProjects from './pages/MyProjects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications'; // Ny side

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certifications />} /> 
        </Routes>
      </Router>
    </ProfileProvider>
  );
};

export default App;
