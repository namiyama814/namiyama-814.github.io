import type { Locale } from '../../lib/i18n';
import type { HomeCopy } from './homeContent';
import { timeline } from './homeContent';
import { SectionLabel } from './HomeSectionPrimitives';
import { ArrowUpRightIcon } from '../../components/icons/ArrowUpRightIcon';

type CareerSectionProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function CareerSection({ locale, copy }: CareerSectionProps) {
  return (
    <section id="career" className="section-frame border-b border-[#252525] bg-[#FAFAFA]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
        <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="03">CAREER</SectionLabel></div>
        <div className="lg:col-span-9">
          <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{copy.careerTitle}</h2></div>
          <ol className="m-0 border-t border-[#252525] p-0">
            {timeline.map(({ date, organization, role, href }) => (
              <li key={`${date}-${organization}`} className="grid grid-cols-1 gap-2 border-b border-[#252525] px-5 py-6 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-5 sm:px-8 lg:px-10">
                <time className="text-xs font-bold tracking-[0.08em]">{date}</time>
                {href ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-60 sm:text-base">{organization}<ArrowUpRightIcon /></a> : <p className="m-0 text-sm font-bold sm:text-base">{organization}</p>}
                <p className="m-0 text-sm">{role[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
