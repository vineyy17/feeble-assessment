'use client';

import { useState } from 'react';
import styles from '@/src/styles/components/NavMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/src/assets/logo.png';

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navMenu}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="Feeble Logo" width={107} height={34} />
      </Link>
      
      <button 
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
      </button>
      
      <div className={styles.links}>
        <a href="#how-it-works" onClick={closeMenu}>How it Works</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#use-case" onClick={closeMenu}>Use Case</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
      </div>
      
      <button className={styles.contactButton} onClick={closeMenu}>
        Contact Sales
      </button>
      
      <div className={`${styles.menuContent} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <button className={styles.mobileContactButton} onClick={closeMenu}>
          Contact Sales
        </button>
        <div className={styles.mobileLinks}>
          <a href="#how-it-works" onClick={closeMenu}>How it Works</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#use-case" onClick={closeMenu}>Use Case</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </div>
      </div>
    </nav>
  );
}

