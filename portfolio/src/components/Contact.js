// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const Button = styled.a`
  padding: 12px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to email me.</p>
      <Button href="mailto:youremail@example.com">Email Me</Button>
    </ContactContainer>
  );
};

export default Contact;
// This component is a simple contact section with a button to email the user.
// It uses styled-components for styling and is responsive.                                         