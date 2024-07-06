import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-intersection-observer'], // 
    },
  },
  resolve: {
    alias: {
      'framer-motion': 'framer-motion',
      'react-intersection-observer': 'react-intersection-observer', 
    },
  },
});
