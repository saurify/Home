// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #007bff, #ff007b);
  color: white;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 5px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  color: #f9f9f9;
  font-family: 'Orbitron', sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
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
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    background-color: #00ff99;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <Title>Welcome to My Retro Portfolio</Title>
      <Subtitle>Where modern software meets a blast from the past</Subtitle>
      <Button href="#projects">Explore My Work</Button>
    </HeroContainer>
  );
};

export default Hero;
