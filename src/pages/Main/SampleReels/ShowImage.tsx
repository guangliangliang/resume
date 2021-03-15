import { useState } from 'react';
import styles from './index.less';

import { SearchOutlined } from '@ant-design/icons';

export type Props = {
  img?: any;
  title: string;
  introduce: string;
};

function Index(props: Props) {
  const { img, title, introduce } = props;
  const [flag, setFlag] = useState(false);

  const onMouseOver = (event: MouseEvent) => {
    setFlag(true);
  };

  const onMouseOut = (event: MouseEvent) => {
    setFlag(false);
  };

  return (
    <div className={styles.single_img_box}>
      <img
        className={styles.single_img}
        src={img}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
      {flag && (
        <div className={styles.single_img_hover}>
          <p className={styles.single_title}>{title}</p>
          <p className={styles.single_introduce}>{introduce}</p>
          <p className={styles.single_icon}>
            <SearchOutlined />
          </p>
        </div>
      )}
    </div>
  );
}

Index.defaultProps = {
  img: null,
  title: '',
  introduce: '',
};

export default Index;
