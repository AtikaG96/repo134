import React from 'react';
import '../about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <h3 className="about-subtitle">Nøkkelkvalifikasjoner</h3>
        <ul className="about-list">
          <li><strong>Dataingeniør:</strong> Behersker programmeringsspråkene Java, Javascript, HTML5, CSS, SQL, Python, AI og ML, Azure Directory, AWS, Django, React, Node.JS, TypeScript og H2-Databasen.</li>
          <li><strong>Utvikling og programmering:</strong> Erfaring med Python, AI og fullstack-utvikling. Utviklet løsninger både frontend og backend.</li>
          <li><strong>Lærerassistent:</strong> Erfaring fra OsloMet med samarbeid i gruppearbeid og støtte i lærerassistent-roller.</li>
          <li><strong>IT-support:</strong> Støtte til brukere som hadde tekniske problemer med systemer som Canvas og Zoom.</li>
          <li><strong>Databaser:</strong> Grunnleggende forståelse av databaser og hvordan man integrerer backend-løsninger med frontend-grensesnitt.</li>
          <li><strong>Personlig:</strong> Er analytisk, strukturert og detaljorientert, god til å håndtere komplekse problemer.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
