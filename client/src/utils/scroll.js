/**
 * Get current sticky navbar height.
 * Accurately measures the header element in the DOM.
 * @returns {number} Navbar height in pixels
 */
export function getNavbarHeight() {
  const header = document.querySelector('header');
  if (header) {
    const rect = header.getBoundingClientRect();
    if (rect.height > 0) return Math.round(rect.height);
  }
  // Fallback based on viewport width (mobile: 64px, desktop: 72px)
  return window.innerWidth < 640 ? 64 : 72;
}

/**
 * Smoothly scroll to an element so that its top edge sits EXACTLY flush
 * against the bottom of the sticky navbar with zero gap and no previous section visible.
 * @param {string|HTMLElement} target - Element ID (without '#') or DOM element
 * @param {number|null} customOffset - Optional custom offset in px.
 * @returns {boolean} Whether the target was found and scrolled to
 */
export function scrollToSection(target, customOffset = null) {
  if (!target) return false;

  const targetId = typeof target === 'string' ? target.replace(/^#/, '') : target.id;
  const element = typeof target === 'string' ? document.getElementById(targetId) : target;

  if (!element) return false;

  const navHeight = customOffset !== null ? customOffset : getNavbarHeight();

  // Calculate element's absolute position relative to document top
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  // Align the top of the section directly with the bottom of the navbar (0 gap)
  const offsetPosition = Math.max(0, Math.round(elementPosition - navHeight));

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });

  return true;
}

/**
 * Scroll to top of the page smoothly
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
