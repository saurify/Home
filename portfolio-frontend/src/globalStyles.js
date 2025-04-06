// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #1A1A1A; /* Solid dark background */
    color: #D1D1D1;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    color: #FF79C6;
  }

  a {
    text-decoration: none;
    color: #50FA7B;
  }

  a:hover {
    color: #FF79C6;
  }

  /* Mobile-first styling */
  @media (min-width: 768px) {
    body {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    body {
      font-size: 1.2rem;
    }
  }
`;

export default GlobalStyle;
