"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const photos = Array.from({ length: 8 }, (_, index) => ({ src: `/images/food-${index + 1}.webp`, alt: `House Noodles dish ${index + 1}` }));

export function FoodCarousel() {
  const { t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const half = (track.current?.scrollWidth ?? 0) / 2;
    if (!half) return;
    let next = x.get() - delta * .022;
    if (next <= -half) next += half;
    if (next > 0) next -= half;
    x.set(next);
  });

  return (
    <section id="food" className="overflow-hidden bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Reveal className="grid gap-7 md:grid-cols-[1fr_1.25fr] md:items-end">
          <div>
            <p className="section-label">{t.food.eyebrow}</p>
            <h2 className="section-title mt-4 max-w-2xl">{t.food.title}</h2>
          </div>
          <div className="md:pb-2">
            <p className="max-w-xl text-base leading-relaxed text-ink/65 md:ml-auto md:text-lg">{t.food.text}</p>
            <p className="mt-5 flex items-center gap-2 text-xs font-bold tracking-[.16em] text-ink/50 uppercase md:justify-end"><MoveHorizontal size={16} />{t.food.drag}</p>
          </div>
        </Reveal>
      </div>
      <div className="mt-12 cursor-grab overflow-hidden active:cursor-grabbing md:mt-16">
        <motion.div ref={track} drag="x" dragElastic={0} dragMomentum={false} style={{ x }} className="flex w-max gap-3 px-3 md:gap-5 md:px-5">
          {[...photos, ...photos].map((photo, index) => (
            <div key={`${photo.src}-${index}`} className="group relative aspect-square w-[72vw] max-w-[410px] shrink-0 overflow-hidden rounded-[1.75rem] md:w-[31vw] md:rounded-[2.25rem]">
              <Image src={photo.src} alt={index < photos.length ? photo.alt : ""} fill sizes="(max-width: 768px) 72vw, 31vw" draggable={false} className="select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
