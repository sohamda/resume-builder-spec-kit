<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version Change: N/A → 1.0.0 (Initial ratification)
Modified Principles: N/A (Initial version)
Added Sections:
  - Core Principles (5 principles)
  - Technology Stack
  - Development Workflow
  - Governance
Removed Sections: N/A
Templates Status:
  ✅ plan-template.md - Compatible (Constitution Check section present)
  ✅ spec-template.md - Compatible (Requirements section aligns)
  ✅ tasks-template.md - Compatible (Phase structure matches principles)
Follow-up TODOs: None
================================================================================
-->

# Resume Builder Constitution

## Core Principles

### I. Vanilla Stack Only (NON-NEGOTIABLE)

This project MUST use only vanilla technologies without frameworks or build tools:

- **JavaScript**: Plain ES6+ JavaScript only. No TypeScript, no transpilers, no bundlers.
- **HTML**: Semantic HTML5. No templating engines or JSX.
- **CSS**: Plain CSS3 with CSS custom properties for theming. No Sass, Less, or CSS-in-JS.
- **Icons**: FontAwesome via CDN for iconography.
- **No Build Step**: Code MUST run directly in browsers without compilation or bundling.

**Rationale**: Ensures simplicity, reduces dependencies, and maintains long-term maintainability without toolchain complexity.

### II. Modular File Structure

All code MUST be organized into small, focused files:

- **Single Responsibility**: Each file handles ONE concern (e.g., one component, one utility, one style module).
- **Max File Size**: No JavaScript file should exceed 150 lines; CSS files should not exceed 200 lines.
- **Folder Organization**: Group related files by feature or domain (e.g., `components/`, `utils/`, `styles/`).
- **No Monoliths**: Avoid single large files containing multiple unrelated functions or styles.

**Rationale**: Small files improve readability, enable parallel work, and simplify code reviews.

### III. Separation of Concerns

Code MUST maintain strict separation:

- **HTML**: Structure and semantic markup only. No inline styles or scripts.
- **CSS**: Presentation only. Use class-based styling with BEM-like naming conventions.
- **JavaScript**: Behavior only. DOM manipulation via query selectors; no inline event handlers in HTML.
- **Data**: Keep resume data as JSON objects separate from rendering logic.

**Rationale**: Clear separation enables independent testing, theming, and maintenance of each layer.

### IV. Progressive Enhancement

Features MUST work at baseline before enhancement:

- **Core First**: Resume display MUST work with HTML/CSS before JavaScript enhancements.
- **Graceful Degradation**: If JavaScript fails, users should still see a readable resume.
- **Accessibility**: All interactive elements MUST be keyboard-accessible with proper ARIA attributes.
- **Responsive**: Mobile-first design; layouts MUST adapt from 320px to 1920px viewports.

**Rationale**: Ensures the application remains usable across devices and failure conditions.

### V. Simplicity Over Cleverness (YAGNI)

Development MUST favor straightforward solutions:

- **No Premature Optimization**: Optimize only when profiling reveals actual bottlenecks.
- **No Over-Engineering**: Build only what is needed for current requirements.
- **Readable Code**: Prefer verbose, clear code over clever one-liners.
- **Minimal Dependencies**: External libraries (beyond FontAwesome) require explicit justification.

**Rationale**: Keeps the codebase accessible to developers of all skill levels and reduces maintenance burden.

## Technology Stack

The following stack is mandatory for this project:

| Layer        | Technology                | Version/Source                     |
|--------------|---------------------------|------------------------------------|
| Markup       | HTML5                     | Semantic elements                  |
| Styling      | CSS3                      | Custom properties, Flexbox, Grid   |
| Scripting    | JavaScript                | ES6+ (no transpilation)            |
| Icons        | FontAwesome               | CDN (latest stable)                |
| Fonts        | System fonts or CDN       | Google Fonts optional              |

**Forbidden Technologies**:
- Build tools (Webpack, Vite, Parcel, etc.)
- CSS preprocessors (Sass, Less, Stylus)
- JavaScript frameworks (React, Vue, Angular, Svelte)
- TypeScript
- Package managers for runtime dependencies

## Development Workflow

### File Naming Conventions

- **JavaScript**: `kebab-case.js` (e.g., `resume-form.js`, `pdf-export.js`)
- **CSS**: `kebab-case.css` (e.g., `resume-preview.css`, `form-styles.css`)
- **HTML**: `kebab-case.html` (e.g., `index.html`, `print-view.html`)

### Code Style Requirements

- **Indentation**: 2 spaces for all files
- **Quotes**: Single quotes in JavaScript, double quotes in HTML attributes
- **Semicolons**: Required in JavaScript
- **CSS Classes**: Use descriptive, BEM-inspired names (e.g., `.resume-section__header--highlighted`)

### Review Checklist

Before any code is merged, verify:

1. [ ] No build step required—files work directly in browser
2. [ ] File size limits respected (JS: 150 lines, CSS: 200 lines)
3. [ ] Separation of concerns maintained (no inline styles/scripts)
4. [ ] Keyboard accessibility verified
5. [ ] Responsive design tested at 320px, 768px, 1024px, 1920px

## Governance

This Constitution is the authoritative source for all project decisions. Amendments require:

1. **Documentation**: Proposed change with rationale in a PR description
2. **Review**: Approval from at least one project maintainer
3. **Version Bump**: Update version following semantic versioning:
   - MAJOR: Principle removal or backward-incompatible change
   - MINOR: New principle or section added
   - PATCH: Clarifications or wording fixes
4. **Migration Plan**: If change affects existing code, include migration steps

All code reviews MUST verify compliance with this Constitution. Violations require explicit justification documented in the PR.

**Version**: 1.0.0 | **Ratified**: 2026-01-06 | **Last Amended**: 2026-01-06
