import Temp from '@/assets/img/other/temp.png';
import Dumi from '@/assets/img/other/dumi.png';
import Blog from '@/assets/img/other/blog.png';
import VueAdmin from '@/assets/img/other/vue-admin.png';
import VueComponents from '@/assets/img/other/vue-components.png';
const ImageData = [
  {
    img: Temp,
    title: 'umi管理系统jsx版本',
    introduce: '基于umi框架的使用jsx开发的react管理系统模版',
    href: 'https://guangliangliang.github.io/react-umi-jsx/',
  },
  {
    img: Temp,
    title: 'umi管理系统tsx版本',
    introduce: '基于umi框架的使用tsx开发的react管理系统模版',
    href: 'https://guangliangliang.github.io/react-umi-tsx/',
  },
  {
    img: Dumi,
    title: '基于dumi的react组件库',
    introduce: '基于dumi的开发的react组件库模版',
    href: 'https://guangliangliang.github.io/dumi-component/',
  },
  {
    img: Blog,
    title: 'gitee博客',
    introduce: '基于vuePress实现的博客网站',
    href: 'https://guangliangliang.gitee.io/',
  },
  {
    img: VueAdmin,
    title: 'vue-admin项目',
    introduce: 'vue全家桶的一个模版项目',
    href: 'https://guangliangliang.github.io/vue-admin/#/dashboard/work',
  },
  {
    img: VueComponents,
    title: 'vue公共组件库',
    introduce: '实现vue通用组件库的项目',
    href: 'https://guangliangliang.github.io/vue-components/',
  },
]; /* Array.from({ length: 6 }, (_, index) => {
  return {
    img: Temp,
    title: 'umi管理系统jsx版本' + index,
    introduce: '基于umi框架的使用jsx开发的react管理系统模版',
    href:'https://guangliangliang.github.io/react-umi-jsx/'
  };
}); */

export { ImageData };
