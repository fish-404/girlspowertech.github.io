import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import path from 'path';

export default defineConfig(({ }) => {
  return {
    base: process.env.IS_FORK === '1' ? '/girlspowertech.github.io' : '/',
    define: {
      _global: ({}),
    },
    server: {
      hmr: true
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "public/"),
        "@": path.resolve(__dirname, "src/"),
      },
    }
  };
});
