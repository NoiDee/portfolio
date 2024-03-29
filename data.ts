import { Name, Resume } from './model';

export const resumeData: Resume = {
  name: new Name({
    firstname: 'Dion Carlo',
    middlename: 'Zamora',
    lastname: 'Alano',
  }),
  intro:
    'I am a programmer with various skills which specializes in web development. With proven 3 and a half years of experience in Java, and 1 year experience in C#.',
  email: 'dioncarlo.alano@gmail.com',
  mobile: '(+63) 995 096 0550',
  skills: [
    'ASP.NET',
    'Bootstrap',
    'C#',
    'CSS',
    'Git',
    'Heartcore CMS',
    'HeartCore Robo',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'MVC',
    'MySQL',
    'React JS',
    'RPA',
    'SASS',
    'Spring Boot',
    'TypeScript',
    'Visual Basic',
    'Webpack',
  ],
  jobs: [
    {
      position: 'Programmer',
      company: 'Phase1 Philippines Inc.',
      logo: '/images/phase1.webp',
      dateHired: '10/15/2018',
      dateResigned: 'Present',
      descriptions: [
        'Write clean, clear and well-designed code',
        'Create Documents (ex: Reports, Basic Design, Detailed Design) using MS Excel',
        'Develop software (Websites, Desktop Applications, Mobile apps, etc.) based on technical and functional specification provided by the client.',
        'Unit testing',
        'Integration testing',
        'Manage assigned task/s',
      ],
    },
    {
      position: '.Net Developer',
      company: 'PLDT (under WeSupport Inc.)',
      logo: '/images/pldt.webp',
      dateHired: '10/15/2017',
      dateResigned: '7/31/2018',
      descriptions: [
        'Provide support for the systems running in the production.',
        'Responsible for the front-end enhancements and developments of the systems that will be assigned to.',
        'Perform other duties as assigned.',
      ],
    },
    {
      position: 'Data Analyst',
      company: 'PLDT (under WeSupport Inc.)',
      logo: '/images/pldt.webp',
      dateHired: '2/6/2017',
      dateResigned: '9/29/2017',
      descriptions: [
        'Manage test results database, candidate, validate accuracy, and provide 1st level of CE test results, including those from external agencies.',
        'Generate CE reports and dashboard monitoring.',
        'Provide support in SQL optimization procedures.',
        'Deal with the errors or incidents under Kenan or Clarity System.',
      ],
    },
    {
      position: 'IT Staff',
      company: 'E-Global International Communications, Inc.',
      logo: '/images/e-global.webp',
      dateHired: '8/24/2015',
      dateResigned: '8/30/2016',
      descriptions: [
        'Responsible for keeping the organization’s computer network running monthly.',
        'Administers the VoIP servers.',
        'Troubleshoots any hardware, software or network problems that may occur in the organization.',
        'Coordinates with IT personnel of other organization in resolving issues that requires external support.',
      ],
    },
  ],
};

export default resumeData;
