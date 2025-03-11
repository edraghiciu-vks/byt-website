import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/byt-website/',
  build: {
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.endsWith('.jpeg') || assetInfo.names.endsWith('.jpg') || assetInfo.names.endsWith('.png')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
