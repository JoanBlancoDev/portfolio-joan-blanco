// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Minify aggressively
      minify: 'esbuild',
      // Split vendor chunks to reduce initial bundle
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Separate heavy vendor libs into their own chunks for better caching
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/motion')) {
              return 'motion-vendor';
            }
            if (id.includes('node_modules/i18next')) {
              return 'i18n-vendor';
            }
          },
        },
      },
      // Increase chunk warning limit so manualChunks doesn't warn on legit splits
      chunkSizeWarningLimit: 600,
    },
    // Enable dependency pre-bundling optimizations
    optimizeDeps: {
      include: ['react', 'react-dom', 'motion/react', 'i18next'],
    },
  },
});