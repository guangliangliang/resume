import styles from './index.less';

export default function Beian() {
  console.log(
    process,
    process.env.UMI_APP_ICP_BEIAN,
    'process.env.UMI_APP_ICP_BEIAN',
  );

  return (
    <div className={styles.beian}>
      {process.env.UMI_APP_ICP_BEIAN && (
        <a target="_blank" href={process.env.UMI_APP_ICP_URL}>
          {process.env.UMI_APP_ICP_BEIAN}
        </a>
      )}
      {process.env.UMI_APP_POLICE_BEIAN && <span> | </span>}
      {process.env.UMI_APP_POLICE_BEIAN && (
        <a target="_blank" href={process.env.UMI_APP_POLICE_URL}>
          {process.env.UMI_APP_POLICE_BEIAN}
        </a>
      )}
    </div>
  );
}
