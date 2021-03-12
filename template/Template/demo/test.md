<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-21 09:43:29
 * @LastEditors: unicom
 * @LastEditTime: 2020-12-28 13:46:46
-->

---

order: 2

```jsx
import Template from '@/components/Template';

ReactDOM.render(
  <Template
    optionalString=""
    optionalNumber={1}
    optionalObject={{}}
    optionalSymbol={Symbol(2)}
    optionalArray={[]}
    optionalBool={false}
    optionalFunc={() => {
      console.log(1);
    }}
    optionalMulti={1}
    optionalNode={0}
  />,
  mountNode,
);
```
