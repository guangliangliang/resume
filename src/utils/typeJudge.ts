/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-18 16:12:55
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-19 15:02:25
 */

// 进行类型判断
const is = {
  types: [
    'Array',
    'Boolean',
    'Date',
    'Number',
    'Object',
    'Function',
    'RegExp',
    'String',
    'Window',
    'HTMLDocument',
  ],
};
// eslint-disable-next-line array-callback-return
is.types.map((item) => {
  is[item] = (function (type) {
    return function (obj) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
  })(item);
});

const callFun = (result) => {
  is.Function(result) ? result() : null;
};

export { is, callFun };
