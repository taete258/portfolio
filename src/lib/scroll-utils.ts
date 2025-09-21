/**
 * Get the current active section based on scroll position
 * Uses intersection observer for better performance when available
 */
export function getActiveSection(
  sections: (Element | null)[],
  scrollPosition: number,
  offset: number = 100
): string | null {
  for (const section of sections) {
    if (section instanceof HTMLElement) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - offset &&
        scrollPosition < sectionTop + sectionHeight - offset
      ) {
        return `#${section.id}`;
      }
    }
  }
  return null;
}
