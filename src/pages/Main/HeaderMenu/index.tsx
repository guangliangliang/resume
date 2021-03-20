import styles from './index.less';
import { menuData } from '@/pages/Main/HeaderMenu/config';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MenuFoldOutlined } from '@ant-design/icons';
export type Props = {
  ifFixed?: boolean;
  clickLabel?: (label?: string) => void;
};

const Index: React.FC<Props> = (props) => {
  const { ifFixed, clickLabel } = props;
  const [menuFlag, setMenuFlag] = useState(false);

  return (
    <div
      id="header_menu"
      style={{ display: menuFlag ? 'block' : 'flex' }}
      className={classNames(styles.header_menu, ifFixed && styles.fixed)}
    >
      <div className={styles.header_menu_left}>
        <a href="http://guangliangliang.gitee.io/" target="_blank">
          光亮亮-博客
        </a>
      </div>
      <div className={styles.header_menu_right}>
        <div className={styles.menu_right_web}>
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
        <div className={styles.menu_right_phone}>
          <MenuFoldOutlined
            onClick={() => {
              setMenuFlag(!menuFlag);
            }}
          />
        </div>
      </div>
      {menuFlag && (
        <div className={styles.right_phone_ul}>
          <ul>
            {menuData.map((item: { label: any }) => {
              const { label } = item;
              return (
                <li
                  onClick={() => {
                    setMenuFlag(false);
                    clickLabel(label);
                  }}
                  className={styles.right_label}
                >
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

Index.defaultProps = {
  ifFixed: false,
  clickLabel: () => {},
};

export default Index;
