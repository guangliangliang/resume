import styles from './index.less';
import { DivBox } from '@/components';
import { Timeline } from 'antd';
import { StoryData } from '@/pages/Main/MyStory/config';
export default function IndexPage() {
  return (
    <div id="myStory" className={styles.home}>
      <DivBox title="我的经历">
        <div className={styles.main}>
          <Timeline mode="alternate">
            {StoryData.map((item) => {
              const { name, position, introduce, time } = item;
              return (
                <Timeline.Item label={time}>
                  <span className={styles.company}>{name}</span>
                  <br />
                  <span className={styles.position}>{position}</span>
                  <br />
                  <p className={styles.introduce}>{introduce}</p>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </div>
      </DivBox>
    </div>
  );
}
