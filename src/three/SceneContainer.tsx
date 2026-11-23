import React, { Suspense } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SceneContainerProps {
  className?: string;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * 3D Foundation Architecture.
 * Features:
 * 1. Accessibility First: Renders a dedicated editorial architectural fallback when prefers-reduced-motion is true.
 * 2. Non-blocking Suspense: Prevents WebGL shader compiling or asset parsing from freezing initial paint.
 * 3. Zero Layout Shift: Fallback matches exact aspect ratio and dimensions of the 3D canvas stage.
 */
export const SceneContainer: React.FC<SceneContainerProps> = ({
  className = 'w-full h-full relative',
  fallback,
  children,
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Architectural editorial fallback (active during loading or under reduced-motion)
  const defaultFallback = (
    <div
      className="w-full h-full flex flex-col items-center justify-center border-fine bg-[#111111]/30 p-6 relative select-none"
      role="img"
      aria-label="Abstract dimensional manifold geometry"
    >
      <div className="absolute top-3 left-4 label-tech text-[10px] text-[#888888]">
        <span>[ SPEC. RED SHIFT // {prefersReducedMotion ? 'STATIC POSE' : 'INITIALIZING'} ]</span>
      </div>

      {/* Abstract geometric wireframe SVG loop */}
      <svg
        className={`w-32 h-32 sm:w-40 sm:h-40 text-[rgba(245,245,245,0.18)] ${
          prefersReducedMotion ? '' : 'animate-pulse'
        }`}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="38" strokeDasharray="3 3" />
        <ellipse cx="50" cy="50" rx="36" ry="18" transform="rotate(-30 50 50)" />
        <ellipse cx="50" cy="50" rx="36" ry="18" transform="rotate(30 50 50)" />
        <circle cx="50" cy="50" r="3" fill="#E53935" stroke="none" />
      </svg>

      <div className="mt-4 flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#888888] tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-none bg-[#E53935]" aria-hidden="true" />
        <span>{prefersReducedMotion ? 'REDUCED MOTION ACTIVE' : 'DIMENSIONAL LOOP MOUNTED'}</span>
      </div>
    </div>
  );

  if (prefersReducedMotion) {
    return <div className={className}>{fallback || defaultFallback}</div>;
  }

  return (
    <div className={className}>
      <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
    </div>
  );
};
