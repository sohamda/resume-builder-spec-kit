/**
 * Skills Component
 * Renders skills grouped by category with star ratings
 */

/**
 * Initialize skills section
 * Groups skills by category and renders with star ratings
 * @param {Object[]} skills - Skills data array
 */
export function initSkills(skills) {
  const container = document.getElementById('skills-grid');
  if (!container || !skills) return;

  // Group skills by category
  const categories = groupByCategory(skills);

  // Render each category
  container.innerHTML = Object.entries(categories)
    .map(([category, items]) => renderCategory(category, items))
    .join('');
}

/**
 * Group skills array by category
 * @param {Object[]} skills
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
 * @param {Object[]} skills - Skills in category
 * @returns {string} HTML string
 */
function renderCategory(category, skills) {
  const skillsHtml = skills.map(skill => renderSkill(skill)).join('');
  
  return `
    <div class="skill-category">
      <h3 class="skill-category__title">${escapeHtml(category)}</h3>
      <ul class="skill-list">
        ${skillsHtml}
      </ul>
    </div>
  `;
}

/**
 * Render a single skill with star rating
 * @param {Object} skill - Skill object with name and rating
 * @returns {string} HTML string
 */
function renderSkill(skill) {
  const filled = Math.min(Math.max(skill.rating, 0), 5);
  const empty = 5 - filled;

  // FontAwesome stars
  const filledStars = '<i class="fa-solid fa-star" aria-hidden="true"></i>'.repeat(filled);
  const emptyStars = '<i class="fa-regular fa-star" aria-hidden="true"></i>'.repeat(empty);
  
  // Unicode fallback: ★ for filled, ☆ for empty
  const fallback = '★'.repeat(filled) + '☆'.repeat(empty);

  return `
    <li class="skill-item">
      <span class="skill-item__name">${escapeHtml(skill.name)}</span>
      <span class="skill-item__rating" aria-label="${filled} out of 5 stars">
        ${filledStars}${emptyStars}
        <span class="skill-item__rating-fallback">${fallback}</span>
      </span>
    </li>
  `;
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
