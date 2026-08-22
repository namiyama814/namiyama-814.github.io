import type { Locale } from '../../lib/i18n';
import type { HomeCopy } from './homeContent';
import { certifications } from './homeContent';
import { SectionLabel } from './HomeSectionPrimitives';

type CertificationsSectionProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function CertificationsSection({ locale, copy }: CertificationsSectionProps) {
  return (
    <section className="selection-on-dark section-frame border-b border-[#FAFAFA] bg-[#252525] text-[#FAFAFA]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#FAFAFA] lg:grid-cols-12">
        <div className="border-b border-[#FAFAFA] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="05">CERTIFICATIONS</SectionLabel></div>
        <div className="lg:col-span-9">
          <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{copy.certificationsTitle}</h2></div>
          <ul className="m-0 border-t border-[#FAFAFA] p-0">{certifications.map(({ name, year }) => <li key={name.ja} className="flex items-center justify-between gap-5 border-b border-[#FAFAFA] px-5 py-6 text-sm font-bold sm:px-8 lg:px-10"><span>{name[locale]}</span><span className="text-xs font-medium tracking-[0.12em]">{year}</span></li>)}</ul>
        </div>
      </div>
    </section>
  );
}
