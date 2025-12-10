import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  root: './client',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'APEX Wellness',
        short_name: 'APEX',
        description: 'تطبيق اللياقة والصحة الإسلامي',
        theme_color: '#0f0f1e',
        background_color: '#0f0f1e',
        display: 'standalone'
      }
    })
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
