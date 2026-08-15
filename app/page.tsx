import { works as workEntries } from './works-data';

const skills = [
  { id: '01', title: 'プログラミング言語', items: ['HTML', 'CSS', 'JavaScript', 'Pug', 'Python'] },
  { id: '02', title: 'フレームワーク', items: ['Node.js', 'Next.js', 'React', 'Bootstrap', 'Tailwind CSS'] },
  { id: '03', title: 'ツール', items: ['Docker', 'Git', 'GitHub', 'Codex', 'Claude Code', 'Cloudflare'] },
  { id: '04', title: 'OS', items: ['Windows', 'macOS', 'Linux'] },
];

const timeline = [
  { date: '2026.04', organization: '角川ドワンゴ学園 S高等学校', role: '入学', href: 'https://nnn.ed.jp' },
  { date: '2026.06', organization: '学生団体 GovSpark', role: '開発部門' },
  { date: '2026.07', organization: '株式会社MISAKA', role: 'エンジニアインターン', href: 'https://misakainc.com' },
  { date: '2026.08', organization: '学生団体 CONNECTOR', role: 'サイト制作部門' },
  { date: '2026.08', organization: '学生団体 TSUGIHANDS', role: 'サイト制作部門・DX部門', href: 'https://tsugihands.org' },
  { date: '2026.08', organization: 'N高グループ生徒会', role: 'デジタル委員会' },
  { date: '2026.10', organization: 'ZEN大学', role: '特別聴講生', href: 'https://zen.ac.jp' },
];

const certifications = [
  ['パソコン能力評価試験 4級', '2023'],
  ['タイピング技能検定 8級', '2023'],
];

const socials = [
  ['X', 'https://x.com/namiyama_814'],
  ['Instagram', 'https://www.instagram.com/namiyama_814'],
  ['Qiita', 'https://qiita.com/namiyama'],
  ['GitHub', 'https://github.com/namiyama814'],
  ['note', 'http://note.com/namiyama'],
];

