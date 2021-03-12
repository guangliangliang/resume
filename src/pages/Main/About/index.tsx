import styles from './index.less';
import { Button } from 'antd';

export default function IndexPage() {
  return (
    <div className={styles.home}>
      <h1 className={styles.hello}>Hello , My name is GLL</h1>
      <h1 className={styles.profession}>一名前端工程师</h1>
      <h1 className={styles.button}>
        <Button>关于我</Button>
        <Button>作品集</Button>
      </h1>
    </div>
  );
}
