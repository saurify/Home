// src/components/Landing.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import TypingEffect from 'react-typing-effect';  // Import the typing effect package
import CenteredPage from './CenteredPage'; 

const Title = styled.h1`
  font-size: 3rem;
  color:rgb(214, 4, 123);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #D1D1D1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Landing = () => {
  return (
    <CenteredPage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Title>
          Welcome to My Retro Digital Portfolio
        </Title>
        <IntroText>
          <TypingEffect
            text={['A blast from the past, wrapped in the future.', 'Explore my journey!', 'Let\'s create something amazing.']}
            speed={100} // Typing speed in ms
            eraseSpeed={50} // Erasing speed in ms
            eraseDelay={500} // Time before erasing starts
            typingDelay={500} // Time before typing starts
            cursorRenderer={(cursor) => <span>{cursor}</span>}
            displayTextRenderer={(text) => <span>{text}</span>}
          />
        </IntroText>
      </motion.div>
    </CenteredPage>
  );
};

export default Landing;
