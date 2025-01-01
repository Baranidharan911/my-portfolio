// Hero.js
import React from 'react';
import './Hero.css';
import profileImage from '../assets/prof.png';
import Resume from '../assets/Resume_2.pdf'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="heros">
      <h1 className="heros-name">BARANIDHARAN B</h1>
      
      <div className="heros-content">
        <div className="left-section">
          <div className="achievements">
            <h3>Web Developer</h3>
            <p>Creating innovative web solutions</p>
          </div>
          <a 
            href={Resume} 
            download="Baranidharan_CV.pdf" 
            className="cv-button"
          >
            Download CV →
          </a>
        </div>

        <div className="center-section">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img src={profileImage} alt="Baranidharan B" className="profile-image" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <p className="intro-text">
            Hi, I'm Baranidharan, a passionate Web Developer specializing in React.js and modern web technologies.
          </p>
          <Link to="/contact">
            <button className="cta-button">Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
