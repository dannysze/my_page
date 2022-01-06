import React, { useEffect } from 'react';
import { Details } from './ExperienceDetails';
import './Experience.sass';
import Test from '../../assets/img/test.jpg';

const ExperienceCard = ({ detail }) => {
  return (
    <div className="timeline__container">
      <div className={`timeline__items ${detail.id % 2 ? 'item__left' : 'item__right'}`}>
        <div className="timeline__mark"></div>
        <div className="timeline__flag">
          {/* <div className="timeline__flag__img flex__container__center">
            <img src={Test} alt="" />
          </div> */}
          <div className="timeline__flag__time small-1">{detail.period}</div>
          <div className="timeline__flag__title">{detail.title} <span className="timeline__flag__company">@ <a href={detail.companyLink} target="_blank">{detail.company}</a></span></div>
        </div>
        <div className="timeline__card">
          <ul className="timeline__card__list">
            <li className="timeline__card__list__items">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li className="timeline__card__list__items">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li className="timeline__card__list__items">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section__padding">
      {/* <div>Timeline</div> */}
      <div className="timeline__container" className="max-width__container">
        {Details.map(item => <ExperienceCard key={item.id} detail={item} />)}
      </div>
    </section>
  );
}

export default Experience;