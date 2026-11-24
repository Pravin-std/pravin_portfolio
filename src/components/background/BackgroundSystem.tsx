import React from 'react';
import { InteractiveGrid } from './InteractiveGrid';
import { AmbientLighting } from './AmbientLighting';
import { GlobalParticleBackground } from './GlobalParticleBackground';

/**
 * BackgroundSystem
 * Consolidated immersive interactive environment layer.
 * Coordinates the engineering blueprint grid, atmospheric crimson ambient lighting,
 * and the high-density particle network.
 * Positioned fixed at z-0 with pointer-events-none so it renders beneath all content
 * without interfering with user interaction, 3D orbit controls, or the terminal.
 */
export const BackgroundSystem: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <InteractiveGrid />
      <AmbientLighting />
      <GlobalParticleBackground />
    </div>
  );
};
