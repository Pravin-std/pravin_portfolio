import React, { useState, useEffect } from 'react';
import { useLenis } from '@/components/SmoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { MobileMenu } from '@/components/MobileMenu';

export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

// Configurable navigation schema
const DESKTOP_NAV_ITEMS: NavItem[] = [
  { id: 'work', number: '01', label: 'WORK', href: '#work' },
  { id: 'about', number: '02', label: 'ABOUT', href: '#about' },
  { id: 'stack', number: '03', label: 'STACK', href: '#stack' },
];

const MOBILE_NAV_ITEMS: NavItem[] = [
  ...DESKTOP_NAV_ITEMS,
  { id: 'contact', number: '04', label: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  statusText?: string;
}

/**
 * Editorial Brutalist Top Navigation System.
 * - LEFT: Brand PRAVIN.K with red signature square (scrolls to top).
 * - CENTER: Technical uppercase links (01 — WORK, 02 — ABOUT, 03 — STACK) with restrained active indicators.
 * - RIGHT: Small red indicator with configurable technical label (PORTFOLIO / 2026).
 * - MOBILE: Custom minimal technical menu trigger + accessible full-screen overlay.
 * - STYLING: Solid black (#090909), white text (#F5F5F5), hairline bottom border, zero glassmorphism.
 */
export const Navbar: React.FC<NavbarProps> = ({
  statusText = 'PORTFOLIO / 2026',
}) => {
  const { scrollTo, scrollToTop } = useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section IDs without continuous re-renders
  const sectionIds = ['work', 'about', 'stack', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  // Monitor scroll for subtle border/background reinforcement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollTo(href, { offset: -64 });
  };

  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled ? 'bg-[#090909] border-fine-b shadow-[0_1px_0_0_rgba(245,245,245,0.06)]' : 'bg-[#090909] border-fine-b'
        }`}
      >
        <div className="editorial-container h-14 md:h-16 flex items-center justify-between">
          {/* LEFT: Brand Signature */}
          <div className="flex items-center">
            <a
              href="#top"
              onClick={handleBrandClick}
              className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E53935]"
              aria-label="Pravin K — Home"
            >
              <span className="font-display font-bold tracking-tight text-sm md:text-base text-[#F5F5F5] group-hover:text-[#E53935] transition-colors duration-200 uppercase">
                PRAVIN.K
              </span>
              <span
                className="w-1.5 h-1.5 bg-[#E53935] inline-block flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* CENTER: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.href);
                  }}
                  className={`group relative py-1 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#E53935] ${
                    isActive ? 'text-[#F5F5F5]' : 'text-[#888888] hover:text-[#F5F5F5]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-[#E53935]' : 'text-[#888888] group-hover:text-[#E53935]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span>—</span>
                  <span>{item.label}</span>

                  {/* Restrained red active underline marker */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E53935]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* RIGHT: Technical Metadata / Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Technical Badge */}
            <div className="hidden md:flex items-center gap-2.5 font-mono text-xs text-[#888888]">
              <span
                className="w-1.5 h-1.5 rounded-none bg-[#E53935] inline-block"
                aria-hidden="true"
              />
              <span className="tracking-widest uppercase text-[11px] text-[#F5F5F5]/90">
                {statusText}
              </span>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
              className="md:hidden flex items-center gap-2 px-3 py-2 min-h-[44px] font-mono text-xs uppercase tracking-widest text-[#F5F5F5] border border-[rgba(245,245,245,0.15)] hover:border-[#E53935] hover:text-[#E53935] transition-colors focus-visible:outline-none focus-visible:border-[#E53935]"
            >
              <span>MENU</span>
              <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={MOBILE_NAV_ITEMS}
        activeSection={activeSection}
        onSelect={handleNavLinkClick}
      />
    </>
  );
};
