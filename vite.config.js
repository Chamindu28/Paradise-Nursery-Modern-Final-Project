import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages, set VITE_BASE_PATH to /your-repository-name/ when building.
// The default '/' works locally and on services that serve from the site root.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
});
