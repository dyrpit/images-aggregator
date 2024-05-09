import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const baseURL = process.env.NODE_ENV === 'production' ? '/images-aggregator' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: baseURL,
  preview: {
    port: 5173,
  },
  plugins: [react()],
});
