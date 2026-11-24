import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SocialLinkItem {
  platform: string;
  url: string;
  label: string;
}

const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Pravin-std',
    label: 'github.com/Pravin-std',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/pravin-k-437250294',
    label: 'linkedin.com/in/pravin-k',
  },
  {
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/pravinstark456',
    label: 'hackerrank.com/pravinstark456',
  },
];

/**
 * 06 / CONTACT TERMINAL
 *
 * Visual Direction:
 * - Emotional and typographic climax of the entire portfolio.
 * - Massive responsive headline: "HAVE AN IDEA? LET'S MAKE IT REAL."
 * - Large interactive email action with click-to-copy interaction and direct mailto link.
 * - Verified contact information: Email, Phone, Location (Salem, TN, India), Social profiles.
 * - Strictly avoids fake availability claims, generic contact forms, and gradients.
 */
export const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const emailAddress = 'pravinkaliyappan004@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Terminal"
      className="relative pt-24 md:pt-36 pb-20 sm:pb-28 bg-[#090909] text-[#F5F5F5] border-fine-t select-none"
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
            <span className="text-[#E53935] font-semibold">06</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span className="text-[#F5F5F5]">CONTACT TERMINAL</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline">OPEN FOR OPPORTUNITIES // COLLABORATIONS // IDEAS</span>
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5]">DIRECT INQUIRIES</span>
          </div>
        </div>

        {/* Climax Typographic Stage */}
        <div className="mb-16 sm:mb-24">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold tracking-tighter leading-[0.88] uppercase text-[#F5F5F5]"
          >
            HAVE AN IDEA? <br />
            LET'S MAKE <br />
            IT <span className="text-[#E53935]">REAL.</span>
          </motion.h2>
        </div>

        {/* Primary Contact Module: Large Interactive Email Action */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 p-6 sm:p-10 lg:p-12 border-fine bg-[#111111]/40 relative group"
        >
          {/* Red Technical Corner Registration Marks */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E53935]" aria-hidden="true" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-fine-b">
            <div>
              <span className="label-tech block text-[10px] text-[#888888] mb-2">
                PRIMARY COMMUNICATION CHANNEL
              </span>
              <a
                href={`mailto:${emailAddress}`}
                className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] hover:text-[#E53935] transition-colors break-all"
                aria-label={`Send email to ${emailAddress}`}
              >
                {emailAddress}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Copy Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[rgba(245,245,245,0.15)] bg-[#090909] text-xs font-mono uppercase tracking-wider text-[#F5F5F5] hover:border-[#E53935] hover:text-[#E53935] transition-colors focus-visible:outline-none focus-visible:border-[#E53935]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#E53935]" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              {/* Direct Mailto CTA */}
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5F5F5] text-[#090909] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#E53935] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E53935]"
              >
                <span>OPEN MAIL CLIENT</span>
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Secondary Telephony & Geo Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 font-mono text-xs">
            <div className="flex items-center gap-3 text-[#888888]">
              <Phone size={14} className="text-[#E53935]" />
              <div>
                <span className="label-tech block text-[9px] mb-0.5">DIRECT PHONE</span>
                <a
                  href="tel:+919791200483"
                  className="text-[#F5F5F5] hover:text-[#E53935] transition-colors font-medium text-sm"
                >
                  +91 97912 00483
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#888888]">
              <MapPin size={14} className="text-[#E53935]" />
              <div>
                <span className="label-tech block text-[9px] mb-0.5">GEOGRAPHY</span>
                <span className="text-[#F5F5F5] font-medium text-sm">
                  SALEM / TAMIL NADU / INDIA
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verified Social Profiles Row */}
        <div>
          <div className="flex items-center gap-2 mb-6 label-tech text-[#888888]">
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5] font-semibold">ENGINEERING NETWORKS</span>
            <span>—</span>
            <span>VERIFIED ONLINE PROFILES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border-fine bg-[#111111]/30 hover:bg-[#111111] hover:border-[#E53935]/50 transition-all duration-200 group flex items-center justify-between"
                aria-label={`Visit Pravin K on ${link.platform}`}
              >
                <div>
                  <span className="label-tech text-[9px] text-[#888888] block mb-1">
                    EXTERNAL REPOSITORY
                  </span>
                  <div className="font-display text-lg font-bold uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#F5F5F5]">
                    {link.platform}
                  </div>
                  <span className="font-mono text-[11px] text-[#888888] truncate block mt-0.5">
                    {link.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-[#888888] group-hover:text-[#E53935] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
