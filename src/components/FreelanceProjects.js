// components/FreelanceProjects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FreelanceProjects.css';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';

export const freelanceProjects = [
  {
    id: 'f1',
    title: "Photography Studio Portfolio",
    description: "Developed a dynamic portfolio website for a photography studio featuring gallery management, client showcase, and contact functionality. Implemented admin dashboard for dynamic content management and photo updates.",
    image: f1,
    tags: ["React", "Node.js", "Firebase", "API Integration"],
    category: "web development",
    type: "freelance",
    github: "https://v7studio.com/"
  },
  {
    id: 'f2',
    title: "Foreign Consulting Service Website",
    description: "Created a static 5-page website for a foreign consulting service company, featuring service information, contact details, and company profile.",
    image: f2,
    tags: ["React", "Bootstrap"],
    category: "web development",
    type: "freelance",
    github: "https://insight-website.vercel.app/"
  },
  {
    id: 'f3',
    title: "Photographer Portfolio",
    description: "Designed and developed a personal portfolio website for a professional photographer to showcase their work and profile.",
    image: f3,
    tags: ["React", "Firebase", "Bootstrap"],
    category: "web development",
    type: "freelance",
    github: "https://v7studio.com/"
  }
];

const FreelanceProjects = () => {
  return (
    <section className="portfolio-freelance">
      <div className="portfolio-freelance__header">
        <h1>FREELANCE PROJECTS</h1>
      </div>
      
      <div className="portfolio-freelance__grid">
        {freelanceProjects.map((project) => (
          <Link 
            to={`/freelance/${project.id}`} 
            key={project.id} 
            className="portfolio-freelance__card"
          >
            <div 
              className="portfolio-freelance__image" 
              style={{backgroundImage: `url(${project.image})`}}
            >
              <div className="portfolio-freelance__overlay">
                <div className="portfolio-freelance__content">
                  <span className="portfolio-freelance__category">{project.category}</span>
                  <h3 className="portfolio-freelance__title">{project.title}</h3>
                  <div className="portfolio-freelance__tags">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="portfolio-freelance__tag">{tag}</span>
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

export default FreelanceProjects;
