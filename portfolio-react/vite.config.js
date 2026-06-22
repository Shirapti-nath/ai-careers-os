import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ai-careers-os/portfolio/',
  build: {
    outDir: '../portfolio',
    emptyOutDir: true,
  },
});
