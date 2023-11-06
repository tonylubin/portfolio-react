import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
