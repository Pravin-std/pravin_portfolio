import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Bus, Terminal, Sparkles, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * 03 / SELECTED WORKS - Curated Project Archive
 *
 * Optimizations:
 * - Headline typography calibrated down to 320px screens to prevent clipping.
 * - Explicit architectural labels distinguishing conceptual previews from deployed systems.
 * - Strict adherence to Rule 9: 100% genuine information, zero fabricated statistics.
 */
export const SelectedWorks: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-label="Selected Works - Project Archive"
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
            <span className="text-[#E53935] font-semibold">03</span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span className="text-[#F5F5F5]">SELECTED WORKS</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline">PROJECT ARCHIVE // CURATED</span>
            <span className="w-1.5 h-1.5 bg-[#E53935] inline-block" aria-hidden="true" />
            <span className="text-[#F5F5F5]">2024 — 2026</span>
          </div>
        </div>

        {/* Section Headline & Editorial Intro */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.88] uppercase text-[#F5F5F5] mb-6 break-words"
          >
            SELECTED <br />
            <span className="text-[#E53935]">WORKS.</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#888888] font-normal leading-relaxed max-w-2xl"
          >
            A collection of ideas turned into working products — from practical applications to tools designed to solve specific problems.
          </motion.p>
        </div>

        {/* ============================================================== */}
        {/* PROJECT 01: ROUTEX (FEATURED HERO CASE STUDY)                  */}
        {/* ============================================================== */}
        <motion.article
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 sm:mb-28 border-fine bg-[#111111]/30 p-6 sm:p-10 lg:p-12 relative"
        >
          {/* Red Technical Corner Registration Marks */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E53935]" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Project Narrative & Meta (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 label-tech">
                  <span className="text-[#E53935] font-semibold text-xs">01</span>
                  <span className="text-[rgba(245,245,245,0.2)]">/</span>
                  <span className="text-[#888888]">FEATURED PLATFORM</span>
                </div>

                <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-2">
                  RouteX
                </h3>

                <p className="font-mono text-xs text-[#E53935] tracking-widest uppercase mb-6 font-medium">
                  SMART BUS ROUTE &amp; DIGITAL TICKET BOOKING PLATFORM
                </p>

                <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed mb-8">
                  A bus discovery and ticket booking application designed to make finding routes and managing digital tickets easier through a connected experience.
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Flutter'].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 border border-[rgba(245,245,245,0.12)] bg-[#111111] text-[#F5F5F5]/90 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Functional Live Project CTA */}
              <div>
                <a
                  href="https://routexbusfinder.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#F5F5F5] text-[#090909] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#E53935] hover:text-[#F5F5F5] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E53935]"
                >
                  <span>LIVE PROJECT</span>
                  <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Abstract Browser Interface Mockup (7 cols) */}
            <div className="lg:col-span-7 border-fine bg-[#090909] p-4 sm:p-6 relative">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-fine-b font-mono text-[10px] text-[#888888]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" aria-hidden="true" />
                  <span className="w-2 h-2 rounded-full bg-[rgba(245,245,245,0.2)]" aria-hidden="true" />
                  <span className="w-2 h-2 rounded-full bg-[rgba(245,245,245,0.2)]" aria-hidden="true" />
                  <span className="ml-2 text-[#F5F5F5]/70">routexbusfinder.vercel.app</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#E53935]">
                  <Bus size={12} aria-hidden="true" />
                  <span>TRANSIT ENGINE</span>
                </div>
              </div>

              {/* Transit Search Bar Composition */}
              <div className="bg-[#111111] p-4 border border-[rgba(245,245,245,0.08)] mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="p-2.5 border border-[rgba(245,245,245,0.1)] bg-[#090909]">
                    <span className="label-tech block text-[9px] text-[#888888]">ORIGIN</span>
                    <span className="font-mono text-xs text-[#F5F5F5] font-semibold">COIMBATORE (TN-38)</span>
                  </div>
                  <div className="p-2.5 border border-[rgba(245,245,245,0.1)] bg-[#090909]">
                    <span className="label-tech block text-[9px] text-[#888888]">DESTINATION</span>
                    <span className="font-mono text-xs text-[#F5F5F5] font-semibold">CHENNAI CENTRAL</span>
                  </div>
                </div>

                {/* Transit Timeline Progress */}
                <div className="flex items-center justify-between font-mono text-[11px] text-[#888888] pt-2 border-t border-[rgba(245,245,245,0.06)]">
                  <span>DEP: 06:30 AM</span>
                  <div className="flex items-center gap-1 text-[#E53935]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-ping" aria-hidden="true" />
                    <span>4 STOPS EN ROUTE</span>
                  </div>
                  <span className="text-[#F5F5F5]">ARR: 12:45 PM</span>
                </div>
              </div>

              {/* Digital Boarding Pass Preview */}
              <div className="border border-[rgba(245,245,245,0.1)] bg-[#111111]/80 p-4 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-fine-b label-tech text-[10px]">
                  <span>BOARDING PASS // TOKEN #TX-8921</span>
                  <span className="flex items-center gap-1 text-[#E53935]">
                    <CheckCircle2 size={12} aria-hidden="true" />
                    <span>STATUS: CONFIRMED</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs mb-3">
                  <div>
                    <span className="text-[10px] text-[#888888] block">SERVICE</span>
                    <span className="text-[#F5F5F5] font-semibold">EXPRESS</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#888888] block">SEAT</span>
                    <span className="text-[#E53935] font-semibold">14A (WINDOW)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#888888] block">PLATFORM</span>
                    <span className="text-[#F5F5F5] font-semibold">BAY 03</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#888888] block">AUTH</span>
                    <span className="text-[#F5F5F5] font-semibold">SUPABASE</span>
                  </div>
                </div>

                {/* Micro QR Matrix Mockup */}
                <div className="flex items-center justify-between pt-2 border-t border-[rgba(245,245,245,0.06)] label-tech text-[9px] text-[#888888]">
                  <span>HASH: e7f2a991b40c21...</span>
                  <span className="text-[#F5F5F5]">CONCEPTUAL TRANSIT ENGINE ARCHITECTURE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ============================================================== */}
        {/* PROJECTS 02 & 03: ASYMMETRIC DUAL EDITORIAL ROW                */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 sm:mb-28">
          {/* PROJECT 02 — LEETCODE TRACKER (7 cols) */}
          <motion.article
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 border-fine bg-[#111111]/30 p-6 sm:p-8 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 label-tech">
                <span className="text-[#E53935] font-semibold text-xs">02</span>
                <span className="text-[rgba(245,245,245,0.2)]">/</span>
                <span className="text-[#888888]">ANALYTICS &amp; PROBLEM SOLVING</span>
              </div>

              <h3 className="font-display text-2xl xs:text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-2">
                LeetCode Tracker
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed mb-6">
                A student-focused analytics dashboard designed to track coding practice, organize problem-solving activity, and visualize progress.
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Supabase'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 border border-[rgba(245,245,245,0.12)] bg-[#111111] text-[#F5F5F5]/90 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Abstract Analytics Interface Preview */}
            <div className="border-fine bg-[#090909] p-4 sm:p-5">
              <div className="flex items-center justify-between pb-3 mb-4 border-fine-b label-tech text-[10px]">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-[#E53935]" aria-hidden="true" />
                  <span>ALGORITHM PRACTICE TELEMETRY</span>
                </div>
                <span className="text-[#E53935]">CONCEPTUAL PREVIEW</span>
              </div>

              {/* Category Segmented Indicators (No fabricated rankings/stats) */}
              <div className="space-y-3 mb-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-[#888888] mb-1">
                    <span>EASY TIER</span>
                    <span className="text-[#F5F5F5]">FOUNDATIONAL</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#181818] overflow-hidden">
                    <div className="h-full bg-[#F5F5F5] w-[75%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#888888] mb-1">
                    <span>MEDIUM TIER</span>
                    <span className="text-[#F5F5F5]">CORE DSA</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#181818] overflow-hidden">
                    <div className="h-full bg-[#888888] w-[50%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#888888] mb-1">
                    <span>HARD TIER</span>
                    <span className="text-[#E53935]">ADVANCED</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#181818] overflow-hidden">
                    <div className="h-full bg-[#E53935] w-[25%]" />
                  </div>
                </div>
              </div>

              {/* Taxonomy Categorization Tags */}
              <div className="pt-3 border-fine-t flex flex-wrap gap-1.5 label-tech text-[9px] text-[#888888]">
                <span className="px-2 py-0.5 border border-[rgba(245,245,245,0.08)] bg-[#111111]">ARRAYS</span>
                <span className="px-2 py-0.5 border border-[rgba(245,245,245,0.08)] bg-[#111111]">DYNAMIC PROG</span>
                <span className="px-2 py-0.5 border border-[rgba(245,245,245,0.08)] bg-[#111111]">TREES &amp; GRAPHS</span>
                <span className="px-2 py-0.5 border border-[rgba(245,245,245,0.08)] bg-[#111111]">RECURSION</span>
              </div>
            </div>
          </motion.article>

          {/* PROJECT 03 — PROMPT IMPROVER (5 cols) */}
          <motion.article
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 border-fine bg-[#111111]/30 p-6 sm:p-8 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 label-tech">
                <span className="text-[#E53935] font-semibold text-xs">03</span>
                <span className="text-[rgba(245,245,245,0.2)]">/</span>
                <span className="text-[#888888]">CHROME EXTENSION</span>
              </div>

              <h3 className="font-display text-2xl xs:text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-2">
                Prompt Improver
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed mb-6">
                A Chrome extension that helps refine prompts and improve query structure through prompt-engineering techniques.
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['HTML', 'CSS', 'JavaScript', 'Chrome Extension'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 border border-[rgba(245,245,245,0.12)] bg-[#111111] text-[#F5F5F5]/90 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Abstract Browser Extension UI Composition */}
            <div className="border-fine bg-[#090909] p-4 sm:p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-fine-b label-tech text-[10px]">
                <div className="flex items-center gap-1.5 text-[#F5F5F5]">
                  <Sparkles size={12} className="text-[#E53935]" aria-hidden="true" />
                  <span>EXTENSION POPUP // v1.2</span>
                </div>
                <span className="text-[#E53935] font-semibold">ACTIVE SPEC</span>
              </div>

              {/* Transformation Pipeline Mockup */}
              <div className="space-y-2 font-mono text-xs mb-3">
                <div className="p-2 border border-[rgba(245,245,245,0.08)] bg-[#111111]">
                  <span className="text-[9px] text-[#888888] block mb-0.5">INPUT QUERY</span>
                  <span className="text-[#888888] text-[11px] truncate block">"explain binary search algorithm"</span>
                </div>

                <div className="flex items-center justify-center text-[#E53935] py-0.5">
                  <ArrowRight size={13} className="rotate-90" aria-hidden="true" />
                </div>

                <div className="p-2 border border-[#E53935]/40 bg-[#181818]">
                  <span className="text-[9px] text-[#E53935] block mb-0.5">OPTIMIZED PROMPT</span>
                  <span className="text-[#F5F5F5] text-[11px] block leading-tight">
                    "Act as an algorithms engineer. Explain binary search with invariants and complexity..."
                  </span>
                </div>
              </div>

              <div className="pt-2 border-fine-t flex items-center justify-between label-tech text-[9px] text-[#888888]">
                <span>CONTEXT ENRICHED</span>
                <span className="text-[#F5F5F5]">READY TO COPY</span>
              </div>
            </div>
          </motion.article>
        </div>

        {/* ============================================================== */}
        {/* PROJECT 04: E-COMMERCE SHOPPING ENGINE                         */}
        {/* ============================================================== */}
        <motion.article
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-fine bg-[#111111]/30 p-6 sm:p-10 lg:p-12 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Project Narrative & Meta (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 label-tech">
                  <span className="text-[#E53935] font-semibold text-xs">04</span>
                  <span className="text-[rgba(245,245,245,0.2)]">/</span>
                  <span className="text-[#888888]">WEB APPLICATION</span>
                </div>

                <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#F5F5F5] mb-2">
                  E-Commerce Shopping Engine
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed mb-6">
                  A shopping application featuring product management, CRUD operations, authentication, and real-time cart state.
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 border border-[rgba(245,245,245,0.12)] bg-[#111111] text-[#F5F5F5]/90 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Highlight Tags */}
              <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-4 border-fine-t">
                <div>
                  <span className="label-tech block mb-1 text-[10px]">STATE MANAGEMENT</span>
                  <span className="text-[#F5F5F5]">Real-time Cart Tray</span>
                </div>
                <div>
                  <span className="label-tech block mb-1 text-[10px]">DATA OPERATIONS</span>
                  <span className="text-[#F5F5F5]">CRUD Catalog Schema</span>
                </div>
              </div>
            </div>

            {/* Abstract Shopping Engine Interface Mockup (7 cols) */}
            <div className="lg:col-span-7 border-fine bg-[#090909] p-4 sm:p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-fine-b label-tech text-[10px]">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={12} className="text-[#E53935]" aria-hidden="true" />
                  <span>COMMERCE CORE ENGINE</span>
                </div>
                <span className="text-[#F5F5F5]">CART STATE ARCHITECTURE</span>
              </div>

              {/* Product Layout & Cart Drawer Composition */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Product Catalog Card Preview (7 cols) */}
                <div className="sm:col-span-7 p-3 border border-[rgba(245,245,245,0.08)] bg-[#111111]">
                  <div className="aspect-[4/3] bg-[#181818] mb-3 flex items-center justify-center border-fine relative">
                    <span className="font-mono text-xs text-[#888888]">[ PRODUCT ITEM DISPLAY ]</span>
                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#E53935] text-[#F5F5F5] font-mono text-[9px] uppercase">
                      IN STOCK
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-[#F5F5F5] font-semibold block">STORE ITEM #08</span>
                      <span className="text-[10px] text-[#888888]">CATALOG ITEM</span>
                    </div>
                    <span className="text-[#E53935] font-semibold">UNIT ACTIVE</span>
                  </div>
                </div>

                {/* Real-time Cart Tray Preview (5 cols) */}
                <div className="sm:col-span-5 p-3 border border-[rgba(245,245,245,0.08)] bg-[#111111] flex flex-col justify-between">
                  <div>
                    <span className="label-tech block text-[9px] text-[#888888] mb-2 pb-1 border-b border-[rgba(245,245,245,0.06)]">
                      CART DRAWER TRAY
                    </span>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#F5F5F5]">ITEM #01</span>
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-[#181818] border border-[rgba(245,245,245,0.1)] text-[#888888]">-</span>
                          <span>1</span>
                          <span className="px-1.5 py-0.5 bg-[#181818] border border-[rgba(245,245,245,0.1)] text-[#888888]">+</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#F5F5F5]">ITEM #02</span>
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-[#181818] border border-[rgba(245,245,245,0.1)] text-[#888888]">-</span>
                          <span>2</span>
                          <span className="px-1.5 py-0.5 bg-[#181818] border border-[rgba(245,245,245,0.1)] text-[#888888]">+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[rgba(245,245,245,0.06)] mt-4">
                    <div className="flex items-center justify-between font-mono text-xs mb-2">
                      <span className="text-[#888888]">TOTAL</span>
                      <span className="text-[#E53935] font-semibold">CALCULATED</span>
                    </div>
                    <div className="w-full py-1.5 bg-[#F5F5F5] text-[#090909] text-center font-mono text-[10px] uppercase font-semibold">
                      CHECKOUT READY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
