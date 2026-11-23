/**
 * Design system tokens for Pravin K's portfolio.
 * Centralized source of truth for programmatic usage (Three.js materials, animations, CSS helpers).
 */

export const COLOR_TOKENS = {
  bgPrimary: '#090909',
  bgSecondary: '#111111',
  bgElevated: '#181818',
  textPrimary: '#F5F5F5',
  textMuted: '#888888',
  accentRed: '#E53935',
  borderSubtle: 'rgba(245, 245, 245, 0.10)',
  borderStrong: 'rgba(245, 245, 245, 0.20)',
} as const;

export const FONT_TOKENS = {
  display: '"Space Grotesk", sans-serif',
  body: '"Inter", sans-serif',
  mono: '"IBM Plex Mono", monospace',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
