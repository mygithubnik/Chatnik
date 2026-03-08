# Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, and EJS templating engine.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Dynamic Content**: Easy to customize portfolio data through server-side configuration
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Animated skill bars
  - Hover effects on projects
  - Mobile-friendly hamburger menu
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Links to GitHub, LinkedIn, and Twitter

## Sections

1. **Hero Section**: Eye-catching introduction with name, title, and call-to-action buttons
2. **About**: Personal bio and professional background
3. **Skills**: Visual representation of technical skills with progress bars
4. **Projects**: Showcase of featured projects with descriptions, technologies, and links
5. **Contact**: Contact form for visitors to get in touch
6. **Footer**: Social media links and copyright information

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chatnik
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Customization

### Personal Information

Edit the `portfolioData` object in `app.js` to customize:

- Name and title
- Bio and contact information
- Social media links
- Skills and proficiency levels
- Project details and links

### Styling

Modify `/public/css/style.css` to change:

- Color scheme (CSS variables at the top of the file)
- Layout and spacing
- Typography
- Animations

### Adding Projects

Add new projects to the `projects` array in `app.js`:

```javascript
{
  title: 'Project Name',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: '/images/project-name.jpg',
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com'
}
```

### Adding Skills

Add new skills to the `skills` array in `app.js`:

```javascript
{ name: 'Skill Name', level: 85 }
```

## Project Structure

```
portfolio-website/
├── app.js                 # Main server file
├── package.json          # Dependencies and scripts
├── views/
│   └── index.ejs         # Main HTML template
├── public/
│   ├── css/
│   │   └── style.css     # Stylesheet
│   ├── js/
│   │   └── script.js     # Client-side JavaScript
│   └── images/           # Project images
└── README.md             # This file
```

## Technologies Used

- **Backend**: Node.js, Express
- **Templating**: EJS
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome
- **Design**: Custom CSS with CSS Grid and Flexbox

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized animations
- Lazy loading for images
- Intersection Observer for scroll animations
- Minimal dependencies for fast loading

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate with a CMS
- [ ] Add dark mode toggle
- [ ] Connect contact form to email service
- [ ] Add project filtering by technology
- [ ] Implement analytics

## License

MIT License - feel free to use this for your own portfolio!

## Author

Created with ❤️ using Node.js and Express

---

For questions or suggestions, please open an issue or contact the developer.
