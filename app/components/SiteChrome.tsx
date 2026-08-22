import Link from 'next/link';
import { alternateLocale, localizePath, type Locale, type LocalizedPath } from '../lib/i18n';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { CurrentYear } from './CurrentYear';
import { LanguagePreferenceLink } from './LanguagePreferenceLink';

type SharedProps = {
  locale: Locale;
  path: LocalizedPath;
};

function routes(locale: Locale, path: LocalizedPath) {
  return {
    home: localizePath(locale, '/'),
    alternate: localizePath(alternateLocale(locale), path),
  };
}

export function SiteHeader({ locale, path }: SharedProps) {
  const { home, alternate } = routes(locale, path);
  const labels =
    locale === 'en'
      ? { contact: 'CONTACT', switcher: 'JP', language: '日本語に切り替える' }
      : { contact: 'CONTACT', switcher: 'EN', language: 'Switch to English' };

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-[#252525] bg-[#FAFAFA]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href={home} className="shrink-0 text-lg font-black tracking-[-0.08em]">
          namiyama<span className="ml-0.5">.</span>
        </Link>
        <nav
          aria-label={locale === 'en' ? 'Main navigation' : 'メインナビゲーション'}
          className="hidden items-center gap-5 text-[10px] font-bold tracking-[0.12em] md:flex"
        >
          <a href={`${home}#about`} className="transition-opacity hover:opacity-60">
            ABOUT
          </a>
          <a href={`${home}#skills`} className="transition-opacity hover:opacity-60">
            SKILLS
          </a>
          <a href={`${home}#career`} className="transition-opacity hover:opacity-60">
            CAREER
          </a>
          <Link
            href={localizePath(locale, '/works')}
            className="transition-opacity hover:opacity-60"
          >
            WORKS
          </Link>
          <Link
            href={localizePath(locale, '/contact')}
            className="transition-opacity hover:opacity-60"
          >
            {labels.contact}
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-4 text-[10px] font-bold tracking-[0.12em]">
          <LanguagePreferenceLink
            href={alternate}
            locale={alternateLocale(locale)}
            label={labels.switcher}
            ariaLabel={labels.language}
            className="border-b border-[#252525] pb-0.5 transition-opacity hover:opacity-60"
          />
          <a
            href="https://github.com/namiyama814"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 border-b border-[#252525] pb-0.5 transition-opacity hover:opacity-60 sm:inline-flex"
          >
            GITHUB <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: SharedProps) {
  const labels =
    locale === 'en'
      ? {
          statement: (
            <>
              New ideas
              <br />
              in new forms
            </>
          ),
          contact: 'CONTACT',
        }
      : {
          statement: (
            <>
              新しいアイデアを
              <br />
              新しい形に
            </>
          ),
          contact: 'CONTACT',
        };

  return (
    <footer className="border-t border-[#252525] bg-[#FAFAFA] text-[#252525]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:border-x sm:border-[#252525] sm:px-8 lg:px-10 lg:py-20">
        <p className="max-w-4xl text-[clamp(2rem,5vw,5rem)] font-black leading-[1.2] tracking-[-0.07em]">
          {labels.statement}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#252525] pt-5 text-[10px] font-bold tracking-[0.13em]">
          <span>
            © <CurrentYear /> namiyama
          </span>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={localizePath(locale, '/contact')}
              className="inline-flex items-center gap-1.5 border-b border-[#252525] pb-0.5 transition-opacity hover:opacity-60"
            >
              {labels.contact} <ArrowUpRightIcon />
            </Link>
            <a
              href="https://github.com/namiyama814"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-[#252525] pb-0.5 transition-opacity hover:opacity-60"
            >
              GITHUB <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
