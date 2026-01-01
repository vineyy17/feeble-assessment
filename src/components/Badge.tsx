import Image from 'next/image';
import styles from '@/src/styles/components/Badge.module.scss';
import optionsIcon from '@/src/assets/icons/options.png';

export default function Badge() {
  return (
    <div className={styles.badge}>
      <Image src={optionsIcon} alt="Options" width={32} height={17} />
      <span>#1 iMessage Automation Tool</span>
    </div>
  );
}

