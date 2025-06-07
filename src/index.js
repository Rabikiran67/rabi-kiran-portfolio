import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import './styles/custom.css';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);