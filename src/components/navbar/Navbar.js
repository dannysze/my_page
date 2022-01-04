import React, { useState, useEffect } from 'react';
import './Navbar.sass';

const Navbar = () => {
  return( 
    <nav className="navbar">
      <div className="navbar__container max-width__container">
        <a href="" className="nav__items active">Home</a>
        <a href="#about" className="nav__items">About</a>
        <a href="#experience" className="nav__items">Experiences</a>
        <a href="#contact" className="nav__items">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;