import React, { useEffect, useRef } from 'react';

/**
 * Precision Scroll Progress Line.
 * - Sits at the very top of the viewport (top: 0).
 * - 2px height, accent red (#E53935).
 * - Updates scaleX directly via requestAnimationFrame, avoiding React state re-renders on scroll frames.
 * - Fully non-interactive (pointer-events-none) so it never interferes with navigation.
 */
export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!barRef.current) return;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollHeight)) : 0;
        barRef.current.style.transform = `scaleX(${progress})`;
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none origin-left"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-[#E53935] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
