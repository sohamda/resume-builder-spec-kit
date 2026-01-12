/**
 * Community Engagement Section Renderer
 * Renders speaking, review committee, and volunteer activities
 */

export function initCommunity(communityData) {
  const communitySection = document.getElementById('community');
  if (!communitySection) return;

  const speakingHtml = communityData.speaking
    .map(item => {
      const [month, year] = parseDate(item.date);
      return `
        <div class="community__speaking-item">
          <div class="community__speaking-date">
            <span class="community__speaking-month">${month}</span>
            <span class="community__speaking-year">${year}</span>
          </div>
          <div class="community__speaking-info">
            <h4 class="community__speaking-title">${escapeHtml(item.title)}</h4>
            <div class="community__speaking-event">${escapeHtml(item.event)}</div>
            <div class="community__speaking-meta">
              <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${escapeHtml(item.location)}</span>
              <span class="community__speaking-type">${escapeHtml(item.type)}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  const reviewHtml = communityData.reviewCommittee
    .map(item => `
      <div class="community__role-item">
        <div class="community__role-header">
          <h4 class="community__role-title">${escapeHtml(item.role)}</h4>
          <span class="community__role-period">${escapeHtml(item.period)}</span>
        </div>
        <div class="community__role-org">${escapeHtml(item.organization)}</div>
        <p class="community__role-description">${escapeHtml(item.description)}</p>
      </div>
    `)
    .join('');

  const volunteerHtml = communityData.volunteer
    .map(item => `
      <div class="community__role-item">
        <div class="community__role-header">
          <h4 class="community__role-title">${escapeHtml(item.role)}</h4>
          <span class="community__role-period">${escapeHtml(item.period)}</span>
        </div>
        <div class="community__role-org">${escapeHtml(item.organization)}</div>
        <p class="community__role-description">${escapeHtml(item.description)}</p>
      </div>
    `)
    .join('');

  communitySection.innerHTML = `
    <div class="community__container">
      <header class="community__header">
        <h2 class="community__title">${escapeHtml(communityData.headline)}</h2>
        <p class="community__description">${escapeHtml(communityData.description)}</p>
      </header>

      <div class="community__subsection">
        <h3 class="community__subtitle">
          <span class="community__subtitle-icon">
            <i class="fa-solid fa-microphone" aria-hidden="true"></i>
          </span>
          Speaking Engagements
        </h3>
        <div class="community__speaking-list">
          ${speakingHtml}
        </div>
      </div>

      <div class="community__subsection">
        <h3 class="community__subtitle">
          <span class="community__subtitle-icon">
            <i class="fa-solid fa-users-rectangle" aria-hidden="true"></i>
          </span>
          Review Committee
        </h3>
        <div class="community__role-list">
          ${reviewHtml}
        </div>
      </div>

      <div class="community__subsection">
        <h3 class="community__subtitle">
          <span class="community__subtitle-icon">
            <i class="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
          </span>
          Volunteer Work
        </h3>
        <div class="community__role-list">
          ${volunteerHtml}
        </div>
      </div>
    </div>
  `;
}

function parseDate(dateStr) {
  const parts = dateStr.split(' ');
  if (parts.length >= 2) {
    return [parts[0], parts[1]];
  }
  return [dateStr, ''];
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
