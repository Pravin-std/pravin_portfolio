import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Layout, Cpu, Smartphone } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SkillItem {
  name: string;
  sub?: string;
}

interface CategoryGroup {
  number: string;
  category: string;
  subheading: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

const CATEGORIES: CategoryGroup[] = [
  {
    number: '01',
    category: 'PROGRAMMING LANGUAGES',
    subheading: 'CORE COMPUTING FOUNDATION',
    icon: <Cpu size={14} className="text-[#E53935]" aria-hidden="true" />,
    items: [
      { name: 'Java', sub: 'OOP & Data Structures' },
      { name: 'Python', sub: 'Scripting & Data Analysis' },
      { name: 'C', sub: 'Systems & Memory Model' },
      { name: 'JavaScript', sub: 'Modern ES6+ Runtime' },
      { name: 'TypeScript', sub: 'Static Type Architecture' },
    ],
  },
  {
    number: '02',
    category: 'FRONTEND DEVELOPMENT',
    subheading: 'INTERFACE ARCHITECTURE',
    icon: <Layout size={14} className="text-[#E53935]" aria-hidden="true" />,
    items: [
      { name: 'HTML', sub: 'Semantic Structure & A11y' },
      { name: 'CSS', sub: 'Modern Grid, Flex & Design Tokens' },
      { name: 'JavaScript', sub: 'DOM & Async Lifecycle' },
      { name: 'React', sub: 'Component Trees & Hooks' },
      { name: 'TypeScript', sub: 'Type-Safe UI Systems' },
    ],
  },
  {
    number: '03',
    category: 'DATABASE & BACKEND',
    subheading: 'DATA PERSISTENCE & CLOUD SERVICES',
    icon: <Database size={14} className="text-[#E53935]" aria-hidden="true" />,
    items: [
      { name: 'SQL', sub: 'Relational Queries & Joins' },
      { name: 'PostgreSQL', sub: 'ACID RDBMS Engine' },
      { name: 'Supabase', sub: 'BaaS & Realtime Subscriptions' },
      { name: 'Supabase Authentication', sub: 'JWT & Row-Level Security' },
      { name: 'Supabase Database', sub: 'Managed PostgreSQL & Migrations' },
    ],
  },
  {
    number: '04',
    category: 'DEVELOPMENT TOOLS',
    subheading: 'ENVIRONMENT & ENGINEERING WORKFLOW',
    icon: <Terminal size={14} className="text-[#E53935]" aria-hidden="true" />,
    items: [
      { name: 'Git', sub: 'Branching & Version Control' },
      { name: 'GitHub', sub: 'Repository Management & CI/CD' },
      { name: 'Linux', sub: 'POSIX Environment & Shell' },
      { name: 'Ubuntu', sub: 'Workstation OS & Server Host' },
      { name: 'VS Code', sub: 'Primary IDE & Extensions' },
    ],
  },
  {
    number: '05',
    category: 'APPLICATION DEVELOPMENT',
    subheading: 'MULTI-PLATFORM RUNTIMES',
    icon: <Smartphone size={14} className="text-[#E53935]" aria-hidden="true" />,
    items: [
      { name: 'Flutter', sub: 'Cross-Platform Mobile UI' },
      { name: 'Streamlit', sub: 'Rapid Data & AI Web Apps' },
    ],
  },
];

/**
 * 04 / TECHNICAL ARSENAL - Core Capabilities & System Inventory
 *
 * Optimizations:
 * - Headline calibrated to prevent mobile text overflow.
 * - Minimum cell heights and responsive grid columns.
 * - Pure verified skills with 0 fabricated percentages.
 */
export const TechnicalArsenal: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="stack"
      aria-label="Technical Arsenal - Core Capabilities"
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
            <span className="text-[#E53935] font-semibold">04</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span className="text-[#F5F5F5]">TECHNICAL ARSENAL</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline">CAPABILITIES // SYSTEM INVENTORY</span>
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5]">SYSTEM SPECS / 2026</span>
          </div>
        </div>

        {/* Section Headline & Editorial Intro */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.88] uppercase text-[#F5F5F5] mb-6 break-words"
          >
            TOOLS ARE ONLY <br />
            <span className="text-[#E53935]">THE BEGINNING.</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#888888] font-normal leading-relaxed max-w-2xl"
          >
            A growing collection of technologies, tools, and concepts I use to explore ideas, build applications, and solve technical problems.
          </motion.p>
        </div>

        {/* Editorial Capabilities Rows */}
        <div className="space-y-12 sm:space-y-16">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.number}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{
                duration: 0.7,
                delay: prefersReducedMotion ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-fine bg-[#111111]/30 p-6 sm:p-8 lg:p-10 relative group"
            >
              {/* Red Technical Corner Registration Marks on Hover */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#E53935] opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#E53935] opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#E53935] opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#E53935] opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Category Metadata (4 cols desktop) */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 label-tech">
                      <span className="text-[#E53935] font-semibold">{cat.number}</span>
                      <span className="text-[rgba(245,245,245,0.2)]">/</span>
                      <span className="text-[#888888]">{cat.subheading}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F5F5] flex items-center gap-2.5">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[rgba(245,245,245,0.06)] hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#888888]">
                    {cat.icon}
                    <span>VERIFIED DISCIPLINES</span>
                  </div>
                </div>

                {/* Right Column: Structured Typographic Composition (8 cols desktop) */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={item.name}
                        className="p-4 border border-[rgba(245,245,245,0.08)] bg-[#090909]/80 hover:border-[#E53935]/50 hover:bg-[#111111] transition-all duration-200 group/item flex flex-col justify-between min-h-[96px]"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-[rgba(245,245,245,0.04)] mb-2">
                          <span className="label-tech text-[9px] text-[#888888] group-hover/item:text-[#E53935] transition-colors">
                            {cat.number}.{itemIdx + 1}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-none bg-[rgba(245,245,245,0.15)] group-hover/item:bg-[#E53935] transition-colors" aria-hidden="true" />
                        </div>

                        <div>
                          <div className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F5F5F5] group-hover/item:text-[#F5F5F5] transition-colors">
                            {item.name}
                          </div>
                          {item.sub && (
                            <p className="font-mono text-[11px] text-[#888888] leading-tight mt-1">
                              {item.sub}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
