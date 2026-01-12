# Implementation Plan: Personal Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-01-07 | **Spec**: [spec.md](spec.md)  
**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

## Summary

Build a single-page portfolio website that displays resume content (hero, about, experience, skills, education, contact) with sticky navigation, smooth scrolling, and comprehensive SEO meta tags. The site will be static HTML/CSS/JS, hosted on GitHub Pages, with resume data stored in a separate JavaScript data file. Per clarifications: experience shows 2-3 items with expand toggle, skills use star ratings, and FontAwesome icons have Unicode fallbacks.

## Technical Context

**Language/Version**: JavaScript ES6+ (no transpilation), HTML5, CSS3  
**Primary Dependencies**: FontAwesome 6.x (CDN only)—no other external dependencies  
**Storage**: N/A (static site; resume data in JS file)  
**Testing**: Manual browser testing + Lighthouse audits (no test framework per simplicity principle)  
**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge); GitHub Pages hosting  
**Project Type**: Single static website  
**Performance Goals**: Lighthouse Performance 90+, load <3s on 4G  
**Constraints**: No build step, JS files ≤150 lines, CSS files ≤200 lines, keyboard accessible  
**Scale/Scope**: Single page, ~6 sections, ~15 source files

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| **I. Vanilla Stack Only** | ✅ PASS | HTML5 + CSS3 + ES6 JS only; FontAwesome via CDN; no build tools |
| **II. Modular File Structure** | ✅ PASS | Plan specifies ~15 small files; JS ≤150 lines, CSS ≤200 lines |
| **III. Separation of Concerns** | ✅ PASS | HTML structure, CSS presentation, JS behavior, data in separate file |
| **IV. Progressive Enhancement** | ✅ PASS | Core content works without JS; smooth scroll/menu degrade gracefully |
| **V. Simplicity (YAGNI)** | ✅ PASS | Only FontAwesome CDN; no frameworks, no over-engineering |

**Gate Status**: ✅ PASSED — No violations. Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (file structure contracts)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── index.html           # Main single-page HTML (semantic structure)
├── 404.html             # Custom 404 page for GitHub Pages
├── css/
│   ├── variables.css    # CSS custom properties (colors, spacing, fonts)
│   ├── reset.css        # Minimal CSS reset / normalize
│   ├── layout.css       # Grid/flexbox layout, responsive breakpoints
│   ├── navigation.css   # Sticky nav, hamburger menu styles
│   ├── hero.css         # Hero section styles
│   ├── sections.css     # About, Experience, Skills, Education, Contact
│   └── components.css   # Reusable: buttons, cards, star ratings, icons
├── js/
│   ├── data/
│   │   └── resume-data.js    # Resume content as JS object (exportable)
│   ├── components/
│   │   ├── navigation.js     # Sticky nav, mobile menu toggle, smooth scroll
│   │   ├── experience.js     # "View More" expand/collapse logic
│   │   └── skills.js         # Star rating renderer with Unicode fallback
│   └── main.js               # Entry point: init components, bind events
└── assets/
    ├── images/
    │   ├── profile.webp      # Profile photo (WebP for performance)
    │   ├── og-image.png      # Open Graph preview image (1200x630)
    │   └── favicon.ico       # Favicon
    └── fonts/                # Empty—using system fonts + FontAwesome CDN
```

**Structure Decision**: Single static website structure with modular CSS/JS files organized by concern. No backend, no build step. Assets kept minimal for performance.

## Complexity Tracking

> No violations to justify—all principles passed.

---

## Phase 0: Research

### Research Tasks

| # | Topic | Question | Resolution |
|---|-------|----------|------------|
| R1 | FontAwesome CDN | Which version and subset to use for minimal load? | Use FA 6.x Free, load only `brands` + `solid` subsets via CDN |
| R2 | Unicode Fallbacks | Which Unicode characters map to required icons? | ✉ (U+2709) email, ★ (U+2605) star, ☰ (U+2630) hamburger, → (U+2192) arrow |
| R3 | GitHub Pages | Best practices for relative paths in subdirectory deploy? | Use relative paths (`./css/`) not absolute (`/css/`); no base href needed |
| R4 | Smooth Scroll | CSS vs JS for smooth scrolling with hash updates? | CSS `scroll-behavior: smooth` + JS for hash update and focus management |
| R5 | SEO Meta Tags | Required Open Graph and Twitter Card tags? | og:title, og:description, og:image, og:url, og:type; twitter:card, twitter:title, twitter:description, twitter:image |

### Decisions

1. **FontAwesome**: Load `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` (brands + solid icons included)
2. **Fallback Strategy**: CSS pseudo-element with Unicode content as fallback when `.fa` class fails to render
3. **GitHub Pages**: All asset paths relative; no leading slash; `404.html` at root for custom 404
4. **Smooth Scroll**: Use `html { scroll-behavior: smooth; }` in CSS; JS handles hash update and keyboard focus
5. **SEO**: Meta tags in `<head>` with placeholder tokens replaced by data from `resume-data.js` (or hardcoded for static version)

---

## Phase 1: Design & Contracts

### Data Model

See [data-model.md](data-model.md) for complete entity definitions.

**Summary**:
- `PersonalInfo`: name, title, summary, email, photo, socialLinks[]
- `Experience[]`: company, role, startDate, endDate, bullets[], visible (for expand logic)
- `Skill[]`: name, category, rating (1-5)
- `Education[]`: institution, degree, field, year
- `SocialLink`: platform, url, icon (FA class), fallbackChar

### File Contracts

See [contracts/](contracts/) directory for:
- `index.html` — Semantic HTML structure with section IDs
- `resume-data.js` — Data schema and example
- CSS file responsibilities and class naming conventions

### Quickstart

See [quickstart.md](quickstart.md) for:
- How to run locally (just open `index.html` in browser)
- How to customize resume data
- How to deploy to GitHub Pages

---

## Constitution Re-Check (Post Phase 1)

| Principle | Status | Notes |
|-----------|--------|-------|
| **I. Vanilla Stack Only** | ✅ PASS | No build tools; FontAwesome CDN only |
| **II. Modular File Structure** | ✅ PASS | 7 CSS files, 5 JS files—all under limits |
| **III. Separation of Concerns** | ✅ PASS | Data, structure, style, behavior separated |
| **IV. Progressive Enhancement** | ✅ PASS | HTML readable without JS; CSS fallbacks defined |
| **V. Simplicity (YAGNI)** | ✅ PASS | Minimal dependencies; no over-engineering |

**Gate Status**: ✅ PASSED — Ready for `/speckit.tasks`
