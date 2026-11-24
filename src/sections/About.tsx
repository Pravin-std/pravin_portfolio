import React from 'react';
import { motion } from 'motion/react';
import pravinImg from '@/assets/pravin.jpg';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * 02 / THE TECHNICAL DOSSIER - About Section
 *
 * Optimizations:
 * - Image has explicit width={682} and height={1024} preventing Cumulative Layout Shift (CLS).
 * - Responsive typographic scale ensuring zero overflow on narrow viewports.
 * - Semantic markup and verified academic records.
 */
export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About Pravin K - Technical Dossier"
      className="relative py-24 md:py-36 bg-transparent text-[#F5F5F5] border-fine-t select-none"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15" aria-hidden="true">
        <div className="editorial-container h-full border-fine-l border-fine-r flex justify-between">
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
        </div>
      </div>

      <div className="editorial-container relative z-10">
        {/* Section Header Strip / Technical Index */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-12 sm:mb-16 border-fine-b label-tech">
          <div className="flex items-center gap-3">
            <span className="text-[#E53935] font-semibold">02</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span className="text-[#F5F5F5]">THE TECHNICAL DOSSIER</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline">ABOUT // PERSONAL ARCHIVE</span>
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5]">TAMIL NADU, INDIA</span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Genuine Portrait Treatment (~5 cols on desktop, ~42%) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-2.5 border-fine bg-[#111111]/40"
            >
              {/* Red Technical Corner Registration Marks */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#E53935]" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#E53935]" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#E53935]" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#E53935]" aria-hidden="true" />

              {/* Portrait Container with Explicit Dimensions */}
              <div className="overflow-hidden aspect-[3/4] relative bg-[#181818]">
                <img
                  src={pravinImg}
                  width={682}
                  height={1024}
                  alt="Portrait of Pravin K — Software Developer & AI/DS Graduate"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.08] brightness-[0.98] transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Image Technical Caption */}
              <div className="pt-3 px-1 flex items-center justify-between label-tech text-[10px]">
                <span className="text-[#888888]">FIG. 01 — SUBJECT: PRAVIN K</span>
                <span className="text-[#E53935] font-semibold">VERIFIED ARCHIVE</span>
              </div>
            </motion.div>

            {/* Micro Metadata Specifications Under Portrait */}
            <div className="mt-6 pt-4 border-fine-t grid grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="label-tech block mb-1 text-[10px]">CORE DISCIPLINE</span>
                <span className="text-[#F5F5F5] font-medium">AI &amp; Software Systems</span>
              </div>
              <div>
                <span className="label-tech block mb-1 text-[10px]">LOCATION</span>
                <span className="text-[#F5F5F5] font-medium">Tamil Nadu, IN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Narrative & Education (~7 cols on desktop, ~58%) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Main Section Headline */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-[4.8rem] font-bold tracking-tighter leading-[0.92] uppercase mb-8 sm:mb-10 text-[#F5F5F5]">
                CURIOUS BY NATURE. <br />
                <span className="text-[#E53935]">BUILDER</span> BY CHOICE<span className="text-[#E53935]">.</span>
              </h2>

              {/* Editorial Narrative */}
              <div className="space-y-6 text-[#888888] font-sans text-base sm:text-lg lg:text-xl leading-relaxed">
                <p>
                  I'm Pravin, an <span className="text-[#F5F5F5] font-medium">Artificial Intelligence &amp; Data Science</span> graduate who enjoys exploring how technology works under the hood and turning ideas into functional, reliable applications.
                </p>
                <p className="text-base sm:text-lg text-[#888888] leading-relaxed">
                  I like learning through building — breaking down real problems, experimenting with modern development tools, and engineering software that combines analytical problem solving with clean execution.
                </p>
              </div>
            </motion.div>

            {/* Integrated Education Block */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 sm:mt-16 pt-8 border-fine-t"
            >
              <div className="flex items-center gap-2 mb-6 label-tech text-[#888888]">
                <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
                <span className="text-[#F5F5F5] font-semibold">EDUCATION / 01</span>
                <span>—</span>
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                {/* Degree & Institution */}
                <div className="md:col-span-8">
                  <span className="font-mono text-xs text-[#E53935] tracking-widest uppercase block mb-1">
                    B.Tech Degree
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] uppercase tracking-tight">
                    Artificial Intelligence &amp; Data Science
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#888888] mt-2">
                    Sri Shanmugha College of Engineering and Technology
                  </p>
                </div>

                {/* Score & Location */}
                <div className="md:col-span-4 md:text-right border-fine-t md:border-fine-t-0 md:border-fine-l pt-4 md:pt-0 md:pl-6">
                  <span className="label-tech block mb-1 text-[10px]">CUMULATIVE SCORE</span>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
                    8.2 <span className="text-sm font-mono text-[#888888] font-normal">/ 10</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#888888] tracking-widest uppercase block mt-1">
                    TAMIL NADU, IN
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
