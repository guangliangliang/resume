import styles from './index.less';
import { Button } from 'antd';
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
            window.open('/pdf/简历.pdf', '_blank');
          }}
        >
          PDF
        </Button>
        <a href="/pdf/简历.pdf" target="_blank" rel="noopener noreferrer">
          查看简历 PDF
        </a>
      </h1>
    </div>
  );
}
