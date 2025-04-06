// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1A1A1A;
  padding: 20px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  color: #50FA7B;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #1A1A1A;
    padding: 10px;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 1rem;
  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    display: block;
    border-radius: 4px;

    &:hover {
      background-color: #50FA7B;
      color: #1A1A1A;
    }

    &.active {
      background-color: #ff79c6;
      color: #1A1A1A;
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    width: 30px;
    height: 25px;
    position: relative;

    div {
      width: 100%;
      height: 4px;
      background-color: #D1D1D1;
      position: absolute;
      left: 0;
      transition: transform 0.3s ease;
    }

    div:nth-child(1) {
      top: 0;
    }

    div:nth-child(2) {
      top: 10px;
    }

    div:nth-child(3) {
      top: 20px;
    }

    &.open div:nth-child(1) {
      transform: rotate(45deg);
      top: 10px;
    }

    &.open div:nth-child(2) {
      opacity: 0;
    }

    &.open div:nth-child(3) {
      transform: rotate(-45deg);
      top: 10px;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Track active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <Nav>
      <Logo>Saurify</Logo>
      <BurgerMenu onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <NavLinks isOpen={isOpen}>
        <NavItem>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/projects"
            className={activeLink === '/projects' ? 'active' : ''}
            onClick={() => handleLinkClick('/projects')}
          >
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/contact"
            className={activeLink === '/contact' ? 'active' : ''}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
