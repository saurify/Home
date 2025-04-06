// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import CenteredPage from './CenteredPage'; // Import CenteredPage

const ContactSection = styled.section`
  color: #D1D1D1;
`;

const Contact = () => {
  return (
    <CenteredPage>
      <ContactSection>
        <h2>Contact Me</h2>
        <p>Email: myemail@example.com</p>
        <p>LinkedIn: <a href="#">My LinkedIn</a></p>
      </ContactSection>
    </CenteredPage>
  );
};

export default Contact;
