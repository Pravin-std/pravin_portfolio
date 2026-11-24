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

// Exactly 6 navigation items in defined order
export const NAV_ITEMS: NavItem[] = [
  { id: 'work', number: '01', label: 'WORK', href: '#work' },
  { id: 'about', number: '02', label: 'ABOUT', href: '#about' },
  { id: 'projects', number: '03', label: 'PROJECTS', href: '#projects' },
  { id: 'stack', number: '04', label: 'STACK', href: '#stack' },
  { id: 'recognition', number: '05', label: 'RECOGNITION', href: '#recognition' },
  { id: 'contact', number: '06', label: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  statusText?: string;
}

/**
 * Editorial Brutalist Top Navigation System.
 * - LEFT: Brand PRAVIN.K with red signature square (scrolls to top).
 * - CENTER: Exactly 6 navigation links evenly distributed with responsive typography and gaps.
 * - RIGHT: Technical status marker on wide desktop + accessible mobile menu trigger.
 * - VISIBILITY: Zero clipping; fits desktop, tablet, and mobile with dedicated responsive strategies.
 * - STYLING: Solid black (#090909), white text (#F5F5F5), red accent (#E53935), hairline border.
 */
export const Navbar: React.FC<NavbarProps> = ({
  statusText = 'PORTFOLIO / 2026',
}) => {
  const { scrollTo, scrollToTop } = useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track all 6 active section IDs
  const sectionIds = ['work', 'about', 'projects', 'stack', 'recognition', 'contact'];
  const activeSection = useActiveSection(sectionIds, 'work');

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
          isScrolled
            ? 'bg-[#090909] border-fine-b shadow-[0_1px_0_0_rgba(245,245,245,0.06)]'
            : 'bg-[#090909] border-fine-b'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 h-14 md:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* LEFT: Brand Signature */}
          <div className="flex items-center flex-shrink-0">
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

          {/* CENTER: Desktop & Tablet Navigation (All 6 Items Evenly Distributed) */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-2 lg:mx-6 min-w-0">
            <div className="flex items-center justify-between w-full max-w-3xl gap-2 md:gap-3 lg:gap-5 xl:gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(item.href);
                    }}
                    className={`group relative py-1 flex items-center gap-1 md:gap-1.5 font-mono text-[10.5px] md:text-[11px] lg:text-xs uppercase tracking-wider transition-colors duration-200 flex-shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:text-[#E53935] ${
                      isActive ? 'text-[#F5F5F5]' : 'text-[#888888] hover:text-[#F5F5F5]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span
                      className={`transition-colors duration-200 font-medium ${
                        isActive ? 'text-[#E53935]' : 'text-[#888888] group-hover:text-[#E53935]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="text-[rgba(245,245,245,0.25)] select-none">—</span>
                    <span>{item.label}</span>

                    {/* Restrained red active underline marker */}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#E53935]"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Technical Metadata / Mobile Menu Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Desktop Technical Badge: visible on xl screens to give maximum room to links on tablet */}
            <div className="hidden xl:flex items-center gap-2.5 font-mono text-xs text-[#888888]">
              <span
                className="w-1.5 h-1.5 rounded-none bg-[#E53935] inline-block"
                aria-hidden="true"
              />
              <span className="tracking-widest uppercase text-[11px] text-[#F5F5F5]/90">
                {statusText}
              </span>
            </div>

            {/* Optical spacer on md/lg screens when right badge is hidden */}
            <div className="hidden md:block xl:hidden w-1" aria-hidden="true" />

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

      {/* Accessible Mobile Menu Overlay with all 6 items */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        activeSection={activeSection}
        onSelect={handleNavLinkClick}
      />
    </>
  );
};
