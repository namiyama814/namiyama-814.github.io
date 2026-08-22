import Link from 'next/link';
import { ArrowUpRightIcon } from '../../components/icons/ArrowUpRightIcon';
import { works } from '../../works-data';
import type { Locale } from '../../lib/i18n';
import { localizePath } from '../../lib/i18n';
import type { HomeCopy } from './homeContent';
import { SectionLabel } from './HomeSectionPrimitives';

type FeaturedWorksSectionProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function FeaturedWorksSection({ locale, copy }: FeaturedWorksSectionProps) {
  return (
    <section id="works" className="section-frame border-b border-[#252525]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
        <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="04">WORKS</SectionLabel></div>
        <div className="py-14 lg:col-span-9 lg:py-20">
          <div className="px-5 sm:px-8 lg:px-10"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{copy.worksTitle}</h2><p className="mt-5 max-w-xl text-sm leading-8">{copy.worksLead}</p></div>
          <div className="mt-12 grid grid-cols-1 gap-px border border-[#252525] bg-[#252525] md:grid-cols-2">
            {works.slice(0, 2).map((work, index) => <article key={work.name} className="flex min-h-[280px] flex-col bg-[#FAFAFA] p-5 sm:p-8 lg:p-10"><p className="text-[11px] font-medium tracking-[0.17em]">{copy.featured} / {String(index + 1).padStart(2, '0')}</p><h3 className="mt-10 text-2xl font-black tracking-[-0.06em]">{work.name}</h3><p className="mt-4 min-h-14 text-sm leading-7">{locale === 'en' ? work.descriptionEn : work.description}</p><ul className="mt-6 min-h-5 flex flex-wrap gap-x-4 gap-y-2 p-0 text-xs font-bold" aria-label={`${work.name} technologies`}>{work.technologies.map((technology) => <li key={technology} className="list-none">{technology}</li>)}</ul><div className="mt-5 flex flex-wrap gap-5 border-t border-[#252525] pt-5 text-[10px] font-bold tracking-[0.12em]">{work.live && <a href={work.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">LIVE <ArrowUpRightIcon /></a>}{work.code && <a href={work.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">CODE <ArrowUpRightIcon /></a>}</div></article>)}
          </div>
          <div className="px-5 pt-8 sm:px-8 lg:px-10"><Link href={localizePath(locale, '/works')} className="inline-flex items-center gap-3 border-b border-[#252525] pb-1 text-xs font-bold tracking-[0.12em] transition-opacity hover:opacity-60">{copy.viewAll} {works.length} WORKS <ArrowUpRightIcon className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  );
}
