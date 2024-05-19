import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  worker: {
    format: 'es',
    rollupOptions: {
      output: {
        manualChunks: {
          'pixi.js': ['pixi.js'],
        },
      },
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'pixi.js': ['pixi.js'],
        },
      },
    },
  },
});
