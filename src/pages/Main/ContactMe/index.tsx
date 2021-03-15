import styles from './index.less';
import { Button } from 'antd';
import { DivBox } from '@/components';
import { Links } from './config';
export default function IndexPage() {
  return (
    <div id="contactMe" className={styles.home}>
      <DivBox title="联系我">
        <div className={styles.main}>
          <p className={styles.single_p}>
            联系QQ：
            <a
              href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2718889614&website=www.oicqzone.com"
              class="zi zi_tmQq"
            >
              2718889614
            </a>
            | 我的微信：13647910412 | 我的邮箱：
            <a href="mailto:17600498920@163.com">17600498920@163.com</a>{' '}
          </p>
          <p className={styles.single_p}>
            不浮躁,爱编程，爱前端，爱运动，爱魔术,爱魔方,爱象棋，良好的执行力和学习能力
          </p>
          <p className={styles.single_p}>
            {Links.map((item) => {
              const { label, href } = item;
              return (
                <>
                  <span>
                    {label}:{' '}
                    <a target="_blank" href={href}>
                      {href}
                    </a>
                  </span>
                  <br />
                </>
              );
            })}
          </p>
        </div>
      </DivBox>
    </div>
  );
}
