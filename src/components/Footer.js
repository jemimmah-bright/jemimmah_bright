import React from 'react';
import { FaInstagram, FaTiktok, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <a href="#home" className="footer-logo">
              JBS
            </a>
            <p>Computer Scientist & Tech Professional delivering high-quality digital solutions.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/jemimmah_bright256?igsi=MTk3ZHhiaGV6OWF4bA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@2corinthians5_20?_r=1&_t=ZS-994Lr1incIx" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="https://x.com/jemkyelzb?s=11" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/in/jemimmah-bright-432ab5336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bright Jemimmah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
