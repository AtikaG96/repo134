import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../ProfileContext';
import { FaGithub, FaCode } from 'react-icons/fa';
import '../project.css';

const MyProjects = () => {
  const profileData = useContext(ProfileContext);
  const [githubProjects, setGithubProjects] = useState([]);
  const [githubProjectsUser2, setGithubProjectsUser2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'html', name: 'HTML' },
    { id: 'css', name: 'CSS' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'react', name: 'React' },
  ];

  useEffect(() => {
    const fetchGitHubProjects = async (username, setProjects) => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(`Error fetching GitHub projects for ${username}:`, error);
        setError(error.message);
      }
    };

    const fetchAllProjects = async () => {
      setLoading(true);
      await fetchGitHubProjects('atikag96', setGithubProjects);
      await fetchGitHubProjects('atikagondal', setGithubProjectsUser2);
      setLoading(false);
    };

    fetchAllProjects();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const allProjects = [...(profileData?.projects || []), ...githubProjects, ...githubProjectsUser2];

  const filteredProjects = allProjects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.language?.toLowerCase() === selectedCategory;
  });

  return (
    <div className="my-projects-section">
      <div className="hero-section">
        <h1>Mine prosjekter</h1>
        <p>Utforsk mine arbeider innen teknologi, design og innovasjon.</p>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "active" : ""}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="projects-horizontal-scroll">
        <div className="project-container">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">
                <FaCode size={32} color="#4b6cb7" />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description || "Project description is coming soon!"}</p>
              <a href={project.html_url || project.url} target="_blank" rel="noopener noreferrer">
                <FaGithub /> {project.html_url ? "View on GitHub" : "View Project"}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="github-profile">
        <a href="https://github.com/atikag96" target="_blank" rel="noopener noreferrer" className="github-button">
          <FaGithub /> Visit My GitHub Profile
        </a>
        <a href="https://github.com/atikagondal" target="_blank" rel="noopener noreferrer" className="github-button">
          <FaGithub /> Visit Another GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default MyProjects;