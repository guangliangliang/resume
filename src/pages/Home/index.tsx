import styles from './index.less';
import { Button } from 'antd';
import { history } from 'umi';
import { clickLabel } from '@/utils/document';

export default function IndexPage() {
  return (
    <div className={styles.home}>
      <h1 className={styles.hello}>Hello , My name is GLL</h1>
      <h1 className={styles.profession}>一名前端工程师</h1>
      <h1 className={styles.button}>
        <Button
          onClick={() => {
            clickLabel('关于我');
          }}
        >
          关于我
        </Button>
        <Button
          onClick={() => {
            clickLabel('作品集');
          }}
        >
          作品集
        </Button>
        <Button
          onClick={() => {
            history.push('pdf');
          }}
        >
          PDF
        </Button>
      </h1>
    </div>
  );
}
