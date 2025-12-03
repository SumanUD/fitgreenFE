import styles from './page.module.scss';
import CorporateBanner from '@/components/corporate/CorporateBanner';
import CorporatePrograms from '@/components/corporate/CorporatePrograms';
import OnboardingProcess from '@/components/corporate/OnboardingProcess';
import CorporateForm from '@/components/corporate/CorporateForm';

export default function CorporatePage() {
  return (
    <main className={styles.corporatePage}>
      <CorporateBanner />
      <CorporatePrograms />
      <OnboardingProcess />
      <CorporateForm />
    </main>
  );
}