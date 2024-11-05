import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import siliconLogo from '../../assets/images/siliconlogga.svg'; 
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';



  
  const Header = () => {
    return (
      <header className="header">
        <div className="header__left">
          <img src={siliconLogo} alt="Silicon Logo" className="header__logo" />
          <nav className="header__nav">
            <Link to="/" className="header__link">Silicon</Link>
            <Link to="/features" className="header__link">Features</Link>
            <Link to="/contact" className="header__link">Contact</Link>
          </nav>
        </div>
        <div className="header__right">
          <DarkModeToggle /> {/* Importera och använd DarkModeToggle-komponenten här */}
          <button className="header__button">Sign in / up</button>
        </div>
      </header>
    );
  };
  
  export default Header;