"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent } from "react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function ReserveCard() {
  const { t } = useLanguage();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });
  function move(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * .18);
    y.set((event.clientY - rect.top - rect.height / 2) * .18);
  }
  return (
    <section id="reserve" className="bg-paper py-24 md:py-32">
      <div className="@container mx-auto max-w-[1312px] px-5 md:px-10">
        <Reveal className="grid overflow-hidden rounded-[2rem] bg-red text-white shadow-[0_30px_100px_rgba(81,23,13,.16)] @min-[780px]:grid-cols-2 md:rounded-[2.75rem]">
          <div className="group relative aspect-square overflow-hidden"><Image src="/images/reserve-cta.webp" alt="House Noodles dishes ready to share" fill sizes="(max-width: 780px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" /></div>
          <div className="flex min-h-[420px] flex-col justify-center p-7 sm:p-10 lg:p-16">
            <h2 className="display text-[clamp(2.45rem,4.1vw,4.15rem)] leading-[.96] tracking-[-.04em] text-balance">{t.reserve.title}</h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/74 md:text-lg">{t.reserve.text}</p>
            <motion.a href="/reservation" onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x, y }} className="mt-9 flex min-h-14 w-full min-w-[220px] max-w-[270px] items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold tracking-[.08em] text-[#8f2418] uppercase shadow-xl"><CalendarDays size={17} className="shrink-0" /><span className="relative z-10">{t.reserve.cta}</span></motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
