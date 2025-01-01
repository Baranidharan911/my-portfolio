// src/components/Services.js
import React from 'react';
import './Services.css';

// Import icons from react-icons
import { 
  FaDatabase, 
} from 'react-icons/fa';

import { 
  SiScikitlearn, 
} from 'react-icons/si';

// Import 3D tech icons (you'll replace these paths with your actual paths)
import html5Icon from '../assets/html5.svg';
import cssIcon from '../assets/css3.svg';
import reactIcon from '../assets/react.svg';
import nextjsIcon from '../assets/nextjs.svg';
import pythonIcon from '../assets/python.svg';
import tensorflowIcon from '../assets/tensorflow.svg';
import nodeIcon from '../assets/nodejs.svg';
import mongodbIcon from '../assets/mongodb.svg';
import expressIcon from '../assets/express-js.svg';
import firebaseIcon from '../assets/firebase.svg';

// Rest of your Services component code remains the same

const Services = () => {
  return (
    <section className="services">
      <h2 className="section-title">SERVICES</h2>
      
      <div className="services-wrapper">
        <div className="services-container">
          <div className="service-card large">
            <div className="service-number">01</div>
            <h3>Frontend Development</h3>
            <p>Building responsive and interactive web applications using React.js, ensuring seamless user experiences with modern UI/UX principles and clean code practices.</p>
            <div className="arrow-icon">→</div>
            <div className="tech-stack-popup">
              <h4>Technologies</h4>
              <div className="tech-icons">
                <img src={html5Icon} alt="HTML5" title="HTML5" />
                <img src={cssIcon} alt="CSS3" title="CSS3" />
                <img src={reactIcon} alt="React.js" title="React.js" />
                <img src={nextjsIcon} alt="Next.js" title="Next.js" />
              </div>
            </div>
          </div>

          <div className="service-card small">
            <div className="service-number">03</div>
            <h3>ML Model Training</h3>
            <p>Developing and training machine learning models for various applications, leveraging my AI and Data Science background to create intelligent solutions.</p>
            <div className="arrow-icon">→</div>
            <div className="tech-stack-popup">
              <h4>Technologies</h4>
              <div className="tech-icons">
                <img src={pythonIcon} alt="Python" title="Python" />
                <img src={tensorflowIcon} alt="TensorFlow" title="TensorFlow" />
                <SiScikitlearn title="Scikit-learn" />
              </div>
            </div>
          </div>
        </div>

        <div className="services-container">
          <div className="service-card small">
            <div className="service-number">02</div>
            <h3>Web Development</h3>
            <p>Creating full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with focus on scalability and performance.</p>
            <div className="arrow-icon">→</div>
            <div className="tech-stack-popup">
              <h4>Technologies</h4>
              <div className="tech-icons">
                <img src={nodeIcon} alt="Node.js" title="Node.js" />
                <img src={mongodbIcon} alt="MongoDB" title="MongoDB" />
                <img src={expressIcon} alt="Express.js" title="Express.js" />
                <img src={firebaseIcon} alt="Firebase" title="Firebase" />
              </div>
            </div>
          </div>

          <div className="service-card large">
            <div className="service-number">04</div>
            <h3>Data Labeling</h3>
            <p>Providing accurate data labeling services for machine learning projects, ensuring high-quality training data for AI model development.</p>
            <div className="arrow-icon">→</div>
            <div className="tech-stack-popup">
              <h4>Technologies</h4>
              <div className="tech-icons">
                <img src={pythonIcon} alt="Python" title="Python" />
                <FaDatabase title="SQL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
