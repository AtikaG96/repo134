import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './ProfileContext';
import Home from './pages/Home';
import Navbar from './assets/components/Navbar';
import About from './pages/About';
import MyProjects from './pages/MyProjects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './assets/components/Footer.css'; // Importer Footer-komponenten
import Certifications from './pages/Certifications';
import './GlobalStyles.css';


const App = () => {
  return (
    <ProfileProvider>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certifications/>} />

          <Route path="/footer" element={<Footer />} />

        </Routes>
      </HashRouter>
    </ProfileProvider>
  );
};

export default App;