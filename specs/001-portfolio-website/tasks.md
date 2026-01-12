# Tasks: Personal Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Manual browser testing + Lighthouse audits (no automated test framework per constitution simplicity principle)

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Exact file paths included in descriptions

## Path Conventions

- **Project root**: `src/` for all source files
- **CSS**: `src/css/`
- **JS**: `src/js/` with subdirectories `data/` and `components/`
- **Assets**: `src/assets/images/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and folder structure

- [X] T001 Create project folder structure per plan.md in src/
- [X] T002 [P] Create src/css/ directory with empty CSS files (variables.css, reset.css, layout.css, navigation.css, hero.css, sections.css, components.css)
- [X] T003 [P] Create src/js/ directory structure with empty JS files (main.js, data/resume-data.js, components/navigation.js, components/experience.js, components/skills.js)
- [X] T004 [P] Create src/assets/images/ directory with placeholder files (profile.webp, og-image.png, favicon.ico)
- [X] T005 Create minimal src/index.html with HTML5 doctype, head meta tags, and body structure per contracts/index-html.md

**Checkpoint**: Folder structure complete; index.html opens in browser (empty page, no errors)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core CSS and data that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Implement CSS custom properties in src/css/variables.css (colors, typography, spacing, shadows, transitions)
- [X] T007 [P] Implement browser reset/normalize in src/css/reset.css
- [X] T008 [P] Implement base layout utilities in src/css/layout.css (container, section, responsive breakpoints, smooth scroll)
- [X] T009 Create resume data structure in src/js/data/resume-data.js with sample content per data-model.md "Complete Schema" section
- [X] T010 Create main.js entry point in src/js/main.js with DOMContentLoaded listener and component imports

**Checkpoint**: Foundation ready — CSS variables work, sample data loads, main.js initializes without errors

---

## Phase 3: User Story 1 - View Portfolio Content (Priority: P1) 🎯 MVP

**Goal**: Visitor sees complete professional profile (hero, about, experience, skills, education, contact) by scrolling

**Independent Test**: Open src/index.html in browser; all sections visible by scrolling; no JS errors; readable on mobile (320px) and desktop (1920px)

### HTML Structure for User Story 1

- [X] T011 [US1] Add semantic header with nav placeholder in src/index.html
- [X] T012 [US1] Add hero section markup in src/index.html (photo, name, title, summary, CTA button)
- [X] T013 [US1] Add about section markup in src/index.html (heading, paragraph container; content populated from resumeData.personal.summary or hardcoded)
- [X] T014 [US1] Add experience section markup in src/index.html (heading, experience-list container, toggle button)
- [X] T015 [US1] Add skills section markup in src/index.html (heading, skills-grid container)
- [X] T016 [US1] Add education section markup in src/index.html (heading, education-list container)
- [X] T017 [US1] Add contact section markup in src/index.html (heading, email link, social-links container)
- [X] T018 [US1] Add footer markup in src/index.html (copyright)

### CSS Styling for User Story 1

- [X] T019 [P] [US1] Implement hero section styles in src/css/hero.css (full-height, centered content, photo circle, typography)
- [X] T020 [P] [US1] Implement section styles in src/css/sections.css (about, experience, skills, education, contact styling)
- [X] T021 [P] [US1] Implement component styles in src/css/components.css (buttons, cards, star ratings, icon fallbacks)

### JavaScript Rendering for User Story 1

- [X] T022 [US1] Implement skills rendering with star ratings in src/js/components/skills.js (groupByCategory, renderSkill with FA + Unicode fallback)
- [X] T023 [US1] Implement experience rendering in src/js/components/experience.js (renderExperienceItem, initial visible items only)
- [X] T024 [US1] Wire up skills and experience rendering in src/js/main.js (call initSkills, initExperience on DOMContentLoaded)

### Responsive Design for User Story 1

- [X] T025 [US1] Add responsive breakpoints to src/css/layout.css (320px base, 768px tablet, 1024px desktop, 1280px large)
- [X] T026 [US1] Verify all sections responsive in src/css/sections.css (test hero, experience grid, skills grid at all breakpoints)

**Checkpoint**: User Story 1 complete — All content visible, styled, responsive. Works without navigation (scroll only). Test at 320px, 768px, 1024px, 1920px.

---

## Phase 4: User Story 2 - Navigate to Sections Quickly (Priority: P2)

**Goal**: Visitor can jump to sections via sticky nav; mobile hamburger menu; smooth scroll with hash updates

**Independent Test**: Click each nav link; page scrolls smoothly; hash updates in URL; mobile menu opens/closes; nav stays visible on scroll

### Navigation HTML

- [X] T027 [US2] Complete navigation markup in src/index.html header (logo, toggle button with aria, nav menu with links to all sections)

### Navigation CSS

- [X] T028 [US2] Implement sticky navigation styles in src/css/navigation.css (fixed header, nav layout, link styles, active states)
- [X] T029 [US2] Implement mobile hamburger menu styles in src/css/navigation.css (toggle button, menu slide-in, backdrop)
- [X] T030 [US2] Add scroll-margin-top to sections in src/css/layout.css (offset for sticky nav height)

### Navigation JavaScript

- [X] T031 [US2] Implement navigation.js in src/js/components/navigation.js (initNavigation, mobile toggle, smooth scroll, hash update, focus management)
- [X] T032 [US2] Wire up navigation in src/js/main.js (import and call initNavigation)

### Experience Expand/Collapse

- [X] T033 [US2] Implement "View More" toggle in src/js/components/experience.js (toggleExperience, show hidden items, update button text)

**Checkpoint**: User Story 2 complete — Navigation works on desktop and mobile; smooth scroll; hash updates; experience expands. Test keyboard navigation (Tab, Enter).

---

## Phase 5: User Story 3 - Discover via Search Engines (Priority: P3)

**Goal**: Page has complete SEO meta tags; social sharing previews work; semantic HTML validates

**Independent Test**: View page source and verify all meta tags present; share URL on social media (or use meta tag validator tool); Lighthouse SEO score 100

### SEO Meta Tags

- [X] T034 [US3] Add complete SEO meta tags to src/index.html head (title, description, canonical, charset, viewport)
- [X] T035 [US3] Add Open Graph meta tags to src/index.html head (og:type, og:url, og:title, og:description, og:image)
- [X] T036 [US3] Add Twitter Card meta tags to src/index.html head (twitter:card, twitter:url, twitter:title, twitter:description, twitter:image)
- [X] T037 [US3] Add favicon link to src/index.html head

### Semantic HTML Validation

- [X] T038 [US3] Verify semantic HTML structure in src/index.html (proper h1-h6 hierarchy, aria labels, alt text on images)
- [X] T039 [US3] Add target="_blank" rel="noopener noreferrer" to all external links in src/index.html (including social links: LinkedIn, GitHub, Twitter/X, personal website)

### Accessibility Enhancements

- [X] T040 [P] [US3] Add skip-to-content link at top of src/index.html body
- [X] T041 [P] [US3] Verify focus styles visible in src/css/reset.css (:focus-visible outline)

**Checkpoint**: User Story 3 complete — Lighthouse SEO 100, Accessibility 95+. All meta tags present. Social preview works.

---

## Phase 6: User Story 4 - Access on GitHub Pages (Priority: P4)

**Goal**: Site deploys to GitHub Pages; all assets load; custom 404 page works

**Independent Test**: Push to GitHub; enable Pages; visit live URL; all content loads; try invalid path to see 404

### GitHub Pages Preparation

- [X] T042 [US4] Create src/404.html custom 404 page (styled, link back to home)
- [X] T043 [US4] Verify all asset paths are relative in src/index.html (no leading slashes)
- [X] T044 [US4] Verify all asset paths are relative in CSS files (background images, fonts)
- [X] T045 [US4] Update siteUrl in src/js/data/resume-data.js config section with actual GitHub Pages URL

### Deployment Documentation

- [X] T046 [US4] Verify deployment steps in specs/001-portfolio-website/quickstart.md are accurate

**Checkpoint**: User Story 4 complete — Site deploys to GitHub Pages successfully; all assets load; 404 page works.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final optimizations and validation

- [X] T047 [P] Optimize images in src/assets/images/ (compress profile.webp, og-image.png)
- [ ] T048 [P] Run Lighthouse audit and fix any performance issues (target: Performance 90+, Accessibility 95+, SEO 100; verify load <3s on 4G per SC-001)
- [ ] T049 [P] Test with JavaScript disabled (verify core content still readable)
- [ ] T050 [P] Test FontAwesome fallback (block CDN in DevTools, verify Unicode fallbacks display)
- [ ] T051 Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [X] T052 Final code review for constitution compliance (file size limits, separation of concerns)

**Checkpoint**: All polish complete — Ready for production use.

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup ─────────────────┐
                                ↓
Phase 2: Foundational ──────────┤ ← BLOCKS all user stories
                                ↓
┌───────────────────────────────┴───────────────────────────────┐
│  User Stories (can run in parallel after Phase 2)             │
│                                                               │
│  Phase 3: US1 (P1) ─── MVP ──────────────────────────────────→│
│  Phase 4: US2 (P2) ─── depends on US1 HTML structure ────────→│
│  Phase 5: US3 (P3) ─── can run parallel with US2 ────────────→│
│  Phase 6: US4 (P4) ─── final step, needs all content ready ──→│
└───────────────────────────────────────────────────────────────┘
                                ↓
Phase 7: Polish ────────────────┘
```

