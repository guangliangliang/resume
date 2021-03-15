import styles from './index.less';
import HeaderMenu from './HeaderMenu';
import JobIntention from './JobIntention';
import About from './About';
import React, { useState, useEffect, useRef } from 'react';

export default function IndexPage() {
  useEffect(() => {
    document.body.addEventListener('DOMMouseScroll', function (event) {
      console.dir(event);
    });
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div className={styles.main}>
      <HeaderMenu />
      <About />
      <JobIntention />
    </div>
  );
}
