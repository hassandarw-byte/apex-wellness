import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  base: '/apex-wellness/',
  root: './client',
  plugins: [
    react()
    // VitePWA disabled for GitHub Pages
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src')
    }
  },
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: '../dist',
    sourcemap: false
  }
})
