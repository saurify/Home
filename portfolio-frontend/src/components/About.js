// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import TypingEffect from 'react-typing-effect';  // Import the typing effect package
import CenteredPage from './CenteredPage'; 

const AboutSection = styled.section`
  color: #D1D1D1;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  color: #FF79C6;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #D1D1D1;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <CenteredPage>
      <AboutSection>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          <TypingEffect
            text={['Hello! I\'m a developer who loves blending vintage aesthetics with modern tech.', 'Let\'s build something awesome together!']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={500}
            typingDelay={500}
            cursorRenderer={(cursor) => <span>{cursor}</span>}
            displayTextRenderer={(text) => <span>{text}</span>}
          />
        </AboutText>
      </AboutSection>
    </CenteredPage>
  );
};

export default About;
