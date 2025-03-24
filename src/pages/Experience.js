import React from 'react';
import '../workexperience.css'; // Importer CSS-filen

const WorkExperience = () => {
  const experiences = [
    { title: "Teknisk vakt, BI Handelshøyskolen", date: "06.2021 - Nå", description: "Jeg jobber som teknisk vakt ved BI Handelshøyskolen, hvor jeg støtter studenter under eksamensperioder med å løse nettverksproblemer, innloggingsutfordringer og sikre at besvarelser blir riktig lagret.", responsibilities: ["Testing av systemet Device Monitor, som tar skjermbilder av studentenes skjermer under eksamener.", "Overvåking av hvilke nettsider studentene besøker under eksamen, ettersom systemet fungerer som en åpen plattform."] },
    { title: "Python-utvikler, Innovasjon Norge", date: "01.2020 - 07.2020", description: "Utviklet maskinlæringsmodeller for effektivisering av søknadsbehandlingsprosessen.", responsibilities: ["Dataringjøring, tekstforberedelse og modelltesting basert på 10 000 søknader fordelt på 44 kategorier.", "Implementerte en multilabel klassifiseringsmodell for å predikere flere kategorier per søknad.", "Analyse av tekstdata med dimensjonsreduksjon og ordfrekvenser.", "Presenterte resultater og forbedringsforslag, inkludert økt bruk av obligatoriske felter for bedre datasettkvalitet."] },
    { title: "Lærerassistent, OsloMet Fakultet TKD", date: "07.2020 - 12.2024", description: "Assisterte i flere fag som Introduksjon til AI, Internet of Things og Webutvikling.", responsibilities: ["Hjelp til studenter med å forstå komplekse konsepter i AI, IoT og webutvikling.", "Utviklet oppgaver basert på kursmateriale, og tilpasset oppgavene etter studentenes ferdighetsnivå."] },
    { title: "IT-support medarbeider, OsloMet", date: "09.2019", description: "Hjalp brukere med tekniske problemer på Canvas via Zoom under korona-pandemien.", responsibilities: ["Feilsøking og brukerstøtte via Zoom for Canvas-brukere."] }
  ];

  return (
    <section id="work-experience" className="work-experience-section">
      <h1>Arbeidserfaring</h1>
      <div className="experience-container">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <h2>{exp.title}</h2>
            <p className="date">{exp.date}</p>
            <p className="description">{exp.description}</p>
            <ul className="responsibilities">
              {exp.responsibilities.map((res, j) => (
                <li key={j}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;