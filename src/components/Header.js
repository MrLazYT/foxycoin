import React from 'react';
import logo from '../assets/fox.png';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <span>FOXYCOIN</span>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
            <li><a href="#buy">Buy Now</a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
