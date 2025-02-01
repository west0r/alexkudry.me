import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    host: true,
    ...(command === 'serve' ? { port: 5177 } : {}),
    base: '/',
  }
}))