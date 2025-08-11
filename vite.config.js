import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import { fileURLToPath, URL } from 'node:url'; // 导入路径解析所需的模块

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // <-- 添加这一行
    }
  },
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 5175,      // 确保端口正确
    proxy: {
      '/apiv1': {
        target: 'http://trial.hxg.lpsk12.cn',
        changeOrigin: true, // 修改请求头中的 Origin
        rewrite: (path) => path // 不重写路径（保持 /apiv1）
      }
    }
  },
  base: './', // 相对路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
});