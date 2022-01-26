(this.webpackJsonpmy_page=this.webpackJsonpmy_page||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(7),a=n.n(i),s=(n(19),n(20),n(3)),r=n(8),o=function(){var e=Object(c.useState)(window.innerWidth),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e=function(){i(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},l=function(e,t){Object(c.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&(console.log("GG triggerign"),t(n))};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},d=(n(24),n(0)),u=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),u=Object(s.a)(a,2),m=u[0],_=u[1],j=o();Object(c.useEffect)((function(){j>1024&&_(!1)}),[j]);var b=Object(c.useRef)(null);l(b,(function(){return _(!1)}));var p={transitionDelay:m?"0s":"0.4s"};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.a,{children:Object(d.jsx)("body",{className:m?"blur":""})}),Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"max-width__container",ref:j<=1024?b:null,children:[Object(d.jsx)("button",{className:"toggle__btn ".concat(m?"active":""),onClick:function(){_(!m)},children:Object(d.jsx)("span",{style:p})}),Object(d.jsx)("div",{className:"navbar__container ".concat(m?"active":""),children:["home","about","experience","contact"].map((function(e,t){return Object(d.jsx)("a",{href:"#".concat(e),className:"nav__items mono ".concat(n===t?"nav__active":""),onClick:function(){return function(e){i(e),_(!1)}(t)},children:e},t)}))})]})})]})},m=(n(26),function(){var e=[Object(d.jsx)("h1",{className:"home__greet text--ms",children:"Hi everyone! I'm"}),Object(d.jsx)("h2",{className:"home__self text--xxl bold",children:"Danny SZE."}),Object(d.jsx)("h3",{className:"home__slogan text--xxl bold",children:"I have a web dream."}),Object(d.jsx)("p",{className:"home__desc text--xl",children:"I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG."})];return Object(d.jsx)("section",{id:"home",className:"",children:Object(d.jsx)("div",{className:"max-width__container",children:Object(d.jsx)("div",{className:"home__container",children:e.map((function(e,t){return Object(d.jsx)("div",{children:e},t)}))})})})}),_=(n(27),n.p+"static/media/test.d722d666.jpg"),j=[{id:1,pos:2,icon:n.p+"static/media/code.8ed54690.svg",role:"Full Stack Developer",roleDesc:"I like coding things from scratch, and building exceptional digital experience.",details:[{title:"Front-end Skills",skills:["HTML","CSS","Sass","JavaScript","React","Angular","jQuery","TypeScript","Ionic"]},{title:"Back-end Skills",skills:["Node.js","Express.js","PHP","SQL","MongoDB"]},{title:"Cloud Platforms",skills:["Amazon EC2","Azure Blob"]}]},{id:2,pos:1,icon:n.p+"static/media/learn.be9dbc88.svg",role:"Learner",roleDesc:"I gain more than knowledge from learning.",details:[{title:"Course Taken",skills:["Web Application Development","Software Engineering","Database System","Cloud Computing & Storage","Data Communications","Computer Network"]},{title:"Current Courses",skills:["Parallel System","Cyber Security"]}]},{id:3,pos:3,icon:n.p+"static/media/face.e171db10.svg",role:"Danny SZE",roleDesc:"I do what I want.",details:[{title:"Interests",skills:["Photographing","Designing","Gaming","Investment","NFT","Metaverse","Artificial Intelligence"]},{title:"Other Skills",skills:["Adobe Photoshop","Adobe Illustrator","MS Office"]}]}],b=function(e){var t=e.detail;return Object(d.jsxs)("div",{className:"about__cards",style:{order:t.pos},children:[Object(d.jsx)("div",{className:"about__cards__icon__container",children:Object(d.jsx)("img",{src:t.icon,alt:"",className:"about__cards__icon"})}),Object(d.jsxs)("div",{className:"about__cards__title__container",children:[Object(d.jsx)("h1",{className:"about__cards__title text--m bold",children:t.role}),Object(d.jsx)("p",{className:"about__cards__title__description text--xs",children:t.roleDesc})]}),Object(d.jsx)("div",{className:"about__cards__content__container",children:t.details.map((function(e,t){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h2",{className:"about__cards__content__title text--s bold",children:e.title}),Object(d.jsx)("ul",{className:"about__cards__content__list",children:e.skills.map((function(e,t){return Object(d.jsx)("li",{className:"about__cards__content__list__items text--xs",children:e},t)}))})]},t)}))})]})},p=function(){return Object(d.jsx)("section",{id:"about",className:"section__padding",children:Object(d.jsxs)("div",{className:"max-width__container about__container center",children:[Object(d.jsx)("h1",{className:"about__title text--l center bold text--uppercase",children:"About Me"}),Object(d.jsx)("div",{className:"about__avatar__container",children:Object(d.jsx)("img",{src:_,alt:"Testing",id:"about__avatar"})}),Object(d.jsx)("div",{className:"about__description__container",children:Object(d.jsx)("p",{className:"about__description text--s center",children:"I enjoy creating things on websites and applications. A course of building web applications has kickstarted my interest in development since 2019. Building (and occassionally designing) interactive applications gives me sense of satisfactory."})}),Object(d.jsx)("div",{className:"about__cardsgroup",children:j.map((function(e){return Object(d.jsx)(b,{detail:e},e.id)}))})]})})},h=[{id:1,type:1,title:"Full Stack Developer",period:"Jun 2021 - present",company:"iPYGG",companyLink:"https://www.ipygg.com/",desc:["Developed progressive and cross-platform fintech application with Agile software development principles","Integrated different modules of the application and built sustainable and stateful systems with defensive and well-documented code","Participated in Creating and Maintaining APIs and Managing PHP admin server with HMVC architecture"]},{id:2,type:2,title:"CalEvent",period:"Feb 2021 - Apr 2021",company:"Project",companyLink:"https://github.com/dannysze/CSCI3100-Project",desc:["Combined events management and ticketing systems with schedule planner functions","Provided a convenient interface for users to join events and plan their schedule"]},{id:3,type:1,title:"Student Helper",period:"Oct 2020 - May 2021",company:"CUHK",companyLink:"https://www.cuhk.edu.hk/clear/",desc:["Developed responsive front-end website with HTML5/CSS, Javascript, and jQuery according to figma design","Conducted security testing on RESTful API with Postman scripting","Prepared documentation of API and database"]},{id:4,type:1,title:"Summer Intern",period:"Jul 2020 - Sep 2021",company:"Robocode",companyLink:"https://www.robocodeacademy.com/",desc:["Built projects and materials of web programming course with React.js","Taught web programming courses including HTML5/CSS, Javascript, jQuery, and Bootstrap"]},{id:5,type:2,title:"Dashboard",period:"Jul 2020",company:"Project",companyLink:"https://github.com/dannysze/Dashboard",desc:["Created a dashboard web application with data provided by government database","Provided create, retrieve, update and delete interfaces for users to interact with the database"]}],x=(n(28),function(e){var t=e.detail;return Object(d.jsx)("div",{className:"timeline__container",children:Object(d.jsxs)("div",{className:"timeline__items ".concat(1===t.type?"item__left":"item__right"),children:[Object(d.jsx)("div",{className:"timeline__mark"}),Object(d.jsxs)("div",{className:"timeline__flag",children:[Object(d.jsxs)("div",{className:"timeline__flag__title",children:[t.title," ",Object(d.jsx)("span",{className:"timeline__flag__company",children:Object(d.jsxs)("a",{href:t.companyLink,target:"_blank",children:["@ ",t.company]})})]}),Object(d.jsx)("div",{className:"timeline__flag__time text--xs bold",children:t.period})]}),Object(d.jsx)("div",{className:"timeline__card",children:Object(d.jsx)("ul",{className:"timeline__card__list",children:t.desc.map((function(e,t){return Object(d.jsx)("li",{className:"timeline__card__list__items text--xs",children:e},t)}))})})]})})}),f=function(){return Object(d.jsx)("section",{id:"experience",className:"section__padding",children:Object(d.jsxs)("div",{className:"max-width__container",children:[Object(d.jsx)("h1",{className:"experience__title text--l center bold text--uppercase",children:"Related Experiences"}),h.map((function(e){return Object(d.jsx)(x,{detail:e},e.id)}))]})})},g=n(6),O=n(5),v=n.n(O),y=n(11),N=n(13),w=n(14),k=(n(32),function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useState)({}),i=Object(s.a)(n,2),a=i[0],r=i[1],o=function(e,t){var n=a;n[t]=e.target.value,r(n)},l=function(){var e=Object(y.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.current.executeAsync().then((function(e){u(e)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(n){var c=Object(g.a)(Object(g.a)({},a),{},{"g-recaptcha-response":n});N.a.send("service_u1yvnhh","template_e1grnto",c,"user_xzOgSTUuBpF0fm33mp4iC").then((function(n){console.log(n.text),e.current.reset(),t.current.reset()}),(function(e){console.log(e.text)}))};return Object(d.jsx)("section",{id:"contact",className:"flex__container__center section__padding",children:Object(d.jsxs)("div",{className:"max-width__container",style:{textAlign:"center"},children:[Object(d.jsx)("h1",{className:"form__title text--l text--uppercase center bold",children:"Contact Me"}),Object(d.jsx)("p",{className:"form__desc text--s center",children:"My inbox always opens for any messages."}),Object(d.jsxs)("form",{ref:e,id:"form",onSubmit:l,children:[Object(d.jsx)(w.a,{ref:t,size:"invisible",sitekey:"6LdR0DkeAAAAAD4P7GGwEHSbgYXkPScQuc88Q-nW"}),Object(d.jsx)("input",{className:"form__items form__input",type:"text",name:"user_name",placeholder:"Your Name",onChange:function(e){return o(e,"user_name")},required:!0}),Object(d.jsx)("input",{className:"form__items form__input",type:"email",name:"user_email",placeholder:"Your Email",onChange:function(e){return o(e,"user_email")},required:!0}),Object(d.jsx)("textarea",{className:"form__items form__textarea",name:"message",rows:8,placeholder:"Anything say to me",onChange:function(e){return o(e,"message")},required:!0}),Object(d.jsx)("div",{className:"form__btn__container",children:Object(d.jsx)("button",{className:"submit__btn test-uppercase",children:"Send"})})]})]})})}),S=n(37),C=n(38),P=n(39),A=n(40),D=(n(33),function(){var e=[{icon:Object(d.jsx)(S.a,{}),link:"#"},{icon:Object(d.jsx)(C.a,{}),link:"https://github.com/dannysze"},{icon:Object(d.jsx)(P.a,{}),link:"https://www.linkedin.com/in/danny-sze-049a5b168/"},{icon:Object(d.jsx)(A.a,{}),link:"https://www.instagram.com/dannnccccc/"}];return Object(d.jsx)("footer",{className:"footer flex__container__center",children:Object(d.jsxs)("div",{className:"footer__container",children:[Object(d.jsx)("div",{className:"footer-icons__ribbon flex__container__center",children:e.map((function(e,t){return Object(d.jsx)("a",{href:e.link,className:"footer-icons__link flex__container__center",children:e.icon},t)}))}),Object(d.jsxs)("p",{className:"footer__text text--xs center mono",children:["Danny Sze ",Object(d.jsx)("span",{children:"\xa9 2022"})]})]})})});n(34);var I=function(){return Object(c.useEffect)((function(){})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(p,{}),Object(d.jsx)(f,{}),Object(d.jsx)(k,{})]})]}),Object(d.jsx)(D,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};a.a.render(Object(d.jsx)(I,{}),document.getElementById("root")),E()}},[[35,1,2]]]);
//# sourceMappingURL=main.ce306895.chunk.js.map