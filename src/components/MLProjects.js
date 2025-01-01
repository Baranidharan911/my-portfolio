// components/MLProjects.js
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/Projects';
import './ProjectList.css';

const MLProjects = () => {
  const mlProjects = projects.filter(project => project.category === "machine learning");

  return (
    <section className="portfolio-projects">
      <div className="portfolio-projects__header">
        <h1>MACHINE LEARNING PROJECTS</h1>
      </div>
      
      <div className="portfolio-projects__grid">
        {mlProjects.map((project) => (
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

export default MLProjects;
