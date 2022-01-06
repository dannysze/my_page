import React from 'react';
import './Hero.sass';

const Hero = () => {

  const first = <h1 className="text__xs">Hi everyone! I'm</h1>;
  const second = <h2 className="text__xxl">Danny SZE.</h2>;
  const third = <h3 className="text__xl">I believe nothing is impossible to implement.</h3>;
  const heroPassage = <p className="text__m">I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG.</p>;

  const heroItems = [first, second, third, heroPassage];

  return (
    <section id="hero" className="flex__container__center">
      <div className="max-width__container">
        {heroItems.map((item, idx) => (
          <div key={idx}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );  
}

export default Hero;