// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLink, FaCompressAlt, FaPaintBrush } from 'react-icons/fa'; // React Icons for the project icons

const Card = styled.div`
  width: 300px;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.div`
  padding: 20px;
  svg {
    width: 50px;
    height: 50px;
    fill: #ff79c6;
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #d1d1d1;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Link to={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardImage>{project.icon}</CardImage>
        <CardContent>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProjectCard;
