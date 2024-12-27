import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/web/',
  server: {
    proxy: {
      '/api/': 'https://headscale.yoshino-s.xyz/',
    },
  },
  plugins: [react(), tsconfigPaths()],
});
