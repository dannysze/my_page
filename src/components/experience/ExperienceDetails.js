// schema
// id: unique int
// type: 1 / 2 -> work / project
// title: string -> job title / project title
// period: string
// company: string
// companyLink: string URL
// desc: string[] -> both

const Details = [{
    id: 1,
    type: 1,
    title: 'Full Stack Developer',
    period: 'Jun 2021 - present',
    company: 'iPYGG',
    companyLink: 'https://www.ipygg.com/',
    desc: [
      'Developed progressive and cross-platform fintech application with Ionic framework and Angular with Agile software development principles',
      'Integrated different modules of the application and built sustainable and stateful systems with defensive and well-documented code',
      'Participated in Creating and Maintaining APIs on the PHP server and Managing PHP admin server with HMVC architecture',
      'Collaborated in a team of 5 to deliver the company main product (iPYGG) that is listed on both google play store and app store and the company’s B2B functions'
    ]
  }, {
    id: 2,
    type: 1,
    title: 'Student Helper',
    period: 'Oct 2020 - May 2021',
    company: 'CUHK',
    companyLink: 'https://www.cuhk.edu.hk/clear/',
    desc: [
      'Developed responsive front-end website with HTML5/CSS, Javascript, and jQuery according to the design document',
      'Conducted security testing on RESTful Application programming interface (API) with Postman scripting',
      'Prepared documentation of application programming interface (API) and database'
    ]
  }, {
    id: 3,
    type: 1,
    title: 'Summer Intern',
    period: 'Jul 2020 - Sep 2021',
    company: 'Robocode',
    companyLink: 'https://www.robocodeacademy.com/',
    desc: [
      'Built projects and materials of web programming course with React.js',
      'Taught web programming courses including HTML5/CSS, Javascript, jQuery, and Bootstrap 4'
    ]
  },
];

export { Details };