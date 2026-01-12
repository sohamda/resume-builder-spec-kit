# Contract: JavaScript Files

**Purpose**: Define responsibilities and API for each JavaScript file

## Module Structure

All JS files use ES6 modules (`type="module"` in script tag).

```
js/
├── data/
│   └── resume-data.js    # Data only, exports resumeData object
├── components/
│   ├── navigation.js     # Nav functionality
│   ├── experience.js     # Experience expand/collapse
│   └── skills.js         # Star rating rendering
└── main.js               # Entry point, imports and initializes
```

---

## main.js (~40 lines)

**Purpose**: Application entry point; imports data and components, initializes on DOM ready

### Responsibilities

1. Import `resumeData` from data file
2. Import component initializers
3. Call init functions on `DOMContentLoaded`
4. Handle any global event delegation

### API

```javascript
// main.js
import resumeData from './data/resume-data.js';
import { initNavigation } from './components/navigation.js';
import { initExperience } from './components/experience.js';
import { initSkills } from './components/skills.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initExperience(resumeData.experience);
  initSkills(resumeData.skills);
});
```

---

## resume-data.js (~80 lines)

**Purpose**: Store all resume content as a JavaScript object

### Responsibilities

1. Define and export `resumeData` object
2. Contain all personalizable content
3. No logic—data only

### API

```javascript
// resume-data.js
const resumeData = {
  personal: { /* PersonalInfo */ },
  experience: [ /* Experience[] */ ],
  skills: [ /* Skill[] */ ],
  education: [ /* Education[] */ ],
  config: { /* SiteConfig */ }
};

export default resumeData;
```

See [data-model.md](../data-model.md) for complete schema.

---

## navigation.js (~80 lines)

**Purpose**: Sticky navigation, mobile menu toggle, smooth scroll with hash updates

### Responsibilities

1. Toggle mobile menu open/close
2. Update `aria-expanded` on toggle button
3. Close menu when nav link clicked (mobile)
4. Update URL hash on navigation
5. Manage focus for accessibility
6. Highlight current section in nav (optional enhancement)

### API

```javascript
// navigation.js

/**
 * Initialize navigation functionality
 * Attaches event listeners to nav toggle and links
 */
export function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  const links = document.querySelectorAll('.nav__link');
  
  // Mobile menu toggle
  toggle?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('nav__menu--open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  
  // Nav link click handling
  links.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
}

/**
 * Handle navigation link click
 * Updates URL hash and manages focus
 * @param {Event} event - Click event
 */
function handleNavClick(event) {
  const href = event.currentTarget.getAttribute('href');
  if (!href.startsWith('#')) return;
  
  const sectionId = href.slice(1);
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Update URL hash
    history.pushState(null, '', href);
    
    // Close mobile menu if open
    document.querySelector('.nav__menu')?.classList.remove('nav__menu--open');
    document.querySelector('.nav__toggle')?.setAttribute('aria-expanded', 'false');
    
    // Focus section for accessibility
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
}
```

### DOM Dependencies

| Selector | Required | Purpose |
|----------|----------|---------|
| `.nav__toggle` | Yes | Mobile menu button |
| `.nav__menu` | Yes | Navigation links container |
| `.nav__link` | Yes | Individual nav links |

---

## experience.js (~70 lines)

**Purpose**: Render experience items and handle "View More" expand/collapse

### Responsibilities

1. Render experience items from data
2. Show only visible items initially
3. Toggle visibility on "View More" click
4. Update button text ("View More" ↔ "Show Less")
5. Hide button if all items already visible

### API

