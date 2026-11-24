import React from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneContainer } from '@/three/SceneContainer';
import { RedShiftSculpture } from '@/three/RedShiftSculpture';

interface RedShiftCanvasProps {
  className?: string;
}

/**
 * Canvas host for the Freely Floating Red Shift 3D Experience.
 * - Managed within SceneContainer for non-blocking suspense.
 * - Expanded camera view frustum (fov: 40, distance: 5.8) ensuring zero edge clipping at all 360° angles.
 * - Capped DPI to guarantee 60fps across retina displays and mobile GPUs.
 * - Transparent WebGL background (alpha: true) with grab cursor affordance.
 */
export const RedShiftCanvas: React.FC<RedShiftCanvasProps> = ({
  className = 'w-full h-full',
}) => {
  return (
    <SceneContainer className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 40, near: 0.1, far: 50 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing select-none bg-transparent"
      >
        <RedShiftSculpture />
      </Canvas>
    </SceneContainer>
  );
};
