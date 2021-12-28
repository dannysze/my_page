import React from "react";
import { Google, Github, Linkedin, Instagram } from 'react-bootstrap-icons';
import './Footer.sass';

const Footer = () => {

  return (
    <footer className="footer flex__container__center">
      <div className="footer__container">
        <div className="footer-icons__ribbon flex__container__center">
          {/* <div className="footer-icons__containers"> */}
            <a href="#" className="footer-icons__link flex__container__center">
              <Google />
            </a>
          {/* </div> */}
          {/* <div className="footer-icons__containers"> */}
            <a href="https://github.com/dannysze" className="footer-icons__link flex__container__center">
              <Github />
            </a>
          {/* </div> */}
          {/* <div className="footer-icons__containers"> */}
            <a href="https://www.linkedin.com/in/danny-sze-049a5b168/" className="footer-icons__link flex__container__center">
              <Linkedin />
            </a>
          {/* </div> */}
          {/* <div className="footer-icons__containers"> */}
            <a href="https://www.instagram.com/dannnccccc/" className="footer-icons__link flex__container__center">
              <Instagram />
            </a>
          {/* </div> */}
        </div>
        <p className="footer__text small-1 center">Danny Sze &copy; 2022</p>
      </div>
    </footer>
  )
}

export default Footer;