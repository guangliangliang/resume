import { defineConfig } from 'umi';
const prev = process.env.NODE_ENV === 'production' ? '/resume/' : '/';

export default defineConfig({
  publicPath: prev,
  base: prev,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/pdf', component: '@/pages/PDF/index' },
  ],
  fastRefresh: {},
  targets: {
    ie: 9,
  },
});
