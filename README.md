# Koffee Digital - Professional Web Development Services

A professional website for Koffee Digital - specialized web development services for small businesses in Dublin & Ireland. Built with modern Tailwind CSS for optimal performance and maintainability.

## 🚀 Technology Stack

- **Frontend**: HTML5, Tailwind CSS
- **Build System**: Tailwind CLI
- **Form Handling**: Formspree integration
- **Deployment Ready**: Static site optimized for CDN hosting

## 📁 Project Structure

```
koffee-digital/
├── index.html              # Homepage - Hero, services overview, process
├── about.html              # About page - Company story, values, team
├── services.html           # Services page - Packages, pricing, features
├── contact.html            # Contact page - Form, FAQ, contact info
├── assets/
│   ├── css/
│   │   ├── output.css      # Compiled Tailwind CSS (production)
│   │   └── tailwind.css    # Tailwind source file
│   └── js/                 # (Empty - functionality is inline)
├── node_modules/           # Dependencies
├── package.json            # Build scripts and dependencies
├── package-lock.json       # Dependency lock file
├── tailwind.config.js      # Tailwind configuration
└── README.md              # This file
```

## ✨ Features

### Design & UX
- **Modern Tailwind CSS** - Utility-first CSS framework for rapid development
- **Fully Responsive** - Mobile-first design that works on all devices
- **Professional Animations** - Smooth hover effects and transitions
- **Glassmorphism Effects** - Modern backdrop blur and transparency effects
- **Gradient Backgrounds** - Custom brand gradients throughout

### Content & Functionality
- **Complete Business Website** - Home, About, Services, Contact pages
- **Service Packages** - Detailed pricing and feature comparisons
- **Interactive FAQ** - Accordion-style frequently asked questions
- **Contact Form** - Fully functional form with Formspree integration
- **SEO Optimized** - Proper meta tags, semantic HTML, and structure

### Technical
- **Fast Loading** - Optimized CSS, minimal JavaScript
- **Production Ready** - Minified CSS, clean code structure
- **Easy Maintenance** - Tailwind utilities make updates simple
- **Build System** - Automated CSS compilation and optimization

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/koffy1/koffee-digital.git
cd koffee-digital

# Install dependencies
npm install
```

### Development Commands
```bash
# Start development with CSS watching
npm run dev

# Build production CSS (minified)
npm run build

# Start local server
npm run serve
# Then visit: http://localhost:8000
```

### Build Scripts
- `npm run dev` - Watch Tailwind CSS files for changes (development)
- `npm run build` - Build minified production CSS
- `npm run serve` - Start Python HTTP server on port 8000

## 🎨 Customization

### Colors & Branding
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Purple accent (#e879f9)
- **Neutral**: Slate color palette for text and backgrounds

### Fonts
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)
- **Mono Font**: JetBrains Mono (code/technical content)

### Content Updates
All content is in HTML files - no CMS required:
- **Homepage**: Hero section, services overview, process steps
- **About**: Company story, team info, values, industries served
- **Services**: Service packages, pricing, maintenance plans
- **Contact**: Contact form, FAQ, business information

## 📧 Contact Form Setup

The contact form uses Formspree for handling submissions:
1. Form endpoint: `https://formspree.io/f/mgovanqd`
2. Includes spam protection (honeypot field)
3. Supports file uploads and custom fields
4. Sends emails directly to your inbox

To customize:
1. Sign up at [Formspree.io](https://formspree.io)
2. Replace the form action URL in `contact.html`
3. Configure email notifications in Formspree dashboard

## 🚀 Deployment Options

### Static Hosting (Recommended)
Perfect for services like:
- **Netlify** - Drag & drop deployment
- **Vercel** - Git-based deployment
- **AWS S3 + CloudFront** - Enterprise hosting
- **GitHub Pages** - Free hosting for public repos

### Deployment Steps
1. Run `npm run build` to generate production CSS
2. Upload all HTML files and `assets/` folder
3. Configure custom domain (optional)
4. Set up SSL certificate (usually automatic)

### Performance Optimization
- CSS is minified and optimized
- Images should be compressed before upload
- Consider adding a CDN for global performance
- Enable gzip compression on your server

## 🔧 Maintenance

### Adding New Pages
1. Create new HTML file
2. Copy header/footer structure from existing pages
3. Add page-specific content
4. Update navigation links in all pages
5. Run `npm run build` to ensure CSS includes new classes

### Updating Styles
1. Modify Tailwind classes in HTML files
2. For custom styles, update `tailwind.css`
3. Run `npm run build` to compile changes
4. Test across different screen sizes

### Content Updates
- Edit HTML files directly
- No build step required for content changes
- Update meta descriptions for SEO
- Keep contact information current

## 📊 SEO & Analytics

### Built-in SEO Features
- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags ready
- Fast loading times
- Mobile-friendly design

### Adding Analytics
Add your tracking code before the closing `</body>` tag in each HTML file:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

1. Fork the repository at [https://github.com/koffy1/koffee-digital](https://github.com/koffy1/koffee-digital)
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🔗 Repository

- **GitHub**: [https://github.com/koffy1/koffee-digital](https://github.com/koffy1/koffee-digital)
- **Clone URL**: `https://github.com/koffy1/koffee-digital.git`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions about this website:
- **Email**: sholesikofoworola@gmail.com

---

**Koffee Digital** - Professional websites for small businesses in Dublin & Ireland
