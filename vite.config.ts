import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Change this to 'automatic'
    })
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});
