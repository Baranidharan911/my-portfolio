// components/MobileProjects.js
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/Projects';
import './ProjectList.css';

const MobileProjects = () => {
  const mobileProjects = projects.filter(project => project.category === "android app");

  return (
    <section className="portfolio-projects">
      <div className="portfolio-projects__header">
        <h1>MOBILE APP PROJECTS</h1>
      </div>
      
      <div className="portfolio-projects__grid">
        {mobileProjects.map((project) => (
          <Link 
            to={`/project/${project.id}`} 
            key={project.id} 
            className="portfolio-card"
          >
            <div 
              className="portfolio-card__image" 
              style={{backgroundImage: `url(${project.image})`}}
            >
              <div className="portfolio-card__overlay">
                <div className="portfolio-card__content">
                  <span className="portfolio-card__category">{project.category}</span>
                  <h3 className="portfolio-card__title">{project.title}</h3>
                  <div className="portfolio-card__tags">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="portfolio-card__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MobileProjects;