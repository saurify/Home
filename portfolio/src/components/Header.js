// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#hero">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#resume">Resume</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
