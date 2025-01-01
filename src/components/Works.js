// Works.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Works.css';
import allProjects from '../assets/All-projects.jpg';
import freelancer from '../assets/Freelancer.jpg';
import webDev from '../assets/Web-dev.jpg';
import ml from '../assets/Ml.jpg';
import app from '../assets/App.jpg';

const Works = () => {
  const cardStyles = {
    allProjects: {
      backgroundImage: `url(${allProjects})`,
    },
    freelance: {
      backgroundImage: `url(${freelancer})`,
    },
    webDev: {
      backgroundImage: `url(${webDev})`,
    },
    mlProjects: {
      backgroundImage: `url(${ml})`,
    },
    mobileApps: {
      backgroundImage: `url(${app})`,
    }
  };

  return (
    <section className="works">
      <h2 className="section-titles">Some recent work</h2>
      
      <div className="works-wrapper">
        <div className="works-container-large">
          <Link to="/projects" className="work-card large" style={cardStyles.allProjects}>
            <div className="card-overlay">
              <span className="tags">ALL PROJECTS</span>
              <div className="card-content">
                <h3>Complete Portfolio</h3>
                <p>Collection of all development work</p>
              </div>
            </div>
          </Link>

          <Link to="/freelance" className="work-card large" style={cardStyles.freelance}>
            <div className="card-overlay">
              <span className="tags">FREELANCE</span>
              <div className="card-content">
                <h3>Client Projects</h3>
                <p>Freelance development solutions</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="works-container-small">
          <Link to="/web-projects" className="work-card small" style={cardStyles.webDev}>
            <div className="card-overlay">
              <span className="tags">WEB DEV</span>
              <div className="card-content">
                <h3>Web Development</h3>
              </div>
            </div>
          </Link>

          <Link to="/ml-projects" className="work-card small" style={cardStyles.mlProjects}>
            <div className="card-overlay">
              <span className="tags">ML PROJECTS</span>
              <div className="card-content">
                <h3>Machine Learning</h3>
              </div>
            </div>
          </Link>

          <Link to="/mobile-projects" className="work-card small" style={cardStyles.mobileApps}>
            <div className="card-overlay">
              <span className="tags">MOBILE</span>
              <div className="card-content">
                <h3>Mobile Apps</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
