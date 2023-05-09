import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client"

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />); // Provider로 감싸진 컴포넌트들만 리덕스 접근이 가능하다. store prop으로 어떤 store인지 명시.
}