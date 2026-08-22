import { PageFrame } from './PageFrame';
import type { Locale } from '../lib/i18n';

const copy = {
  ja: {
    title: 'お問い合わせ',
    lead: '制作や開発についてのご相談、質問など、お気軽にご連絡ください。内容を確認のうえ、返信いたします。',
    name: 'お名前',
    email: 'メールアドレス',
    message: 'お問い合わせ内容',
    namePlaceholder: 'お名前',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'お問い合わせ内容をご入力ください',
    submit: '送信する',
    required: '（必須）',
    note: '送信後はFormspreeの確認画面へ移動します。',
    subject: 'ポートフォリオサイトからのお問い合わせ',
  },
  en: {
    title: 'Get in touch',
    lead: 'For project inquiries, questions, or collaboration, please feel free to get in touch. I will review your message and reply as soon as I can.',
    name: 'Name',
    email: 'Email address',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Tell me about your inquiry',
    submit: 'Send message',
    required: '(required)',
    note: 'After submitting, you will be redirected to a Formspree confirmation page.',
    subject: 'Inquiry from portfolio site',
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <PageFrame locale={locale} path="/contact" className="flex flex-col">
      <section className="section-frame border-b border-[#252525]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:border-x sm:border-[#252525] lg:grid-cols-12">
          <div className="border-b border-[#252525] px-5 py-6 sm:px-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12"><p className="m-0 text-[11px] font-medium tracking-[0.18em]">07 / CONTACT</p></div>
          <div className="px-5 py-16 sm:px-8 lg:col-span-9 lg:px-10 lg:py-24"><p className="text-xs font-bold tracking-[0.17em]">LET&apos;S CONNECT</p><h1 className="mt-7 text-[clamp(2.65rem,7vw,6.6rem)] font-black leading-[1.12] tracking-[-0.08em]">{t.title}</h1><p className="mt-8 max-w-2xl text-sm leading-8 sm:text-base">{t.lead}</p></div>
        </div>
      </section>

      <section className="selection-on-dark flex-1 bg-[#252525] text-[#FAFAFA]">
        <div className="mx-auto max-w-7xl sm:border-x sm:border-[#FAFAFA]">
          <form action="https://formspree.io/f/xgawlzep" method="POST" className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
            <input type="hidden" name="_subject" value={t.subject} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <label className="flex flex-col gap-3 text-xs font-bold tracking-[0.08em]">{t.name}<span className="sr-only">{t.required}</span><input type="text" name="name" required autoComplete="name" placeholder={t.namePlaceholder} className="min-h-12 border-b border-[#FAFAFA] bg-transparent px-0 py-3 text-base font-medium tracking-normal text-[#FAFAFA] outline-none placeholder:text-[#FAFAFA]/60 transition-[border-width] focus-visible:border-b-2 focus-visible:border-[#FAFAFA]" /></label>
              <label className="flex flex-col gap-3 text-xs font-bold tracking-[0.08em]">{t.email}<span className="sr-only">{t.required}</span><input type="email" name="email" required autoComplete="email" placeholder={t.emailPlaceholder} className="min-h-12 border-b border-[#FAFAFA] bg-transparent px-0 py-3 text-base font-medium tracking-normal text-[#FAFAFA] outline-none placeholder:text-[#FAFAFA]/60 transition-[border-width] focus-visible:border-b-2 focus-visible:border-[#FAFAFA]" /></label>
            </div>
            <label className="mt-10 flex flex-col gap-3 text-xs font-bold tracking-[0.08em]">{t.message}<span className="sr-only">{t.required}</span><textarea name="message" required rows={7} placeholder={t.messagePlaceholder} className="min-h-40 resize-y border-b border-[#FAFAFA] bg-transparent px-0 py-3 text-base font-medium leading-7 tracking-normal text-[#FAFAFA] outline-none placeholder:text-[#FAFAFA]/60 transition-[border-width] focus-visible:border-b-2 focus-visible:border-[#FAFAFA]" /></label>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><p className="m-0 text-xs leading-6 text-[#FAFAFA]/75">{t.note}</p><button type="submit" className="min-h-12 border border-[#FAFAFA] px-5 py-3 text-xs font-bold tracking-[0.12em] transition-colors hover:bg-[#FAFAFA] hover:text-[#252525] focus-visible:outline-none focus-visible:bg-[#FAFAFA] focus-visible:text-[#252525]">{t.submit}</button></div>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}
