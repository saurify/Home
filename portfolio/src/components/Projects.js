// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 60px 20px;
  background-color: #181818;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const ProjectCard = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 250px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background-color: #00ff99;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 15px 0;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-family: 'Orbitron', sans-serif;
`;

const ProjectDescription = styled.p`
  color: #f1f1f1;
  margin-bottom: 20px;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>My Projects</h2>
      <div>
        <ProjectCard onClick={() => window.location.href = "/link-shortener"}>
          <ProjectTitle>Link Shortener</ProjectTitle>
          <ProjectDescription>Shorten URLs with ease.</ProjectDescription>
        </ProjectCard>
        <ProjectCard onClick={() => window.location.href = "/pdf-compressor"}>
          <ProjectTitle>PDF Compressor</ProjectTitle>
          <ProjectDescription>Compress PDFs for faster uploads.</ProjectDescription>
        </ProjectCard>
        <ProjectCard onClick={() => window.location.href = "/image-compressor"}>
          <ProjectTitle>Image Compressor</ProjectTitle>
          <ProjectDescription>Reduce image size without quality loss.</ProjectDescription>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
