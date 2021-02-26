import path from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/LoadingCp',
  },
  dva: {
    immer: true,
  },
  devtool: 'source-map',
  antd: {},
  title: 'nuwa',
  // exportStatic: {},
  base: '/',
  publicPath: '/',
  outputPath: 'dist',
  esbuild: {},
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/editor',
          // component: '../pages/home',
        },
        {
          path: '/editor',
          component: '../pages/editor',
        },
        {
          path: '/ide',
          component: '../pages/ide',
        },
        {
          path: '/help',
          component: '../pages/help',
        },
        {
          path: '/login',
          component: '../pages/login',
        },
        {
          path: '/mobileTip',
          component: '../pages/mobileTip',
        },
        {
          path: '/preview',
          component: '../pages/editor/preview',
        },
      ],
    },
  ],
  theme: {
    // 'primary-color': '#00A6A6',
    // "btn-primary-bg": "#00A6A6"
  },
  // extraBabelPlugins: [['import', { libraryName: 'zarm', style: true }]],
  // sass: {},
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
  },
});
