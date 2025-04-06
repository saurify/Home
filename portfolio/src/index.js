import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import 'react-dom/client'

import './index.css';
import App from './App';

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the root element to render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
