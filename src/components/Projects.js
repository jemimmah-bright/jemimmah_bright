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
      title: "OTP Mobile",
      description: "A modern React-based web application focused on seamless user interactions and responsive design.",
      type: "Web Application",
      link: "https://otp-mobile-u1qn.onrender.com"
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
    },
    {
      title: "Israel Graphic Design",
      description: "A creative graphics design project showcasing visual storytelling.",
      type: "Graphics Design",
      link: "/isreal.jpeg"
    },
    {
      title: "JBS Discounts Banner",
      description: "A promotional discount banner designed for JBS, focusing on clear communication and aesthetics.",
      type: "Graphics Design",
      link: "/jbs%20discounts.png"
    },
    {
      title: "Promotional Flyer",
      description: "An eye-catching flyer design crafted for marketing and promotional campaigns.",
      type: "Graphics Document",
      link: "/flye1.pdf"
    },
    {
      title: "Discounts Portfolio",
      description: "A detailed presentation document highlighting various discount offers and promotional strategies.",
      type: "Graphics Document",
      link: "/discounts.pdf"
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