```javascript
// experience.js

/**
 * Initialize experience section
 * Renders items and sets up expand/collapse
 * @param {Experience[]} experiences - Experience data array
 */
export function initExperience(experiences) {
  const container = document.getElementById('experience-list');
  const toggleBtn = document.getElementById('experience-toggle');
  
  if (!container) return;
  
  // Render experience items
  container.innerHTML = experiences.map(exp => renderExperienceItem(exp)).join('');
  
  // Check if we need the toggle button
  const hiddenItems = experiences.filter(exp => exp.visible === false);
  if (hiddenItems.length > 0 && toggleBtn) {
    toggleBtn.hidden = false;
    toggleBtn.addEventListener('click', () => toggleExperience(toggleBtn));
  }
}

/**
 * Render a single experience item
 * @param {Experience} exp - Experience object
 * @returns {string} HTML string
 */
function renderExperienceItem(exp) {
  const visibleAttr = exp.visible !== false ? 'true' : 'false';
  return `
    <article class="experience-item" data-visible="${visibleAttr}">
      <div class="experience-item__header">
        <h3 class="experience-item__role">${exp.role}</h3>
        <span class="experience-item__company">${exp.company}</span>
        <span class="experience-item__dates">${exp.startDate} - ${exp.endDate}</span>
      </div>
      <ul class="experience-item__bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </article>
  `;
}

/**
 * Toggle visibility of hidden experience items
 * @param {HTMLButtonElement} btn - Toggle button
 */
function toggleExperience(btn) {
  const items = document.querySelectorAll('.experience-item[data-visible="false"]');
  const isExpanded = btn.textContent === 'Show Less';
  
  items.forEach(item => {
    item.style.display = isExpanded ? 'none' : 'block';
  });
  
  btn.textContent = isExpanded ? 'View More' : 'Show Less';
}
```

### DOM Dependencies

| Selector | Required | Purpose |
|----------|----------|---------|
| `#experience-list` | Yes | Container for rendered items |
| `#experience-toggle` | No | Expand/collapse button |

---

## skills.js (~70 lines)

**Purpose**: Render skills grouped by category with star ratings

### Responsibilities

1. Group skills by category
2. Render skill categories with headings
3. Render star ratings (filled + empty stars)
4. Include Unicode fallback for stars
5. Add proper ARIA labels for accessibility

### API

```javascript
// skills.js

/**
 * Initialize skills section
 * Groups skills by category and renders with star ratings
 * @param {Skill[]} skills - Skills data array
 */
export function initSkills(skills) {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  
  // Group skills by category
  const categories = groupByCategory(skills);
  
  // Render each category
  container.innerHTML = Object.entries(categories)
    .map(([category, items]) => renderCategory(category, items))
    .join('');
}

/**
 * Group skills array by category
 * @param {Skill[]} skills
 * @returns {Object} { categoryName: Skill[] }
 */
function groupByCategory(skills) {
  return skills.reduce((acc, skill) => {
    const cat = skill.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});
}

/**
 * Render a skill category with its skills
 * @param {string} category - Category name
 * @param {Skill[]} skills - Skills in category
 * @returns {string} HTML string
 */
function renderCategory(category, skills) {
  return `
    <div class="skill-category">
      <h3 class="skill-category__title">${category}</h3>
      <ul class="skill-list">
        ${skills.map(skill => renderSkill(skill)).join('')}
      </ul>
    </div>
  `;
}

/**
 * Render a single skill with star rating
 * @param {Skill} skill
 * @returns {string} HTML string
 */
function renderSkill(skill) {
  const filled = skill.rating;
  const empty = 5 - skill.rating;
  
  const filledStars = '<i class="fa-solid fa-star" aria-hidden="true"></i>'.repeat(filled);
  const emptyStars = '<i class="fa-regular fa-star" aria-hidden="true"></i>'.repeat(empty);
  const fallback = '★'.repeat(filled) + '☆'.repeat(empty);
  
  return `
    <li class="skill-item">
      <span class="skill-item__name">${skill.name}</span>
      <span class="skill-item__rating" aria-label="${filled} out of 5 stars">
        ${filledStars}${emptyStars}
        <span class="skill-item__rating-fallback">${fallback}</span>
      </span>
    </li>
  `;
}
```

### DOM Dependencies

| Selector | Required | Purpose |
|----------|----------|---------|
| `#skills-grid` | Yes | Container for rendered categories |

---

## File Size Budget

Per Constitution Principle II (Modular File Structure):

| File | Max Lines | Estimated |
|------|-----------|-----------|
| main.js | 150 | ~40 |
| resume-data.js | 150 | ~80 |
| navigation.js | 150 | ~80 |
| experience.js | 150 | ~70 |
| skills.js | 150 | ~70 |

**Total**: 5 files, all well under 150-line limit ✅
