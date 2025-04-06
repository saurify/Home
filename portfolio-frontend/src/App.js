// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import LandingPage from './components/Landing';
import AboutMe from './components/About';
import Projects from './pages/Projects';
import UrlShortener from './pages/UrlShortener';
import Compressor from './pages/Compressor';
import PatternGenerator from './pages/PatternGenerator';
import Navbar from './components/Navbar';

// Global styles to apply retro font globally
const GlobalStyle = createGlobalStyle`
  /* Import retro font */
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');

  body {
    font-family: 'Courier Prime', monospace, sans-serif;
    background-color: #282828;
    margin: 0;
    padding: 0;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit; /* Prevents default link styling */
  }

  /* Optional: Style for links when active */
  .active {
    background-color: #ff79c6;
    color: #1A1A1A;
  }

  /* Other global styles */
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #1A1A1A;
  color: #50FA7B;
  position: relative;
  bottom: 0;
  width: 100%;
`;

function App() {
  return (
    <Router>
      {/* Global styles */}
      <GlobalStyle />
      
      <Navbar /> {/* Navbar Component for navigation */}

      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
        <Route path="/about" element={<AboutMe />} /> {/* About Me Page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects Page */}
        <Route path="/projects/url-shortener" element={<UrlShortener />} />
        <Route path="/projects/compressor" element={<Compressor />} />
        <Route path="/projects/pattern-generator" element={<PatternGenerator />} />
      </Routes>

      {/* Footer */}
      <Footer>
        <p>© 2025 Saurabh Singh. All Rights Reserved.</p>
      </Footer>
    </Router>
  );
}

export default App;
