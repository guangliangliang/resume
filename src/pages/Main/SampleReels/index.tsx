import styles from './index.less';
import { DivBox } from '@/components';
import ShowImage from './ShowImage';
import { ImageData } from './config';
export default function IndexPage() {
  return (
    <div id="sampleReels" className={styles.home}>
      <DivBox title="作品集">
        <div className={styles.main}>
          {ImageData.map((item) => (
            <ShowImage {...item} />
          ))}
        </div>
      </DivBox>
    </div>
  );
}
