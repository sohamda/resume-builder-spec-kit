/**
 * Hero Section Renderer
 * Renders hero with photo, name, title, tagline, and social links
 */

export function initHero(heroData, socialData) {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  heroSection.innerHTML = `
    <div class="hero__content">
      <img src="${escapeHtml(heroData.photo)}" alt="${escapeHtml(heroData.name)}" class="hero__photo">
      <h1 class="hero__name">${escapeHtml(heroData.name)}</h1>
      <p class="hero__title">${escapeHtml(heroData.title)}</p>
      <p class="hero__tagline">${escapeHtml(heroData.tagline)}</p>
      <a href="${escapeHtml(heroData.cta.link)}" class="hero__cta">
        ${escapeHtml(heroData.cta.text)}
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>
      <div class="hero__social">
        ${socialData.map(link => `
          <a href="${escapeHtml(link.url)}" 
             class="hero__social-link" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="${escapeHtml(link.platform)}">
            <i class="${escapeHtml(link.icon)}" aria-hidden="true"></i>
            <span class="hero__social-fallback">${escapeHtml(link.fallback)}</span>
          </a>
        `).join('')}
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
