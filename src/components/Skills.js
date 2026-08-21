import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: "💻",
      skills: ["Programming", "Web Design & Dev", "App Design & Dev"]
    },
    {
      title: "Data & AI",
      icon: "📊",
      skills: ["Data Management", "Data Collection", "Cleaning & Error Handling", "Machine Learning"]
    },
    {
      title: "Systems & IT",
      icon: "⚙️",
      skills: ["System Analysis & Design", "Networking", "Computer Hardware"]
    },
    {
      title: "Digital & Business",
      icon: "📱",
      skills: ["Content Creation", "Social Media Management", "Hardware Sales"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <p className="section-subtitle">A comprehensive toolkit spanning across various technological domains</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
