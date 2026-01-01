'use client';

import Image from 'next/image';
import styles from '@/src/styles/components/Hero.module.scss';
import NavMenu from './NavMenu';
import Badge from './Badge';
import CTA from './CTA';
import { useEffect } from 'react';
import scroll from '@/src/animations/scroll';
import arrowDown from '@/src/assets/icons/arrow-down.png';

export default function Hero() {

    useEffect(() => {
        scroll();
    }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.navWrapper}>
        <NavMenu />
      </div>
      <div className={styles.badgeWrapper}>
        <Badge />
      </div>
      <CTA />
      <div className={styles.scrollIndicator}>
        <p className={styles.scrollText}>Scroll to learn more</p>
        <div className={styles.arrowWrapper}>
          <Image src={arrowDown} alt="Scroll down" width={32} height={32} />
        </div>
      </div>
    </section>
  );
}

