import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/purple-yellow-web/',
  plugins: [react()],
})
