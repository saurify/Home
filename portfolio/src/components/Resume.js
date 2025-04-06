// src/components/Resume.js
import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

const ResumeContainer = styled.section`
  padding: 60px 20px;
  background-color: #f4f7fc;
  text-align: center;
`;

const Button = styled.a`
  padding: 12px 30px;
  background-color: #ff00ff;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #00ff99;
  }
`;

const Resume = () => {
  return (
    <ResumeContainer id="resume">
      <h2>Resume</h2>
      <p>Click below to view my resume.</p>
      <Button href="/resume.pdf" target="_blank">
        <FaDownload /> Download Resume
      </Button>
    </ResumeContainer>
  );
};

export default Resume;
