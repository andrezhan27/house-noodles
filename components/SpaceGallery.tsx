"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const rows = [[1, 2], [3, 5, 4], [6, 7]];

export function SpaceGallery() {
  const { t } = useLanguage();
  return (
    <section id="space" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1440px] px-3 md:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 grid max-w-[1312px] gap-7 px-2 md:mb-16 md:grid-cols-[1.2fr_.8fr] md:items-end md:px-4">
          <h2 className="section-title max-w-3xl text-white">{t.space.title}</h2>
          <p className="max-w-lg text-base leading-relaxed text-white/58 md:justify-self-end md:text-lg">{t.space.text}</p>
        </Reveal>
        <div className="@container space-y-3 md:space-y-5">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid items-stretch gap-3 md:gap-5 ${rowIndex === 0 ? "@min-[720px]:h-[clamp(330px,38vw,520px)] @min-[720px]:grid-cols-[3fr_2fr]" : rowIndex === 1 ? "@min-[720px]:h-[clamp(280px,29vw,400px)] @min-[720px]:grid-cols-3" : "@min-[720px]:h-[clamp(330px,38vw,520px)] @min-[720px]:grid-cols-[2fr_3fr]"}`}>
              {row.map((image) => (
                <Reveal key={image} className={`group relative aspect-[16/11] h-full overflow-hidden rounded-[1.5rem] @min-[720px]:aspect-auto md:rounded-[2rem]`}>
                  <Image src={`/images/space-${image}.webp`} alt={`House Noodles restaurant interior ${image}`} fill sizes={rowIndex === 1 ? "(max-width: 720px) 100vw, 33vw" : "(max-width: 720px) 100vw, 60vw"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
