import { useEffect, useRef } from 'react';

export interface PointerState {
  x: number;
  y: number;
  smoothX: number;
  smoothY: number;
  normX: number;
  normY: number;
  smoothNormX: number;
  smoothNormY: number;
  vx: number;
  vy: number;
  speed: number;
  isActive: boolean;
}

/**
 * usePointerInteraction
 * Tracks smooth, damp-interpolated pointer coordinates, normalized values (-1 to 1),
 * instantaneous velocity, and active status for cinematic interactive backgrounds.
 */
export const usePointerInteraction = () => {
  const pointerRef = useRef<PointerState>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    smoothX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    smoothY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    normX: 0,
    normY: 0,
    smoothNormX: 0,
    smoothNormY: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    isActive: false,
  });

  useEffect(() => {
    let prevX = pointerRef.current.x;
    let prevY = pointerRef.current.y;
    let prevTime = performance.now();
    let animId: number;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      const state = pointerRef.current;
      state.x = clientX;
      state.y = clientY;
      state.normX = (clientX / window.innerWidth) * 2 - 1;
      state.normY = -(clientY / window.innerHeight) * 2 + 1;
      state.isActive = true;

      const now = performance.now();
      const dt = Math.max((now - prevTime) / 1000, 0.001);
      state.vx = (clientX - prevX) / dt;
      state.vy = (clientY - prevY) / dt;
      state.speed = Math.hypot(state.vx, state.vy);

      prevX = clientX;
      prevY = clientY;
      prevTime = now;
    };

    const handlePointerLeave = () => {
      pointerRef.current.isActive = false;
    };

    // Smooth lerp loop
    const updateSmoothPointer = () => {
      const state = pointerRef.current;
      const lerpFactor = 0.08;

      state.smoothX += (state.x - state.smoothX) * lerpFactor;
      state.smoothY += (state.y - state.smoothY) * lerpFactor;
      state.smoothNormX += (state.normX - state.smoothNormX) * lerpFactor;
      state.smoothNormY += (state.normY - state.smoothNormY) * lerpFactor;

      // Dampen velocity when idle
      state.vx *= 0.92;
      state.vy *= 0.92;
      state.speed *= 0.92;

      animId = requestAnimationFrame(updateSmoothPointer);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    animId = requestAnimationFrame(updateSmoothPointer);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return pointerRef;
};
