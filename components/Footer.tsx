"use client";

import Image from "next/image";
import { ArrowUp, Instagram } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-ink px-5 pb-7 pt-16 text-white md:px-10 md:pt-20 lg:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-10 border-b border-white/12 pb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <a href="#top" className="inline-flex items-center gap-4">
              <Image src="/images/logo.webp" alt="House Noodles" width={78} height={78} className="size-[72px] rounded-full" />
              <div><p className="display text-3xl">House Noodles</p><p className="mt-1 tracking-[.26em] text-white/45 uppercase">见一面</p></div>
            </a>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-white/52">{t.footer.line}</p>
          </div>
          <div className="flex flex-col items-start gap-4 text-sm md:items-end">
            <a href="https://www.instagram.com/house._noodles/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-60"><Instagram size={17} />{t.footer.follow}</a>
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">{t.footer.complaints}</a>
            <a href="#top" aria-label="Back to top" className="mt-2 grid size-11 place-items-center rounded-full border border-white/18 transition hover:bg-white hover:text-ink"><ArrowUp size={17} /></a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[11px] tracking-[.1em] text-white/32 uppercase"><p>© {new Date().getFullYear()} House Noodles.</p><p>{t.footer.rights}</p></div>
      </div>
    </footer>
  );
}
