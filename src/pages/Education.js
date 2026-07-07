import React from 'react';
import '../certifications.css';

const Education = () => {
  const education = [
    {
      title: "Master i medisinsk teknologi",
      school: "OsloMet",
      date: "08.2026 - Nå",
      description:
        "Starter master i Anvendt datateknologi (ACIT) ved OsloMet med spesialisering innen medisinsk teknologi.",
      subjects: [],
    },
    {
      title: "Bachelor i Dataingeniør",
      school: "OsloMet",
      date: "08.2016 - 07.2020",
      description:
        "Bachelorgrad i dataingeniørfag med fokus på systemutvikling, databaser, webutvikling, teknologiledelse, operativsystemer, Java, programutvikling, prototyping og matematikk (R1 og R2).",
      subjects: [
        "Python",
        "Spring Boot",
        "Kotlin",
        "HTML5",
        "CSS3",
        "Java",
        "PostgreSQL",
        "React.js",
        "JavaScript",
        "MySQL",
      ],
    },
    {
      title: "Studiespesialisering - Realfag",
      school: "Heltberg Private Gymnas",
      date: "08.2012 - 07.2016",
      description:
        "Videregående opplæring med studiespesialisering innen realfag.",
      subjects: [],
    },
  ];

  return (
    <section id="education" className="education-section">
      <h1>Utdanning</h1>

      <div className="education-container">
        {education.map((edu, i) => (
          <div key={i} className="education-card">
            <h2>{edu.title}</h2>
            <h3>{edu.school}</h3>

            <p className="date">{edu.date}</p>

            <p className="description">
              {edu.description}
            </p>

            {edu.subjects.length > 0 && (
              <>
                <h4>Teknologier og ferdigheter</h4>

                <ul className="subjects">
                  {edu.subjects.map((subject, j) => (
                    <li key={j}>{subject}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;