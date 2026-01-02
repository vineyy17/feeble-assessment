'use client';

import styles from '@/src/styles/components/Hero.module.scss';
import NavMenu from './NavMenu';
import Badge from './Badge';
import CTA from './CTA';
import HeroBirds from './HeroBirds';
import { useEffect } from 'react';
import scroll from '@/src/animations/scroll';
import { split } from '../animations/text';

export default function Hero() {
    useEffect(() => {
        scroll();
        split();
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
      <HeroBirds />
    </section>
  );
}

