import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/pdf', component: '@/pages/PDF/index' },
  ],
  fastRefresh: {},
  targets: {
    ie: 11,
  },
});
