"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    [t.nav.food, "#food"],
    [t.nav.space, "#space"],
    [t.nav.contact, "#contact"],
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-4 text-white md:px-8 md:py-5">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/20 bg-black/15 px-4 py-2.5 backdrop-blur-md md:px-5">
        <a href="#top" aria-label="House Noodles home" className="flex items-center gap-2.5">
          <Image src="/images/logo.webp" alt="" width={42} height={42} className="size-10 rounded-full" priority />
          <span className="hidden text-[13px] font-semibold tracking-[.18em] uppercase sm:block">House Noodles</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="transition-opacity hover:opacity-60">{label}</a>)}
        </div>

        <div className="flex items-center gap-2">
          <div className="grid min-w-[90px] grid-cols-2 rounded-full border border-white/25 bg-black/10 p-1 text-[11px] font-bold tracking-wider" aria-label="Language">
            {(["pt", "en"] as const).map((lang) => (
              <button key={lang} onClick={() => setLanguage(lang)} className={`relative h-7 rounded-full uppercase ${language === lang ? "text-ink" : "text-white/70"}`} aria-pressed={language === lang}>
                {language === lang && <motion.span layoutId="language-pill" className="absolute inset-0 -z-10 rounded-full bg-white" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                {lang}
              </button>
            ))}
          </div>
          <a href="tel:+351217970485" className="hidden min-w-[106px] rounded-full bg-red px-5 py-3 text-center text-xs font-bold tracking-[.12em] uppercase transition-transform hover:scale-[1.03] lg:block">{t.nav.reserve}</a>
          <button className="grid size-10 place-items-center rounded-full border border-white/25 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-2 max-w-[1440px] rounded-3xl bg-paper p-5 text-ink shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg">{label}</a>)}
            <a href="tel:+351217970485" className="mt-2 rounded-full bg-red px-5 py-3 text-center text-sm font-bold tracking-wider text-white uppercase">{t.nav.reserve}</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
