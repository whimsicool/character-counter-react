// src/components/Header.jsx
import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Character Counter</div>
      <button className="refresh-button" onClick={() => window.location.reload()}>
        🌙
      </button>
    </header>
  );
};

export default Header;
