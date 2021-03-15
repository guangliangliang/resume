import styles from './index.less';
import { menuData } from './config.js';
import React, { useState } from 'react';
import classNames from 'classnames';

export type Props = {
  ifFixed?: boolean;
  clickLabel?: (label?: string) => void;
};

const Index: React.FC<Props> = (props) => {
  const { ifFixed, clickLabel } = props;
  return (
    <div
      id="header_menu"
      className={classNames(styles.header_menu, ifFixed && styles.fixed)}
    >
      <div className={styles.header_menu_left}>
        <a href="http://guangliangliang.gitee.io/">光亮亮-博客</a>
      </div>
      <div className={styles.header_menu_right}>
        {menuData.map((item: { label: any }) => {
          const { label } = item;
          return (
            <span
              onClick={() => {
                clickLabel(label);
              }}
              className={styles.right_label}
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
};

Index.defaultProps = {
  ifFixed: false,
  clickLabel: () => {},
};

export default Index;
