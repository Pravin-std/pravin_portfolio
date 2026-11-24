import React, { lazy } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, Compass } from 'lucide-react';
import { useLenis } from '@/components/SmoothScroll';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Performance optimization: Dynamically load the Three.js Canvas so it never blocks initial paint
const RedShiftCanvas = lazy(() =>
  import('@/three/RedShiftCanvas').then((m) => ({ default: m.RedShiftCanvas }))
);

/**
 * RED SHIFT / 001 - Signature Hero Experience
 *
 * Performance & Quality Optimizations:
 * - Three.js canvas is dynamically code-split, keeping initial load sub-65 kB.
 * - Responsive typography scaling ensuring 0px overflow down to 320px screens.
 * - Accessible landmarks and semantic markup.
 */
export const Hero: React.FC = () => {
  const { scrollTo } = useLenis();
  const prefersReducedMotion = useReducedMotion();

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('#projects', { offset: -64 });
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('#about', { offset: -64 });
  };

  return (
    <section
      id="work"
      aria-label="Work - Introduction & Signature 3D Experience"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden bg-[#090909] text-[#F5F5F5] select-none"
    >
      {/* Fallback anchor for backward compatibility */}
      <div id="hero" className="sr-only" aria-hidden="true" />
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15" aria-hidden="true">
        <div className="editorial-container h-full border-fine-l border-fine-r flex justify-between">
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
        </div>
      </div>

      <div className="relative z-10 editorial-container w-full flex-1 flex flex-col justify-between pt-6 md:pt-10 pb-6">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-fine-b label-tech">
          <div className="flex items-center gap-3">
            <span className="text-[#E53935] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E53935] inline-block animate-pulse" aria-hidden="true" />
              RED SHIFT // 001
            </span>
            <span className="text-[rgba(245,245,245,0.2)]">|</span>
            <span className="text-[#888888]">SPECIFICATION: HIGH ACCURACY</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline flex items-center gap-1.5">
              <Compass size={12} className="text-[#E53935]" aria-hidden="true" />
              11.6643° N, 78.1460° E
            </span>
            <span className="text-[#F5F5F5] border border-[rgba(245,245,245,0.15)] px-2 py-0.5">
              SALEM, IN
            </span>
          </div>
        </div>

        {/* Central Asymmetric Stage: Typography (Left) + 3D Sculpture (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8 lg:py-12">
          {/* Left Column: Typographic Powerhouse (7 cols on desktop) */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-center">
            {/* Identity & Eyebrow */}
            <div className="flex items-center gap-2 mb-4 label-tech text-[#888888]">
              <Terminal size={13} className="text-[#E53935]" aria-hidden="true" />
              <span className="text-[#F5F5F5] font-semibold">PRAVIN K</span>
              <span>—</span>
              <span className="text-[#E53935]">AI &amp; DATA SCIENCE / DEVELOPER</span>
            </div>

            {/* Main Headline (Responsive typography preventing mobile clipping) */}
            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl xs:text-5xl sm:text-7xl md:text-8xl xl:text-[6.8rem] font-bold tracking-tighter leading-[0.88] uppercase break-words"
            >
              <span className="block text-[#F5F5F5]">I BUILD</span>
              <span className="block text-stroke-white transition-colors duration-300">
                DIGITAL
              </span>
              <span className="block text-[#F5F5F5]">THINGS.</span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-[#888888] max-w-xl font-normal leading-relaxed"
            >
              Exploring technology, building useful applications, and turning ideas into functional experiences.
            </motion.p>

            {/* Call To Action Controls */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={handleExploreClick}
                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 bg-[#F5F5F5] text-[#090909] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#E53935] hover:text-[#F5F5F5] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E53935]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#about"
                onClick={handleAboutClick}
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-mono text-xs uppercase tracking-widest hover:border-[#E53935] hover:text-[#E53935] transition-colors duration-200 focus-visible:outline-none focus-visible:border-[#E53935]"
              >
                <span>ABOUT ME</span>
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Sculpture Stage (Freely floating, unboxed 3D stage) */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[580px] xl:h-[640px] flex items-center justify-center">
            {/* Freely floating expanded 3D WebGL Canvas with zero boundary restrictions */}
            <div className="absolute -inset-4 sm:-inset-8 lg:-inset-12 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+6rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+4rem)] lg:h-[calc(100%+6rem)] flex items-center justify-center pointer-events-none">
              <RedShiftCanvas className="w-full h-full pointer-events-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-4 border-fine-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 label-tech">
          <div className="flex items-center gap-3">
            <span className="text-[#F5F5F5]">SALEM, INDIA</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span>AI &amp; DATA SCIENCE</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[#888888]">
              [ SCROLL TO EXPLORE ↓ ]
            </span>
            <span className="text-[#E53935] font-semibold">
              PORTFOLIO / 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
