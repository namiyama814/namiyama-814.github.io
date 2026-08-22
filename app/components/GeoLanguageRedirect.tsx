'use client';

import { useEffect } from 'react';
import { preferenceKey } from './LanguagePreferenceLink';

const geoAttemptKey = 'namiyama.geo-language-attempted';
const countryEndpoint = 'https://api.country.is/';

function isJapaneseHomePage(pathname: string) {
  return pathname === '/' || pathname === '/index.html';
}

export function GeoLanguageRedirect() {
  useEffect(() => {
    if (!isJapaneseHomePage(window.location.pathname)) return;

    const preference = window.localStorage.getItem(preferenceKey);
    if (preference === 'en') {
      window.location.replace('/en');
      return;
    }
    if (preference === 'ja') return;
    if (window.sessionStorage.getItem(geoAttemptKey)) return;

    window.sessionStorage.setItem(geoAttemptKey, 'true');

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2500);

    fetch(countryEndpoint, {
      signal: controller.signal,
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    })
      .then(async (response) => {
        if (!response.ok) return;
        const result: unknown = await response.json();
        if (!result || typeof result !== 'object') return;
        const country = (result as { country?: unknown }).country;
        if (typeof country === 'string' && country.toUpperCase() !== 'JP') {
          window.location.replace('/en');
        }
      })
      .catch(() => {
        // APIが利用できない場合は、日本語版をそのまま表示する。
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return null;
}
