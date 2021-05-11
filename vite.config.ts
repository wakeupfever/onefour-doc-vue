import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/stylus/common/reset.scss";'
      }
    }
  },
  resolve: {
    alias: [
      { find: '~', replacement: resolve(__dirname, 'src') }
    ]
  },
  plugins: [
    vue()
  ]
})
