import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ecobamboo/', // Add this line since we're using a project repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});