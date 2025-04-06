import React from 'react';
import { FaCode, FaDatabase, FaRobot, FaUserGraduate, FaHeadset, FaBrain } from 'react-icons/fa';
import '../about.css';

const About = () => {
  const qualifications = [
    { icon: <FaCode />, title: "Dataingeniør", description: "Java, JavaScript, Python, AI, Django, React, TypeScript" },
    { icon: <FaRobot />, title: "Fullstack-utvikling", description: "Erfaring med frontend og backend" },
    { icon: <FaUserGraduate />, title: "Lærerassistent", description: "Veiledning av studenter ved OsloMet" },
    { icon: <FaHeadset />, title: "IT-support", description: "Brukerstøtte for læringsplattformer" },
    { icon: <FaDatabase />, title: "Databaser", description: "PostgreSQL, MySQL, integrering med backend" },
    { icon: <FaBrain />, title: "Personlige egenskaper", description: "Analytisk, strukturert, detaljorientert" }
  ];

  return (
    <div className="about-container"  id="about-section">
      <div className="about-card">
        <div className="profile-section">
          <div className="profile-text">
            <h1>Atika Gondal</h1>
            <p>Dataingeniør med lidenskap for utvikling, kunstig intelligens og problemløsning.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/profilbildet.jpeg'} alt="Profilbilde" className="profile-pic" />
          
        </div>
        
        <h2 className="section-title">Nøkkelkvalifikasjoner</h2>

        <div className="qualifications-grid">
          {qualifications.map((item, index) => (
            <div className="qualification-item" key={index}>
              <div className="qualification-icon">{item.icon}</div>
              <div className="qualification-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
