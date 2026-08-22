import { PageFrame } from './PageFrame';
import { AboutSection } from '../features/home/AboutSection';
import { CareerSection } from '../features/home/CareerSection';
import { CertificationsSection } from '../features/home/CertificationsSection';
import { FeaturedWorksSection } from '../features/home/FeaturedWorksSection';
import { HeroSection } from '../features/home/HeroSection';
import { homeCopy } from '../features/home/homeContent';
import { SkillsSection } from '../features/home/SkillsSection';
import { SocialsSection } from '../features/home/SocialsSection';
import type { Locale } from '../lib/i18n';

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <PageFrame locale={locale} path="/" id="top" className="overflow-x-hidden" autoDetectLocale>
      <HeroSection locale={locale} copy={copy} />
      <AboutSection copy={copy} />
      <SkillsSection locale={locale} copy={copy} />
      <CareerSection locale={locale} copy={copy} />
      <FeaturedWorksSection locale={locale} copy={copy} />
      <CertificationsSection locale={locale} copy={copy} />
      <SocialsSection copy={copy} />
    </PageFrame>
  );
}
