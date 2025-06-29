const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://imbilgates.github.io/Portfolio/',
  title: 'BILGATES.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bilgates',
  role: 'Full Stack Developer',
  description:
    'My journey as a MERN stack developer is driven by a strong passion for learning and improvement. As a fresher, I have developed skills in React.js and backend development with Node.js and Express.js. I am also gaining experience in deploying applications on platforms like Netlify and Render, and I am constantly working on creating projects to refine my abilities.',
  resume:
    'https://drive.google.com/file/d/1x9KcsaGbqBCMjy72VcTLJsxUvD7l9lG7/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/Imbilgates',
    github: 'https://github.com/imbilgates',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'devDiscuss',
    description:
      'The project is a web platform where users can post technical questions and receive solutions or advice from a collaborative community. It fosters knowledge sharing and provides a structured problem-solving environment. Similar to Stack Overflow, it targets a focused user group.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    sourceCode: 'https://github.com/imbilgates/devDiscuss',
    livePreview: 'https://devdiscuss.onrender.com',
  },
  {
    name: 'Poll-Applicaion',
    description:
      'The Poll Application is a full-stack web app that enables users to create and participate in polls. It is built using Spring Boot and Java for the backend, with React and JavaScript powering the frontend with User interaction.',
    stack: ['SpringBoot', 'Java', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/imbilgates/PollApp/',
    livePreview: 'https://pollwebapp.netlify.app/',
  },
  {
    name: 'Chat-Applicaion',
    description:
      'Our Realtime Chat App uses React for the front-end, Firebase for the back-end, and Firebase Cloud for real-time messaging.',
    stack: ['Firebase', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/imbilgates/Chat-Application/',
    livePreview: 'https://chatwebappbyreact.netlify.app/',
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
    name: 'E-commerce Cart',
    description:
      'A full-stack e-commerce application where users can browse products, add items to a cart, and place orders. Built with React and Redux on the frontend, and Node.js, Express.js, and MongoDB on the backend.',
    stack: ['React', 'Redux', 'Express.js', 'MongoDB'],
    sourceCode: 'https://github.com/imbilgates/ShopCart',
    livePreview: 'https://shopping-cart-8goq.onrender.com',
  },
  {
    name: 'Event Planner',
    description:
      'I developed a full-stack Event Planner application using Spring Boot for the backend and React for the frontend. The app allows users to create, view, edit, and delete events. It features responsive UI components built with MUI and Chakra UI for a seamless experience.',
    stack: ['Spring Boot', 'React', 'MUI', 'Chakra UI'],
    sourceCode: 'https://github.com/imbilgates/Event-Planner',
    livePreview: 'https://event-planner-7kxy.onrender.com',
  },
]

const skills = [
  'JavaScript',
  'express.js',
  'node.js',
  'React',
  'MongoDB ',
  'Redux',
  'Bootstrap',
  'Material UI',
  'Git',
  'Spring boot',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'imbilgates@mail.com',
}

export { header, about, projects, skills, contact }
