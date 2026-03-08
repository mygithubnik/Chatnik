const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Portfolio data
const portfolioData = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with expertise in building modern web applications. I love creating elegant solutions to complex problems.',
  email: 'john.doe@example.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  twitter: 'https://twitter.com/johndoe',
  skills: [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Docker', level: 65 }
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/project1.jpg',
      github: 'https://github.com/johndoe/ecommerce',
      demo: 'https://demo-ecommerce.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and analytics.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '/images/project2.jpg',
      github: 'https://github.com/johndoe/taskmanager',
      demo: 'https://demo-tasks.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React', 'TypeScript', 'OpenWeather API'],
      image: '/images/project3.jpg',
      github: 'https://github.com/johndoe/weather',
      demo: 'https://demo-weather.com'
    }
  ]
};

app.get('/', (req, res) => {
  res.render('index', portfolioData);
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received! I\'ll get back to you soon.' });
});

app.listen(port, () => {
  console.log(`Portfolio website running at http://localhost:${port}`);
});