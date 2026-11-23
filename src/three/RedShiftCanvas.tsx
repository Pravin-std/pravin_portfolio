import React from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneContainer } from '@/three/SceneContainer';
import { RedShiftSculpture } from '@/three/RedShiftSculpture';

interface RedShiftCanvasProps {
  className?: string;
}

/**
 * Canvas host for the Red Shift 3D Experience.
 * - Managed within SceneContainer for suspense boundaries and reduced-motion fallbacks.
 * - Capped DPI to guarantee 60fps across high-density retina displays and mobile GPUs.
 * - Non-intrusive pointer configuration so it never traps or interrupts touch scroll.
 */
export const RedShiftCanvas: React.FC<RedShiftCanvasProps> = ({
  className = 'w-full h-full min-h-[380px]',
}) => {
  return (
    <SceneContainer className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full pointer-events-auto"
      >
        <RedShiftSculpture />
      </Canvas>
    </SceneContainer>
  );
};
