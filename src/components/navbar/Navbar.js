import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import useResizeWidth from "../../hooks/useResizeWidth";
import useClickOutside from "../../hooks/useClickOutside";
import "./Navbar.sass";
import ScrollAnimation from "react-animate-on-scroll";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [animated, setAnimated] = useState(false);

  const menuItems = ["home", "about", "experience", "contact"];

  const screenWidth = useResizeWidth();

  useEffect(() => {
    if (screenWidth > 1024) {
      setToggleMenu(false);
    }
  }, [screenWidth]);

  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  };

  const navItemClickHandler = (idx) => {
    // console.log(idx)
    setActive(idx);
    setToggleMenu(false);
  };

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setToggleMenu(false));

  const toggleBtnStyle = {
    transitionDelay: toggleMenu ? "0s" : "0.4s",
  };

  const stopAnimation = () => {
    setAnimated(true);
  };

  return (
    <>
      <Helmet>
        <body className={toggleMenu ? "blur" : ""} />
      </Helmet>
      <header>
        <nav
          className="navbar max-width__container"
          ref={screenWidth <= 1024 ? wrapperRef : null}
        >
          {/* <div
            className="max-width__container"
          > */}
          <ScrollAnimation
            animateIn="bounceInDown"
            offset={0}
            animateOnce={true}
            initiallyVisible={animated}
            afterAnimatedIn={stopAnimation}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              zIndex: 20,
            }}
          >
            <button
              className={`toggle__btn ${toggleMenu ? "active" : ""}`}
              onClick={menuToggler}
            >
              <span style={toggleBtnStyle}></span>
            </button>
          </ScrollAnimation>
          <div className={`navbar__container ${toggleMenu ? "active" : ""}`}>
            {menuItems.map((menuItem, idx) =>
              screenWidth > 1024 ? (
                <ScrollAnimation
                  animateIn="bounceInDown"
                  animateOnce={true}
                  initiallyVisible={animated}
                  afterAnimatedIn={stopAnimation}
                  delay={idx * 200}
                  offset={-200}
                  key={idx}
                >
                  <a
                    key={idx}
                    href={`#${menuItem}`}
                    className={`nav__items mono ${
                      active === idx ? "nav__active" : ""
                    }`}
                    onClick={() => navItemClickHandler(idx)}
                  >
                    {menuItem}
                  </a>
                </ScrollAnimation>
              ) : (
                <a
                  key={idx}
                  href={`#${menuItem}`}
                  className={`nav__items mono ${
                    active === idx ? "nav__active" : ""
                  }`}
                  onClick={() => navItemClickHandler(idx)}
                >
                  {menuItem}
                </a>
              )
            )}
          </div>
          {/* </div> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
