// CSS
import './index.css';
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Composants
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import Copyright from "./components/Copyright/Copyright";
import Loader from './components/Loader/Loader';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);