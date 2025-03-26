import React from 'react';
import { FaCode, FaDatabase, FaRobot, FaUserGraduate, FaHeadset, FaBrain } from 'react-icons/fa';
import '../about.css';

const About = () => {
  const qualifications = [
    {
      icon: <FaCode />,
      title: "Dataingeniør",
      description: "Behersker programmeringsspråkene Java, JavaScript, HTML5, CSS, SQL, Python, AI/ML, Azure, AWS, Django, React, Node.js, TypeScript"
    },
    {
      icon: <FaRobot />,
      title: "Fullstack-utvikling",
      description: "Erfaring med både frontend og backend utvikling, inkludert AI-løsninger"
    },
    {
      icon: <FaUserGraduate />,
      title: "Lærerassistent",
      description: "Veiledning og støtte for studenter ved OsloMet"
    },
    {
      icon: <FaHeadset />,
      title: "IT-support",
      description: "Brukerstøtte for læringsplattformer og videokonferanse"
    },
    {
      icon: <FaDatabase />,
      title: "Databaser",
      description: "Integrering av backend-løsninger med frontend-grensesnitt"
    },
    {
      icon: <FaBrain />,
      title: "Personlige egenskaper",
      description: "Analytisk, strukturert og detaljorientert problemløser"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-card">
        <header className="about-header">
          <h2>Nøkkelkvalifikasjoner</h2>
        </header>
        
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