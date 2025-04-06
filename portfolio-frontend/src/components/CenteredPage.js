// src/components/CenteredPage.js
import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.section`
  padding: 3rem 2rem; /* Default padding for larger screens */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem; /* Adjust padding for mobile */
    /* height: auto;  Allow content to grow naturally on smaller screens */
  }
`;

const CenteredPage = ({ children }) => {
  return <CenteredContainer>{children}</CenteredContainer>;
};

export default CenteredPage;
