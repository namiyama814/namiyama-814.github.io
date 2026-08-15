import Link from 'next/link';
import { works } from '../works-data';

function ArrowUpRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#252525]">
      <header className="sticky top-0 z-20 border-b border-[#252525] bg-[#FAFAFA]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="text-lg font-black tracking-[-0.08em]">namiyama<span className="ml-0.5">.</span></Link>
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] transition-opacity hover:opacity-60">BACK TO HOME <ArrowUpRightIcon className="h-3.5 w-3.5 rotate-[-90deg]" /></Link>
        </div>
      </header>

      <section className="border-b border-[#252525]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 text-[11px] font-medium tracking-[0.18em] sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">04 / WORKS</div>
          <div className="px-5 py-16 sm:px-8 lg:col-span-9 lg:px-10 lg:py-24">
            <p className="text-xs font-bold tracking-[0.17em]">ALL PROJECTS / {String(works.length).padStart(2, '0')}</p>
            <h1 className="mt-7 text-[clamp(2.65rem,7vw,6.6rem)] font-black leading-[1.12] tracking-[-0.08em]">つくったもの</h1>
            <p className="mt-8 max-w-2xl text-sm leading-8 sm:text-base">Webサービス、ツール、Botなどの制作実績を掲載しています。各プロジェクトから公開先とリポジトリを確認できます。</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl sm:border-x sm:border-[#252525]">
          <div className="grid grid-cols-1 gap-px bg-[#252525] md:grid-cols-2">
            {works.map((work, index) => <article key={work.name} className="flex min-h-[320px] flex-col bg-[#FAFAFA] p-5 sm:p-8 lg:p-10"><p className="text-[11px] font-medium tracking-[0.17em]">PROJECT / {String(index + 1).padStart(2, '0')}</p><h2 className="mt-12 text-[clamp(1.7rem,3vw,2.7rem)] font-black tracking-[-0.06em]">{work.name}</h2><p className="mt-5 min-h-14 text-sm leading-7">{work.description}</p><ul className="mt-7 min-h-5 flex flex-wrap gap-x-4 gap-y-2 p-0 text-xs font-bold" aria-label={`${work.name}で使用した技術`}>{work.technologies.map((technology) => <li key={technology} className="list-none">{technology}</li>)}</ul><div className="mt-5 flex flex-wrap gap-5 border-t border-[#252525] pt-5 text-[10px] font-bold tracking-[0.12em]">{work.live && <a href={work.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">LIVE <ArrowUpRightIcon /></a>}{work.code && <a href={work.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">CODE <ArrowUpRightIcon /></a>}</div></article>)}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#252525]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-[10px] font-bold tracking-[0.13em] sm:border-x sm:border-[#252525] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><span>© 2026 namiyama</span><Link href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-60">BACK TO HOME <ArrowUpRightIcon className="h-3.5 w-3.5 rotate-[-90deg]" /></Link></div>
      </footer>
    </main>
  );
}
