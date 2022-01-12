import React from 'react';
import './Hero.sass';

const Hero = () => {

  const first = <h1 className="home__greet text--m">Hi everyone! I'm</h1>;
  const second = <h2 className="home__self text--xxl bold">Danny SZE.</h2>;
  const third = <h3 className="home__slogan text--xxl bold">I have a web dream.</h3>;
  const heroPassage = <p className="home__desc text--l">I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG.</p>;

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