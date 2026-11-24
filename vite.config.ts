import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Ensures Vite process exits cleanly on CI / Vercel after build completes,
    // preventing tailwindcss/vite background worker from keeping the event loop alive.
    {
      name: 'force-exit-after-build',
      apply: 'build',
      closeBundle() {
        setTimeout(() => {
          process.exit(0);
        }, 20);
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-core': ['three'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
          'ui-motion': ['motion', 'lenis'],
        },
      },
    },
  },
});
