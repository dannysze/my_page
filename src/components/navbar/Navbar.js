import React, { useState, useEffect } from 'react';
import './Navbar.sass';

const Navbar = () => {
  return( 
    <nav className="navbar">
      <div className="navbar__container max-width__container">
        <a href="#home" className="nav__items active mono">Home</a>
        <a href="#about" className="nav__items mono">About</a>
        <a href="#experience" className="nav__items mono">Experience</a>
        <a href="#contact" className="nav__items mono">Contact</a>
        <a href="#" className="nav__button mono">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;