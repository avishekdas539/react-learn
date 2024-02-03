import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>);
