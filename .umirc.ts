import { defineConfig } from 'umi';
const prev = process.env.NODE_ENV === 'production' ? '/resume/' : '/';

export default defineConfig({
  publicPath: prev,
  base: prev,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  targets: {
    ie: 9,
  },
});
