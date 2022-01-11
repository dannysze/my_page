import React from 'react';
import './Hero.sass';

const Hero = () => {

  const first = <h1 className="home__greet text__m">Hi everyone! I'm</h1>;
  const second = <h2 className="home__self text__xxl">Danny SZE.</h2>;
  const third = <h3 className="home__slogan text__xxl">I have a web dream.</h3>;
  const heroPassage = <p className="home__desc text__l">I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG.</p>;

  const heroItems = [first, second, third, heroPassage];

  return (
    <section id="home" className="">
      <div className="max-width__container">
        <div className="home__container">
          {heroItems.map((item, idx) => (
            <div key={idx}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
}

export default Hero;