import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  //base: "/my-inventario/",
  plugins: [
    vue(),
  ],
   publicPath: process.env.NODE_ENV === 'production' ? '/' + process.env.CI_PROJECT_NAME + '/' : '/',
  // publicPath: process.env.NODE_ENV === "production" ? "/my-inventario/" : "/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/my-inventario/" : "/",
// };
