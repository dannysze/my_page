import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Hero.sass';

const Hero = () => {

  const first = <h1 className="home__greet text--ms">Hi everyone! I'm</h1>;
  const second = <h2 className="home__self text--xxl bold">Danny SZE.</h2>;
  const third = <h3 className="home__slogan text--xxl bold">I have a web dream.</h3>;
  const heroPassage = <p className="home__desc text--xl">I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG.</p>;

  const heroItems = [first, second, third, heroPassage];

  const [active, setActive] = useState(true);

  return (
    <section id="home" className="">
      <div className="max-width__container">
        <div className="home__container">
          <TransitionGroup component={null}>
            {heroItems.map((item, idx) => (
              <CSSTransition
                appear={true}
                timeout={1400}
                classNames="hero"
                key={idx}
              >
                <div key={idx} style={{ transitionDelay: `${idx * 200}ms` }}>
                  {item}
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </section>
  );  
}

export default Hero;