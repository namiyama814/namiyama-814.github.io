import { ArrowUpRightIcon } from '../../components/icons/ArrowUpRightIcon';
import type { HomeCopy } from './homeContent';
import { socialLinks } from './homeContent';
import { SectionLabel } from './HomeSectionPrimitives';

type SocialsSectionProps = {
  copy: HomeCopy;
};

export function SocialsSection({ copy }: SocialsSectionProps) {
  return (
    <section id="socials" className="section-frame bg-[#FAFAFA]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
        <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="06">SOCIALS</SectionLabel></div>
        <div className="lg:col-span-9">
          <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{copy.socialsTitle}</h2></div>
          <ul className="m-0 grid grid-cols-1 border-y border-[#252525] p-0 sm:grid-cols-2">
            {socialLinks.map(({ name, href }, index) => <li key={name} className={`border-[#252525] ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < socialLinks.length - 1 ? 'border-b' : ''}`}><a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between px-5 py-6 text-sm font-bold transition-colors hover:bg-[#252525] hover:text-[#FAFAFA] sm:px-8 lg:px-10">{name}<ArrowUpRightIcon className="h-4 w-4" /></a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
