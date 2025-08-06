import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import path from 'path';
export default defineConfig({
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },

  },
  plugins: [react(),
    mdx({
      // MDX 配置选项
      providerImportSource: '@mdx-js/react',

    })
  ],
    esbuild: {
    loader: 'tsx',
    include: /\.[jt]sx?$/,
    exclude: [],
  },
  base: '/',
  assetsInclude: ['**/*.md'],
});
