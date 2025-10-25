# Ultimate Motors - Luxury Auto Restoration

A modern, sleek marketing website for a luxury autobody business specializing in exotic and high-end vehicles valued between $100K-$200K.

## Features

- **Modern Design**: Sleek, professional design with luxury car theme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Styled Components**: Built with styled-components for maintainable CSS-in-JS
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Functional contact form for customer inquiries
- **Gallery**: Filterable project gallery showcasing completed work
- **Performance Optimized**: Fast loading with optimized components

## Tech Stack

- **React 18** - Modern React with hooks
- **Styled Components** - CSS-in-JS styling solution
- **React Icons** - Beautiful icon library
- **JavaScript** - No TypeScript for simplicity

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ultimate-Motors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation and top bar
│   ├── Hero.js        # Main hero section
│   ├── Services.js    # Services showcase
│   ├── About.js       # Company information
│   ├── Gallery.js     # Project gallery
│   ├── Contact.js     # Contact form and info
│   └── Footer.js      # Footer with links
├── App.js             # Main app component
└── index.js           # Entry point
```

## Design Features

### Color Scheme
- **Primary Gold**: #FFD700 (Luxury gold accent)
- **Background**: Dark gradients (#0A0A0A to #1A1A1A)
- **Text**: White (#FFF) and light gray (#CCC)
- **Accents**: Gold gradients for highlights

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern)

### Key Components

1. **Header**: Fixed navigation with contact info and smooth scrolling
2. **Hero**: Eye-catching intro with call-to-action buttons
3. **Services**: Grid layout showcasing premium services
4. **About**: Company story with statistics and achievements
5. **Gallery**: Filterable portfolio of completed projects
6. **Contact**: Contact form with business information
7. **Footer**: Comprehensive footer with links and newsletter

## Customization

### Updating Content
- Edit component files in `src/components/` to update text and content
- Modify service offerings in `Services.js`
- Update contact information in `Header.js`, `Contact.js`, and `Footer.js`

### Styling Changes
- All styles are contained within each component using styled-components
- Global styles are defined in `App.js`
- Color scheme can be updated by changing the gradient and color values

### Adding Images
- Replace placeholder content in components with actual images
- Consider using a service like Cloudinary or AWS S3 for image hosting
- Update image paths in the styled components

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **Traditional Hosting**: Upload build folder contents to web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.