### User Story Dependencies

| Story | Can Start After | Notes |
|-------|-----------------|-------|
| US1 (P1) | Phase 2 | No dependencies on other stories |
| US2 (P2) | US1 T011-T018 | Needs HTML sections to exist for nav links |
| US3 (P3) | US1 complete | Needs content for meta descriptions |
| US4 (P4) | US1-US3 complete | Deployment is final step |

### Parallel Opportunities Per Phase

**Phase 1 (Setup)**:
- T002, T003, T004 can run in parallel (different directories)

**Phase 2 (Foundational)**:
- T007, T008 can run in parallel (different CSS files)

**Phase 3 (US1)**:
- T019, T020, T021 can run in parallel (different CSS files)
- T011-T018 must be sequential (same file: index.html)

**Phase 5 (US3)**:
- T040, T041 can run in parallel (different files)

**Phase 7 (Polish)**:
- T047, T048, T049, T050 can all run in parallel

---

## Parallel Example: Phase 3 CSS Tasks

```bash
# These 3 tasks can run simultaneously:
T019: Implement hero section styles in src/css/hero.css
T020: Implement section styles in src/css/sections.css
T021: Implement component styles in src/css/components.css
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (~5 tasks)
2. Complete Phase 2: Foundational (~5 tasks)
3. Complete Phase 3: User Story 1 (~16 tasks)
4. **STOP and VALIDATE**: Open in browser, test responsive
5. **MVP READY** — Content viewable, can share with stakeholders

### Incremental Delivery

| Milestone | Tasks | What Works |
|-----------|-------|------------|
| Foundation | T001-T010 | Empty styled page |
| MVP (US1) | T011-T026 | Full content, responsive, scrollable |
| Navigation (US2) | T027-T033 | Sticky nav, smooth scroll, mobile menu |
| SEO (US3) | T034-T041 | Search engine ready, social sharing |
| Deployed (US4) | T042-T046 | Live on GitHub Pages |
| Polished | T047-T052 | Optimized, validated, production-ready |

---

## Task Summary

| Phase | Tasks | Parallel | Description |
|-------|-------|----------|-------------|
| 1. Setup | 5 | 3 | Folder structure |
| 2. Foundational | 5 | 2 | CSS base, data, main.js |
| 3. US1 (P1) | 16 | 3 | Content display MVP |
| 4. US2 (P2) | 7 | 0 | Navigation |
| 5. US3 (P3) | 8 | 2 | SEO |
| 6. US4 (P4) | 5 | 0 | Deployment |
| 7. Polish | 6 | 4 | Optimization |
| **Total** | **52** | **14** | |

**Estimated Effort**: ~4-6 hours for solo developer (MVP in ~2 hours)
