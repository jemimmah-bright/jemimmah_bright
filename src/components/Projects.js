import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "eunikareinternational.org",
      description: "A comprehensive platform designed and developed for Eunikare International, showcasing robust web design and seamless user experience.",
      type: "Web Platform",
      link: "https://eunikareinternational.org"
    },
    {
      title: "kayzonle.com",
      description: "A modern, responsive website developed to meet specific business needs, focusing on performance, clean aesthetics, and data management.",
      type: "Business Website",
      link: "https://kayzonle.com"
    },
    {
      title: "AGtv App",
      description: "A feature-rich application designed and developed for media consumption, highlighting expertise in app design, UI/UX, and complex system architecture.",
      type: "Mobile Application",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <p className="section-subtitle">A showcase of some platforms and applications I have brought to life</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
