import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { md } from '@cutting/rollup-plugin-md'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/stylus/common/reset.scss";',
      },
    },
  },
  server: {
    host: 'localhost',
    open: true,
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: `${resolve(__dirname, 'src')}`,
      },
    ],
  },
  plugins: [vue(), md()],
  optimizeDeps: {
    include: ['vue', 'vue-router'],
    exclude: ['vue-demi'],
  },
})
