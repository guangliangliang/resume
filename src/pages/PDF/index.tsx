import { useState } from 'react';
import styles from './index.less';
import '../index.less';

export default function IndexPage() {
  const [url, setUrl] = useState('http://121.4.27.206:8888/pdf/pdf.pdf');
  return (
    <div className={styles.container}>
      <div className={styles.pdf}>
        <iframe src={url} width="100%" height="100%">
          This browser does not support PDFs. Please download the PDF to view
          it: <a href={url}>Download PDF</a>
        </iframe>
      </div>
    </div>
  );
}
