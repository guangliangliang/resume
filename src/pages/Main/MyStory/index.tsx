import styles from './index.less';
import { DivBox } from '@/components';
import { Timeline } from 'antd';

export default function IndexPage() {
  return (
    <div id="myStory" className={styles.home}>
      <DivBox title="我的经历">
        <div className={styles.main}>
          <Timeline mode="alternate">
            <Timeline.Item label="2020/11 - 至今">
              <span className={styles.company}>
                北京华友联创科技科技发展有限公司{' '}
              </span>
              <br />
              <span className={styles.position}>React前端开发⼯程师</span>
              <br />
              <p className={styles.introduce}>
                参加讨论相关项目需求、概要设计，
                <br />
                并完成核心代码编写使用React进行开发
              </p>
            </Timeline.Item>
            <Timeline.Item label="2019/07 - 2020/08">
              <span className={styles.company}>
                城信迪赛（北京）科技有限公司{' '}
              </span>
              <br />
              <span className={styles.position}>Vue前端开发⼯程师</span>
              <br />
              <p className={styles.introduce}>
                参加讨论相关项目需求、概要设计，
                <br />
                并完成核心代码编写使用Vue进行开发
              </p>
            </Timeline.Item>
            <Timeline.Item label="2017/10 - 2019/04">
              <span className={styles.company}>
                ⼴州辐伦淄信息科技有限公司{' '}
              </span>
              <br />
              <span className={styles.position}>java开发⼯程师</span>
              <br />
              <p className={styles.introduce}>
                参加讨论相关项目需求、概要设计，
                <br />
                并完成核心代码编写使用SpringBoot、SpringMVC、Mybatis进行开发
              </p>
            </Timeline.Item>
          </Timeline>
        </div>
      </DivBox>
    </div>
  );
}
