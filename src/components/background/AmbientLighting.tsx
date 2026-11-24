import React from 'react';

/**
 * AmbientLighting
 * Cinematic, hardware-accelerated atmospheric red lighting system.
 * Emits subtle crimson radial glows behind the 3D Hero sculpture, Terminal,
 * Projects, and Contact sections without obscuring text contrast.
 */
export const AmbientLighting: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Hero 3D Sculpture Radial Halo (Top-Right / Center) */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] md:w-[850px] md:h-[850px] rounded-full mix-blend-screen opacity-70 animate-pulse-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(229, 57, 53, 0.08) 0%, rgba(229, 57, 53, 0.02) 45%, transparent 70%)',
          filter: 'blur(45px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 2. Interactive Terminal Ambient Glow (Left / Upper-Mid) */}
      <div
        className="absolute top-[28%] -left-[10%] w-[550px] h-[550px] md:w-[700px] md:h-[700px] rounded-full mix-blend-screen opacity-50"
        style={{
          background:
            'radial-gradient(circle, rgba(229, 57, 53, 0.055) 0%, rgba(229, 57, 53, 0.015) 50%, transparent 70%)',
          filter: 'blur(50px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 3. Projects Section Balanced Lighting (Right / Mid) */}
      <div
        className="absolute top-[52%] -right-[12%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full mix-blend-screen opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(229, 57, 53, 0.065) 0%, rgba(229, 57, 53, 0.02) 50%, transparent 75%)',
          filter: 'blur(60px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 4. Contact Section Atmospheric Crimson Glow (Bottom / Center) */}
      <div
        className="absolute -bottom-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] md:w-[1000px] md:h-[650px] rounded-full mix-blend-screen opacity-75"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(229, 57, 53, 0.09) 0%, rgba(229, 57, 53, 0.03) 55%, transparent 80%)',
          filter: 'blur(65px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 5. Drifting Organic Light Field (Subtle ambient laboratory illumination) */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full mix-blend-screen opacity-40 animate-drift-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(229, 57, 53, 0.04) 0%, transparent 65%)',
          filter: 'blur(70px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};
