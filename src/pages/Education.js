const education = [
  {
    id: 1,
    school: "OsloMet",
    degree: "Master i medisinsk teknologi",
    fieldOfStudy: "Anvendt datateknologi (ACIT) – Medisinsk teknologi",
    startDate: "2026-08",
    endDate: "",
    currentlyStudying: true,
    location: "Oslo, Norge",
    description:
      "Starter master i Anvendt datateknologi (ACIT) ved OsloMet med spesialisering innen medisinsk teknologi.",
    skills: [],
  },
  {
    id: 2,
    school: "OsloMet",
    degree: "Bachelor i Dataingeniør",
    fieldOfStudy: "Dataingeniør",
    startDate: "2016-08",
    endDate: "2020-07",
    currentlyStudying: false,
    location: "Oslo, Norge",
    description:
      "Bachelorgrad i dataingeniørfag med fokus på systemutvikling, databaser, webutvikling, teknologiledelse, operativsystemer, Java, programutvikling, prototyping og matematikk (R1 og R2).",
    skills: [
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
    id: 3,
    school: "Heltberg Private Gymnas",
    degree: "Studiespesialisering",
    fieldOfStudy: "Realfag",
    startDate: "2012-08",
    endDate: "2016-07",
    currentlyStudying: false,
    location: "Oslo, Norge",
    description:
      "Videregående opplæring med studiespesialisering innen realfag.",
    skills: [],
  },
];


{education.map((edu) => (
  <div key={edu.id}>
    <h3>{edu.degree}</h3>
    <h4>{edu.school}</h4>
    <p>
      {edu.startDate} -{" "}
      {edu.currentlyStudying ? "Nåværende" : edu.endDate}
    </p>
    <p>{edu.description}</p>

    {edu.skills.length > 0 && (
      <ul>
        {edu.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    )}
  </div>
))}