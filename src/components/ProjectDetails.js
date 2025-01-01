// components/ProjectDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/Projects.js';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  return (
    <section className="portfolio-detail">
      <div 
        className="portfolio-detail__hero" 
        style={{backgroundImage: `url(${project.image})`}}
      >
        <div className="portfolio-detail__overlay">
          <div className="portfolio-detail__hero-content">
            <span className="portfolio-detail__category">{project.category}</span>
            <h1 className="portfolio-detail__title">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="portfolio-detail__content">
        <div className="portfolio-detail__wrapper">
          <div className="portfolio-detail__description">
            <h2 className="portfolio-detail__subtitle">Project Overview</h2>
            <p className="portfolio-detail__text">{project.description}</p>
          </div>

          <div className="portfolio-detail__tech">
            <h2 className="portfolio-detail__subtitle">Technologies Used</h2>
            <div className="portfolio-detail__tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="portfolio-detail__tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="portfolio-detail__links">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="portfolio-detail__github"
            >
              View on GitHub →
            </a>
            <Link to="/projects" className="portfolio-detail__back">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
