import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ts from '@vitejs/plugin-typescript';
import postcss from 'vite-plugin-postcss';

export default defineConfig({
  plugins: [
    react(),
    ts(),
    postcss({
      // PostCSS plugin options
    }),
  ],
});
