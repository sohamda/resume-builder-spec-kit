/**
 * Experience Component
 * Renders experience items and handles "View More" expand/collapse
 */

/**
 * Initialize experience section
 * Renders items and sets up expand/collapse
 * @param {Object[]} experiences - Experience data array
 */
export function initExperience(experiences) {
  const container = document.getElementById('experience-list');
  const toggleBtn = document.getElementById('experience-toggle');

  if (!container || !experiences) return;

  // Render experience items
  container.innerHTML = experiences.map(exp => renderExperienceItem(exp)).join('');

  // Check if we need the toggle button (if there are hidden items)
  const hiddenItems = experiences.filter(exp => exp.visible === false);
  if (hiddenItems.length > 0 && toggleBtn) {
    toggleBtn.hidden = false;
    toggleBtn.addEventListener('click', () => toggleExperience(toggleBtn));
  }
}

/**
 * Render a single experience item
 * @param {Object} exp - Experience object
 * @returns {string} HTML string
 */
function renderExperienceItem(exp) {
  const visibleAttr = exp.visible !== false ? 'true' : 'false';
  const bulletsHtml = exp.bullets
    .map(bullet => `<li>${escapeHtml(bullet)}</li>`)
    .join('');

  return `
    <article class="experience-item" data-visible="${visibleAttr}">
      <div class="experience-item__header">
        <h3 class="experience-item__role">${escapeHtml(exp.role)}</h3>
        <span class="experience-item__company">${escapeHtml(exp.company)}</span>
        <span class="experience-item__dates">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</span>
      </div>
      <ul class="experience-item__bullets">
        ${bulletsHtml}
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
  const isCurrentlyExpanded = btn.textContent === 'Show Less';

  items.forEach(item => {
    if (isCurrentlyExpanded) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });

  btn.textContent = isCurrentlyExpanded ? 'View More' : 'Show Less';
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
