'use client';

import { useEffect } from 'react';
import styles from './CorporateBanner.module.scss';

export default function CorporateBanner() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.hash && e.target.hash === '#contact-form') {
        e.preventDefault();
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          window.scrollTo({
            top: formElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <h1>Fresh, nutrition-dense meals delivered to your office</h1>
          <p>So your team can work better, feel better, and live better.</p>
          <a href="#contact-form" className={styles.ctaButton}>
            Apply for Corporate Partnership
          </a>
        </div>
      </div>
    </section>
  );
}