const works = [
  { name: 'Nocancel', description: '株式会社MISAKAで、バックエンドとフロントエンドを含むフルスタック開発を担当', technologies: ['TypeScript', 'Next.js'], live: 'https://nocancel.jp' },
  { name: 'ProbPlan', description: 'ZENStudy Webアプリケーションコンテスト 2026夏の応募作品', technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'], live: 'https://namiyama814.github.io/probPlan', code: 'https://github.com/namiyama814/probPlan' },
  { name: 'GovSparkBot', description: 'Discord VCの録音、所属メンバーのタスク割り振りと管理を行うDiscord Bot', technologies: ['TypeScript', 'Discord.js', 'Cloudflare', 'Render'], code: 'https://github.com/GovSpark/GovSparkDiscord' },
  { name: 'SerialForge', description: 'シリアルナンバーの発行を行うサービス', technologies: ['Pug', 'JavaScript', 'Render', 'Docker'], live: 'https://serialforge.onrender.com', code: 'https://github.com/namiyama814/serialForge' },
  { name: 'Markov', description: '簡易的なマルコフ連鎖を行うプログラム', technologies: ['JavaScript'], code: 'https://github.com/namiyama814/Markov' },
  { name: 'Vistamp', description: '指定したURLにアクセスし、スクリーンショットを撮影するシステム', technologies: ['JavaScript', 'Pug', 'Docker', 'Render'], live: 'https://vistamp.onrender.com', code: 'https://github.com/namiyama814/Vistamp' },
  { name: 'StarEdu', description: '芸能人の学歴を取得するツール', technologies: ['Pug', 'JavaScript', 'Docker', 'Wiki.js', 'Render'], live: 'https://staredu-w5cf.onrender.com', code: 'https://github.com/namiyama814/human-school' },
  { name: 'link', description: '自分のリンク一覧を表示するシステム', technologies: ['HTML', 'Tailwind CSS'], live: 'https://namiyama814.github.io/link/link.html', code: 'https://github.com/namiyama814/link' },
  { name: 'nico-rikari', description: 'ニコニコ動画 Re:仮を復元したサービス', technologies: ['Pug', 'JavaScript', 'CSS', 'Docker'], live: 'https://nico-rikari.onrender.com', code: 'https://github.com/namiyama814/nico-rikari' },
  { name: 'estimate', description: '見積もり計算シミュレーター。ProbPlanの前身となったプロジェクト', technologies: ['JavaScript', 'HTML', 'CSS'], live: 'https://namiyama814.github.io/estimate/', code: 'https://github.com/namiyama814/estimate' },
  { name: 'Elongator', description: 'URL延長サービス', technologies: ['HTML', 'CSS', 'JavaScript'], live: 'https://namiyama814.github.io/longUrl/', code: 'https://github.com/namiyama814/longUrl' },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="m-0 font-sans text-[11px] font-medium tracking-[0.18em]">{number} / {children}</p>;
}

function ArrowDownIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ArrowUpRightIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#FAFAFA] text-[#252525]">
      <header className="sticky top-0 z-20 border-b border-[#252525] bg-[#FAFAFA]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="text-lg font-black tracking-[-0.08em]">namiyama<span className="ml-0.5">.</span></a>
          <nav aria-label="メインナビゲーション" className="hidden items-center gap-7 text-[11px] font-bold tracking-[0.12em] md:flex">
            <a href="#about" className="transition-opacity hover:opacity-60">ABOUT</a>
            <a href="#skills" className="transition-opacity hover:opacity-60">SKILLS</a>
            <a href="#career" className="transition-opacity hover:opacity-60">CAREER</a>
            <a href="#works" className="transition-opacity hover:opacity-60">WORKS</a>
          </nav>
          <a href="https://github.com/namiyama814" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 border-b border-[#252525] pb-0.5 text-[10px] font-bold tracking-[0.12em] transition-opacity hover:opacity-60">GITHUB <ArrowUpRightIcon /></a>
        </div>
      </header>

      <section id="top" className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl grid-cols-1 border-x-0 border-[#252525] sm:border-x lg:grid-cols-12">
        <div className="flex flex-col justify-between border-b border-[#252525] px-5 py-8 sm:px-8 sm:py-10 lg:col-span-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
          <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.15em]">
            <span>PORTFOLIO / 2026</span><span>JP</span>
          </div>
          <div className="py-16 lg:py-0">
            <p className="mb-6 text-xs font-bold tracking-[0.17em]">DIGITAL CREATOR &amp; ENGINEER</p>
            <h1 className="max-w-4xl text-[clamp(2.65rem,7vw,6.6rem)] font-black leading-[1.12] tracking-[-0.08em]">つくることを<br />もっと自由に</h1>
            <p className="mt-8 max-w-xl text-sm font-medium leading-8 sm:text-base">Webとテクノロジーを軸に、人の行動を少し前へ進める体験を設計・実装しています。</p>
          </div>
          <a href="#about" className="group inline-flex w-fit items-center gap-4 text-xs font-bold tracking-[0.12em]">SCROLL TO EXPLORE <span className="inline-grid h-8 w-8 place-items-center rounded-full border border-[#252525] transition-colors group-hover:bg-[#252525] group-hover:text-[#FAFAFA]"><ArrowDownIcon /></span></a>
        </div>
        <div className="relative flex min-h-72 overflow-hidden bg-[#252525] text-[#FAFAFA] lg:col-span-4 lg:min-h-0">
          <div className="absolute inset-5 border border-[#FAFAFA]" />
          <p className="absolute left-7 top-7 text-[10px] font-bold tracking-[0.15em]">NAMIYAMA / 814</p>
          <div className="absolute left-7 right-7 top-[31%] border-t border-[#FAFAFA]" />
          <p className="absolute left-7 top-[36%] text-[10px] font-bold tracking-[0.15em]">MAKE / THINK / BUILD</p>
          <div className="absolute bottom-0 right-4 text-[clamp(11rem,20vw,18rem)] font-black leading-[0.68] tracking-[-0.15em]">n</div>
          <div className="absolute bottom-[30%] left-7 h-px w-24 rotate-[-35deg] bg-[#FAFAFA]" />
          <p className="absolute bottom-7 left-7 text-[10px] font-bold tracking-[0.15em]">WEB / CODE / PEOPLE</p>
        </div>
      </section>

      <section id="about" className="border-t border-[#252525]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="01">ABOUT</SectionLabel></div>
          <div className="px-5 py-16 sm:px-8 lg:col-span-9 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-4xl text-[clamp(1.8rem,4vw,4rem)] font-black leading-[1.35] tracking-[-0.07em]">好奇心を起点に<br />誰かに届く仕組みを作る</p>
              <figure className="m-0 w-32 sm:w-40">
                <img src="avatar/source.png" alt="namiyamaのGitHubアバター" className="aspect-square w-full rounded-full border border-[#252525] object-cover" />
                <figcaption className="mt-2 text-center text-[10px] font-bold tracking-[0.13em]">namiyama</figcaption>
              </figure>
            </div>
            <div className="mt-12 grid max-w-4xl grid-cols-1 gap-8 border-t border-[#252525] pt-6 text-sm leading-8 md:grid-cols-2">
              <p className="m-0">namiyamaです。Web制作や開発を通して、情報を分かりやすく、使いやすく届けることに取り組んでいます。</p>
              <p className="m-0">学生団体での制作・開発活動と、エンジニアインターンでの実務経験を往復しながら、技術とデザインの両面を磨いています。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-[#252525] bg-[#252525] text-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#FAFAFA] lg:grid-cols-12">
          <div className="border-b border-[#FAFAFA] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b lg:border-r lg:px-10 lg:py-12"><SectionLabel number="02">SKILLS</SectionLabel></div>
          <div className="lg:col-span-9">
            <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">できること</h2><p className="mt-5 text-sm leading-8">現在学んでいること、日常的に使っていること。</p></div>
            <div className="grid grid-cols-1 gap-px border-y border-[#FAFAFA] bg-[#FAFAFA] md:grid-cols-2">
              {skills.map((skill) => <article key={skill.id} className="min-h-[210px] bg-[#252525] p-5 sm:p-8 lg:p-10"><p className="mb-12 text-[11px] font-medium tracking-[0.17em]">{skill.id}</p><h3 className="text-xl font-black tracking-[-0.05em]">{skill.title}</h3><ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 p-0 text-sm leading-7" aria-label={skill.title}>{skill.items.map(item => <li key={item} className="list-none">{item}</li>)}</ul></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="career" className="bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="03">CAREER</SectionLabel></div>
          <div className="lg:col-span-9">
            <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">経歴</h2></div>
            <ol className="m-0 border-t border-[#252525] p-0">{timeline.map(({ date, organization, role, href }) => <li key={`${date}-${organization}`} className="grid grid-cols-1 gap-2 border-b border-[#252525] px-5 py-6 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-5 sm:px-8 lg:px-10"><time className="text-xs font-bold tracking-[0.08em]">{date}</time>{href ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-60 sm:text-base">{organization}<ArrowUpRightIcon /></a> : <p className="m-0 text-sm font-bold sm:text-base">{organization}</p>}<p className="m-0 text-sm">{role}</p></li>)}</ol>
          </div>
        </div>
      </section>

      <section id="works" className="border-t border-[#252525]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="04">WORKS</SectionLabel></div>
          <div className="py-14 lg:col-span-9 lg:py-20">
            <div className="px-5 sm:px-8 lg:px-10"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">つくったもの</h2><p className="mt-5 max-w-xl text-sm leading-8">Webサービス、ツール、Botなどの制作実績です</p></div>
            <div className="mt-12 grid grid-cols-1 gap-px border-y border-[#252525] bg-[#252525] md:grid-cols-2">
              {workEntries.slice(0, 2).map((work, index) => <article key={work.name} className="flex min-h-[280px] flex-col bg-[#FAFAFA] p-5 sm:p-8 lg:p-10"><p className="text-[11px] font-medium tracking-[0.17em]">FEATURED / {String(index + 1).padStart(2, '0')}</p><h3 className="mt-10 text-2xl font-black tracking-[-0.06em]">{work.name}</h3><p className="mt-4 min-h-14 text-sm leading-7">{work.description}</p><ul className="mt-6 min-h-5 flex flex-wrap gap-x-4 gap-y-2 p-0 text-xs font-bold" aria-label={`${work.name}で使用した技術`}>{work.technologies.map((technology) => <li key={technology} className="list-none">{technology}</li>)}</ul><div className="mt-5 flex flex-wrap gap-5 border-t border-[#252525] pt-5 text-[10px] font-bold tracking-[0.12em]">{work.live && <a href={work.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">LIVE <ArrowUpRightIcon /></a>}{work.code && <a href={work.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">CODE <ArrowUpRightIcon /></a>}</div></article>)}
            </div>
            <div className="px-5 pt-8 sm:px-8 lg:px-10"><a href="/works" className="inline-flex items-center gap-3 border-b border-[#252525] pb-1 text-xs font-bold tracking-[0.12em] transition-opacity hover:opacity-60">VIEW ALL {workEntries.length} WORKS <ArrowUpRightIcon className="h-4 w-4" /></a></div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#252525] bg-[#252525] text-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#FAFAFA] lg:grid-cols-12">
          <div className="border-b border-[#FAFAFA] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="05">CERTIFICATIONS</SectionLabel></div>
          <div className="lg:col-span-9"><div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">資格</h2></div><ul className="m-0 border-t border-[#FAFAFA] p-0">{certifications.map(([name, year]) => <li key={name} className="flex items-center justify-between gap-5 border-b border-[#FAFAFA] px-5 py-6 text-sm font-bold sm:px-8 lg:px-10"><span>{name}</span><span className="text-xs font-medium tracking-[0.12em]">{year}</span></li>)}</ul></div>
        </div>
      </section>

      <section id="socials" className="border-t border-[#252525] bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><SectionLabel number="06">SOCIALS</SectionLabel></div>
          <div className="lg:col-span-9">
            <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><h2 className="text-[clamp(2rem,4.2vw,4.5rem)] font-black leading-[1.2] tracking-[-0.07em]">SNS</h2></div>
            <ul className="m-0 grid grid-cols-1 border-t border-[#252525] p-0 sm:grid-cols-2">
              {socials.map(([name, href], index) => <li key={name} className={`border-b border-[#252525] ${index % 2 === 0 ? 'sm:border-r' : ''}`}><a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between px-5 py-6 text-sm font-bold transition-colors hover:bg-[#252525] hover:text-[#FAFAFA] sm:px-8 lg:px-10">{name}<ArrowUpRightIcon className="h-4 w-4" /></a></li>)}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-[#FAFAFA] text-[#252525]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:border-x sm:border-[#252525] sm:px-8 lg:px-10 lg:py-20"><p className="max-w-4xl text-[clamp(2rem,5vw,5rem)] font-black leading-[1.2] tracking-[-0.07em]">新しいアイデアを<br />新しい形に</p><div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#252525] pt-5 text-[10px] font-bold tracking-[0.13em]"><span>© 2026 namiyama</span><a href="https://github.com/namiyama814" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 border-b border-[#252525] pb-0.5 transition-opacity hover:opacity-60">GITHUB <ArrowUpRightIcon /></a></div></div>
      </footer>
    </main>
  );
}
