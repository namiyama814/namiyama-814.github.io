import Link from 'next/link';
import { works as workEntries } from '../works-data';
import { ArrowUpRightIcon, Locale, SiteFooter, SiteHeader } from './SiteChrome';

const skills = [
  { id: '01', title: { ja: 'プログラミング言語', en: 'Languages' }, items: ['HTML', 'CSS', 'JavaScript', 'Pug', 'Python'] },
  { id: '02', title: { ja: 'フレームワーク', en: 'Frameworks' }, items: ['Node.js', 'Next.js', 'React', 'Bootstrap', 'Tailwind CSS'] },
  { id: '03', title: { ja: 'ツール', en: 'Tools' }, items: ['Docker', 'Git', 'GitHub', 'Codex', 'Claude Code', 'Cloudflare'] },
  { id: '04', title: { ja: 'OS', en: 'Operating systems' }, items: ['Windows', 'macOS', 'Linux'] },
];

const timeline = [
  { date: '2026.04', organization: '角川ドワンゴ学園 S高等学校', role: { ja: '入学', en: 'Enrolled' }, href: 'https://nnn.ed.jp' },
  { date: '2026.06', organization: '学生団体 GovSpark', role: { ja: '開発部門', en: 'Development team' } },
  { date: '2026.07', organization: '株式会社MISAKA', role: { ja: 'エンジニアインターン', en: 'Engineering intern' }, href: 'https://misakainc.com' },
  { date: '2026.08', organization: '学生団体 CONNECTOR', role: { ja: 'サイト制作部門', en: 'Web production team' } },
  { date: '2026.08', organization: '学生団体 TSUGIHANDS', role: { ja: 'サイト制作部門・DX部門', en: 'Web production & DX team' }, href: 'https://tsugihands.org' },
  { date: '2026.08', organization: 'N高グループ生徒会', role: { ja: 'デジタル委員会', en: 'Digital committee' } },
  { date: '2028.08', organization: '学生団体 瑞鶴グループ', role: { ja: '代表', en: 'Representative' } },
  { date: '2026.10', organization: 'ZEN大学', role: { ja: '特別聴講生', en: 'Special auditor' }, href: 'https://zen.ac.jp' },
];

const certifications = [
  { name: { ja: 'パソコン能力評価試験 4級', en: 'Computer Skills Assessment Test, Grade 4' }, year: '2023' },
  { name: { ja: 'タイピング技能検定 8級', en: 'Typing Skills Test, Grade 8' }, year: '2023' },
];

const socials = [
  ['X', 'https://x.com/namiyama_814'],
  ['Instagram', 'https://www.instagram.com/namiyama_814'],
  ['Qiita', 'https://qiita.com/namiyama'],
  ['GitHub', 'https://github.com/namiyama814'],
  ['note', 'http://note.com/namiyama'],
];

function ArrowDownIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SparkIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="m12 3 1.85 6.15L20 11l-6.15 1.85L12 19l-1.85-6.15L4 11l6.15-1.85L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function LayersIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Zm-8 9 8 4.5 8-4.5M4 16.5 12 21l8-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CodeIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="m-0 font-sans text-[11px] font-medium tracking-[0.18em]">{number} / {children}</p>;
}

