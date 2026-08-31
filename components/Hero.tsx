"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="grain relative min-h-[760px] overflow-hidden bg-ink text-white md:min-h-[820px]">
      <picture className="absolute inset-0 block">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.webp" />
        <Image src="/images/space-1.webp" alt="The warm wood interior of House Noodles in Lisbon" fill priority sizes="100vw" className="object-cover" />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,.82)_0%,rgba(8,8,7,.3)_58%,rgba(8,8,7,.08)_100%)] max-md:bg-[linear-gradient(180deg,rgba(8,8,7,.46)_0%,rgba(8,8,7,.15)_38%,rgba(8,8,7,.78)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-20 pt-32 md:min-h-[820px] md:items-center md:px-10 md:pb-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          <h1 className="max-w-3xl text-[clamp(3.15rem,6.5vw,6.6rem)] leading-[.9] font-semibold tracking-[-.05em] text-balance">{t.hero.title}</h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">{t.hero.text}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/reservation" className="flex min-w-[188px] items-center justify-center rounded-full bg-red px-6 py-4 text-sm font-bold tracking-[.08em] text-white uppercase shadow-[0_10px_40px_rgba(173,47,30,.35)] transition-transform hover:scale-[1.03]">
              {t.hero.reserve}
            </Link>
            <a href="/House Noodles Menu.pdf" className="flex min-w-[188px] items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-4 text-sm font-bold tracking-[.08em] text-white uppercase backdrop-blur-sm transition hover:bg-white hover:text-ink">{t.hero.explore}</a>
          </div>
        </motion.div>
      </div>
      <a href="#food" aria-label={t.hero.scroll} className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-[11px] font-bold tracking-[.22em] uppercase md:flex md:right-10">
        {t.hero.scroll}<span className="grid size-10 place-items-center rounded-full border border-white/35"><ArrowDown size={16} /></span>
      </a>
    </section>
  );
}
