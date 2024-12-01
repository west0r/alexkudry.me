import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@cards': path.resolve(__dirname, './src/cards')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/index' as styles;`,
      },
    },
  },
  server: {
    open: true,
  },
});