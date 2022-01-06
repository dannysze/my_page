import React, { useEffect } from 'react';
import './About.sass';
import avatar from '../../assets/img/test.jpg';

const About = () => {
  return (
    <section id="about" className="section__padding">
      <div className="max-width__container about__container">
        <div className="about__avatar__container">
          <img src={avatar} alt="Testing" id="about__avatar" />
        </div>
        <div className="about__description__container">
          <p className="about__description text__s center">Hello! My name is Danny and I enjoy creating things on websites and applications. A course of building web applications has kickstarted my interest in web development since 2019. Building (and occassionally designing) interactive applications gives me sense of satisfactory.</p>
        </div>
        <div className="about__cardsgroup">
          <div className="about__cards">
            <div className="about__cards__icon">

            </div>
            <div className="about__cards__title__container">
              <h1 className="about__cards__title">Learner</h1>
              <p className="about__cards__title__description">I gain more than knowledge from learning.</p>
            </div>
            <div className="about__cards__content__container">
              <h2 className="about__cards__content__title">Course Taken</h2>
              <p className="about__cards__content">Web Application Development, Software Engineering, Database System, Cloud Computing & Storage, Data Communications, Computer Network</p>
              <h2 className="about__cards__content__title">Current Courses</h2>
              <p className="about__cards__content">Parallel System, Cyber Security</p>
              <h2 className="about__cards__content__title">Programming Skills</h2>
              <p className="about__cards__content">C, Java, Python</p>
            </div>
          </div>
          <div className="about__cards">
            <div className="about__cards__icon">

            </div>
            <div className="about__cards__title__container">
              <h1 className="about__cards__title">Full Stack Developer</h1>
              <p className="about__cards__title__description">I like coding things from scratch, and building exceptional digital experience</p>
            </div>
            <div className="about__cards__content__container">
              <h2 className="about__cards__content__title">Front-end Skills</h2>
              <p className="about__cards__content">HTML, CSS, Sass, Scss, JavaScript, jQuery, TypeScript, React, Angular, Ionic</p>
              <h2 className="about__cards__content__title">Back-end Skills</h2>
              <p className="about__cards__content">Node.js, Express.js, PHP, SQL, MongoDB</p>
              <h2 className="about__cards__content__title">Cloud Platforms</h2>
              <p className="about__cards__content">Amazon EC2, Azure Blob</p>
            </div>
          </div>
          <div className="about__cards">
            <div className="about__cards__icon">

            </div>
            <div className="about__cards__title__container">
              <h1 className="about__cards__title">Danny Sze</h1>
              <p className="about__cards__title__description">I do what I want.</p>
            </div>
            <div className="about__cards__content__container">
              <h2 className="about__cards__content__title">Interests</h2>
              <p className="about__cards__content">Photographing, Designing, Gaming, Investment, NFT, Metaverse, Artificial Intelligence</p>
              <h2 className="about__cards__content__title">Other skills</h2>
              <p className="about__cards__content">Adobe Photoshop, MS office</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;