import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import EslintPlugin from 'vite-plugin-eslint'

import { loadEnv } from './scripts/loadEnv.js'

// 当前根目录
const root = process.cwd()
function pathResolve(dir) {
  return resolve(root, '.', dir)
}

export default async ({ mode }) => {
  const env = loadEnv(mode)
  return defineConfig({
    base: env.WEB_BASE_PATH,
    plugins: [
      vue(),
      vueJsx(),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.vue'], // 检查的文件
        failOnError: true,
        failOnWarning: false,
        emitError: true,
        emitWarning: false,
      }),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css', '.scss', '.vue'],
      alias: [
        // 设置别名
        /*{
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },*/
        {
          find: '@',
          replacement: `${pathResolve('src')}`,
        },
      ],
    },
    server: {
      port: 3000,
      //proxy: generateProxyTable(),
      host: '0.0.0.0',
      hmr: true,
    },
    build: {
      minify: 'terser',
      outDir: env.WEB_OUT_DIR || 'dist',
      sourcemap: env.WEB_SOURCEMAP === 'true' ? 'inline' : false,
      terserOptions: {
        compress: {
          drop_debugger: env.WEB_DROP_DEBUGGER === 'true',
          drop_console: env.WEB_DROP_CONSOLE === 'true',
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'axios'],
    },
  })
}
