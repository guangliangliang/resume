import styles from './index.less';
import HeaderMenu from './HeaderMenu';
import SampleReels from './SampleReels';
import MyStory from './MyStory';
import PlacedTop from './PlacedTop';
import ContactMe from './ContactMe';
import About from './About';
import React, { useState, useEffect, useRef } from 'react';
import { clickLabel } from '@/utils/document';
export default function IndexPage() {
  const [ifFixed, setIfFixed] = useState(false);

  const bindScroll = (event: Event) => {
    // 滚动的高度
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight =
      (event.srcElement && event.srcElement.documentElement.clientHeight) ||
      document.body.clientHeight;
    // 页面高度
    const scrollHeight =
      (event.srcElement && event.srcElement.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    // 距离页面底部的高度
    setIfFixed(scrollTop > 960);
    const height = scrollHeight - scrollTop - clientHeight;
  };

  useEffect(() => {
    window.addEventListener('scroll', bindScroll);
    return () => {
      window.removeEventListener('scroll', bindScroll);
    };
  }, []);

  return (
    <>
      <HeaderMenu clickLabel={clickLabel} ifFixed={ifFixed} />
      <PlacedTop show={ifFixed} />
      <About />
      <SampleReels />
      <MyStory />
      <ContactMe />
    </>
  );
}
