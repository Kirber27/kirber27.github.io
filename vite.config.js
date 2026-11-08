import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// The repo is named <user>.github.io, so the site is served from the root.
// If you ever deploy it from a project repo (e.g. /portfolio), set base: '/portfolio/'.
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
})
