import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/Header";
import Copyright from "./components/Copyright/Copyright";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar />
      <Header />
      <Home />
      <Copyright />
  </React.StrictMode>
);