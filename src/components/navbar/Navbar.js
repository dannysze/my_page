import React, { useState,  } from 'react';
import { Helmet } from 'react-helmet';
import './Navbar.sass';

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = ["home", "about", "experience", "contact"];

  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  }

  const navItemClickHandler = (idx) => {
    // console.log(idx)
    setActive(idx);
    setToggleMenu(false);
  }

  return( 
    <>
      <Helmet>
        <body className={ toggleMenu ? 'blur' : '' } />
      </Helmet>
      <nav className="navbar">
        <div className="max-width__container">
          <button className="toggle__btn" onClick={menuToggler}>Text</button>
          <div className={`navbar__container ${ toggleMenu ? 'active' : '' }`}>
            {menuItems.map((menuItem, idx) => (<a key={idx} href={`#${menuItem}`} className={`nav__items mono ${active === idx ? 'nav__active' : ''}`} onClick={() => navItemClickHandler(idx)}>{menuItem}</a>))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;