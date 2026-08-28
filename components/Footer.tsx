"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Instagram } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Footer({ privacyPolicyUrl, termsAndConditionsUrl }: { privacyPolicyUrl?: string; termsAndConditionsUrl?: string }) {
  const { t } = useLanguage();
  const sectionLinks = [
    [t.nav.food, "/#food"],
    [t.nav.space, "/#space"],
    [t.nav.contact, "/#contact"],
    [t.nav.reserve, "/reservation"],
  ];

  return (
    <footer className="bg-ink px-5 pb-7 pt-16 text-white md:px-10 md:pt-20 lg:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-12 border-b border-white/12 pb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <a href="#top" className="inline-flex items-center gap-4">
              <Image src="/images/logo.webp" alt="House Noodles" width={78} height={78} className="size-[72px] rounded-full" />
              <div><p className="text-[13px] font-semibold tracking-[.18em] uppercase">House Noodles</p><p className="mt-2 text-sm tracking-[.26em] text-white/45 uppercase">见一面</p></div>
            </a>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-white/52">{t.footer.line}</p>
          </div>

          <div className="flex max-w-2xl flex-col gap-7 md:items-end">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold tracking-[.12em] uppercase md:justify-end">
              {sectionLinks.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-gold">{label}</Link>)}
            </nav>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/58 md:justify-end">
              {termsAndConditionsUrl ? <a href={termsAndConditionsUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">{t.footer.terms}</a> : <span aria-disabled="true" className="cursor-not-allowed text-white/28">{t.footer.terms}</span>}
              {privacyPolicyUrl ? <a href={privacyPolicyUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">{t.footer.privacy}</a> : <span aria-disabled="true" className="cursor-not-allowed text-white/28">{t.footer.privacy}</span>}
              <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">{t.footer.complaints}</a>
              <a href="https://www.instagram.com/house._noodles/" target="_blank" rel="noreferrer" aria-label={t.footer.follow} className="grid size-10 place-items-center rounded-full border border-white/16 transition hover:border-gold hover:text-gold"><Instagram size={17} /></a>
              <a href="#top" aria-label="Back to top" className="grid size-10 place-items-center rounded-full border border-white/16 transition hover:bg-white hover:text-ink"><ArrowUp size={17} /></a>
            </div>
          </div>
        </div>

        <p className="pt-6 text-[11px] tracking-[.08em] text-white/36 uppercase">
          © 2026 <a href="https://intelis.pt" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Designed by Intelis.</a> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
