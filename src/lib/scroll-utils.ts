/**
 * Get the current active section based on scroll position
 * Uses intersection observer for better performance when available
 */
export function getActiveSection(
  sections: (Element | null)[],
  scrollPosition: number,
  offset: number = 100
): string | null {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const maxScroll = documentHeight - windowHeight;

  // If we're at or near the bottom of the page, activate the last section
  if (scrollPosition >= maxScroll - 50) {
    const lastSection = sections[sections.length - 1];
    if (lastSection instanceof HTMLElement) {
      return `#${lastSection.id}`;
    }
  }

  // Check sections in reverse order (bottom to top) for better accuracy
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section instanceof HTMLElement) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // For short sections (like contact), use a more lenient check
      if (sectionHeight < 300) {
        // If we've scrolled past the start of a short section, consider it active
        if (scrollPosition >= sectionTop - offset) {
          return `#${section.id}`;
        }
      } else {
        // Regular logic for larger sections
        if (
          scrollPosition >= sectionTop - offset &&
          scrollPosition < sectionTop + sectionHeight - offset
        ) {
          return `#${section.id}`;
        }
      }
    }
  }
  return null;
}
