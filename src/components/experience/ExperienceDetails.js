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
      'placeholder1',
      'placeholder2',
      'placeholder3',
      'placeholder4'
    ]
  }, {
    id: 2,
    type: 1,
    title: 'Student Helper',
    period: 'Oct 2020 - May 2021',
    company: 'CUHK',
    companyLink: 'https://www.cuhk.edu.hk/clear/',
    desc: [
      'placeholder1',
      'placeholder2',
      'placeholder3',
      'placeholder4'
    ]
  }, {
    id: 3,
    type: 1,
    title: 'Summer Intern',
    period: 'Jul 2020 - Sep 2021',
    company: 'Robocode',
    companyLink: 'https://www.robocodeacademy.com/',
    desc: [
      'placeholder1',
      'placeholder2',
      'placeholder3',
      'placeholder4'
    ]
  },
];

export { Details };