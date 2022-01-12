// schema
// id: unique int
// role: string
// roleDesc: string
// 
import code from '../../assets/icons/code.svg';
import learn from '../../assets/icons/learn.svg';

const Details = [{
  id: 1,
  pos: 2,
  icon: code,
  role: 'Full Stack Developer',
  roleDesc: 'I like coding things from scratch, and building exceptional digital experience.',
  details: [{
    title: 'Front-end Skills',
    skills: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'TypeScript', 'React', 'Angular', 'Ionic'],
  }, {
    title: 'Back-end Skills',
    skills: ['Node.js', 'Express.js', 'PHP', 'SQL', 'MongoDB']
  }, {
    title: 'Cloud Platforms',
    skills: ['Amazon EC2', 'Azure Blob']
  }]
}, {
  id: 2,
  pos: 1,
  icon: learn,
  role: 'Learner',
  roleDesc: 'I gain more than knowledge from learning.',
  details: [{
    title: 'Course Taken',
    skills: ['Web Application Development', 'Software Engineering', 'Database System', 'Cloud Computing & Storage', 'Data Communications', 'Computer Network'],
  }, {
    title: 'Current Courses',
    skills: ['Parallel System', 'Cyber Security']
  }]
}, {
  id: 3,
  pos: 3,
  role: 'Danny SZE',
  roleDesc: 'I do what I want.',
  details: [{
    title: 'Interests',
    skills: ['Photographing', 'Designing', 'Gaming', 'Investment', 'NFT', 'Metaverse', 'Artificial Intelligence'],
  }, {
    title: 'Other Skills',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'MS Office']
  }]
}];

export { Details };