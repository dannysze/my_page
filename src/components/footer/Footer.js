import React from "react";
import { Google, Github, Linkedin, Instagram } from "react-bootstrap-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
          <TransitionGroup component={null}>
            {buttons.map((item, idx) => (
              <CSSTransition
                appear={true}
                timeout={700}
                classNames="footer-link"
                key={idx}
              >
                <a
                  key={idx}
                  href={item.link}
                  className="footer-icons__link flex__container__center transition__xfast"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {item.icon}
                </a>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <TransitionGroup>
          <CSSTransition appear={true} timeout={800} classNames="footer-text">
            <p
              className="footer__text text--xs center mono"
              style={{ transitionDelay: `400ms` }}
            >
              Danny Sze <span>&copy; 2022</span>
            </p>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </footer>
  );
};

export default Footer;
