// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import FIPONImage from './FIPON.jpg';

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="landing-page" onClick={handleClick}>
      <div className="background-image" style={{ backgroundImage: `url(${FIPONImage})` }}></div>
      <h1 className="fipon-tech">FIPON TECH</h1>
      <p className="subtitle">Peternak ikan modern</p>
    </div>
  );
}

export default LandingPage;
