import { useEffect, useState } from 'react';

/**
 * Performant hook using IntersectionObserver to track the active section.
 * Avoids re-rendering on every scroll tick and only notifies on intersection transitions.
 */
export function useActiveSection(sectionIds: string[], defaultSection: string = 'work'): string {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const elements: HTMLElement[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) elements.push(el);
    });

    if (elements.length === 0) return;

    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: '-15% 0px -60% 0px',
          threshold: 0,
        }
      );

      elements.forEach((el) => observer?.observe(el));
    }

    // Handle boundary positions (top of page and bottom of page)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY < 120) {
        setActiveSection(sectionIds[0] || 'work');
      } else if (windowHeight + scrollY >= docHeight - 80) {
        // Scrolled to bottom of the page -> activate the last section (contact)
        setActiveSection(sectionIds[sectionIds.length - 1] || 'contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
