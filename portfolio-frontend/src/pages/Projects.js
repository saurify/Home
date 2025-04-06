// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { FaLink, FaCompressAlt, FaPaintBrush } from 'react-icons/fa'; // React Icons for the project icons
import CenteredPage from '../components/CenteredPage';

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  padding: 40px 20px;
`;

const Projects = () => {
  const projects = [
    {
      title: 'URL Shortener',
      description: 'A simple and fast URL shortener. Shorten links for easy sharing!',
      link: '/projects/url-shortener',
      icon: <FaLink />,
    },
    {
      title: 'Image/PDF Compressor',
      description: 'Compress images and PDFs without losing quality. Optimized for the web.',
      link: '/projects/compressor',
      icon: <FaCompressAlt />,
    },
    {
      title: 'Pattern Generator',
      description: 'Generate beautiful patterns with a click of a button! Try different combinations.',
      link: '/projects/pattern-generator',
      icon: <FaPaintBrush />,
    },
  ];

  return (
    <CenteredPage>

    <ProjectsWrapper>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ProjectsWrapper>
      </CenteredPage>
  );
};

export default Projects;
