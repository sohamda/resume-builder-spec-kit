/**
 * Navigation Component
 * Handles sticky nav, mobile menu toggle, smooth scroll with hash updates
 */

/**
 * Initialize navigation functionality
 * Attaches event listeners to nav toggle and links
 */
export function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  const links = document.querySelectorAll('.nav__link');

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('nav__menu--open');
      toggle.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Nav link click handling
  links.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (menu && !menu.contains(event.target) && !toggle?.contains(event.target)) {
      menu.classList.remove('nav__menu--open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.classList.contains('nav__menu--open')) {
      menu.classList.remove('nav__menu--open');
      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.focus();
    }
  });
}

/**
 * Handle navigation link click
 * Updates URL hash and manages focus
 * @param {Event} event - Click event
 */
function handleNavClick(event) {
  const href = event.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#')) return;

  const sectionId = href.slice(1);
  const section = document.getElementById(sectionId);

  if (section) {
    // Update URL hash without scrolling (CSS handles smooth scroll)
    history.pushState(null, '', href);

    // Close mobile menu if open
    const menu = document.querySelector('.nav__menu');
    const toggle = document.querySelector('.nav__toggle');
    menu?.classList.remove('nav__menu--open');
    toggle?.setAttribute('aria-expanded', 'false');

    // Focus section for accessibility
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
}
