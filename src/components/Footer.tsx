import React from 'react';
import { useLenis } from '@/components/SmoothScroll';
import { ArrowUp } from 'lucide-react';

/**
 * Portfolio Colophon & Art-Directed Footer
 *
 * Requirements:
 * - Brand & Title: PRAVIN K. / DIGITAL PORTFOLIO
 * - Philosophy: DESIGNED & DEVELOPED WITH INTENTION.
 * - Geography: CHENNAI, INDIA
 * - Copyright: © 2026 PRAVIN K.
 * - Technical marker: END OF TRANSMISSION.
 * - Clean back-to-top trigger powered by Lenis.
 */
export const Footer: React.FC = () => {
  const { scrollToTop } = useLenis();

  return (
    <footer
      aria-label="Colophon & System Telemetry"
      className="relative bg-[#090909] text-[#F5F5F5] border-fine-t py-12 select-none"
    >
      <div className="editorial-container relative z-10 flex flex-col gap-8">
        {/* Top Colophon Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-fine-b font-mono text-xs text-[#888888]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-sm text-[#F5F5F5] uppercase">
                PRAVIN K.
              </span>
              <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
              <span className="text-[rgba(245,245,245,0.2)]">/</span>
              <span className="text-[#F5F5F5]">DIGITAL PORTFOLIO</span>
            </div>
            <span className="hidden sm:inline text-[rgba(245,245,245,0.2)]">|</span>
            <span className="text-[#888888]">DESIGNED &amp; DEVELOPED WITH INTENTION.</span>
          </div>

          <div className="flex items-center gap-2 text-[#E53935] text-[11px] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" aria-hidden="true" />
            <span>END OF TRANSMISSION.</span>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#888888]">
          <div className="flex items-center gap-4">
            <span className="text-[#F5F5F5]">CHENNAI, INDIA</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span>13.0827° N, 80.2707° E</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span>© 2026 PRAVIN K.</span>
          </div>

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-[#F5F5F5] hover:text-[#E53935] transition-colors focus-visible:outline-none focus-visible:text-[#E53935] uppercase tracking-wider text-xs"
              aria-label="Scroll back to the top of the page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
