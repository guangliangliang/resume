import styles from './index.module.less';
import Home from './Home';
import Main from './Main';
import './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Home />
      <Main />
    </div>
  );
}
