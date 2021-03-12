// https://umijs.org/config/
import { defineConfig } from 'umi';

const prev = process.env.NODE_ENV === 'production' ? '/react-umi-tsx/' : '/'
export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  manifest: {
    basePath: '/',
  },
  publicPath: prev,
  base:  prev,
});
