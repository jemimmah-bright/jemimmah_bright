import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Bright <span>Jemimmah</span></h1>
          <h2 className="hero-titles">
            Computer Scientist & Tech Professional
          </h2>
          <p className="hero-description">
            I specialize in programming, web & app design, data management, 
            and machine learning. With a diverse skill set spanning across hardware and software, 
            I bring comprehensive tech solutions to life.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-outline">View Work</a>
          </div>
        </div>
        
        <div className="hero-image-wrapper fade-in-up">
          <div className="hero-image-backdrop"></div>
          <img 
            src="/profile_pic.jpeg" 
            alt="Bright Jemimmah" 
            className="hero-image"
          />
          
          {/* Floating tags */}
          <div className="floating-tag tag-1">Web Dev</div>
          <div className="floating-tag tag-2">Data Science</div>
          <div className="floating-tag tag-3">ML</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
