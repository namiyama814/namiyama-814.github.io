import type { ReactNode } from 'react';
import { GeoLanguageRedirect } from './GeoLanguageRedirect';
import { Locale, SiteFooter, SiteHeader } from './SiteChrome';

type PageFrameProps = {
  locale: Locale;
  path: '/' | '/works' | '/contact';
  children: ReactNode;
  className?: string;
  id?: string;
  autoDetectLocale?: boolean;
};

export function PageFrame({ locale, path, children, className = '', id, autoDetectLocale = false }: PageFrameProps) {
  return (
    <main id={id} lang={locale} className={`min-h-screen bg-[#FAFAFA] pt-16 text-[#252525] ${className}`}>
      {autoDetectLocale && locale === 'ja' && <GeoLanguageRedirect />}
      <SiteHeader locale={locale} path={path} />
      {children}
      <SiteFooter locale={locale} path={path} />
    </main>
  );
}
