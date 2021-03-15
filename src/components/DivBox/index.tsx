/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-22 16:46:27
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-26 16:39:57
 */
import React from 'react';
import styles from './index.less';

export type Props = {
  title?: string;
  children?: any;
};

function Index(props: Props) {
  const { title, children } = props;
  return (
    <div className={styles.div_base_box}>
      <div className={styles.base_box_top}>
        <span>{title}</span>
      </div>
      <div className={styles.base_box_centent}>{children}</div>
    </div>
  );
}

Index.defaultProps = {
  title: '',
  children: null,
};

export default Index;
