import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000, // Port für den Entwicklungsserver
  },
  plugins: [
    {
      name: 'vite-plugin-checker',
    },
  ],
});
