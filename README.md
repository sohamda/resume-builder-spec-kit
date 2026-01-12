# Personal Portfolio Website

A clean, responsive single-page portfolio website built with vanilla JavaScript, HTML5, and CSS3.

## 🚀 Features

- **Single Page Application**: All content on one scrollable page
- **Responsive Design**: Works on all devices (320px to 1920px+)
- **Sticky Navigation**: Fixed header with smooth scroll to sections
- **Mobile Hamburger Menu**: Touch-friendly navigation for small screens
- **Star Ratings**: Visual skill proficiency indicators
- **Expandable Content**: "View More" toggle for experience items
- **SEO Optimized**: Complete Open Graph and Twitter Card meta tags
- **Accessible**: ARIA labels, focus management, skip links
- **FontAwesome Icons**: With Unicode fallbacks when CDN fails

## 📁 Project Structure

```
src/
├── index.html           # Main single-page HTML
├── 404.html             # Custom 404 error page
├── css/
│   ├── variables.css    # CSS custom properties
│   ├── reset.css        # Browser normalization
│   ├── layout.css       # Grid, responsive breakpoints
│   ├── navigation.css   # Sticky nav, hamburger menu
│   ├── hero.css         # Hero section
│   ├── sections.css     # Content sections
│   └── components.css   # Buttons, cards, star ratings
├── js/
│   ├── main.js          # Entry point
│   ├── data/
│   │   └── resume-data.js    # Resume content (edit this!)
│   └── components/
│       ├── navigation.js     # Nav functionality
│       ├── experience.js     # Expand/collapse
│       └── skills.js         # Star rating renderer
└── assets/
    └── images/
        ├── profile.svg       # Profile photo placeholder
        ├── og-image.svg      # Social sharing image
        └── favicon.svg       # Browser favicon
```

## 🛠️ Quick Start

### Local Development

1. Open `src/index.html` directly in your browser
   - Or use a local server: `npx serve src` or `python -m http.server 8000 --directory src`

2. Edit content in `src/js/data/resume-data.js`

3. Replace placeholder images in `src/assets/images/`

### Customization

1. **Personal Info**: Edit `resume-data.js` → `personal` object
2. **Experience**: Edit `resume-data.js` → `experience` array
3. **Skills**: Edit `resume-data.js` → `skills` array
4. **Education**: Edit `resume-data.js` → `education` array
5. **Colors/Fonts**: Edit `src/css/variables.css`

### Deploy to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Set source to "Deploy from a branch"
4. Select branch: `main` and folder: `/src`
5. Wait for deployment (1-2 minutes)

## 🎨 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript ES6+**: ES modules, no transpilation
- **FontAwesome 6.5**: Via CDN with Unicode fallbacks

## 📝 Constitution Compliance

This project follows these principles:

| Principle | Status |
|-----------|--------|
| Vanilla Stack Only | ✅ No frameworks or build tools |
| Modular Files | ✅ JS ≤150 lines, CSS ≤200 lines |
| Separation of Concerns | ✅ Data, structure, style, behavior separated |
| Progressive Enhancement | ✅ Works without JavaScript |
| Simplicity (YAGNI) | ✅ Only essential features |

## 📄 License

MIT License - Feel free to use for your own portfolio!
