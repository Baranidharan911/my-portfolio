// components/FreelanceDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { freelanceProjects } from '../components/FreelanceProjects';
import './FreelanceDetail.css';

const FreelanceDetail = () => {
  const { id } = useParams();
  const project = freelanceProjects.find(p => p.id === id);

  return (
    <section className="portfolio-detail">
      <div 
        className="portfolio-detail__hero" 
        style={{backgroundImage: `url(${project.image})`}}
      >
        <div className="portfolio-detail__overlay">
          <div className="portfolio-detail__hero-content">
            <span className="portfolio-detail__category">{project.category}</span>
            <h1>{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="portfolio-detail__content">
        <div className="portfolio-detail__wrapper">
          <div className="portfolio-detail__description">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="portfolio-detail__tech">
            <h2>Technologies Used</h2>
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
              View the Site →
            </a>
            <Link to="/freelance" className="portfolio-detail__back">
              Back to Freelance Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceDetail;
