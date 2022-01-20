import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useResizeWidth from '../../hooks/useResizeWidth';
import useClickOutside from '../../hooks/useClickOutside';
import './Navbar.sass';

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = ["home", "about", "experience", "contact"];

  const screenWidth = useResizeWidth();

  useEffect(() => {
    // console.log(`screenWidth: ${screenWidth}`);
    if (screenWidth > 1024) {
      setToggleMenu(false);
    }
  }, [screenWidth]);

  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  }

  const navItemClickHandler = (idx) => {
    // console.log(idx)
    setActive(idx);
    setToggleMenu(false);
  }

  const wrapperRef = useRef(null); 
  useClickOutside(wrapperRef, () => setToggleMenu(false));

  const toggleBtnStyle = {
    transitionDelay: toggleMenu ? '0s' : '0.4s'
  };

  return( 
    <>
      <Helmet>
        <body className={ toggleMenu ? 'blur' : '' } />
      </Helmet>
      <nav className="navbar">
        <div className="max-width__container" ref={screenWidth <= 1024 ? wrapperRef : null}>
          <button className={`toggle__btn ${ toggleMenu ? 'active' : '' }`} onClick={menuToggler}>
            <span style={toggleBtnStyle}></span>
          </button>
          <div className={`navbar__container ${ toggleMenu ? 'active' : '' }`}>
            {menuItems.map((menuItem, idx) => (<a key={idx} href={`#${menuItem}`} className={`nav__items mono ${active === idx ? 'nav__active' : ''}`} onClick={() => navItemClickHandler(idx)}>{menuItem}</a>))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;