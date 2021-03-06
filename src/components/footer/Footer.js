import React from "react";
import { Google, Github, Linkedin, Instagram } from 'react-bootstrap-icons';
import './Footer.sass';

const Footer = () => {

  const google = { icon: <Google />, link: '#' };
  const github = { icon: <Github />, link: 'https://github.com/dannysze' };
  const linkedIn = { icon: <Linkedin />, link: 'https://www.linkedin.com/in/danny-sze-049a5b168/' };
  const instagram = { icon: <Instagram />, link: 'https://www.instagram.com/dannnccccc/' };

  const buttons = [google, github, linkedIn, instagram];

  return (
    <footer className="footer flex__container__center">
      <div className="footer__container">
        <div className="footer-icons__ribbon flex__container__center">
          {/* <div className="footer-icons__containers"> */}
            {/* <a href="#" className="footer-icons__link flex__container__center">
              <Google />
            </a> */}
          {/* </div> */}
          {/* <div className="footer-icons__containers"> */}
            {/* <a href="https://github.com/dannysze" className="footer-icons__link flex__container__center">
              <Github />
            </a> */}
          {/* </div> */}
          {/* <div className="footer-icons__containers"> */}
            {/* <a href="https://www.linkedin.com/in/danny-sze-049a5b168/" className="footer-icons__link flex__container__center">
              <Linkedin />
            </a> */}
          {/* </div> */}
          {/* <div className="footer-icons__containers"> */}
            {/* <a href="https://www.instagram.com/dannnccccc/" className="footer-icons__link flex__container__center">
              <Instagram />
            </a> */}
          {/* </div> */}
          {buttons.map((item, idx) => (
            <a key={idx} href={item.link} className="footer-icons__link flex__container__center">
              {item.icon}
            </a> 
          ))}
        </div>
        <p className="footer__text text__xs center">Danny Sze &copy; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;