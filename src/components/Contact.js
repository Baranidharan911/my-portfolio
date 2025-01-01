// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaHeadphones, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_USER_ID'
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact">
      <h2 className="section-title">CONTACT ME</h2>
      
      <div className="contact-wrapper">
        <div className="contact-card info-card">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>OUR OFFICE:</h3>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-item">
            <FaHeadphones className="icon" />
            <div>
              <h3>CONTACT NUMBER:</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h3>EMAIL US:</h3>
              <p>bbharanidharan43@gmail.com</p>
            </div>
          </div>

          <div className="socials">
            <h3>SOCIALS</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/baranidharan-b-3a3186247" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Baranidharan911" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.instagram.com/barani_dharan._/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="contacts-card form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@websitename.com" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>SUBJECT</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject" 
                required 
              />
            </div>

            <div className="form-group">
              <label>YOUR MESSAGE</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your message" 
                rows="6" 
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Me Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
