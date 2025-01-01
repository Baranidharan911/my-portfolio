import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsList from './components/ProjectsList';
import ProjectDetail from './components/ProjectDetails';
import FreelanceProjects from './components/FreelanceProjects';
import FreelanceDetail from './components/FreelanceDetail';
import WebProjects from './components/WebProjects';
import MLProjects from './components/MLProjects';
import MobileProjects from './components/MobileProjects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Works />
              <Contact />
            </>
          } />
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/freelance" element={<FreelanceProjects />} />
          <Route path="/freelance/:id" element={<FreelanceDetail />} />
          <Route path="/web-projects" element={<WebProjects />} />
          <Route path="/ml-projects" element={<MLProjects />} />
          <Route path="/mobile-projects" element={<MobileProjects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
