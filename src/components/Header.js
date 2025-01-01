// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Barani</Link>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li className="dropdown" 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <span className="dropdown-trigger">
                    PROJECTS <span className="arrow">▼</span>
                </span>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li><Link to="/works">ALL PROJECTS</Link></li>
                        <li><Link to="/projects">PROJECT CATEGORIES</Link></li>
                    </ul>
                )}
            </li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
