// src/HomePage.js
import React from 'react';
import './HomePage.css';
import userImage from './profile.png'; // Import user image
import menuIcon from './menu.png'; // Import menu icon
import homeIcon from './home_fill.png'; // Import home icon
import calendarIcon from './date_range_fill.png'; // Import calendar icon
import chartIcon from './chart_fill.png'; // Import chart icon
import settingsIcon from './settings_fill.png'; // Import settings icon
import bellIcon from './bell_fill.png'; // Import bell icon

const HomePage = () => {
  return (
    <div className="home">
      <div className="top-bar">
        <img src={menuIcon} alt="menu" className="menu-icon" />
        <div className="user-info">
          <span>Hello Aldito</span>
          <div className="user-avatar">
            <img src={userImage} alt="User" />
          </div>
        </div>
        <img src={bellIcon} alt="Notifications" className="bell-icon" />
      </div>
      <div className="bottom-navbar">
        <div className="nav-item">
          <img src={homeIcon} alt="Home" />
        </div>
        <div className="nav-item">
          <img src={calendarIcon} alt="Calendar" />
        </div>
        <div className="nav-item">
          <img src={chartIcon} alt="Chart" />
        </div>
        <div className="nav-item">
          <img src={settingsIcon} alt="Settings" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
