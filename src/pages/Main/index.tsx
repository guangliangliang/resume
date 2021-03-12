import styles from './index.less';
import HeaderMenu from './HeaderMenu';
import JobIntention from './JobIntention';
import About from './About';
export default function IndexPage() {
  return (
    <div className={styles.main}>
      <HeaderMenu />
      <About />
      <JobIntention />
    </div>
  );
}
