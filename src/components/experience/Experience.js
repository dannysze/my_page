import React, { useState, useEffect } from "react";
import { Details } from "./ExperienceDetails";
import ScrollAnimation from "react-animate-on-scroll";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import useResizeWidth from "../../hooks/useResizeWidth";
import "./Experience.sass";

const ExperienceCard = ({ detail }) => {
  const screenWidth = useResizeWidth();

  const getItemOrientation = (type) => {
    if (screenWidth >= 1024 && type === 1) return "Left";
    return "Right";
  };

  return (
    <div className="timeline__container">
      {/* <ScrollAnimation
        animateIn={`fadeIn${getItemOrientation(detail.type)}`}
        animateOnce={true}
        offset={100}
      > */}
      <div
        className={`timeline__items item__${getItemOrientation(
          detail.type
        ).toLowerCase()}`}
      >
        <div className="timeline__mark"></div>
        <div className="timeline__flag">
          <div className="timeline__flag__title">
            {`${detail.title} `}
            <span className="timeline__flag__company">
              <a href={detail.companyLink} target="_blank" rel="noreferrer">
                @ {detail.company}
              </a>
            </span>
          </div>
          <div className="timeline__flag__time text--xs bold">
            {detail.period}
          </div>
        </div>
        <div className="timeline__card">
          <ul className="timeline__card__list">
            {detail.desc.map((item, idx) => (
              <li
                key={idx}
                className="timeline__card__list__items text--xs"
                style={{ transitionDelay: `${(idx + 1) * 50}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section__padding">
      <div className="max-width__container">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h1 className="experience__title text--l center bold text--uppercase">
            Related Experiences
          </h1>
        </ScrollAnimation>
        {Details.map((item) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce={true}
            key={item.id}
          >
            <ExperienceCard key={item.id} detail={item} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Experience;
