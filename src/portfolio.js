const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://imbilgates.github.io/Portfolio/',
  title: 'BILGATES.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bilgates',
  role: 'Front-End Developer',
  description:
    'My journey as a React developer is driven by a strong dedication to learning and improving. While studying for my Master\'s in Computer Applications at SRM IST Chennai, I am building my skills in React.js and Redux.js.',
  resume: 'https://drive.google.com/file/d/1lEoQg2j0LirX8C3wYZFvc-H0MvpPkX5W/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/Imbilgates',
    github: 'https://github.com/imbilgates',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Chat-Applicaion',
    description:
      'Our Realtime Chat App uses React for the front-end, Express and Node.js for the back-end, and Socket.IO for real-time messaging.',
    stack: ['Firebase', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/imbilgates/Chat-Application/',
    livePreview: 'https://main--chat-application-socketio.netlify.app/',
  },
  {
    name: 'Social-Media-App',
    description:
      'Our platform, built with React.js and Firebase, lets users share images and securely sign in with Firebase or Google Authentication.',
    stack: ['Firebase', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/imbilgates/Social-Media-Mini-Project/',
    livePreview: 'https://main--firebaseauth-project.netlify.app/',
  },
  {
    name: 'Pokemon-API',
    description:
      'I built a React project that fetches Pokémon names from an API and displays them with pagination for easy browsing.',
    stack: ['HTML', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/imbilgates/Pokemon',
    livePreview: 'https://main--soft-malabi-ad4012.netlify.app/',
  },
  {
    name: 'CRUDsystem', 
    description:
      'I built a full-stack project using Spring Boot with REST API endpoints and Vite+React for the frontend, implementing CRUD operations to add, delete, update, and display employees.',
    stack: ['Springboot', 'Java', 'vite+react', 'H2 Db', 'Javascript'],
    sourceCode: 'https://github.com/imbilgates/CRUDsystem',
    livePreview: 'https://imbilgates.github.io/CRUDsystem/',
  },
]

const skills = [
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Bootstrap',
  'Git',
  'Java',
  'springboot'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'imbilgates@mail.com',
}

export { header, about, projects, skills, contact }
