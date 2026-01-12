/**
 * Work Experience Section Renderer
 * Renders timeline-style experience cards
 */

export function initExperience(experienceData) {
  const experienceSection = document.getElementById('experience');
  if (!experienceSection) return;

  const positionsHtml = experienceData.positions
    .map(pos => `
      <article class="experience__card">
        <div class="experience__card-header">
          <img src="${escapeHtml(pos.logo)}" alt="${escapeHtml(pos.company)}" class="experience__company-logo">
          <div class="experience__card-info">
            <h3 class="experience__role">${escapeHtml(pos.role)}</h3>
            <div class="experience__company">${escapeHtml(pos.company)}</div>
            <div class="experience__meta">
              <span class="experience__meta-item">
                <i class="fa-regular fa-calendar" aria-hidden="true"></i>
                ${escapeHtml(pos.period)}
              </span>
              <span class="experience__meta-item">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                ${escapeHtml(pos.location)}
              </span>
              <span class="experience__meta-item">
                <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
                ${escapeHtml(pos.type)}
              </span>
            </div>
          </div>
        </div>
        <p class="experience__description">${escapeHtml(pos.description)}</p>
        <ul class="experience__achievements">
          ${pos.achievements.map(a => `<li>${escapeHtml(a)}</li>`).join('')}
        </ul>
        <div class="experience__tech">
          ${pos.technologies.map(t => `
            <span class="experience__tech-tag">${escapeHtml(t)}</span>
          `).join('')}
        </div>
      </article>
    `)
    .join('');

  experienceSection.innerHTML = `
    <div class="experience__container">
      <header class="experience__header">
        <h2 class="experience__title">${escapeHtml(experienceData.headline)}</h2>
      </header>
      <div class="experience__timeline">
        ${positionsHtml}
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
