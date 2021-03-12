import styles from './index.less';
import { menuData } from './config.js';
import React, { useState } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.header_menu}>
      <div className={styles.header_menu_left}>
        <a href="http://guangliangliang.gitee.io/">光亮亮-博客</a>
      </div>
      <div className={styles.header_menu_right}>
        {menuData.map((item: { label: any }) => {
          const { label } = item;
          return <span className={styles.right_label}>{label}</span>;
        })}
      </div>
    </div>
  );
}
