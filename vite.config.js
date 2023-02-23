import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'vue',
  plugins: [vue()],
  build: {
    emptyOutDir: true,
    outDir: '../../frontend-build-apps/vue-frontend-build-app/public',
  },
})
