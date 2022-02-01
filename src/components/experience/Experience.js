import React, { useState, useEffect } from "react";
import { Details } from "./ExperienceDetails";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useResizeWidth from "../../hooks/useResizeWidth";
import "./Experience.sass";

const ExperienceCard = ({ detail }) => {
  const screenWidth = useResizeWidth();

  const getItemOrientation = (type) => {
    if (screenWidth >= 1024 && type === 1) return "item__left";
    return "item__right";
  };

  return (
    <div className="timeline__container">
      <div className={`timeline__items ${getItemOrientation(detail.type)}`}>
        <TransitionGroup component={null}>
          <CSSTransition appear={true} timeout={500} classNames="timeline-mark">
            <div className="timeline__mark"></div>
          </CSSTransition>
          <CSSTransition
            appear={true}
            timeout={1000}
            classNames="timeline-content"
          >
            <div className="timeline__flag">
              {/* <div className="timeline__flag__img flex__container__center">
              <img src={Test} alt="" />
            </div> */}
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
          </CSSTransition>
          <CSSTransition
            appear={true}
            timeout={1000}
            classNames="timeline-content"
          >
            <div className="timeline__card">
              <ul className="timeline__card__list">
                <TransitionGroup component={null}>
                  {detail.desc.map((item, idx) => (
                    <CSSTransition
                      appear={true}
                      timeout={(idx + 1) * 50 + 1000}
                      classNames="timeline-content"
                      key={idx}
                    >
                      <li
                        key={idx}
                        className="timeline__card__list__items text--xs"
                        style={{ transitionDelay: `${(idx + 1) * 50}ms` }}
                      >
                        {item}
                      </li>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </ul>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section__padding">
      <div className="max-width__container">
        <TransitionGroup component={null}>
          <CSSTransition
            appear={true}
            timeout={500}
            classNames="experience-title"
          >
            <h1 className="experience__title text--l center bold text--uppercase">
              Related Experiences
            </h1>
          </CSSTransition>
          {Details.map((item) => (
            // <CSSTransition
            //   appear={true}
            //   timeout={1000}
            //   classNames="experience-timeline"
            //   key={item.id}
            // >
            <ExperienceCard key={item.id} detail={item} />
            // </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
};

export default Experience;
