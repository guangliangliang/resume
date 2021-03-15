import Temp from '@/assets/img/other/temp.png';
const ImageData = Array.from({ length: 6 }, (_, index) => {
  return {
    img: Temp,
    title: 'umi管理系统jsx版本' + index,
    introduce: '基于umi框架的使用jsx开发的react管理系统模版',
  };
});
/* [
    {
        img: Temp,
        title:'umi管理系统jsx版本',
        introduce:'基于umi框架的使用jsx开发的react管理系统模版',
    }
] */
export { ImageData };
