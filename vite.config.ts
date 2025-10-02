import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      i18n: '/src/i18n',
      scss: '/src/scss',
      enums: '/src/enums',
      hooks: '/src/hooks',
      types: '/src/types',
      helpers: '/src/helpers',
      services: '/src/services',
      constants: '/src/constants',
      components: '/src/components',
    },
  },
})
