# Personal Portfolio Website

A modern, fancy single-page portfolio website with a **modular section-based architecture** built with vanilla JavaScript, HTML5, and CSS3.

![Portfolio Demo](src/assets/images/screen_record.gif)

## 🚀 Features

- **Modular Architecture**: Each section in its own CSS/JS file for easy updates
- **Fancy Modern Design**: Gradient backgrounds, animated shapes, glassmorphism effects
- **Responsive Design**: Works on all devices (320px to 1920px+)
- **Sticky Navigation**: Fixed header with smooth scroll to sections
- **Mobile Hamburger Menu**: Touch-friendly navigation for small screens
- **Scroll Animations**: Sections fade in as you scroll
- **Hover Effects**: Cards lift and glow on interaction
- **Tabbed Content**: Toggle between Blogs and Vlogs
- **Timeline Layout**: Visual work experience timeline
- **SEO Optimized**: Complete Open Graph meta tags
- **Accessible**: ARIA labels, focus management, skip links
- **FontAwesome Icons**: With Unicode fallbacks when CDN fails

## 📁 Project Structure

```
src/
├── index.html              # Main single-page HTML
├── 404.html                # Custom 404 error page
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── reset.css           # Browser normalization
│   ├── layout.css          # Grid, responsive breakpoints, scroll animations
│   ├── navigation.css      # Sticky nav, hamburger menu
│   └── sections/           # ⭐ MODULAR SECTION STYLES
│       ├── hero.css        # Gradient hero with animated shapes
│       ├── about.css       # Stats highlights grid
│       ├── expertise.css   # Skill tags & certification cards
│       ├── experience.css  # Timeline layout with cards
│       ├── content.css     # Blog/vlog cards with tabs
│       ├── community.css   # Speaking, review, volunteer sections
│       └── contact.css     # Gradient contact section
├── js/
│   ├── main.js             # Entry point, imports all sections
│   ├── data/
│   │   └── resume-data.js  # 📝 EDIT THIS FILE for all content!
│   ├── sections/           # ⭐ MODULAR SECTION RENDERERS
│   │   ├── hero.js         # Hero with photo & social links
│   │   ├── about.js        # Bio paragraphs & highlights
│   │   ├── expertise.js    # Skills categories & certifications
│   │   ├── experience.js   # Work history timeline
│   │   ├── content.js      # Blogs & vlogs with tab switching
│   │   ├── community.js    # Speaking, committee, volunteer
│   │   └── contact.js      # Contact info & social links
│   └── components/
│       └── navigation.js   # Nav functionality
└── assets/
    └── images/
        ├── profile-placeholder.svg   # Profile photo placeholder
        ├── company-placeholder.svg   # Company logo placeholder
        ├── video-placeholder.svg     # Video thumbnail placeholder
        ├── og-image.svg              # Social sharing image
        └── favicon.svg               # Browser favicon
```

## 🛠️ Quick Start

### Local Development

1. Start a local server:
   ```bash
   cd src
   npx http-server -p 8080 -o
   ```
   Or: `python -m http.server 8000 --directory src`

2. Edit content in `src/js/data/resume-data.js`

3. Replace placeholder images in `src/assets/images/`

### Customization

All content is centralized in **`src/js/data/resume-data.js`**:

| Section | Data Key | What to Edit |
|---------|----------|--------------|
| Hero | `hero` | Name, title, tagline, photo, CTA button |
| Social Links | `social` | Platform links (LinkedIn, GitHub, etc.) |
| About Me | `about` | Bio paragraphs, stat highlights |
| Expertise | `expertise` | Skill categories, certifications |
| Experience | `experience` | Work positions, achievements, technologies |
| Blogs & Vlogs | `content` | Blog posts, video content |
| Community | `community` | Speaking, review committee, volunteer work |
| Contact | `contact` | Email, availability message |
| Site Config | `config` | Site title, meta description |

### Updating Individual Sections

Each section has its own files - update without affecting others:

- **Change Hero style?** → Edit `src/css/sections/hero.css`
- **Change Experience layout?** → Edit `src/css/sections/experience.css`
- **Change how blogs render?** → Edit `src/js/sections/content.js`

### Deploy to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Set source to "Deploy from a branch"
4. Select branch: `main` and folder: `/src`
5. Wait for deployment (1-2 minutes)

## 🎨 Design System

### Color Palette (Purple/Blue Gradient)
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Background: `#0f0f23` (Dark)
- Surface: `#1a1a2e` (Card background)

### Visual Effects
- **Gradient backgrounds**: Hero and contact sections
- **Animated shapes**: Floating decorative elements
- **Glassmorphism**: Backdrop blur on cards
- **Hover transforms**: Cards lift with shadow on hover
- **Scroll animations**: Sections fade in on scroll

## 🎨 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript ES6+**: ES modules, no transpilation
- **FontAwesome 6.5**: Via CDN with Unicode fallbacks

## 📝 Sections Included

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport intro with photo, title, tagline, social links |
| **About Me** | Bio paragraphs with 4-column stat highlights |
| **Technical Expertise** | Skill categories as tags + certification cards |
| **Work Experience** | Timeline with company cards, achievements, tech tags |
| **Blogs & Vlogs** | Tabbed view of written and video content |
| **Community Engagement** | Speaking events, review committees, volunteer work |
| **Contact** | Email link with availability indicator |

## 📄 License

MIT License - Feel free to use for your own portfolio!
