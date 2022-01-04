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
        {/* <div className="timeline__card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut obcaecati dolor modi rerum veniam officia asperiores ex, tempora quaerat aliquam, deserunt, totam aliquid eveniet laborum velit nobis provident culpa. Dicta, accusamus nemo, quia animi cumque dolores incidunt aperiam voluptas quis quidem fugit itaque? Culpa, explicabo. Minima iusto velit mollitia vero nobis quo odio vel, optio aperiam, nostrum odit tenetur?</div> */}
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className=" max-width__container">
      {/* <div>Timeline</div> */}
      <div className="timeline__container">
        {Details.map(item => <ExperienceCard key={item.id} detail={item} />)}
      </div>
    </section>
  );
}

export default Experience;