import React, { useContext, useEffect, useState, useRef } from 'react';
import { ProfileContext } from '../ProfileContext';
import { FaGithub, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../project.css';

const MyProjects = () => {
  const profileData = useContext(ProfileContext);
  const [githubProjects, setGithubProjects] = useState([]);
  const [githubProjectsUser2, setGithubProjectsUser2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'html', name: 'HTML' },
    { id: 'css', name: 'CSS' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'react', name: 'React' },
  ];

  const scrollProjects = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const fetchGitHubProjects = async (username, setProjects) => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const data = await response.json();
        setProjects(data.filter(repo => !repo.fork));
      } catch (error) {
        console.error(`Error fetching GitHub projects for ${username}:`, error);
        setError(error.message);
      }
    };

    const fetchAllProjects = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchGitHubProjects('atikag96', setGithubProjects),
          fetchGitHubProjects('atikagondal', setGithubProjectsUser2)
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading projects...</p>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <p>Error: {error}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );

  const allProjects = [
    ...(profileData?.projects || []),
    ...githubProjects,
    ...githubProjectsUser2
  ].filter(project => project).sort((a, b) => 
    new Date(b.updated_at || b.created_at || 0) - new Date(a.updated_at || a.created_at || 0)
  );

  const filteredProjects = allProjects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.language?.toLowerCase() === selectedCategory;
  });

  return (
    <section className="projects-section">
      <div className="projects-hero">
        <h1>Mine prosjekter</h1>
        <p>Utforsk mine arbeider innen teknologi, design og innovasjon.</p>
      </div>

      <div className="projects-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
            aria-label={`Filter projects by ${category.name}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="projects-container">
        <button 
          className="scroll-button left" 
          onClick={() => scrollProjects('left')}
          aria-label="Scroll projects left"
        >
          <FaChevronLeft />
        </button>
        
        <div className="projects-scroll-wrapper" ref={scrollContainerRef}>
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={`${project.id || index}-${project.name}`} project={project} />
              ))
            ) : (
              <div className="no-projects">
                <h3>Ingen prosjekter funnet</h3>
                <p>Vi fant ingen prosjekter i denne kategorien.</p>
              </div>
            )}
          </div>
        </div>
        
        <button 
          className="scroll-button right" 
          onClick={() => scrollProjects('right')}
          aria-label="Scroll projects right"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="github-links">
        <a 
          href="https://github.com/atikag96" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-link"
        >
          <FaGithub /> Besøk GitHub-profilen min
        </a>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-icon">
        <FaCode size={32} />
      </div>
      <h3>{project.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
      <p>{project.description || "Beskrivelse kommer snart!"}</p>
      <div className="project-meta">
        {project.language && <span className="language-tag">{project.language}</span>}
        {project.stargazers_count > 0 && (
          <span className="star-count">⭐ {project.stargazers_count}</span>
        )}
      </div>
      <a 
        href={project.html_url || project.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-link"
      >
        <FaGithub /> {project.html_url ? "Se på GitHub" : "Åpne prosjekt"}
      </a>
    </article>
  );
};

export default MyProjects;