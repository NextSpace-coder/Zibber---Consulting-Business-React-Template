import { defineConfig } from 'vite'
import viteTagger from 'vite-tagger'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTagger({ prefixName: "wb" }),
  ],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
})
