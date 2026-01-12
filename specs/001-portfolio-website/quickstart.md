# Quickstart: Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-01-07

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor (VS Code recommended)
- Git (for version control and GitHub Pages deployment)
- GitHub account (for hosting)

**No build tools, Node.js, or package managers required.**

---

## Local Development

### 1. Open the Project

```bash
cd resume-builder/src
```

### 2. View in Browser

Simply open `index.html` in your browser:

- **Windows**: Double-click `index.html` or run `start index.html`
- **macOS**: Run `open index.html`
- **Linux**: Run `xdg-open index.html`

Or use VS Code's Live Server extension for auto-reload during development.

### 3. Edit Resume Data

Open `js/data/resume-data.js` and update the content:

```javascript
const resumeData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    summary: 'Your professional summary...',
    email: 'your.email@example.com',
    // ... update all fields
  },
  // ... update experience, skills, education
};
```

### 4. Add Your Profile Photo

1. Replace `assets/images/profile.webp` with your photo
2. Recommended: Use WebP format for smaller file size
3. Recommended dimensions: 400x400 pixels (square)

### 5. Create Open Graph Image

1. Create a 1200x630 pixel image for social sharing
2. Save as `assets/images/og-image.png`
3. Include your name, title, and professional branding

---

## Customization

### Colors & Theme

Edit `css/variables.css` to change the color scheme:

```css
:root {
  --color-primary: #2563eb;     /* Main accent color */
  --color-secondary: #1e40af;   /* Darker accent */
  --color-text: #1f2937;        /* Body text */
  --color-text-light: #6b7280;  /* Secondary text */
  --color-background: #ffffff;  /* Page background */
  --color-surface: #f9fafb;     /* Card/section background */
}
```

### Fonts

Default uses system fonts for performance. To add custom fonts:

1. Add Google Fonts link to `index.html` `<head>`
2. Update `--font-family-base` in `css/variables.css`

### Section Order

Edit `index.html` to reorder sections. Each section has a unique ID:

```html
<section id="about">...</section>
<section id="experience">...</section>
<section id="skills">...</section>
<section id="education">...</section>
<section id="contact">...</section>
```

---

## Deployment to GitHub Pages

### Option A: Deploy from `main` Branch (Recommended)

1. Move contents of `src/` to repository root:
   ```bash
   mv src/* .
   rmdir src
   ```

2. Commit and push:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

3. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

4. Wait 2-5 minutes, then visit `https://[username].github.io/[repo-name]/`

### Option B: Use `gh-pages` Branch

1. Create and switch to `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   ```

2. Move `src/` contents to root (same as Option A)

3. Push the branch:
   ```bash
   git push -u origin gh-pages
   ```

4. Configure Pages to deploy from `gh-pages` branch

### Update Site URL

After deployment, update `js/data/resume-data.js`:

```javascript
config: {
  siteUrl: 'https://[username].github.io/[repo-name]',
  // ...
}
```

---

## Testing Checklist

Before sharing your portfolio, verify:

### Content
- [ ] All personal information is correct
- [ ] No placeholder/sample data remains
- [ ] Profile photo loads correctly
- [ ] All social links work

### Functionality
- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] "View More" expands experience section
- [ ] All external links open in new tabs

### Responsiveness
- [ ] Test at 320px width (mobile)
- [ ] Test at 768px width (tablet)
- [ ] Test at 1920px width (desktop)

### SEO
- [ ] Page title shows your name and title
- [ ] Share link on social media to verify preview image

### Performance
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Target: Performance 90+, Accessibility 95+, SEO 100

---

## Troubleshooting

### Icons Not Showing

1. Check internet connection (FontAwesome loads from CDN)
2. Verify CDN link in `index.html` `<head>` is correct
3. Unicode fallbacks should display if CDN fails

### Styles Not Updating

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (macOS)
2. Clear browser cache
3. Check for CSS syntax errors in browser DevTools

### GitHub Pages 404

1. Ensure `index.html` is at repository root (not in `src/`)
2. Verify Pages is enabled in repository settings
3. Check that branch and folder settings are correct
4. Wait 5 minutes for deployment to complete

### Images Not Loading on GitHub Pages

1. Verify all paths are relative (no leading `/`)
2. Check file names match exactly (case-sensitive on GitHub)
3. Ensure images were committed and pushed

---

## File Structure Reference

```
[repo-root]/
├── index.html              # Main page
├── 404.html                # Custom 404 page
├── css/
│   ├── variables.css       # Theme colors and spacing
│   ├── reset.css           # Browser normalization
│   ├── layout.css          # Page structure
│   ├── navigation.css      # Nav bar and mobile menu
│   ├── hero.css            # Hero section
│   ├── sections.css        # Content sections
│   └── components.css      # Buttons, cards, ratings
├── js/
│   ├── data/
│   │   └── resume-data.js  # Your resume content
│   ├── components/
│   │   ├── navigation.js   # Nav functionality
│   │   ├── experience.js   # Expand/collapse
│   │   └── skills.js       # Star ratings
│   └── main.js             # Entry point
└── assets/
    └── images/
        ├── profile.webp    # Your photo
        ├── og-image.png    # Social preview
        └── favicon.ico     # Browser tab icon
```
