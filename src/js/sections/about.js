/**
 * About Section Renderer
 * Renders about me content with highlight stats
 */

export function initAbout(aboutData) {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const paragraphsHtml = aboutData.paragraphs
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('');

  const highlightsHtml = aboutData.highlights
    .map(h => `
      <div class="about__highlight">
        <div class="about__highlight-icon">
          <i class="${escapeHtml(h.icon)}" aria-hidden="true"></i>
        </div>
        <div class="about__highlight-value">${escapeHtml(h.value)}</div>
        <div class="about__highlight-label">${escapeHtml(h.label)}</div>
      </div>
    `)
    .join('');

  aboutSection.innerHTML = `
    <div class="about__container">
      <header class="about__header">
        <h2 class="about__title">${escapeHtml(aboutData.headline)}</h2>
      </header>
      <div class="about__content">
        <div class="about__text">
          ${paragraphsHtml}
        </div>
        <div class="about__highlights">
          ${highlightsHtml}
        </div>
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
