(this.webpackJsonpmy_page=this.webpackJsonpmy_page||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(6),s=n.n(c),i=(n(24),n(25),n(3)),r=n(12),o=n(47),l=n(46),d=function(){var e=Object(a.useState)(window.innerWidth),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},m=function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&(console.log("GG triggerign"),t(n))};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},j=(n(29),n(0)),u=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),b=u[0],_=u[1],p=d();Object(a.useEffect)((function(){p>1024&&_(!1)}),[p]);var h=Object(a.useRef)(null);m(h,(function(){return _(!1)}));var x={transitionDelay:b?"0s":"0.4s"};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("body",{className:b?"blur":""})}),Object(j.jsx)("header",{children:Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"max-width__container",ref:p<=1024?h:null,children:[Object(j.jsx)("button",{className:"toggle__btn ".concat(b?"active":""),onClick:function(){_(!b)},children:Object(j.jsx)("span",{style:x})}),Object(j.jsx)("div",{className:"navbar__container ".concat(b?"active":""),children:Object(j.jsx)(o.a,{component:null,children:["home","about","experience","contact"].map((function(e,t){return Object(j.jsx)(l.a,{appear:!0,timeout:800,classNames:"nav-link",children:Object(j.jsx)("a",{href:"#".concat(e),className:"nav__items mono ".concat(n===t?"nav__active":""),onClick:function(){return function(e){c(e),_(!1)}(t)},style:{transitionDelay:"".concat(100*t,"ms")},children:e},t)},t)}))})})]})})})]})},b=(n(31),function(){var e=[Object(j.jsx)("h1",{className:"home__greet text--ms",children:"Hi everyone! I'm"}),Object(j.jsx)("h2",{className:"home__self text--xxl bold",children:"Danny SZE."}),Object(j.jsx)("h3",{className:"home__slogan text--xxl bold",children:"I have a web dream."}),Object(j.jsx)("p",{className:"home__desc text--xl",children:"I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG."})],t=Object(a.useState)(!0),n=Object(i.a)(t,2);n[0],n[1];return Object(j.jsx)("section",{id:"home",className:"",children:Object(j.jsx)("div",{className:"max-width__container",children:Object(j.jsx)("div",{className:"home__container",children:Object(j.jsx)(o.a,{component:null,children:e.map((function(e,t){return Object(j.jsx)(l.a,{appear:!0,timeout:1400,classNames:"hero",children:Object(j.jsx)("div",{style:{transitionDelay:"".concat(200*t,"ms")},children:e},t)},t)}))})})})})}),_=(n(32),n.p+"static/media/test.d722d666.jpg"),p=[{id:1,pos:2,icon:n.p+"static/media/code.8ed54690.svg",role:"Full Stack Developer",roleDesc:"I like coding things from scratch, and building exceptional digital experience.",details:[{title:"Front-end Skills",skills:["HTML","CSS","Sass","JavaScript","React","Angular","jQuery","TypeScript","Ionic"]},{title:"Back-end Skills",skills:["Node.js","Express.js","PHP","SQL","MongoDB"]},{title:"Cloud Platforms",skills:["Amazon EC2","Azure Blob"]}]},{id:2,pos:1,icon:n.p+"static/media/learn.be9dbc88.svg",role:"Learner",roleDesc:"I gain more than knowledge from learning.",details:[{title:"Course Taken",skills:["Web Application Development","Software Engineering","Database System","Cloud Computing & Storage","Data Communications","Computer Network"]},{title:"Current Courses",skills:["Parallel System","Cyber Security"]}]},{id:3,pos:3,icon:n.p+"static/media/face.e171db10.svg",role:"Danny SZE",roleDesc:"I do what I want.",details:[{title:"Interests",skills:["Photographing","Designing","Gaming","Investment","NFT","Metaverse","Artificial Intelligence"]},{title:"Other Skills",skills:["Adobe Photoshop","Adobe Illustrator","MS Office"]}]}],h=function(e){var t=e.detail;return Object(j.jsxs)("div",{className:"about__cards",style:{order:t.pos,transitionDelay:"".concat(100*t.id+400,"ms")},children:[Object(j.jsx)("div",{className:"about__cards__icon__container",children:Object(j.jsx)("img",{src:t.icon,alt:"",className:"about__cards__icon"})}),Object(j.jsxs)("div",{className:"about__cards__title__container",children:[Object(j.jsx)("h1",{className:"about__cards__title text--m bold",children:t.role}),Object(j.jsx)("p",{className:"about__cards__title__description text--xs",children:t.roleDesc})]}),Object(j.jsx)("div",{className:"about__cards__content__container",children:t.details.map((function(e,t){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("h2",{className:"about__cards__content__title text--s bold",children:e.title}),Object(j.jsx)("ul",{className:"about__cards__content__list",children:e.skills.map((function(e,t){return Object(j.jsx)("li",{className:"about__cards__content__list__items text--xs",children:e},t)}))})]},t)}))})]})},x=function(){return Object(j.jsx)("section",{id:"about",className:"section__padding",children:Object(j.jsxs)("div",{className:"max-width__container about__container center",children:[Object(j.jsxs)(o.a,{component:null,children:[Object(j.jsx)(l.a,{appear:!0,timeout:1e3,classNames:"about",children:Object(j.jsx)("h1",{className:"about__title text--l center bold text--uppercase",children:"About Me"})}),Object(j.jsx)(l.a,{appear:!0,timeout:1e3,classNames:"about",children:Object(j.jsx)("div",{className:"about__avatar__container flex__container__center",style:{transitionDelay:"200ms"},children:Object(j.jsx)("img",{src:_,alt:"Testing",id:"about__avatar"})})}),Object(j.jsx)(l.a,{appear:!0,timeout:1e3,classNames:"about",children:Object(j.jsx)("div",{className:"about__description__container",style:{transitionDelay:"400ms"},children:Object(j.jsx)("p",{className:"about__description text--s center",children:"I enjoy creating things on websites and applications. A course of building web applications has kickstarted my interest in development since 2019. Building (and occassionally designing) interactive applications gives me sense of satisfactory."})})})]}),Object(j.jsx)("div",{className:"about__cardsgroup",children:Object(j.jsx)(o.a,{component:null,children:p.map((function(e){return Object(j.jsx)(l.a,{appear:!0,timeout:1e3,classNames:"about-cards",children:Object(j.jsx)(h,{detail:e},e.id)},e.id)}))})})]})})},f=[{id:1,type:1,title:"Full Stack Developer",period:"Jun 2021 - present",company:"iPYGG",companyLink:"https://www.ipygg.com/",desc:["Developed progressive and cross-platform fintech application with Agile software development principles","Integrated different modules of the application and built sustainable and stateful systems with defensive and well-documented code","Participated in Creating and Maintaining APIs and Managing PHP admin server with HMVC architecture"]},{id:2,type:2,title:"CalEvent",period:"Feb 2021 - Apr 2021",company:"Project",companyLink:"https://github.com/dannysze/CSCI3100-Project",desc:["Combined events management and ticketing systems with schedule planner functions","Provided a convenient interface for users to join events and plan their schedule"]},{id:3,type:1,title:"Student Helper",period:"Oct 2020 - May 2021",company:"CUHK",companyLink:"https://www.cuhk.edu.hk/clear/",desc:["Developed responsive front-end website with HTML5/CSS, Javascript, and jQuery according to figma design","Conducted security testing on RESTful API with Postman scripting","Prepared documentation of API and database"]},{id:4,type:1,title:"Summer Intern",period:"Jul 2020 - Sep 2021",company:"Robocode",companyLink:"https://www.robocodeacademy.com/",desc:["Built projects and materials of web programming course with React.js","Taught web programming courses including HTML5/CSS, Javascript, jQuery, and Bootstrap"]},{id:5,type:2,title:"Dashboard",period:"Jul 2020",company:"Project",companyLink:"https://github.com/dannysze/Dashboard",desc:["Created a dashboard web application with data provided by government database","Provided create, retrieve, update and delete interfaces for users to interact with the database"]}],O=(n(33),function(e){var t,n=e.detail,a=d();return Object(j.jsx)("div",{className:"timeline__container",children:Object(j.jsx)("div",{className:"timeline__items ".concat((t=n.type,a>=1024&&1===t?"item__left":"item__right")),children:Object(j.jsxs)(o.a,{component:null,children:[Object(j.jsx)(l.a,{appear:!0,timeout:500,classNames:"timeline-mark",children:Object(j.jsx)("div",{className:"timeline__mark"})}),Object(j.jsx)(l.a,{appear:!0,timeout:1e3,classNames:"timeline-content",children:Object(j.jsxs)("div",{className:"timeline__flag",children:[Object(j.jsxs)("div",{className:"timeline__flag__title",children:["".concat(n.title," "),Object(j.jsx)("span",{className:"timeline__flag__company",children:Object(j.jsxs)("a",{href:n.companyLink,target:"_blank",rel:"noreferrer",children:["@ ",n.company]})})]}),Object(j.jsx)("div",{className:"timeline__flag__time text--xs bold",children:n.period})]})}),Object(j.jsx)(l.a,{appear:!0,timeout:1e3,classNames:"timeline-content",children:Object(j.jsx)("div",{className:"timeline__card",children:Object(j.jsx)("ul",{className:"timeline__card__list",children:Object(j.jsx)(o.a,{component:null,children:n.desc.map((function(e,t){return Object(j.jsx)(l.a,{appear:!0,timeout:50*(t+1)+1e3,classNames:"timeline-content",children:Object(j.jsx)("li",{className:"timeline__card__list__items text--xs",style:{transitionDelay:"".concat(50*(t+1),"ms")},children:e},t)},t)}))})})})})]})})})}),g=function(){return Object(j.jsx)("section",{id:"experience",className:"section__padding",children:Object(j.jsx)("div",{className:"max-width__container",children:Object(j.jsxs)(o.a,{component:null,children:[Object(j.jsx)(l.a,{appear:!0,timeout:500,classNames:"experience-title",children:Object(j.jsx)("h1",{className:"experience__title text--l center bold text--uppercase",children:"Related Experiences"})}),f.map((function(e){return Object(j.jsx)(O,{detail:e},e.id)}))]})})})},v=n(11),y=n(16),N=n(17),w=n(40),k=n(41),S=(n(36),function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useState)({}),c=Object(i.a)(n,2),s=c[0],r=c[1],d=Object(a.useState)(!1),m=Object(i.a)(d,2),u=m[0],b=m[1],_=Object(a.useState)(),p=Object(i.a)(_,2),h=p[0],x=p[1],f=function(e,t){var n=s;n[t]=e.target.value,r(n)},O=function(t){var n=Object(v.a)(Object(v.a)({},s),{},{"g-recaptcha-response":t});console.log(n),y.a.send("service_u1yvnhh","template_e1grnto",n,"user_xzOgSTUuBpF0fm33mp4iC").then((function(t){console.log(t.text),e.current.reset(),x(!0)})).catch((function(e){console.log(e.text),x(!1)})).finally((function(){setTimeout((function(){x(null),b(!1)}),3e3)}))};return Object(j.jsx)("section",{id:"contact",className:"flex__container__center section__padding",children:Object(j.jsxs)("div",{className:"max-width__container",style:{textAlign:"center"},children:[Object(j.jsxs)(o.a,{component:null,children:[Object(j.jsx)(l.a,{appear:!0,timeout:500,classNames:"form-title",children:Object(j.jsx)("h1",{className:"form__title text--l text--uppercase center bold",children:"Contact Me"})}),Object(j.jsx)(l.a,{appear:!0,timeout:700,classNames:"form-title",children:Object(j.jsx)("p",{className:"form__desc text--s center",style:{transitionDelay:"200ms"},children:"My inbox always opens for any messages."})})]}),Object(j.jsxs)("form",{ref:e,id:"form",onSubmit:function(e){e.preventDefault(),b(!0),t.current.executeAsync().then((function(e){console.log(e),O(e)})).catch((function(e){console.log(e)})).finally((function(){t.current.reset()}))},children:[Object(j.jsx)(N.a,{ref:t,size:"invisible",sitekey:"6LdR0DkeAAAAAD4P7GGwEHSbgYXkPScQuc88Q-nW"}),Object(j.jsxs)(o.a,{component:null,children:[Object(j.jsx)(l.a,{appear:!0,timeout:900,classNames:"form-input",children:Object(j.jsx)("input",{className:"form__items form__input",type:"text",name:"user_name",placeholder:"Your Name",onChange:function(e){return f(e,"user_name")},style:{transitionDelay:"400ms"},required:!0})}),Object(j.jsx)(l.a,{appear:!0,timeout:1100,classNames:"form-input",children:Object(j.jsx)("input",{className:"form__items form__input",type:"email",name:"user_email",placeholder:"Your Email",onChange:function(e){return f(e,"user_email")},style:{transitionDelay:"600ms"},required:!0})}),Object(j.jsx)(l.a,{appear:!0,timeout:1300,classNames:"form-input",children:Object(j.jsx)("textarea",{className:"form__items form__textarea",name:"message",rows:8,placeholder:"Anything say to me",onChange:function(e){return f(e,"message")},style:{transitionDelay:"800ms"},required:!0})}),Object(j.jsx)(l.a,{appear:!0,timeout:1500,classNames:"form-input",children:Object(j.jsx)("div",{className:"form__btn__container",style:{transitionDelay:"1000ms"},children:Object(j.jsxs)("button",{className:"submit__btn flex__container__center test-uppercase ".concat(u?"loading":""," ").concat(!0===h?"success":""," ").concat(!1===h?"fail":""),disabled:u,children:[Object(j.jsx)("span",{className:"spinner transition__fast"}),Object(j.jsx)("span",{className:"submit__btn__text bold transition__fast",children:"Send"}),Object(j.jsx)("span",{className:"check transition-bouncing__fast flex__container__center",children:Object(j.jsx)(w.a,{})}),Object(j.jsx)("span",{className:"cross transition-bouncing__fast flex__container__center",children:Object(j.jsx)(k.a,{})})]})})})]})]})]})})}),D=n(42),C=n(43),P=n(44),A=n(45),I=(n(37),function(){var e=[{icon:Object(j.jsx)(D.a,{}),link:"#"},{icon:Object(j.jsx)(C.a,{}),link:"https://github.com/dannysze"},{icon:Object(j.jsx)(P.a,{}),link:"https://www.linkedin.com/in/danny-sze-049a5b168/"},{icon:Object(j.jsx)(A.a,{}),link:"https://www.instagram.com/dannnccccc/"}];return Object(j.jsx)("footer",{className:"footer flex__container__center",children:Object(j.jsxs)("div",{className:"footer__container",children:[Object(j.jsx)("div",{className:"footer-icons__ribbon flex__container__center",children:Object(j.jsx)(o.a,{component:null,children:e.map((function(e,t){return Object(j.jsx)(l.a,{appear:!0,timeout:700,classNames:"footer-link",children:Object(j.jsx)("a",{href:e.link,className:"footer-icons__link flex__container__center transition__xfast",style:{transitionDelay:"".concat(100*t,"ms")},children:e.icon},t)},t)}))})}),Object(j.jsx)(o.a,{children:Object(j.jsx)(l.a,{appear:!0,timeout:800,classNames:"footer-text",children:Object(j.jsxs)("p",{className:"footer__text text--xs center mono",style:{transitionDelay:"400ms"},children:["Danny Sze ",Object(j.jsx)("span",{children:"\xa9 2022"})]})})})]})})});n(38);var E=function(){return Object(a.useEffect)((function(){})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(x,{}),Object(j.jsx)(g,{}),Object(j.jsx)(S,{})]})]}),Object(j.jsx)(I,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};s.a.render(Object(j.jsx)(E,{}),document.getElementById("root")),L()}},[[39,1,2]]]);
//# sourceMappingURL=main.8cd234c0.chunk.js.map