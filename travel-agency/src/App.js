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
document.head.appendChild(script1);
script1.onload = () => {
const script2 = document.createElement('script');
script2.innerHTML = `
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Dan",
        "botConversationDescription": "The friendliest travel agent.",
        "botId": "13ba8d40-59dd-4020-af06-6bd48328ebaf",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "13ba8d40-59dd-4020-af06-6bd48328ebaf",
        "webhookId": "4f82ab7f-231f-483d-bdda-8e42efdf6f7b",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Dan",
        "frontendVersion": "v1",
        "useSessionStorage": false,
        "theme": "prism",
        "themeColor": "#2563eb",
        "resetOnPageReload": true,
        "clearOnReload": true,
        "enableConversationDeletion": true,
      });
    `;
script2.defer = true;
document.head.appendChild(script2);}

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
      </div>
    </Router>
  );
}

export default App;
