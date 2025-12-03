'use client';

import { useEffect, useState } from 'react';
import styles from './OnboardingProcess.module.scss';

const steps = [
  {
    id: 1,
    number: '1',
    title: 'Submit Your Partnership Form',
    description: 'Begin your wellness journey by completing our simple application. Share basic details about your company size, employee preferences, and wellness goals.',
    details: [
      { icon: 'fa-clock', text: '5-minute application' },
      { icon: 'fa-shield-alt', text: 'Secure & confidential' },
      { icon: 'fa-bolt', text: '24-hour response time' }
    ],
    color: 'green'
  },
  {
    id: 2,
    number: '2',
    title: 'Receive Your Partnership Code',
    description: 'Upon approval, we provide a unique corporate partnership code for exclusive access to special pricing and streamlined ordering.',
    details: [
      { icon: 'fa-key', text: 'Unique company code' },
      { icon: 'fa-percent', text: 'Special pricing activated' },
      { icon: 'fa-envelope', text: 'Welcome package sent' }
    ],
    color: 'blue'
  },
  {
    id: 3,
    number: '3',
    title: '1-Week Pilot Program',
    description: 'Experience FitGreen firsthand with our no-risk pilot. We customize a meal plan for your team and handle all logistics.',
    details: [
      { icon: 'fa-calendar-check', text: 'Fully customized menu' },
      { icon: 'fa-truck', text: 'Delivery coordination' },
      { icon: 'fa-headset', text: 'Dedicated support' }
    ],
    color: 'orange',
    featured: true
  },
  {
    id: 4,
    number: '4',
    title: 'Feedback & Review Session',
    description: 'After the pilot, we gather comprehensive feedback from your team to optimize the program for your workplace.',
    details: [
      { icon: 'fa-chart-bar', text: 'Detailed analytics' },
      { icon: 'fa-comments', text: 'Team feedback session' },
      { icon: 'fa-sliders-h', text: 'Program customization' }
    ],
    color: 'purple'
  },
  {
    id: 5,
    number: '5',
    title: 'Go-Live Announcement & Rollout',
    description: 'We help you launch the full program with engaging communication materials, training sessions, and ongoing support.',
    details: [
      { icon: 'fa-bullhorn', text: 'Launch campaign' },
      { icon: 'fa-graduation-cap', text: 'Team training' },
      { icon: 'fa-trophy', text: 'Wellness certification' }
    ],
    color: 'pink'
  }
];

export default function OnboardingProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`.${styles.onboardingSection}`);
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;

      if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const stepsElements = document.querySelectorAll(`.${styles.processStep}`);
        stepsElements.forEach((step, index) => {
          const stepTop = step.offsetTop + sectionTop;
          if (scrollPosition > stepTop) {
            setActiveStep(index + 1);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePilotClick = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      window.scrollTo({
        top: formElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.onboardingSection}>
      <div className="container">
        <h2 className={styles.onboardingTitle}>
          Streamlined Onboarding <span>In Just 5 Steps</span>
        </h2>
        <p className={styles.onboardingSubtitle}>
          Our proven process ensures a seamless transition to healthier workplace eating with minimal disruption
        </p>

        <div className={styles.processContainer}>
          <div className={styles.processConnectors}>
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`${styles.processConnectorDot} ${activeStep >= step.id ? styles.active : ''}`}
                style={{ top: `${(index * 160) + 60}px` }}
              />
            ))}
          </div>

          <div className={styles.processSteps}>
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`${styles.processStep} ${step.featured ? styles.featured : ''} ${activeStep >= step.id ? styles.active : ''}`}
              >
                <div 
                  className={`${styles.stepNumber} ${styles[step.color]} ${step.featured ? styles.floating : ''}`}
                >
                  {step.number}
                </div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.onboardingCta}>
          <a href="#contact-form" className={styles.pilotButton} onClick={handlePilotClick}>
            <i className={`fas fa-play-circle ${styles.buttonIcon}`}></i>
            Start Your 1-Week Pilot Program
          </a>
          <p className={styles.ctaSubtext}>
            No commitment required • Cancel anytime • 100% satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
}