const copy = {
  ja: {
    heroLabel: 'DIGITAL CREATOR & ENGINEER',
    hero: <>つくることを<br />もっと自由に</>,
    heroDescription: 'Webサイトやツールを通じて、複雑なことを、わかりやすい体験へ変えていきます。',
    scroll: 'SCROLL TO EXPLORE',
    aboutTitle: <>好奇心を起点に<br />誰かに届く仕組みを作る</>,
    aboutLead: <>アイデアを形にするだけでなく、使う人が迷わず前に進めることまで考えて<br />設計と実装を行っています。</>,
    qualities: [
      ['考える', <>複雑な情報や課題を整理し<br />必要な体験を見つけます。</>],
      ['設計する', <>目的と使う人をつなぐ<br />わかりやすい流れを組み立てます。</>],
      ['実装する', <>Webサイトやツールとして、<br />実際に動く形まで落とし込みます。</>],
    ],
    aboutNote: '学生団体での制作・開発活動とエンジニアインターンを行き来しながら、技術とデザインの両面を磨いています。',
    skillsTitle: 'できること',
    skillsLead: '現在学んでいること、日常的に使っていること。',
    careerTitle: '経歴',
    worksTitle: 'つくったもの',
    worksLead: 'Webサービス、ツール、Botなどの制作実績です',
    certificationsTitle: '資格',
    socialsTitle: 'SNS',
    viewAll: 'VIEW ALL',
    featured: 'FEATURED',
  },
  en: {
    heroLabel: 'DIGITAL CREATOR & ENGINEER',
    hero: <>Make things<br />more freely</>,
    heroDescription: 'I turn complex ideas into clear, approachable experiences through websites and tools.',
    scroll: 'SCROLL TO EXPLORE',
    aboutTitle: <>Curiosity first.<br />Systems that reach people.</>,
    aboutLead: <>Beyond shaping ideas, I design and build experiences that help people move forward with confidence.</>,
    qualities: [
      ['Think', <>Organize complex information<br />and uncover the right experience.</>],
      ['Design', <>Connect goals with people<br />through clear, useful flows.</>],
      ['Build', <>Turn ideas into working websites<br />and practical tools.</>],
    ],
    aboutNote: 'I develop both technical and design skills through student organizations and an engineering internship.',
    skillsTitle: 'What I do',
    skillsLead: 'What I am learning and using every day.',
    careerTitle: 'Career',
    worksTitle: 'Selected work',
    worksLead: 'A selection of web services, tools, and bots I have built.',
    certificationsTitle: 'Certifications',
    socialsTitle: 'Socials',
    viewAll: 'VIEW ALL',
    featured: 'FEATURED',
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = locale === 'en' ? '/en' : '/';
  const worksHref = locale === 'en' ? '/en/works' : '/works';

  return (
    <main id="top" lang={locale} className="overflow-x-hidden bg-[#FAFAFA] text-[#252525]">
      <SiteHeader locale={locale} path="/" />

      <section className="section-frame mx-auto grid min-h-[calc(100svh-4rem)] border-b max-w-7xl grid-cols-1 border-x-0 border-[#252525] sm:border-x lg:grid-cols-12">
        <div className="flex flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:col-span-8 lg:border-r lg:border-[#252525] lg:px-10 lg:py-12">
          <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.15em]"><span>PORTFOLIO / <span suppressHydrationWarning>{new Date().getFullYear()}</span></span><span>{locale === 'en' ? 'EN' : 'JP'}</span></div>
          <div className="py-16 lg:py-0">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.17em]"><SparkIcon className="h-3.5 w-3.5" />{t.heroLabel}</div>
            <h1 className="max-w-4xl text-[clamp(2.65rem,7vw,6.6rem)] font-black leading-[1.12] tracking-[-0.08em]">{t.hero}</h1>
            <p className="mt-8 max-w-xl text-sm font-medium leading-8 sm:text-base">{t.heroDescription}</p>
            <div className="mt-7 flex items-center gap-3 text-[10px] font-bold tracking-[0.14em]"><span className="h-px w-10 bg-[#252525]" />WEB / TOOLS / SYSTEMS</div>
          </div>
          <a href="#about" className="group inline-flex w-fit items-center gap-4 text-xs font-bold tracking-[0.12em]">{t.scroll} <span className="inline-grid h-8 w-8 place-items-center rounded-full border border-[#252525] transition-colors group-hover:bg-[#252525] group-hover:text-[#FAFAFA]"><ArrowDownIcon /></span></a>
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

      <section id="about" className="section-frame border-b border-[#252525]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="01">ABOUT</SectionLabel></div>
          <div className="px-5 py-16 sm:px-8 lg:col-span-9 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div><p className="max-w-4xl text-[clamp(1.8rem,4vw,4rem)] font-black leading-[1.35] tracking-[-0.07em]">{t.aboutTitle}</p><p className="mt-7 max-w-2xl text-sm leading-8 sm:text-base">{t.aboutLead}</p></div>
              <figure className="m-0 w-32 sm:w-40"><img src="/avatar/source.png" alt="namiyamaのGitHubアバター" className="aspect-square w-full rounded-full border border-[#252525] object-cover" /><figcaption className="mt-3 text-center text-[10px] font-bold tracking-[0.13em]">namiyama</figcaption></figure>
            </div>
            <div className="mt-12 grid max-w-4xl grid-cols-1 gap-px border border-[#252525] bg-[#252525] text-sm md:grid-cols-3">
              <article className="bg-[#FAFAFA] p-5 sm:p-6"><SparkIcon /><h3 className="mt-7 text-sm font-black tracking-[-0.04em]">{t.qualities[0][0]}</h3><p className="mt-3 leading-7">{t.qualities[0][1]}</p></article>
              <article className="bg-[#FAFAFA] p-5 sm:p-6"><LayersIcon /><h3 className="mt-7 text-sm font-black tracking-[-0.04em]">{t.qualities[1][0]}</h3><p className="mt-3 leading-7">{t.qualities[1][1]}</p></article>
              <article className="bg-[#FAFAFA] p-5 sm:p-6"><CodeIcon /><h3 className="mt-7 text-sm font-black tracking-[-0.04em]">{t.qualities[2][0]}</h3><p className="mt-3 leading-7">{t.qualities[2][1]}</p></article>
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-8">{t.aboutNote}</p>
          </div>
        </div>
      </section>

      <section id="skills" className="selection-on-dark section-frame border-b border-[#FAFAFA] bg-[#252525] text-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#FAFAFA] lg:grid-cols-12">
          <div className="border-b border-[#FAFAFA] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="02">SKILLS</SectionLabel></div>
          <div className="lg:col-span-9">
            <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{t.skillsTitle}</h2><p className="mt-5 text-sm leading-8">{t.skillsLead}</p></div>
            <div className="grid grid-cols-1 gap-px border-y border-[#FAFAFA] bg-[#FAFAFA] md:grid-cols-2">{skills.map((skill) => <article key={skill.id} className="min-h-[210px] bg-[#252525] p-5 sm:p-8 lg:p-10"><p className="mb-12 text-[11px] font-medium tracking-[0.17em]">{skill.id}</p><h3 className="text-xl font-black tracking-[-0.05em]">{skill.title[locale]}</h3><ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 p-0 text-sm leading-7" aria-label={skill.title[locale]}>{skill.items.map(item => <li key={item} className="list-none">{item}</li>)}</ul></article>)}</div>
          </div>
        </div>
      </section>

      <section id="career" className="section-frame border-b border-[#252525] bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="03">CAREER</SectionLabel></div>
          <div className="lg:col-span-9"><div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{t.careerTitle}</h2></div><ol className="m-0 border-t border-[#252525] p-0">{timeline.map(({ date, organization, role, href }) => <li key={`${date}-${organization}`} className="grid grid-cols-1 gap-2 border-b border-[#252525] px-5 py-6 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-5 sm:px-8 lg:px-10"><time className="text-xs font-bold tracking-[0.08em]">{date}</time>{href ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-60 sm:text-base">{organization}<ArrowUpRightIcon /></a> : <p className="m-0 text-sm font-bold sm:text-base">{organization}</p>}<p className="m-0 text-sm">{role[locale]}</p></li>)}</ol></div>
        </div>
      </section>

      <section id="works" className="section-frame border-b border-[#252525]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="04">WORKS</SectionLabel></div>
          <div className="py-14 lg:col-span-9 lg:py-20"><div className="px-5 sm:px-8 lg:px-10"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{t.worksTitle}</h2><p className="mt-5 max-w-xl text-sm leading-8">{t.worksLead}</p></div>
            <div className="mt-12 grid grid-cols-1 gap-px border border-[#252525] bg-[#252525] md:grid-cols-2">{workEntries.slice(0, 2).map((work, index) => <article key={work.name} className="flex min-h-[280px] flex-col bg-[#FAFAFA] p-5 sm:p-8 lg:p-10"><p className="text-[11px] font-medium tracking-[0.17em]">{t.featured} / {String(index + 1).padStart(2, '0')}</p><h3 className="mt-10 text-2xl font-black tracking-[-0.06em]">{work.name}</h3><p className="mt-4 min-h-14 text-sm leading-7">{locale === 'en' ? work.descriptionEn : work.description}</p><ul className="mt-6 min-h-5 flex flex-wrap gap-x-4 gap-y-2 p-0 text-xs font-bold" aria-label={`${work.name} technologies`}>{work.technologies.map((technology) => <li key={technology} className="list-none">{technology}</li>)}</ul><div className="mt-5 flex flex-wrap gap-5 border-t border-[#252525] pt-5 text-[10px] font-bold tracking-[0.12em]">{work.live && <a href={work.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">LIVE <ArrowUpRightIcon /></a>}{work.code && <a href={work.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">CODE <ArrowUpRightIcon /></a>}</div></article>)}</div>
            <div className="px-5 pt-8 sm:px-8 lg:px-10"><Link href={worksHref} className="inline-flex items-center gap-3 border-b border-[#252525] pb-1 text-xs font-bold tracking-[0.12em] transition-opacity hover:opacity-60">{t.viewAll} {workEntries.length} WORKS <ArrowUpRightIcon className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>

      <section className="selection-on-dark section-frame border-b border-[#FAFAFA] bg-[#252525] text-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#FAFAFA] lg:grid-cols-12">
          <div className="border-b border-[#FAFAFA] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="05">CERTIFICATIONS</SectionLabel></div>
          <div className="lg:col-span-9"><div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{t.certificationsTitle}</h2></div><ul className="m-0 border-t border-[#FAFAFA] p-0">{certifications.map(({ name, year }) => <li key={name.ja} className="flex items-center justify-between gap-5 border-b border-[#FAFAFA] px-5 py-6 text-sm font-bold sm:px-8 lg:px-10"><span>{name[locale]}</span><span className="text-xs font-medium tracking-[0.12em]">{year}</span></li>)}</ul></div>
        </div>
      </section>

      <section id="socials" className="section-frame bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="06">SOCIALS</SectionLabel></div>
          <div className="lg:col-span-9"><div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">{t.socialsTitle}</h2></div><ul className="m-0 grid grid-cols-1 border-y border-[#252525] p-0 sm:grid-cols-2">{socials.map(([name, href], index) => <li key={name} className={`border-[#252525] ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < socials.length - 1 ? 'border-b' : ''}`}><a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between px-5 py-6 text-sm font-bold transition-colors hover:bg-[#252525] hover:text-[#FAFAFA] sm:px-8 lg:px-10">{name}<ArrowUpRightIcon className="h-4 w-4" /></a></li>)}</ul></div>
        </div>
      </section>

      <SiteFooter locale={locale} path="/" />
    </main>
  );
}
