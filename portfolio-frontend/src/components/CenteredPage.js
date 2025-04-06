// src/components/CenteredPage.js
import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.section`
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add some padding */
  text-align: center;
`;

const CenteredPage = ({ children }) => {
  return <CenteredContainer>{children}</CenteredContainer>;
};

export default CenteredPage;
