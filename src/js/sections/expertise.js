/**
 * Technical Expertise Section Renderer
 * Renders skills categories and certifications
 */

export function initExpertise(expertiseData) {
  const expertiseSection = document.getElementById('expertise');
  if (!expertiseSection) return;

  const categoriesHtml = expertiseData.categories
    .map(cat => `
      <div class="expertise__category">
        <h3 class="expertise__category-name">${escapeHtml(cat.name)}</h3>
        <div class="expertise__skill-tags">
          ${cat.skills.map(skill => `
            <span class="expertise__skill-tag">${escapeHtml(skill)}</span>
          `).join('')}
        </div>
      </div>
    `)
    .join('');

  const certsHtml = expertiseData.certifications
    .map(cert => `
      <div class="expertise__cert">
        <div class="expertise__cert-badge">
          <i class="${escapeHtml(cert.badge)}" aria-hidden="true"></i>
        </div>
        <div class="expertise__cert-info">
          <div class="expertise__cert-name">${escapeHtml(cert.name)}</div>
          <div class="expertise__cert-meta">
            ${escapeHtml(cert.issuer)} · 
            <span class="expertise__cert-year">${escapeHtml(cert.year)}</span>
          </div>
        </div>
      </div>
    `)
    .join('');

  expertiseSection.innerHTML = `
    <div class="expertise__container">
      <header class="expertise__header">
        <h2 class="expertise__title">${escapeHtml(expertiseData.headline)}</h2>
      </header>
      <div class="expertise__skills">
        ${categoriesHtml}
      </div>
      <h3 class="expertise__certifications-title">Certifications</h3>
      <div class="expertise__certifications">
        ${certsHtml}
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
