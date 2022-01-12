import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.sass';

const EmailForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((res) => {
        console.log(res.text);
      }, (err) => {
        console.log(err.text);
      });
  };

  return (
    <section id="contact" className="flex__container__center section__padding">
      <div className="max-width__container" style={{textAlign: 'center'}}>
        <h1 className="form__title text--l text--uppercase center bold">Contact Me</h1>
        <p className="form__desc text--s center">My inbox is always open for any messages.</p>
        <form ref={form} onSubmit={sendEmail} id="form">
          {/* <label>Name</label> */}
          <input className="form__items form__input" type="text" name="user_name" placeholder="Your Name" />
          {/* <label>Email</label> */}
          <input className="form__items form__input" type="email" name="user_email" placeholder="Your Email" />
          {/* <label>Message</label> */}
          <textarea className="form__items form__textarea" name="message" rows={8} placeholder="Anything say to me" />
          {/* <input type="submit" value="Send" /> */}
          <div className="form__btn__container">
            <button className="submit__btn test-uppercase">Send</button>
            {/* <button className="submit__btn submit__btn__secondary test-uppercase">Reset</button> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmailForm; 