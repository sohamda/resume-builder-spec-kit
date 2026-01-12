/**
 * Blogs & Vlogs Section Renderer
 * Renders content cards with tabs for blogs and vlogs
 */

export function initContent(contentData) {
  const contentSection = document.getElementById('content');
  if (!contentSection) return;

  const blogsHtml = contentData.blogs
    .map(blog => `
      <a href="${escapeHtml(blog.url)}" class="content__blog-card" target="_blank" rel="noopener noreferrer">
        <div class="content__blog-meta">
          <span class="content__blog-platform">${escapeHtml(blog.platform)}</span>
          <span>${escapeHtml(blog.date)}</span>
          <span>${escapeHtml(blog.readTime)}</span>
        </div>
        <h3 class="content__blog-title">${escapeHtml(blog.title)}</h3>
        <p class="content__blog-excerpt">${escapeHtml(blog.description)}</p>
      </a>
    `)
    .join('');

  const vlogsHtml = contentData.vlogs
    .map(vlog => `
      <a href="${escapeHtml(vlog.url)}" class="content__vlog-card" target="_blank" rel="noopener noreferrer">
        <div class="content__vlog-thumbnail">
          <img src="${escapeHtml(vlog.thumbnail)}" alt="${escapeHtml(vlog.title)}">
          <span class="content__vlog-duration">${escapeHtml(vlog.duration)}</span>
          <div class="content__vlog-play">
            <i class="fa-solid fa-play" aria-hidden="true"></i>
          </div>
        </div>
        <div class="content__vlog-info">
          <h3 class="content__vlog-title">${escapeHtml(vlog.title)}</h3>
          <div class="content__vlog-meta">
            <span>${escapeHtml(vlog.platform)}</span>
            <span>${escapeHtml(vlog.views)} views</span>
          </div>
        </div>
      </a>
    `)
    .join('');

  contentSection.innerHTML = `
    <div class="content__container">
      <header class="content__header">
        <h2 class="content__title">${escapeHtml(contentData.headline)}</h2>
        <p class="content__description">${escapeHtml(contentData.description)}</p>
      </header>
      <div class="content__tabs">
        <button class="content__tab content__tab--active" data-tab="blogs">
          <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i> Blogs
        </button>
        <button class="content__tab" data-tab="vlogs">
          <i class="fa-solid fa-video" aria-hidden="true"></i> Vlogs
        </button>
      </div>
      <div class="content__blogs" id="content-blogs">
        ${blogsHtml}
      </div>
      <div class="content__vlogs content__section-hidden" id="content-vlogs">
        ${vlogsHtml}
      </div>
    </div>
  `;

  // Tab switching logic
  const tabs = contentSection.querySelectorAll('.content__tab');
  const blogsContainer = document.getElementById('content-blogs');
  const vlogsContainer = document.getElementById('content-vlogs');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('content__tab--active'));
      tab.classList.add('content__tab--active');

      const targetTab = tab.dataset.tab;
      if (targetTab === 'blogs') {
        blogsContainer.classList.remove('content__section-hidden');
        vlogsContainer.classList.add('content__section-hidden');
      } else {
        vlogsContainer.classList.remove('content__section-hidden');
        blogsContainer.classList.add('content__section-hidden');
      }
    });
  });
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
