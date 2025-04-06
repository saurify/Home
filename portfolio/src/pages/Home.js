// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Home;
