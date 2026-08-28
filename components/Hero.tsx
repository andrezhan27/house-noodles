"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent } from "react";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });

  function move(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  return (
    <section id="top" className="grain relative min-h-[760px] overflow-hidden bg-ink text-white md:min-h-[820px]">
      <picture className="absolute inset-0 block">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.webp" />
        <Image src="/images/space-1.webp" alt="The warm wood interior of House Noodles in Lisbon" fill priority sizes="100vw" className="object-cover" />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,.82)_0%,rgba(8,8,7,.3)_58%,rgba(8,8,7,.08)_100%)] max-md:bg-[linear-gradient(180deg,rgba(8,8,7,.46)_0%,rgba(8,8,7,.15)_38%,rgba(8,8,7,.78)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-20 pt-32 md:min-h-[820px] md:items-center md:px-10 md:pb-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[.28em] uppercase md:text-sm">{t.hero.eyebrow}</p>
          <h1 className="display max-w-3xl text-[clamp(3.7rem,8.4vw,8.2rem)] leading-[.86] tracking-[-.055em] text-balance">{t.hero.title}</h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">{t.hero.text}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <motion.a href="tel:+351217970485" onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x, y }} className="group flex min-w-[188px] items-center justify-center gap-3 rounded-full bg-red px-6 py-4 text-sm font-bold tracking-[.08em] uppercase shadow-[0_10px_40px_rgba(173,47,30,.35)]">
              {t.hero.reserve}<ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <a href="/House-Noodles-Menu.pdf" className="flex min-w-[188px] items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-4 text-sm font-bold tracking-[.08em] uppercase backdrop-blur-sm transition hover:bg-white hover:text-ink">{t.hero.explore}</a>
          </div>
        </motion.div>
      </div>
      <a href="#food" aria-label={t.hero.scroll} className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-[11px] font-bold tracking-[.22em] uppercase md:flex md:right-10">
        {t.hero.scroll}<span className="grid size-10 place-items-center rounded-full border border-white/35"><ArrowDown size={16} /></span>
      </a>
    </section>
  );
}
