import React, { useEffect, useRef } from 'react';
import { usePointerInteraction } from '@/hooks/usePointerInteraction';

interface Particle {
  x: number;
  y: number;
  baseVx: number;
  baseVy: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  colorType: 'grey' | 'red' | 'white';
  depth: number; // 0.6 = deep, 1.0 = mid, 1.4 = near
  pulsePhase: number;
  pulseSpeed: number;
}

export const GlobalParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = usePointerInteraction();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Detect user reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Determine particle count based on screen size
    const getParticleCount = (w: number): number => {
      if (w < 768) return 55;
      if (w < 1200) return 95;
      return 165;
    };

    let particleCount = getParticleCount(width);
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const rand = Math.random();
        let colorType: 'grey' | 'red' | 'white';
        let baseAlpha: number;
        let depth: number;
        let radius: number;

        // Color distribution: ~65% grey, ~25% red, ~10% white
        if (rand < 0.65) {
          colorType = 'grey';
          depth = Math.random() < 0.5 ? 0.6 : 1.0;
          baseAlpha = depth === 0.6 ? 0.22 : 0.38;
          radius = depth === 0.6 ? 1.0 : 1.6;
        } else if (rand < 0.90) {
          colorType = 'red';
          depth = Math.random() < 0.4 ? 1.0 : 1.4;
          baseAlpha = depth === 1.4 ? 0.75 : 0.48;
          radius = depth === 1.4 ? 2.4 : 1.8;
        } else {
          colorType = 'white';
          depth = 1.4;
          baseAlpha = 0.8;
          radius = 2.0;
        }

        const angle = Math.random() * Math.PI * 2;
        const speed = (0.15 + Math.random() * 0.25) * depth;
        const baseVx = Math.cos(angle) * speed;
        const baseVy = Math.sin(angle) * speed;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseVx,
          baseVy,
          vx: baseVx,
          vy: baseVy,
          radius,
          alpha: baseAlpha,
          baseAlpha,
          colorType,
          depth,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02,
        });
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      const newCount = getParticleCount(width);
      if (Math.abs(newCount - particleCount) > 15) {
        particleCount = newCount;
        initParticles();
      }
    };

    resizeCanvas();
    initParticles();

    window.addEventListener('resize', resizeCanvas, { passive: true });

    let isDocumentVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    // Render loop
    const render = (time: number) => {
      if (!isDocumentVisible) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth scroll parallax interpolation
      scrollY += (targetScrollY - scrollY) * 0.08;

      const pointer = pointerRef.current;
      const mouseX = pointer.smoothX;
      const mouseY = pointer.smoothY;
      const isMouseActive = pointer.isActive;
      const mouseInfluenceRadius = 135;
      const mouseInfluenceRadiusSq = mouseInfluenceRadius * mouseInfluenceRadius;

      const maxConnectDist = width < 768 ? 85 : 105;
      const maxConnectDistSq = maxConnectDist * maxConnectDist;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Subtle organic pulsing of alpha
          p.pulsePhase += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.12 * p.baseAlpha;

          // Mouse interaction (repulsion & deflection)
          if (isMouseActive) {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouseInfluenceRadiusSq && distSq > 0.001) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / mouseInfluenceRadius) * 2.8 * p.depth;
              p.vx += (dx / dist) * force * dt * 25;
              p.vy += (dy / dist) * force * dt * 25;
            }
          }

          // Return force to base trajectory
          p.vx += (p.baseVx - p.vx) * 0.04;
          p.vy += (p.baseVy - p.vy) * 0.04;

          p.x += p.vx * dt * 60;
          p.y += p.vy * dt * 60;

          // Viewport boundary wrap-around
          const margin = 20;
          if (p.x < -margin) p.x = width + margin;
          else if (p.x > width + margin) p.x = -margin;

          if (p.y < -margin) p.y = height + margin;
          else if (p.y > height + margin) p.y = -margin;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.colorType === 'red') {
          // Crimson glow on foreground red particles
          if (p.depth > 1.0) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(229, 57, 53, 0.7)';
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fillStyle = `rgba(229, 57, 53, ${p.alpha})`;
        } else if (p.colorType === 'white') {
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(245, 245, 245, 0.6)';
          ctx.fillStyle = `rgba(245, 245, 245, ${p.alpha})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(160, 160, 160, ${p.alpha})`;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Dynamic lines between nearby particles
        let connections = 0;
        const maxConnections = 4;

        for (let j = i + 1; j < particles.length; j++) {
          if (connections >= maxConnections) break;

          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectDistSq) {
            connections++;
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxConnectDist) * 0.22 * Math.min(p.alpha, p2.alpha);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            // Crimson tinted connection if either node is red
            if (p.colorType === 'red' || p2.colorType === 'red') {
              ctx.strokeStyle = `rgba(229, 57, 53, ${lineAlpha * 1.3})`;
            } else {
              ctx.strokeStyle = `rgba(180, 180, 180, ${lineAlpha})`;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse connection line
        if (isMouseActive && !prefersReducedMotion) {
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const mdistSq = mdx * mdx + mdy * mdy;

          if (mdistSq < mouseInfluenceRadiusSq) {
            const mdist = Math.sqrt(mdistSq);
            const mLineAlpha = (1 - mdist / mouseInfluenceRadius) * 0.35;

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(229, 57, 53, ${mLineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [pointerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      aria-hidden="true"
    />
  );
};
