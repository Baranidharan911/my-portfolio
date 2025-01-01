// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="sections-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I am Baranidharan B, a Web Developer with a strong foundation in modern web technologies. 
            My journey began with a degree in Artificial Intelligence and Data Science, where I discovered 
            my passion for creating innovative web solutions. I specialize in building responsive and 
            scalable applications using React.js and various cutting-edge frameworks.
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-item">
              <h3>2+</h3>
              <p>Freelance Clients</p>
            </div>

            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
