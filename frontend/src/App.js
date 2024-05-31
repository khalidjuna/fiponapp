// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import SchedulePage from './SchedulePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage/>} />

      </Routes>
    </Router>
  );
};

export default App;
