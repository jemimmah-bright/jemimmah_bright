import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const phoneNumber = '256703908047';
    const text = `Hello Bright Jemimmah, I am reaching out from your portfolio.
Name: ${formData.name}
Email: ${formData.email}
Service Required: ${formData.service}

Message: 
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Book My Services</h2>
        <p className="section-subtitle">Let's collaborate on your next project. Reach out to discuss how I can help you achieve your tech goals.</p>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Ready to start your next big project? Whether it's web development, data analysis, or a custom app, I'm here to bring your vision to life.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>jemimmahbright@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p>+256 703908047</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Jemimmah Bright" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="jem@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="web">Web Design & Development</option>
                  <option value="app">App Development</option>
                  <option value="data">Data Management & ML</option>
                  <option value="hardware">Hardware Sales/Networking</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Tell me about your project..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Send Message (WhatsApp)</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
