# Research: Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-01-07  
**Status**: Complete

## R1: FontAwesome CDN Selection

### Question
Which FontAwesome version and subset to use for minimal load while covering required icons?

### Research
- FontAwesome 6.5.1 is latest stable (as of 2026-01)
- Free tier includes Solid, Regular, and Brands icon sets
- Required icons: hamburger menu, stars, email, external link, social brands (LinkedIn, GitHub, Twitter)
- Full `all.min.css` is ~60KB gzipped; acceptable for CDN with caching

### Decision
Use FontAwesome 6.5.1 Free via cdnjs:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
      crossorigin="anonymous" referrerpolicy="no-referrer">
```

### Icons Required
| Purpose | Icon Class | Fallback Unicode |
|---------|-----------|------------------|
| Hamburger menu | `fa-solid fa-bars` | ☰ (U+2630) |
| Star filled | `fa-solid fa-star` | ★ (U+2605) |
| Star empty | `fa-regular fa-star` | ☆ (U+2606) |
| Email | `fa-solid fa-envelope` | ✉ (U+2709) |
| External link | `fa-solid fa-arrow-up-right-from-square` | ↗ (U+2197) |
| LinkedIn | `fa-brands fa-linkedin` | in |
| GitHub | `fa-brands fa-github` | </> |
| Twitter/X | `fa-brands fa-x-twitter` | X |
| Website | `fa-solid fa-globe` | 🌐 (U+1F310) |

---

## R2: Unicode Fallback Implementation

### Question
How to implement Unicode fallbacks when FontAwesome CDN fails?

### Research
- CSS `@font-face` loading can fail silently
- Browser renders fallback font if icon font unavailable
- Strategy: Use `::before` pseudo-element with both FA content and fallback

### Decision
Implement fallback using CSS custom properties and text content:

```css
/* Icon with fallback */
.icon {
  font-family: 'Font Awesome 6 Free', 'Font Awesome 6 Brands', sans-serif;
}

.icon--email::before {
  content: '\f0e0'; /* FA envelope */
}

/* Fallback: if FA fails, show Unicode via data attribute */
.icon[data-fallback]::before {
  content: attr(data-fallback);
}

/* When FA loads successfully, hide fallback */
.fa::before {
  content: none; /* FA handles its own content */
}
```

**Simplified approach for this project**: Include visible text fallback in HTML that gets hidden when FA loads:
```html
<span class="icon" aria-hidden="true">
  <i class="fa-solid fa-envelope"></i>
  <span class="icon__fallback">✉</span>
</span>
```

```css
.icon__fallback {
  display: none;
}

/* If FA fails to load, fallback shows */
.fa:not(.fa-solid):not(.fa-regular):not(.fa-brands) + .icon__fallback {
  display: inline;
}
```

---

## R3: GitHub Pages Deployment

### Question
Best practices for relative paths when deploying to a subdirectory on GitHub Pages?

### Research
- GitHub Pages can serve from root (`username.github.io`) or subdirectory (`username.github.io/repo-name`)
- Absolute paths (`/css/style.css`) break in subdirectory deployments
- Relative paths (`./css/style.css` or `css/style.css`) work in both scenarios
- `<base href>` tag can help but adds complexity

### Decision
1. Use relative paths throughout (no leading `/`)
2. Keep `index.html` and `404.html` at repository root (`src/` during dev, root for deploy)
3. Document deployment options in `quickstart.md`:
   - Option A: Deploy `src/` folder contents to root of `gh-pages` branch
   - Option B: Configure Pages to serve from `/src` folder on `main` branch

### File Path Examples
```html
<!-- In index.html -->
<link rel="stylesheet" href="css/variables.css">
<script type="module" src="js/main.js"></script>
<img src="assets/images/profile.webp" alt="...">
```

---

## R4: Smooth Scrolling Implementation

### Question
CSS vs JS for smooth scrolling with proper hash updates and accessibility?

### Research
- CSS `scroll-behavior: smooth` works natively but doesn't update URL hash
- JS `scrollIntoView({ behavior: 'smooth' })` provides more control
- Hash updates important for shareability and browser history
- Focus management required for accessibility (focus target after scroll)

### Decision
Hybrid approach:
1. CSS enables smooth scrolling globally
2. JS handles navigation clicks to:
   - Prevent default anchor jump
   - Update URL hash via `history.pushState`
   - Manage focus to target section for screen readers

```css
/* In layout.css */
html {
  scroll-behavior: smooth;
}

/* Offset for sticky nav */
section[id] {
  scroll-margin-top: 80px;
}
```

```javascript
// In navigation.js
function handleNavClick(event) {
  const target = event.target.closest('a[href^="#"]');
  if (!target) return;
  
  const sectionId = target.getAttribute('href').slice(1);
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Update URL without triggering scroll
    history.pushState(null, '', `#${sectionId}`);
    
    // Focus section for accessibility
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
  // Let CSS handle the actual smooth scroll
}
```

---

## R5: SEO Meta Tags

### Question
Which Open Graph and Twitter Card meta tags are required for comprehensive SEO?

### Research
- Open Graph (Facebook, LinkedIn, most platforms): og:title, og:description, og:image, og:url, og:type
- Twitter Cards: twitter:card, twitter:title, twitter:description, twitter:image
- Standard SEO: title, meta description, canonical URL, viewport
- Structured data (JSON-LD) optional but beneficial for rich snippets

### Decision
Include all essential meta tags in `<head>`:

```html
<!-- Primary Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Name] | [Title] - Portfolio</title>
<meta name="description" content="[1-2 sentence professional summary]">
<link rel="canonical" href="https://[username].github.io/[repo]/">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://[username].github.io/[repo]/">
<meta property="og:title" content="[Name] | [Title]">
<meta property="og:description" content="[Professional summary]">
<meta property="og:image" content="https://[username].github.io/[repo]/assets/images/og-image.png">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://[username].github.io/[repo]/">
<meta name="twitter:title" content="[Name] | [Title]">
<meta name="twitter:description" content="[Professional summary]">
<meta name="twitter:image" content="https://[username].github.io/[repo]/assets/images/og-image.png">
```

### Open Graph Image Requirements
- Recommended size: 1200x630 pixels
- Format: PNG or JPG
- Should include: Name, title, professional photo or branding
- File: `assets/images/og-image.png`

---

## Summary of Decisions

| Topic | Decision |
|-------|----------|
| FontAwesome | v6.5.1 Free via cdnjs CDN |
| Fallbacks | Unicode text in HTML, hidden when FA loads |
| Paths | Relative paths only (no leading `/`) |
| Smooth Scroll | CSS `scroll-behavior` + JS for hash/focus |
| SEO | Full OG + Twitter Card tags; 1200x630 og-image.png |

**Research Status**: ✅ Complete — All unknowns resolved
