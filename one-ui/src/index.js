import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client"

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}