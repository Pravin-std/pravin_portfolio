import React from 'react';

/**
 * InteractiveGrid
 * Engineering blueprint technical grid with precision coordinate markers,
 * alignment guide lines, crosshair reticles, and a subtle scanning light sweep.
 */
export const InteractiveGrid: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Fine SVG Technical Grid (64px interval, ultra-low opacity) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="tech-blueprint-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="#F5F5F5"
              strokeWidth="0.75"
            />
            {/* Subtle dot at intersection */}
            <circle cx="0" cy="0" r="0.8" fill="#E53935" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-blueprint-grid)" />
      </svg>

      {/* 2. Structural Vertical Editorial Margin Guides */}
      <div className="absolute inset-0 editorial-container pointer-events-none flex justify-between">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[rgba(245,245,245,0.04)] to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[rgba(245,245,245,0.02)] to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[rgba(245,245,245,0.04)] to-transparent" />
      </div>

      {/* 3. Precision Engineering Coordinate Markers */}
      <div className="hidden lg:block">
        {/* Top-Left Telemetry Marker */}
        <div className="absolute top-20 left-8 font-mono text-[9px] tracking-widest text-[#888888]/30 flex flex-col gap-0.5">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-[#E53935]/60 animate-ping" />
            <span className="text-[#F5F5F5]/40 font-semibold">DIGI.LAB // SYS.01</span>
          </span>
          <span>LAT: 11.6643° N</span>
          <span>LON: 78.1460° E</span>
        </div>

        {/* Top-Right Grid Scale Marker */}
        <div className="absolute top-20 right-8 font-mono text-[9px] tracking-widest text-[#888888]/30 text-right flex flex-col gap-0.5">
          <span>SCALE: 64PX // CARTESIAN</span>
          <span>STATUS: OPTIMAL</span>
        </div>

        {/* Center-Left Technical Crosshair */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 font-mono text-[10px] text-[#E53935]/40">
          + <span className="text-[8px] text-[#888888]/30 tracking-widest ml-1">ELEV.00</span>
        </div>

        {/* Center-Right Technical Crosshair */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 font-mono text-[10px] text-[#888888]/30">
          <span className="text-[8px] tracking-widest mr-1">CALIB.OK</span> +
        </div>

        {/* Bottom-Left Grid Ref */}
        <div className="absolute bottom-10 left-8 font-mono text-[9px] tracking-widest text-[#888888]/30">
          REF: SLM-01 // ARCHIVE_ENV
        </div>

        {/* Bottom-Right Coordinate Echo */}
        <div className="absolute bottom-10 right-8 font-mono text-[9px] tracking-widest text-[#888888]/30 text-right">
          SALEM, TN // INDIA
        </div>
      </div>

      {/* 4. Subtle Animated Scanning Light Sweep */}
      <div className="absolute inset-x-0 h-24 pointer-events-none animate-scan-sweep">
        <div
          className="w-full h-full"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(229, 57, 53, 0.035) 50%, rgba(229, 57, 53, 0.08) 98%, rgba(229, 57, 53, 0.25) 100%)',
          }}
        />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/50 to-transparent" />
      </div>
    </div>
  );
};
