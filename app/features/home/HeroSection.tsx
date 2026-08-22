import type { Locale } from '../../lib/i18n';
import type { HomeCopy } from './homeContent';
import { ArrowDownIcon, SparkIcon } from './HomeIcons';
import { TextLines } from './HomeSectionPrimitives';

type HeroSectionProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function HeroSection({ locale, copy }: HeroSectionProps) {
  return (
    <section className="section-frame mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl grid-cols-1 border-x-0 border-b border-[#252525] sm:border-x lg:grid-cols-12">
      <div className="flex flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:col-span-8 lg:border-r lg:border-[#252525] lg:px-10 lg:py-12">
        <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.15em]">
          <span>PORTFOLIO / <span suppressHydrationWarning>{new Date().getFullYear()}</span></span>
          <span>{locale === 'en' ? 'EN' : 'JP'}</span>
        </div>
        <div className="py-16 lg:py-0">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.17em]"><SparkIcon className="h-3.5 w-3.5" />{copy.heroLabel}</div>
          <h1 className="max-w-4xl text-[clamp(2.65rem,7vw,6.6rem)] font-black leading-[1.12] tracking-[-0.08em]"><TextLines lines={copy.heroLines} /></h1>
          <p className="mt-8 max-w-xl text-sm font-medium leading-8 sm:text-base">{copy.heroDescription}</p>
          <div className="mt-7 flex items-center gap-3 text-[10px] font-bold tracking-[0.14em]"><span className="h-px w-10 bg-[#252525]" />WEB / TOOLS / SYSTEMS</div>
        </div>
        <a href="#about" className="group inline-flex w-fit items-center gap-4 text-xs font-bold tracking-[0.12em]">{copy.scroll} <span className="inline-grid h-8 w-8 place-items-center rounded-full border border-[#252525] transition-colors group-hover:bg-[#252525] group-hover:text-[#FAFAFA]"><ArrowDownIcon /></span></a>
      </div>
      <div className="selection-on-dark relative flex min-h-72 overflow-hidden bg-[#252525] text-[#FAFAFA] lg:col-span-4 lg:min-h-0">
        <div className="absolute inset-5 border border-[#FAFAFA]" />
        <p className="absolute left-7 top-7 text-[10px] font-bold tracking-[0.15em]">NAMIYAMA / 814</p>
        <div className="absolute left-7 right-7 top-[31%] border-t border-[#FAFAFA]" />
        <p className="absolute left-7 top-[36%] text-[10px] font-bold tracking-[0.15em]">MAKE / THINK / BUILD</p>
        <div className="absolute bottom-0 right-4 text-[clamp(11rem,20vw,18rem)] font-black leading-[0.68] tracking-[-0.15em]">n</div>
        <div className="absolute bottom-[30%] left-7 h-px w-24 rotate-[-35deg] bg-[#FAFAFA]" />
        <p className="absolute bottom-7 left-7 text-[10px] font-bold tracking-[0.15em]">WEB / CODE / PEOPLE</p>
      </div>
    </section>
  );
}
