'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from './SiteChrome';

type LanguagePreferenceLinkProps = {
  href: string;
  locale: Locale;
  label: ReactNode;
  ariaLabel: string;
  className: string;
};

const preferenceKey = 'namiyama.locale-preference';

export function LanguagePreferenceLink({ href, locale, label, ariaLabel, className }: LanguagePreferenceLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={className}
      onClick={() => window.localStorage.setItem(preferenceKey, locale)}
    >
      {label}
    </Link>
  );
}

export { preferenceKey };
