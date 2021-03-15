import styles from './index.less';
import Bard from '@/assets/img/gif/bard.gif';
import { ScrollTop } from '@/utils/document';

export type Props = {
  show?: boolean;
};

function Index(props: Props) {
  const { show } = props;
  return (
    <>
      {show ? (
        <img
          onClick={() => {
            ScrollTop(0, 200);
          }}
          className={styles.bard_img}
          src={Bard}
        />
      ) : null}
    </>
  );
}

Index.defaultProps = {
  show: false,
};

export default Index;
