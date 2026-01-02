'use client';

import Image from 'next/image';
import styles from '@/src/styles/components/Hero.module.scss';
import NavMenu from './NavMenu';
import Badge from './Badge';
import CTA from './CTA';
import { useEffect, useRef } from 'react';
import scroll from '@/src/animations/scroll';
import arrowDown from '@/src/assets/icons/arrow-down.png';
import birdOne from '@/src/assets/icons/bird-one.png';
import birdTwo from '@/src/assets/icons/bird-two.png';
import birdFour from '@/src/assets/icons/bird-four.png';
import birdFive from '@/src/assets/icons/bird-five.png';
import birdSix from '@/src/assets/icons/bird-six.png';
import birdLeft from '@/src/assets/icons/bird-left.png';
import birdRight from '@/src/assets/icons/bird-right.png';
import { gsap } from '@/src/lib/gsap';
import useIsomorphicLayoutEffect from '@/src/hooks/useIsomorphicLayoutEffect';
import { split } from '../animations/text';

export default function Hero() {
    const birdOneRef = useRef<HTMLDivElement>(null);
    const birdTwoRef = useRef<HTMLDivElement>(null);
    const birdFourRef = useRef<HTMLDivElement>(null);
    const birdFiveRef = useRef<HTMLDivElement>(null);
    const upperBirdLeftTopRef = useRef<HTMLDivElement>(null);
    const upperBirdLeftBottomRef = useRef<HTMLDivElement>(null);
    const upperBirdLeftBottomAnimatedRef = useRef<HTMLDivElement>(null);
    const upperBirdRightTopRef = useRef<HTMLDivElement>(null);
    const upperBirdRightBottomRef = useRef<HTMLDivElement>(null);
    const upperBirdRightBottomAnimatedRef = useRef<HTMLDivElement>(null);
    const flyingBirdLeftRef = useRef<HTMLDivElement>(null);
    const flyingBirdRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scroll();
        split();
    }, []);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate birds from below to their positions 
            gsap.fromTo(
                [birdOneRef.current, birdTwoRef.current, birdFourRef.current, birdFiveRef.current],
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: birdOneRef.current,
                        start: 'top 100%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate upperBirdLeftTop and upperBirdRightTop from below with opacity
            gsap.fromTo(
                [upperBirdLeftTopRef.current, upperBirdRightTopRef.current],
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: upperBirdLeftTopRef.current,
                        start: 'top 100%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                }
            );

            // Animate duplicate birds for upperBirdLeftBottom and upperBirdRightBottom from below
            // The original birds stay visible, these animate into them
            gsap.fromTo(
                [upperBirdLeftBottomAnimatedRef.current, upperBirdRightBottomAnimatedRef.current],
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 0.1,
                    duration: 1.2,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: upperBirdLeftBottomRef.current,
                        start: 'top 100%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!flyingBirdLeftRef.current || !flyingBirdRightRef.current) return;

            const windowWidth = window.innerWidth;

            // Animate bird flying from left to right
            gsap.fromTo(
                flyingBirdLeftRef.current,
                {
                    x: 0,
                    y: 0,
                },
                {
                    x: windowWidth + 450,
                    y: -200,
                    duration: 3.5,
                    delay: 2,
                    ease: 'power1.in',
                }
            );

            // Animate bird flying from right to left
            gsap.fromTo(
                flyingBirdRightRef.current,
                {
                    x: 0,
                    y: 0,
                },
                {
                    x: -(windowWidth + 450),
                    y: -200,
                    duration: 3.5,
                    delay: 2,
                    ease: 'power1.in',
                }
            );
        });

        return () => ctx.revert();
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
      <div className={styles.upperBirdsContainer}>
        <div ref={upperBirdLeftTopRef} className={styles.upperBirdLeftTop}>
          <Image src={birdSix} alt="Bird" width={42.36} height={13.96} />
        </div>
        <div ref={upperBirdLeftBottomRef} className={styles.upperBirdLeftBottom}>
          <Image src={birdSix} alt="Bird" width={42.36} height={13.96} />
        </div>
        <div ref={upperBirdLeftBottomAnimatedRef} className={styles.upperBirdLeftBottomAnimated}>
          <Image src={birdSix} alt="Bird" width={42.36} height={13.96} />
        </div>
        <div ref={upperBirdRightTopRef} className={styles.upperBirdRightTop}>
          <Image src={birdSix} alt="Bird" width={42.36} height={13.96} />
        </div>
        <div ref={upperBirdRightBottomRef} className={styles.upperBirdRightBottom}>
          <Image src={birdSix} alt="Bird" width={42.36} height={13.96} />
        </div>
        <div ref={upperBirdRightBottomAnimatedRef} className={styles.upperBirdRightBottomAnimated}>
          <Image src={birdSix} alt="Bird" width={42.36} height={13.96} />
        </div>
      </div>
      <div className={styles.birdsContainer}>
        <div ref={birdOneRef} className={styles.birdOne}>
          <Image src={birdOne} alt="Bird" width={103.38} height={76.75} />
        </div>
        <div ref={birdFourRef} className={styles.birdFour}>
          <Image src={birdFour} alt="Bird" width={87.74} height={56.99} />
        </div>
        <div ref={birdFiveRef} className={styles.birdFive}>
          <Image src={birdFive} alt="Bird" width={128.21} height={54.38} />
        </div>
        <div ref={birdTwoRef} className={styles.birdTwo}>
          <Image src={birdTwo} alt="Bird" width={128.93} height={101.99} />
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <p className={styles.scrollText}>Scroll to learn more</p>
        <div className={styles.arrowWrapper}>
          <Image src={arrowDown} alt="Scroll down" width={32} height={32} />
        </div>
      </div>
      <div ref={flyingBirdLeftRef} className={styles.flyingBirdLeft}>
        <Image src={birdLeft} alt="Bird flying left" width={150} height={150} />
      </div>
      <div ref={flyingBirdRightRef} className={styles.flyingBirdRight}>
        <Image src={birdRight} alt="Bird flying right" width={150} height={150} />
      </div>
    </section>
  );
}

