import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import avatar from "../../assets/img/test.jpg";
import { Details } from "./AboutDetails";
// import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./About.sass";

const AboutCards = ({ detail }) => {
  return (
    <div className="about__cards">
      <div className="about__cards__icon__container">
        <img src={detail.icon} alt="" className="about__cards__icon" />
      </div>
      <div className="about__cards__title__container">
        <h1 className="about__cards__title text--m bold">{detail.role}</h1>
        <p className="about__cards__title__description text--xs">
          {detail.roleDesc}
        </p>
      </div>
      <div className="about__cards__content__container">
        {detail.details.map((item, idx) => (
          <Fragment key={idx}>
            <h2 className="about__cards__content__title text--s bold">
              {item.title}
            </h2>
            <ul className="about__cards__content__list">
              {item.skills.map((skill, idx2) => (
                <li
                  key={idx2}
                  className="about__cards__content__list__items text--xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
const About = () => {
  // const [containerRef, isIntersected] = useIntersectionObserver(1);

  return (
    <section id="about" className="section__padding">
      <div className="max-width__container about__container center">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0}>
          <h1 className="about__title text--l center bold text--uppercase">
            About Me
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0}>
          <div className="about__avatar__container flex__container__center">
            <img src={avatar} alt="Testing" id="about__avatar" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0}>
          <div className="about__description__container">
            <p className="about__description text--s center">
              I enjoy creating things on websites and applications. A course of
              building web applications has kickstarted my interest in
              development since 2019. Building (and occassionally designing)
              interactive applications gives me sense of satisfactory.
            </p>
          </div>
        </ScrollAnimation>
        <div className="about__cardsgroup">
          {Details.map((item) => (
            <ScrollAnimation
              animateIn={`fadeInUp`}
              animateOnce={true}
              delay={0}
              // offset={250}
              key={item.id}
              style={{
                order: item.pos,
              }}
            >
              <AboutCards key={item.id} detail={item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
