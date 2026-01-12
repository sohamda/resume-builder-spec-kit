/**
 * Main Entry Point
 * Imports data and section renderers, initializes on DOM ready
 * 
 * Architecture: Each section has its own JS file in sections/ folder
 * for easy maintenance and updates.
 */

import resumeData from './data/resume-data.js';
import { initNavigation } from './components/navigation.js';
import { initHero } from './sections/hero.js';
import { initAbout } from './sections/about.js';
import { initExpertise } from './sections/expertise.js';
import { initExperience } from './sections/experience.js';
import { initContent } from './sections/content.js';
import { initCommunity } from './sections/community.js';
import { initContact } from './sections/contact.js';

/**
 * Initialize all sections when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation (mobile menu, smooth scroll)
  initNavigation();

  // Initialize all sections with their respective data
  initHero(resumeData.hero, resumeData.social);
  initAbout(resumeData.about);
  initExpertise(resumeData.expertise);
  initExperience(resumeData.experience);
  initContent(resumeData.content);
  initCommunity(resumeData.community);
  initContact(resumeData.contact, resumeData.social);

  // Update document title from config
  if (resumeData.config?.siteTitle) {
    document.title = resumeData.config.siteTitle;
  }

  // Add scroll-based animations
  initScrollAnimations();
});

/**
 * Initialize scroll-based animations for sections
 */
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section--visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('section--animate');
    observer.observe(section);
  });
}