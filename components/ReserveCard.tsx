"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
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
            <p className="section-label text-white/65">{t.reserve.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2.65rem,5vw,5.2rem)] leading-[.95] tracking-[-.045em] text-balance">{t.reserve.title}</h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/74 md:text-lg">{t.reserve.text}</p>
            <motion.a href="tel:+351217970485" onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x, y }} className="mt-9 flex w-full min-w-[208px] max-w-[240px] items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold tracking-[.08em] text-red uppercase shadow-xl"><Phone size={16} />{t.reserve.cta}</motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
