import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `$injectedColor: orange;`,
        },
        less: {
          math: 'parens-division',
        },
      },
    },
  
  base: '/portfolioV2',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
