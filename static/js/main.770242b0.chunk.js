(this.webpackJsonpmy_page=this.webpackJsonpmy_page||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),i=n.n(c),s=(n(20),n(4)),r=(n(21),n(22),n(9)),o=function(){var e=Object(a.useState)(window.innerWidth),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},l=function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&(console.log("GG triggerign"),t(n))};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},d=(n(25),n(3)),m=n.n(d),j=n(0),u=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),d=Object(s.a)(i,2),u=d[0],b=d[1],_=Object(a.useState)(!1),p=Object(s.a)(_,2),h=p[0],f=p[1],x=o();Object(a.useEffect)((function(){x>1024&&b(!1)}),[x]);var O=function(e){c(e),b(!1)},g=Object(a.useRef)(null);l(g,(function(){return b(!1)}));var v={transitionDelay:u?"0s":"0.4s"},y=function(){f(!0)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("body",{className:u?"blur":""})}),Object(j.jsx)("header",{children:Object(j.jsxs)("nav",{className:"navbar max-width__container",ref:x<=1024?g:null,children:[Object(j.jsx)(m.a,{animateIn:"bounceInDown",offset:0,animateOnce:!0,initiallyVisible:h,afterAnimatedIn:y,style:{height:"100%",display:"flex",alignItems:"center",zIndex:20},children:Object(j.jsx)("button",{className:"toggle__btn ".concat(u?"active":""),onClick:function(){b(!u)},children:Object(j.jsx)("span",{style:v})})}),Object(j.jsx)("div",{className:"navbar__container ".concat(u?"active":""),children:["home","about","experience","contact"].map((function(e,t){return x>1024?Object(j.jsx)(m.a,{animateIn:"bounceInDown",animateOnce:!0,initiallyVisible:h,afterAnimatedIn:y,delay:200*t,offset:-200,children:Object(j.jsx)("a",{href:"#".concat(e),className:"nav__items mono ".concat(n===t?"nav__active":""),onClick:function(){return O(t)},children:e},t)},t):Object(j.jsx)("a",{href:"#".concat(e),className:"nav__items mono ".concat(n===t?"nav__active":""),onClick:function(){return O(t)},children:e},t)}))})]})})]})},b=(n(28),function(){var e=[Object(j.jsx)("h1",{className:"home__greet text--ms",children:"Hi everyone! I'm"}),Object(j.jsx)("h2",{className:"home__self text--xxl bold",children:"Danny SZE."}),Object(j.jsx)("h3",{className:"home__slogan text--xxl bold",children:"I have a web dream."}),Object(j.jsx)("p",{className:"home__desc text--xl",children:"I will graduate from The Chinese University of Hong Kong in July, 2022. Currently, I'm a part-time full stack developer at iPYGG."})],t=o();return Object(j.jsx)("section",{id:"home",className:"",children:Object(j.jsx)("div",{className:"max-width__container",children:Object(j.jsx)("div",{className:"home__container",children:e.map((function(e,n){return Object(j.jsx)(m.a,{animateIn:"bounceInUp",animateOnce:!0,delay:200*n+(t>=1024?1300:0),offset:0,children:Object(j.jsx)("div",{children:e},n)},n)}))})})})}),_=n.p+"static/media/wave.8871aef7.svg",p=n.p+"static/media/wave_reverse.6dea44cc.svg",h=function(e){var t=e.type;return Object(j.jsx)(j.Fragment,{children:1===t?Object(j.jsx)("div",{id:"wave1",style:{marginTop:"-1px"},children:Object(j.jsx)("img",{src:_,alt:""})}):Object(j.jsx)("div",{id:"wave2",style:{display:"flex",marginBottom:"-1px"},children:Object(j.jsx)("img",{src:p,alt:""})})})},f=n.p+"static/media/test.d722d666.jpg",x=[{id:1,pos:2,icon:n.p+"static/media/code.8ed54690.svg",role:"Full Stack Developer",roleDesc:"I like coding things from scratch, and building exceptional digital experience.",details:[{title:"Front-end Skills",skills:["HTML","CSS","Sass","JavaScript","React","Angular","jQuery","TypeScript","Ionic"]},{title:"Back-end Skills",skills:["Node.js","Express.js","PHP","SQL","MongoDB"]},{title:"Cloud Platforms",skills:["Amazon EC2","Azure Blob"]}]},{id:2,pos:1,icon:n.p+"static/media/learn.be9dbc88.svg",role:"Learner",roleDesc:"I gain more than knowledge from learning.",details:[{title:"Course Taken",skills:["Web Application Development","Software Engineering","Database System","Cloud Computing & Storage","Data Communications","Computer Network"]},{title:"Current Courses",skills:["Parallel System","Cyber Security"]}]},{id:3,pos:3,icon:n.p+"static/media/face.e171db10.svg",role:"Danny SZE",roleDesc:"I do what I want.",details:[{title:"Interests",skills:["Photographing","Designing","Gaming","Investment","NFT","Metaverse","Artificial Intelligence"]},{title:"Other Skills",skills:["Adobe Photoshop","Adobe Illustrator","MS Office"]}]}],O=(n(29),function(e){var t=e.detail;return Object(j.jsxs)("div",{className:"about__cards",children:[Object(j.jsx)("div",{className:"about__cards__icon__container",children:Object(j.jsx)("img",{src:t.icon,alt:"",className:"about__cards__icon"})}),Object(j.jsxs)("div",{className:"about__cards__title__container",children:[Object(j.jsx)("h1",{className:"about__cards__title text--m bold",children:t.role}),Object(j.jsx)("p",{className:"about__cards__title__description text--xs",children:t.roleDesc})]}),Object(j.jsx)("div",{className:"about__cards__content__container",children:t.details.map((function(e,t){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("h2",{className:"about__cards__content__title text--s bold",children:e.title}),Object(j.jsx)("ul",{className:"about__cards__content__list",children:e.skills.map((function(e,t){return Object(j.jsx)("li",{className:"about__cards__content__list__items text--xs",children:e},t)}))})]},t)}))})]})}),g=function(){return Object(j.jsx)("section",{id:"about",className:"section__padding",children:Object(j.jsxs)("div",{className:"max-width__container about__container center",children:[Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,delay:0,children:Object(j.jsx)("h1",{className:"about__title text--l center bold text--uppercase",children:"About Me"})}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,delay:0,children:Object(j.jsx)("div",{className:"about__avatar__container flex__container__center",children:Object(j.jsx)("img",{src:f,alt:"Testing",id:"about__avatar"})})}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,delay:0,children:Object(j.jsx)("div",{className:"about__description__container",children:Object(j.jsx)("p",{className:"about__description text--s center",children:"I enjoy creating things on websites and applications. A course of building web applications has kickstarted my interest in development since 2019. Building (and occassionally designing) interactive applications gives me sense of satisfactory."})})}),Object(j.jsx)("div",{className:"about__cardsgroup",children:x.map((function(e){return Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,delay:0,style:{order:e.pos},children:Object(j.jsx)(O,{detail:e},e.id)},e.id)}))})]})})},v=[{id:1,type:1,title:"Full Stack Developer",period:"Jun 2021 - present",company:"iPYGG",companyLink:"https://www.ipygg.com/",desc:["Developed progressive and cross-platform fintech application with Agile software development principles","Integrated different modules of the application and built sustainable and stateful systems with defensive and well-documented code","Participated in Creating and Maintaining APIs and Managing PHP admin server with HMVC architecture"]},{id:2,type:2,title:"CalEvent",period:"Feb 2021 - Apr 2021",company:"Project",companyLink:"https://github.com/dannysze/CSCI3100-Project",desc:["Combined events management and ticketing systems with schedule planner functions","Provided a convenient interface for users to join events and plan their schedule"]},{id:3,type:1,title:"Student Helper",period:"Oct 2020 - May 2021",company:"CUHK",companyLink:"https://www.cuhk.edu.hk/clear/",desc:["Developed responsive front-end website with HTML5/CSS, Javascript, and jQuery according to figma design","Conducted security testing on RESTful API with Postman scripting","Prepared documentation of API and database"]},{id:4,type:1,title:"Summer Intern",period:"Jul 2020 - Sep 2021",company:"Robocode",companyLink:"https://www.robocodeacademy.com/",desc:["Built projects and materials of web programming course with React.js","Taught web programming courses including HTML5/CSS, Javascript, jQuery, and Bootstrap"]},{id:5,type:2,title:"Dashboard",period:"Jul 2020",company:"Project",companyLink:"https://github.com/dannysze/Dashboard",desc:["Created a dashboard web application with data provided by government database","Provided create, retrieve, update and delete interfaces for users to interact with the database"]}],y=(n(30),function(e){var t,n=e.detail,a=o();return Object(j.jsx)("div",{className:"timeline__container",children:Object(j.jsxs)("div",{className:"timeline__items item__".concat((t=n.type,a>=1024&&1===t?"Left":"Right").toLowerCase()),children:[Object(j.jsx)("div",{className:"timeline__mark"}),Object(j.jsxs)("div",{className:"timeline__flag",children:[Object(j.jsxs)("div",{className:"timeline__flag__title",children:["".concat(n.title," "),Object(j.jsx)("span",{className:"timeline__flag__company",children:Object(j.jsxs)("a",{href:n.companyLink,target:"_blank",rel:"noreferrer",children:["@ ",n.company]})})]}),Object(j.jsx)("div",{className:"timeline__flag__time text--xs bold",children:n.period})]}),Object(j.jsx)("div",{className:"timeline__card",children:Object(j.jsx)("ul",{className:"timeline__card__list",children:n.desc.map((function(e,t){return Object(j.jsx)("li",{className:"timeline__card__list__items text--xs",style:{transitionDelay:"".concat(50*(t+1),"ms")},children:e},t)}))})})]})})}),w=function(){return Object(j.jsx)("section",{id:"experience",className:"section__padding",children:Object(j.jsxs)("div",{className:"max-width__container",children:[Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("h1",{className:"experience__title text--l center bold text--uppercase",children:"Related Experiences"})}),v.map((function(e){return Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)(y,{detail:e},e.id)},e.id)}))]})})},N=n(6),I=n(13),k=n(14),S=n(37),C=n(38),D=(n(33),function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useState)({}),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),d=l[0],u=l[1],b=Object(a.useState)(),_=Object(s.a)(b,2),p=_[0],h=_[1],f=function(e,t){var n=i;n[t]=e.target.value,r(n)},x=function(t){var n=Object(N.a)(Object(N.a)({},i),{},{"g-recaptcha-response":t});I.a.send("service_u1yvnhh","template_e1grnto",n,"user_xzOgSTUuBpF0fm33mp4iC").then((function(t){e.current.reset(),h(!0)})).catch((function(e){h(!1)})).finally((function(){setTimeout((function(){h(null),u(!1)}),5e3)}))};return Object(j.jsx)("section",{id:"contact",className:"flex__container__center section__padding",children:Object(j.jsxs)("div",{className:"max-width__container",style:{textAlign:"center"},children:[Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("h1",{className:"form__title text--l text--uppercase center bold",children:"Contact Me"})}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("p",{className:"form__desc text--s center",style:{transitionDelay:"200ms"},children:"My inbox always opens for any messages."})}),Object(j.jsxs)("form",{ref:e,id:"form",onSubmit:function(e){e.preventDefault(),u(!0),t.current.executeAsync().then((function(e){x(e)})).catch((function(e){u(!1)})).finally((function(){t.current.reset()}))},children:[Object(j.jsx)(k.a,{ref:t,size:"invisible",sitekey:"6LdR0DkeAAAAAD4P7GGwEHSbgYXkPScQuc88Q-nW"}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("input",{className:"form__items form__input",type:"text",name:"user_name",placeholder:"Your Name",onChange:function(e){return f(e,"user_name")},required:!0})}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("input",{className:"form__items form__input",type:"email",name:"user_email",placeholder:"Your Email",onChange:function(e){return f(e,"user_email")},required:!0})}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("textarea",{className:"form__items form__textarea",name:"message",rows:8,placeholder:"Anything say to me",onChange:function(e){return f(e,"message")},required:!0})}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(j.jsx)("div",{className:"form__btn__container",children:Object(j.jsxs)("button",{className:"submit__btn flex__container__center test-uppercase ".concat(d?"loading":""," ").concat(!0===p?"success":""," ").concat(!1===p?"fail":""),disabled:d,children:[Object(j.jsx)("span",{className:"spinner transition__fast"}),Object(j.jsx)("span",{className:"submit__btn__text bold transition__fast",children:"Send"}),Object(j.jsx)("span",{className:"check transition-bouncing__fast flex__container__center",children:Object(j.jsx)(S.a,{})}),Object(j.jsx)("span",{className:"cross transition-bouncing__fast flex__container__center",children:Object(j.jsx)(C.a,{})})]})})})]})]})})}),P=n(39),A=n(40),L=n(41),E=n(42),U=(n(34),function(){var e=[{icon:Object(j.jsx)(P.a,{}),link:"#"},{icon:Object(j.jsx)(A.a,{}),link:"https://github.com/dannysze"},{icon:Object(j.jsx)(L.a,{}),link:"https://www.linkedin.com/in/danny-sze-049a5b168/"},{icon:Object(j.jsx)(E.a,{}),link:"https://www.instagram.com/dannnccccc/"}];return Object(j.jsx)("footer",{className:"footer flex__container__center",children:Object(j.jsxs)("div",{className:"footer__container",children:[Object(j.jsx)("div",{className:"footer-icons__ribbon flex__container__center",children:e.map((function(e,t){return Object(j.jsx)(m.a,{animateIn:"fadeInUp",delay:200*t,animateOnce:!0,children:Object(j.jsx)("a",{href:e.link,className:"footer-icons__link flex__container__center transition__xfast",children:e.icon},t)},t)}))}),Object(j.jsx)(m.a,{animateIn:"fadeInUp",delay:.8,animateOnce:!0,offset:0,children:Object(j.jsxs)("p",{className:"footer__text text--xs center mono",children:["Danny Sze ",Object(j.jsx)("span",{children:"\xa9 2022"})]})})]})})}),T=function(){return Object(j.jsx)("div",{children:"LoadingPage"})},F=(n(35),function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){c(!1)}),[]),Object(j.jsx)("div",{className:"App",children:n?Object(j.jsx)(T,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{id:"content",children:[Object(j.jsxs)("main",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(h,{type:1}),Object(j.jsx)(g,{}),Object(j.jsx)(w,{}),Object(j.jsx)(h,{type:2}),Object(j.jsx)(D,{})]}),Object(j.jsx)(U,{})]})]})})}),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};i.a.render(Object(j.jsx)(F,{}),document.getElementById("root")),M()}},[[36,1,2]]]);
//# sourceMappingURL=main.770242b0.chunk.js.map