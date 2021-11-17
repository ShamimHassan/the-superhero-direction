import React from 'react';
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
      <h2>World Class Scientists Conference 2021</h2>
      <p className="heading-detail">
        We want to make a world class scientific discovery. So we have arranged a world class scientists conference.
        Though the scientists passed away, but we seems they are present in the current world.
      </p>
      <h1>Total Budget: <strong>253.55 Million</strong><sup>USD</sup></h1>
      </div>
    </header>
  );
};

export default Header;