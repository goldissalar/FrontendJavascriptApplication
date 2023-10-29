import { defineConfig } from 'vite';
import obfuscator from 'rollup-plugin-obfuscator';
const { resolve } = require("path");

export default ({ command }) => {
  const production = command === 'build';
  const plugins = [obfuscator()];

  return defineConfig({
    root: './src/',
    build: {
      outDir: 'dist',
      minify: production,
      rollupOptions: {
        input: {
          index: resolve(__dirname, "./src/index.html"),
          about: resolve(__dirname, "./src/pages/html/about.html"),
          favorites: resolve(__dirname, "./src/pages/html/favorites.html"),
        },
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        }
      },
    },
    server: {
      port: 3000, // Port für den Entwicklungsserver
    },
    base: '/FrontendJavascriptApplication/',
    plugins: production ? plugins : [],
  });
};