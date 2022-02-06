import React from "react";
import { Google, Github, Linkedin, Instagram } from "react-bootstrap-icons";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollAnimation from "react-animate-on-scroll";
import "./Footer.sass";

const Footer = () => {
  const google = { icon: <Google />, link: "#" };
  const github = { icon: <Github />, link: "https://github.com/dannysze" };
  const linkedIn = {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/danny-sze-049a5b168/",
  };
  const instagram = {
    icon: <Instagram />,
    link: "https://www.instagram.com/dannnccccc/",
  };

  const buttons = [google, github, linkedIn, instagram];

  return (
    <footer className="footer flex__container__center">
      <div className="footer__container">
        <div className="footer-icons__ribbon flex__container__center">
          {buttons.map((item, idx) => (
            <ScrollAnimation
              animateIn="bounceInDown"
              delay={idx * 200}
              key={idx}
              animateOnce={true}
            >
              <a
                key={idx}
                href={item.link}
                className="footer-icons__link flex__container__center transition__xfast"
              >
                {item.icon}
              </a>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation
          animateIn="bounceInDown"
          delay={0.8}
          animateOnce={true}
          offset={0}
        >
          <p className="footer__text text--xs center mono">
            Danny Sze <span>&copy; 2022</span>
          </p>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
