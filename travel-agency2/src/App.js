import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Banner from './components/Banner';
import HomePage from './components/Homepage';
import DestinationsPage from './components/DestinationsPage';
import DealsPage from './components/DealsPage';
import PartnersPage from './components/OurPartners';
import AboutUsPage from './components/AboutUs';
import './App.css';
import './components/Banner.css';


const script1 = document.createElement('script');
script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
script1.async = true;

const script2 = document.createElement('script');
script2.src = 'https://mediafiles.botpress.cloud/58d1bd69-bfea-4f0d-bec7-ecb277532bda/webchat/config.js';
script2.defer = true;

document.head.appendChild(script1);
document.head.appendChild(script2);

function App() {

  return (
    <Router>
      <div className="App">
        <Banner />
        <nav className="menu">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/destinations" exact activeClassName="active">
            Popular Destinations
          </NavLink>
          <NavLink to="/deals" exact activeClassName="active">
            Cheap Deals
          </NavLink>
          <NavLink to="/partners" exact activeClassName="active">
            Our Partners
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            About Us
          </NavLink>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </div>
        <div id="chatbot-container"></div>
      </div>
    </Router>
  );
}

export default App;
