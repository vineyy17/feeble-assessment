import Image from 'next/image';
import styles from '@/src/styles/components/CTA.module.scss';
import appleIcon from '@/src/assets/apple.png';

export default function CTA() {
  return (
    <div className={styles.ctaContainer}>
      <h1 className={styles.mainText} data-animation='blurIn'>
        <span className={styles.blueText}>iMessage</span> Automation for Teams and AI Workflows.
      </h1>
      <p className={styles.subText} data-animation='h'>
        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
      </p>
      <div className={styles.buttonsContainer}>
        <button className={styles.getStartedButton}>
          Get Started
        </button>
        <button className={styles.macButton}>
          <Image src={appleIcon} alt="Apple" width={18.43} height={22} />
          <div className={styles.stroke}></div>
          <span>Download the Mac app</span>
        </button>
      </div>
    </div>
  );
}

