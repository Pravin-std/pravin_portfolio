import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { NavItem } from '@/components/Navbar';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeSection: string;
  onSelect: (href: string) => void;
}

/**
 * Brutalist Mobile Navigation Overlay.
 * - Displays all 6 navigation links in defined order.
 * - Clean full-screen black panel (#090909) with hairline architectural borders.
 * - Responsive typography scaling to prevent overflow on small phone viewports.
 * - Strict keyboard navigation, Escape key handler, and body scroll lock.
 * - Smooth open/close transitions respecting prefers-reduced-motion.
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
  activeSection,
  onSelect,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll and manage Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount for accessibility
    const timeout = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#090909] text-[#F5F5F5] flex flex-col justify-between p-6 sm:p-10 select-none"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-fine-b flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-lg text-[#F5F5F5]">
                PRAVIN.K
              </span>
              <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="px-4 py-2 min-h-[44px] flex items-center font-mono text-xs uppercase tracking-widest text-[#F5F5F5] border border-[rgba(245,245,245,0.15)] hover:border-[#E53935] hover:text-[#E53935] transition-colors focus-visible:outline-none focus-visible:border-[#E53935]"
            >
              [ CLOSE ]
            </button>
          </div>

          {/* Navigation Links List (All 6 Items with Smooth Stagger) */}
          <nav className="my-auto py-6 overflow-y-auto max-h-[calc(100vh-140px)]">
            <ul className="space-y-4 sm:space-y-6">
              {items.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.04 + 0.08,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelect(item.href);
                      }}
                      className="group flex items-baseline gap-3 sm:gap-4 py-1.5 sm:py-2 border-b border-[rgba(245,245,245,0.06)] hover:border-[#E53935] transition-colors focus-visible:outline-none focus-visible:text-[#E53935]"
                    >
                      <span className="font-mono text-xs sm:text-sm text-[#E53935] tracking-widest font-medium">
                        {item.number}
                      </span>
                      <span
                        className={`font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-200 ${
                          isActive
                            ? 'text-[#F5F5F5]'
                            : 'text-[#888888] group-hover:text-[#F5F5F5]'
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#E53935] ml-auto self-center flex-shrink-0" aria-hidden="true" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Technical Colophon */}
          <div className="pt-6 border-fine-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 label-tech flex-shrink-0">
            <span>SALEM, IN // 11.6643° N, 78.1460° E</span>
            <span className="text-[#E53935]">PORTFOLIO / 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
