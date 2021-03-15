import styles from './index.less';
import { DivBox } from '@/components';
import HeadPortrait from '@/assets/other/headPortrait.png';

export default function Index() {
  return (
    <div id="about" className={styles.home}>
      <DivBox title="关于我">
        <div className={styles.div_main}>
          <img src={HeadPortrait} className={styles.div_main_portrait} />
          <div className={styles.introduce}>
            <p className={styles.single_p}>
              我叫光亮亮，25岁，坐标北京，是一名前端工程师，两年前端 从业经验。
            </p>
            <p className={styles.single_p}>
              主要涉及技术:React,Vue,Java,Node,Taro
            </p>
            <p className={styles.single_p}>子贡问君子,子曰:先行其言而后从之</p>
            <p className={styles.single_p}>
              个人博客:
              <a href="https://xuwei.xyz/">https://xuwei.xyz/</a>
            </p>
            <p className={styles.single_p}>
              个人博客(gitee):
              <a href="http://guangliangliang.gitee.io/">
                (http://guangliangliang.gitee.io/)
              </a>
            </p>
          </div>
        </div>
      </DivBox>
    </div>
  );
}
