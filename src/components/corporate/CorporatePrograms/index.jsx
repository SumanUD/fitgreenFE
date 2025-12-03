'use client';

import styles from './CorporatePrograms.module.scss';

const programs = [
  {
    id: 1,
    icon: 'fa-id-card',
    title: 'Employee Privilege Program',
    description: 'Give your employees a meaningful perk that supports their well-being. With a dedicated corporate code, your team unlocks exclusive access to balanced, delicious meals at special pricing without any extra administrative effort from HR. It\'s a simple way to show your employees that their health and lifestyle choices matter, while promoting a culture of mindful and smarter eating at work.'
  },
  {
    id: 2,
    icon: 'fa-calendar-check',
    title: 'Get Health @ Workplace -- Subscription Offer',
    description: 'For teams, departments, or work floors that prefer group ordering, our subscription model ensures consistent access to fresh, nutrition-forward meals. From curated weekly menus to preferred delivery schedules, the program is designed to fit seamlessly into your workplace routine. The more your team orders, the more value they unlock, creating a cost-effective and high-impact wellness benefit.'
  },
  {
    id: 3,
    icon: 'fa-users',
    title: 'Employee Engagement & Visibility',
    description: 'Healthy habits grow when they are seen and experienced, not just announced. From nutrition-focused activation days and tasting sessions to co-branded communication materials and presence in office common areas, we help spark interest, curiosity, and adoption within your teams. These engagement touchpoints make wellness feel accessible, enjoyable, and part of everyday office life.'
  },
  {
    id: 4,
    icon: 'fa-award',
    title: 'Partner Branding & Recognition',
    description: 'We celebrate organisations that prioritize employee wellbeing. As a partner, your company is featured across FitGreen platforms and recognized with a workplace wellness certificate — reinforcing your commitment to a healthier work culture. Co-branded content and social stories further enhance employer branding and position your organisation as progressive, caring, and people-first.'
  }
];

export default function CorporatePrograms() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:9147741444';
  };

  return (
    <section className={styles.programsSection} id="programs">
      <div className="container">
        
        <div className="stroke-title {styles.sectionTitle}">About Corporate Programs</div>
        
        <div className={styles.programsGrid}>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsGrid}>
              {programs.map((program) => (
                <div key={program.id} className={styles.programCard}>
                  <h3>
                    <i className={`fas ${program.icon}`}></i>
                    {program.title}
                  </h3>
                  <p>{program.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.contentSection}>
            <div className={styles.contentWrapper}>
              <div className={styles.programsImage}>
                
              </div>
              
              <div className={styles.contentText} style={{textAlign: 'center'}}>
                <h3>Healthy Workplaces Start With Better Food</h3>
                <p>More companies today are realizing that food isn't just a lunch break; it's fuel for performance, focus, and well-being. When employees have easy access to balanced, enjoyable meals at work, morale improves, energy stays steady, and productivity naturally rises.</p>
                <p>At FitGreen, we make everyday healthy eating simple, accessible, and workplace-ready, without compromising on taste, convenience, or consistency.</p>
                
                <button onClick={handlePhoneClick} className={styles.phoneCta}>
                  <i className="fas fa-phone-alt"></i>
                  Talk to Our Team: 9147741444
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}