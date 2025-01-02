import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Remove the base path since we're using a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});