/**
 * Contact Section Renderer
 * Renders contact info with social links
 */

export function initContact(contactData, socialData) {
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  const socialHtml = socialData
    .map(link => `
      <a href="${escapeHtml(link.url)}" 
         class="contact__social-link" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="${escapeHtml(link.platform)}">
        <i class="${escapeHtml(link.icon)}" aria-hidden="true"></i>
        <span class="contact__social-fallback">${escapeHtml(link.fallback)}</span>
      </a>
    `)
    .join('');

  contactSection.innerHTML = `
    <div class="contact__container">
      <h2 class="contact__title">${escapeHtml(contactData.headline)}</h2>
      <p class="contact__message">${escapeHtml(contactData.message)}</p>
      <div class="contact__availability">
        <span class="contact__availability-dot"></span>
        ${escapeHtml(contactData.availability)}
      </div>
      <a href="mailto:${escapeHtml(contactData.email)}" class="contact__email-link">
        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        ${escapeHtml(contactData.email)}
      </a>
      <div class="contact__social">
        ${socialHtml}
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
