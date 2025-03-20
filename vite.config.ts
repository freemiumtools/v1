import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/v1/'
  }

  return config
});
