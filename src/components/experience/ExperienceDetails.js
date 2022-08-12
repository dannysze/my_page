// schema
// id: unique int
// type: 1 / 2 -> work / project
// title: string -> job title / project title
// period: string
// company: string
// companyLink: string URL
// desc: string[] -> both

const Details = [
  {
    id: 7,
    type: 1,
    title: "Software/Application Engineering Analyst",
    period: "Aug 2022 - present",
    company: "Accenture",
    companyLink: "https://www.accenture.com/hk-en",
    desc: [],
  },
  {
    id: 6,
    type: 2,
    title: "Online Wordle",
    period: "Jul 2022 - present",
    company: "Project",
    companyLink: "https://github.com/thalangi33/online-battle-wtever",
    desc: [
      "Developed a multiplayer version of the popular Wordle game",
      "Provided users management features allowing users to record their results",
    ],
  },
  {
    id: 5,
    type: 1,
    title: "Full Stack Developer",
    period: "Jun 2021 - Apr 2022",
    company: "iPYGG",
    companyLink: "https://www.ipygg.com/",
    desc: [
      "Developed progressive and cross-platform fintech application with Agile software development principles",
      "Integrated different modules of the application and built sustainable and stateful systems with defensive and well-documented code",
      "Participated in Creating and Maintaining APIs and Managing PHP admin server with HMVC architecture",
    ],
  },
  {
    id: 4,
    type: 2,
    title: "CalEvent",
    period: "Feb 2021 - Apr 2021",
    company: "Project",
    companyLink: "https://github.com/dannysze/CSCI3100-Project",
    desc: [
      "Combined events management and ticketing systems with schedule planner functions",
      "Provided a convenient interface for users to join events and plan their schedule",
    ],
  },
  {
    id: 3,
    type: 1,
    title: "Student Helper",
    period: "Oct 2020 - May 2021",
    company: "CUHK",
    companyLink: "https://www.cuhk.edu.hk/clear/",
    desc: [
      "Developed responsive front-end website with HTML5/CSS, Javascript, and jQuery according to figma design",
      "Conducted security testing on RESTful API with Postman scripting",
      "Prepared documentation of API and database",
    ],
  },
  {
    id: 2,
    type: 1,
    title: "Summer Intern",
    period: "Jul 2020 - Sep 2021",
    company: "Robocode",
    companyLink: "https://www.robocodeacademy.com/",
    desc: [
      "Built projects and materials of web programming course with React.js",
      "Taught web programming courses including HTML5/CSS, Javascript, jQuery, and Bootstrap",
    ],
  },
  {
    id: 1,
    type: 2,
    title: "Dashboard",
    period: "Jul 2020",
    company: "Project",
    companyLink: "https://github.com/dannysze/Dashboard",
    desc: [
      "Created a dashboard web application with data provided by government database",
      "Provided create, retrieve, update and delete interfaces for users to interact with the database",
    ],
  },
];

export { Details };
