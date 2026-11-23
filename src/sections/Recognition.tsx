import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Certification {
  index: string;
  title: string;
  issuer: string;
  category: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    index: '01',
    title: 'AWS — Introduction to Generative AI',
    issuer: 'Amazon Web Services (AWS)',
    category: 'ARTIFICIAL INTELLIGENCE & FOUNDATION MODELS',
  },
  {
    index: '02',
    title: 'NPTEL — Programming in Java',
    issuer: 'National Programme on Technology Enhanced Learning (NPTEL)',
    category: 'SOFTWARE ENGINEERING & OOP',
  },
  {
    index: '03',
    title: 'NPTEL — Cloud Computing',
    issuer: 'National Programme on Technology Enhanced Learning (NPTEL)',
    category: 'CLOUD ARCHITECTURE & DISTRIBUTED SYSTEMS',
  },
];

/**
 * 05 / RECOGNITION - Achievements & Certifications
 *
 * Visual Direction:
 * - Part A: Hackathon Honor (ZeAI Soft MadeInIndia 2026 - Bronze Innovator) in a bronze-accented architectural block.
 * - Part B: Certifications Archive (AWS, NPTEL) as high-contrast editorial rows.
 * - Strict adherence to Rule 9: Zero fabricated certifications, scores, or claims.
 */
export const Recognition: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="recognition"
      aria-label="Recognition & Verified Credentials"
      className="relative py-24 md:py-36 bg-[#090909] text-[#F5F5F5] border-fine-t select-none"
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
            <span className="text-[#E53935] font-semibold">05</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span className="text-[#F5F5F5]">RECOGNITION</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline">ACHIEVEMENTS &amp; CERTIFICATIONS // VERIFIED RECORD</span>
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5]">ARCHIVE / 2026</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.88] uppercase text-[#F5F5F5] mb-6"
          >
            PROGRESS IS <br />
            <span className="text-[#E53935]">NEVER STATIC.</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#888888] font-normal leading-relaxed max-w-2xl"
          >
            Milestones earned through competitive problem solving, technical evaluations, and ongoing coursework.
          </motion.p>
        </div>

        {/* PART A: HACKATHON ACHIEVEMENT (PRIMARY FEATURED HONOR) */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 p-6 sm:p-10 lg:p-12 border border-[#C88A4B]/40 bg-[#111111]/40 relative group"
        >
          {/* Subtle Bronze Registration Corner Marks */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C88A4B]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C88A4B]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C88A4B]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C88A4B]" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Distinction Badge & Numbers */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-4 label-tech">
                <Award size={14} className="text-[#C88A4B]" />
                <span className="text-[#C88A4B] font-semibold">NATIONAL HACKATHON RECOGNITION</span>
              </div>

              <div className="font-mono text-5xl sm:text-7xl font-bold text-[#C88A4B]/90 tracking-tighter mb-2">
                BRONZE
              </div>

              <div className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-4">
                Innovator Award
              </div>

              <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed">
                Recognized as a Bronze Innovator in the competitive evaluation rounds of the ZeAI Soft MadeInIndia 2026 Hackathon.
              </p>
            </div>

            {/* Right Column: Event Specifications */}
            <div className="lg:col-span-7 border-fine bg-[#090909] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-3 mb-4 border-fine-b label-tech text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C88A4B] inline-block" />
                  <span>EVENT DOSSIER</span>
                </div>
                <span className="text-[#E53935]">VERIFIED AWARD</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#888888] block uppercase">EVENT INITIATIVE</span>
                  <span className="text-[#F5F5F5] text-sm sm:text-base font-semibold block">
                    ZeAI Soft MadeInIndia 2026 Hackathon
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[rgba(245,245,245,0.06)]">
                  <div>
                    <span className="text-[10px] text-[#888888] block uppercase">ACHIEVEMENT LEVEL</span>
                    <span className="text-[#C88A4B] font-semibold">Bronze Innovator</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#888888] block uppercase">ROUND MILESTONE</span>
                    <span className="text-[#F5F5F5] font-semibold">Phase 1 Online Evaluation</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(245,245,245,0.06)] flex items-center gap-2 text-[10px] text-[#888888]">
                  <ShieldCheck size={13} className="text-[#C88A4B]" />
                  <span>RECORD AUTHENTICATED VIA OFFICIAL PARTICIPATION DOSSIER</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PART B: CERTIFICATIONS ARCHIVE */}
        <div>
          <div className="flex items-center gap-2 mb-8 label-tech text-[#888888]">
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5] font-semibold">CERTIFICATIONS ARCHIVE</span>
            <span>—</span>
            <span>CONTINUOUS LEARNING &amp; CLOUD SYSTEMS</span>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.index}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 sm:p-8 border-fine bg-[#111111]/30 hover:bg-[#111111] hover:border-[#E53935]/40 transition-all duration-200 group flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start md:items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm text-[#E53935] font-semibold tracking-widest mt-1 md:mt-0">
                    {cert.index}
                  </span>

                  <div>
                    <span className="label-tech text-[10px] text-[#888888] block mb-1">
                      {cert.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#F5F5F5] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-[#888888] mt-1">
                      Issuing Authority: {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center font-mono text-xs text-[#888888] group-hover:text-[#E53935] transition-colors">
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">CERTIFIED</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
