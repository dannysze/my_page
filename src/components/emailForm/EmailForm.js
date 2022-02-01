import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Check, ExclamationTriangle } from "react-bootstrap-icons";
import "./EmailForm.sass";

const EmailForm = () => {
  const form = useRef();
  const recaptchaRef = useRef();

  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();

  const formChangeHandler = (e, key) => {
    let currentInput = input;
    currentInput[key] = e.target.value;
    // console.log(currentInput);
    setInput(currentInput);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    recaptchaRef.current
      .executeAsync()
      .then((captchaValue) => {
        console.log(captchaValue);
        sendEmail(captchaValue);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        recaptchaRef.current.reset();
      });
  };

  const sendEmail = (captchaValue) => {
    const params = {
      ...input,
      "g-recaptcha-response": captchaValue,
    };
    console.log(params);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        params,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        console.log(res.text);
        form.current.reset();
        // notification for success
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err.text);
        // notification for fail
        setSuccess(false);
      })
      .finally(() => {
        setTimeout(() => {
          setSuccess(null);
          setLoading(false);
        }, 3000);
      });
  };

  return (
    <section id="contact" className="flex__container__center section__padding">
      <div className="max-width__container" style={{ textAlign: "center" }}>
        <TransitionGroup component={null}>
          <CSSTransition appear={true} timeout={500} classNames="form-title">
            <h1 className="form__title text--l text--uppercase center bold">
              Contact Me
            </h1>
          </CSSTransition>
          <CSSTransition appear={true} timeout={700} classNames="form-title">
            <p
              className="form__desc text--s center"
              style={{ transitionDelay: `200ms` }}
            >
              My inbox always opens for any messages.
            </p>
          </CSSTransition>
        </TransitionGroup>
        <form ref={form} id="form" onSubmit={formSubmitHandler}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          />
          <TransitionGroup component={null}>
            <CSSTransition appear={true} timeout={900} classNames="form-input">
              <input
                className="form__items form__input"
                type="text"
                name="user_name"
                placeholder="Your Name"
                onChange={(e) => formChangeHandler(e, "user_name")}
                style={{ transitionDelay: `400ms` }}
                required
              />
            </CSSTransition>
            <CSSTransition appear={true} timeout={1100} classNames="form-input">
              <input
                className="form__items form__input"
                type="email"
                name="user_email"
                placeholder="Your Email"
                onChange={(e) => formChangeHandler(e, "user_email")}
                style={{ transitionDelay: `600ms` }}
                required
              />
            </CSSTransition>
            <CSSTransition appear={true} timeout={1300} classNames="form-input">
              <textarea
                className="form__items form__textarea"
                name="message"
                rows={8}
                placeholder="Anything say to me"
                onChange={(e) => formChangeHandler(e, "message")}
                style={{ transitionDelay: `800ms` }}
                required
              />
            </CSSTransition>
            <CSSTransition appear={true} timeout={1500} classNames="form-input">
              <div
                className="form__btn__container"
                style={{ transitionDelay: `1000ms` }}
              >
                <button
                  className={`submit__btn flex__container__center test-uppercase ${
                    loading ? "loading" : ""
                  } ${success === true ? "success" : ""} ${
                    success === false ? "fail" : ""
                  }`}
                  disabled={loading}
                >
                  <span className={`spinner transition__fast`}></span>
                  <span className={`submit__btn__text bold transition__fast`}>
                    Send
                  </span>

                  <span className="check transition-bouncing__fast flex__container__center">
                    <Check />
                  </span>
                  <span className="cross transition-bouncing__fast flex__container__center">
                    <ExclamationTriangle />
                  </span>
                </button>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
