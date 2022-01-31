import React, {  } from 'react';
import { Details } from './ExperienceDetails';
import './Experience.sass';

const ExperienceCard = ({ detail }) => {
  return (
    <div className="timeline__container">
      <div className={`timeline__items ${detail.type === 1 ? 'item__left' : 'item__right'}`}>
        <div className="timeline__mark"></div>
        <div className="timeline__flag">
          {/* <div className="timeline__flag__img flex__container__center">
            <img src={Test} alt="" />
          </div> */}
          <div className="timeline__flag__title">{detail.title} <span className="timeline__flag__company"><a href={detail.companyLink} target="_blank" rel="noreferrer">@ {detail.company}</a></span></div>
          <div className="timeline__flag__time text--xs bold">{detail.period}</div>
        </div>
        <div className="timeline__card">
          <ul className="timeline__card__list">
            {detail.desc.map((item, idx) => 
              <li key={idx} className="timeline__card__list__items text--xs">{item}</li>
            )}
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
      <div className="max-width__container">
        <h1 className="experience__title text--l center bold text--uppercase">Related Experiences</h1>
        {Details.map(item => <ExperienceCard key={item.id} detail={item} />)}
      </div>
    </section>
  );
}

export default Experience;