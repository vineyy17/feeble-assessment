import styles from '@/src/styles/components/NavMenu.module.scss';
import Image from 'next/image';
import logo from '@/src/assets/icons/logo.png';

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <div className={styles.logo}>
        <Image src={logo} alt="Feeble Logo" width={107} height={34} />
      </div>
      
      <div className={styles.links}>
        <a href="#how-it-works">How it Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#use-case">Use Case</a>
        <a href="#faq">FAQ</a>
      </div>
      
      <button className={styles.contactButton}>
        Contact Sales
      </button>
    </nav>
  );
}

