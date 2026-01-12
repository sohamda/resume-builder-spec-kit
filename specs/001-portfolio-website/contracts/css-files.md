# Contract: CSS Files

**Purpose**: Define responsibilities and class naming conventions for each CSS file

## CSS Load Order

Files must be loaded in this order (later files can override earlier):

1. `variables.css` — Custom properties (no selectors)
2. `reset.css` — Browser normalization
3. `layout.css` — Page structure, grid, responsive utilities
4. `navigation.css` — Header, nav bar, mobile menu
5. `hero.css` — Hero section styles
6. `sections.css` — Generic section styles + specific sections
7. `components.css` — Reusable components (buttons, cards, ratings)

---

## variables.css (~50 lines)

**Purpose**: Define all CSS custom properties used throughout the project

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-secondary: #1e40af;
  --color-accent: #3b82f6;
  
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-text-inverse: #ffffff;
  
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-surface-alt: #f3f4f6;
  --color-border: #e5e7eb;
  
  --color-star-filled: #fbbf24;
  --color-star-empty: #d1d5db;
  
  /* Typography */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  --font-family-heading: var(--font-family-base);
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  --line-height-tight: 1.25;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Layout */
  --max-width-content: 1200px;
  --nav-height: 64px;
  
  /* Borders & Shadows */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  --border-radius-full: 9999px;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
}
```

---

## reset.css (~40 lines)

**Purpose**: Normalize browser defaults for consistent cross-browser styling

```css
/* Box sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Remove default margins */
body, h1, h2, h3, h4, p, ul, ol, figure, blockquote {
  margin: 0;
}

/* Remove list styles */
ul, ol {
  list-style: none;
  padding: 0;
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Inherit fonts */
button, input, select, textarea {
  font: inherit;
}

/* Remove button styles */
button {
  background: none;
  border: none;
  cursor: pointer;
}

/* Anchor defaults */
a {
  color: inherit;
  text-decoration: none;
}

/* Focus visible */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## layout.css (~100 lines)

**Purpose**: Page structure, containers, grid system, responsive utilities

### Classes

| Class | Purpose |
|-------|---------|
| `.container` | Max-width centered container |
| `.section` | Full-width section with vertical padding |
| `.section__container` | Section content container |
| `.section__title` | Section heading (h2) |
| `.section--alt` | Alternate background color |
| `.grid` | CSS Grid container |
| `.flex` | Flexbox container |

### Responsive Breakpoints

```css
/* Mobile first - base styles for 320px+ */

/* Tablet: 768px+ */
@media (min-width: 768px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }

/* Large desktop: 1280px+ */
@media (min-width: 1280px) { }
```

### Smooth Scroll

```css
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: var(--nav-height);
}
```

---

## navigation.css (~120 lines)

**Purpose**: Header, sticky navigation, mobile hamburger menu

### Classes

| Class | Purpose |
|-------|---------|
| `.site-header` | Fixed/sticky header container |
| `.nav` | Navigation flex container |
| `.nav__logo` | Logo/home link |
| `.nav__toggle` | Mobile menu button |
| `.nav__toggle-fallback` | Unicode fallback for hamburger |
| `.nav__menu` | Navigation links list |
| `.nav__menu--open` | Menu expanded state (mobile) |
| `.nav__link` | Individual nav link |
| `.nav__link--active` | Current section highlight |

### Behavior

- Mobile (<768px): Menu hidden, toggle visible, menu slides in on open
- Desktop (≥768px): Menu visible as horizontal links, toggle hidden

---

## hero.css (~80 lines)

**Purpose**: Hero section layout and styling

### Classes

| Class | Purpose |
|-------|---------|
| `.hero` | Full-viewport hero section |
| `.hero__content` | Centered content container |
| `.hero__photo` | Profile photo (circular) |
| `.hero__name` | Name (h1) |
| `.hero__title` | Professional title |
| `.hero__summary` | 1-2 sentence summary |
| `.hero__cta` | Call-to-action button |

---

## sections.css (~150 lines)

**Purpose**: Content section styles (About, Experience, Skills, Education, Contact)

### Generic Section Classes

| Class | Purpose |
|-------|---------|
| `.section__title` | h2 section heading |
| `.section__subtitle` | Optional section description |

### Experience Classes

| Class | Purpose |
|-------|---------|
| `.experience-list` | Container for experience items |
| `.experience-item` | Single experience entry |
| `.experience-item[data-visible="false"]` | Hidden item (before expand) |
| `.experience-item__header` | Role, company, dates row |
| `.experience-item__role` | Job title (h3) |
| `.experience-item__company` | Company name |
| `.experience-item__dates` | Date range |
| `.experience-item__bullets` | Responsibilities list |
| `.experience__toggle` | "View More" button |

### Skills Classes

| Class | Purpose |
|-------|---------|
| `.skills-grid` | Grid container for skill categories |
| `.skill-category` | Category group |
| `.skill-category__title` | Category heading (h3) |
| `.skill-list` | List of skills in category |
| `.skill-item` | Single skill with rating |
| `.skill-item__name` | Skill name |
| `.skill-item__rating` | Star rating container |
| `.skill-item__rating-fallback` | Unicode star fallback |

### Education Classes

| Class | Purpose |
|-------|---------|
| `.education-list` | Container for education items |
| `.education-item` | Single education entry |
| `.education-item__institution` | School name |
| `.education-item__degree` | Degree and field |
| `.education-item__year` | Graduation year |

### Contact Classes

| Class | Purpose |
|-------|---------|
| `.contact__email` | Email link with icon |
| `.contact__email-fallback` | Unicode email fallback |
| `.social-links` | Social media links container |
| `.social-link` | Individual social link |
| `.social-link__icon` | FontAwesome icon |
| `.social-link__fallback` | Unicode fallback |

---

## components.css (~100 lines)

**Purpose**: Reusable UI components

### Button Classes

| Class | Purpose |
|-------|---------|
| `.btn` | Base button styles |
| `.btn--primary` | Primary action button |
| `.btn--secondary` | Secondary action button |
| `.btn--small` | Smaller button variant |

### Icon Classes

| Class | Purpose |
|-------|---------|
| `.icon` | Icon wrapper |
| `.icon__fallback` | Hidden Unicode fallback |

### Card Classes (if needed)

| Class | Purpose |
|-------|---------|
| `.card` | Generic card container |
| `.card__header` | Card header |
| `.card__body` | Card content |

---

## BEM Naming Convention

All classes follow BEM-inspired naming:

- **Block**: `.component-name`
- **Element**: `.component-name__element`
- **Modifier**: `.component-name--modifier`

Examples:
- `.nav__link` (element of nav)
- `.btn--primary` (modifier of btn)
- `.experience-item__header` (element of experience-item)
