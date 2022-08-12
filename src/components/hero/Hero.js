import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import useResizeWidth from "../../hooks/useResizeWidth";

import "./Hero.sass";

const Hero = () => {
  const first = <h1 className="home__greet text--ms">Hi everyone! I'm</h1>;
  const second = <h2 className="home__self text--xxl bold">Danny SZE.</h2>;
  const third = (
    <h3 className="home__slogan text--xxl bold">I have a web dream.</h3>
  );
  const heroPassage = (
    <p className="home__desc text--xl">
      I graduated from CUHK with a bachelor degree Computer Science in July,
      2022. Currently, I'm a Software/Application Engineering Analyst at
      Accenture.
    </p>
  );

  const heroItems = [first, second, third, heroPassage];

  const screenWidth = useResizeWidth();

  const getItemOrientation = () => {
    if (screenWidth >= 1024) return 1300;
    return 0;
  };

  return (
    <section id="home" className="">
      <div className="max-width__container">
        <div className="home__container">
          {heroItems.map((item, idx) => (
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOnce={true}
              delay={idx * 200 + getItemOrientation()}
              offset={0}
              key={idx}
            >
              <div key={idx}>{item}</div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
