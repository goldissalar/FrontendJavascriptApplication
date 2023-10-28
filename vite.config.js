import { defineConfig } from 'vite';
import obfuscator from 'rollup-plugin-obfuscator';

export default ({ command }) => {
  const production = command === 'build';
  const plugins = [obfuscator()];

  return defineConfig({
    build: {
      outDir: 'dist',
      minify: production,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    server: {
      port: 3000, // Port für den Entwicklungsserver
    },
    base: './',
    plugins: production ? plugins : [],
  });
};