import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global styles
import App from './App';  // Import the root component of the app
import reportWebVitals from './reportWebVitals';  // Import performance measuring utility

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root container

root.render(
  <React.StrictMode>
    <App />  // Render the root component inside the StrictMode
  </React.StrictMode>
);

// Optionally measure performance
reportWebVitals(console.log);  // Log performance metrics to the console
