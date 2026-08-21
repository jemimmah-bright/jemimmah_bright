import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My academic background and professional journey</p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              I am a passionate and driven Computer Scientist with a strong foundation in both the theoretical and practical aspects of computing. I hold a Diploma in Computer Science and I am currently advancing my knowledge by pursuing a Bachelor's degree in Computer Science.
            </p>
            <p>
              My journey in tech is fueled by an insatiable curiosity and a desire to build solutions that matter. Whether I am crafting an elegant web application, analyzing complex datasets, or optimizing hardware systems, I approach every challenge with meticulous attention to detail and a problem-solving mindset.
            </p>
            
            <div className="stats-container">
              <div className="stat-box">
                <span className="stat-number">3+</span>
                <span className="stat-text">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-text">Projects Completed</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-text">Client Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="about-cards">
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <h4>Bachelor's Degree</h4>
              <p className="edu-major">Computer Science</p>
              <p className="edu-status">Currently Pursuing</p>
            </div>
            
            <div className="edu-card">
              <div className="edu-icon">📜</div>
              <h4>Diploma</h4>
              <p className="edu-major">Computer Science</p>
              <p className="edu-status">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
