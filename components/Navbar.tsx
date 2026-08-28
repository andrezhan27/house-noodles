"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const links = [
    [t.nav.food, "food"],
    [t.nav.space, "space"],
    [t.nav.contact, "contact"],
  ];

  useEffect(() => {
    const sections = ["food", "space", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, .2, .5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/95 text-ink shadow-[0_1px_0_rgba(22,19,15,.04)] backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
        <a href="#top" aria-label="House Noodles home" className="flex items-center gap-2.5">
          <Image src="/images/logo.webp" alt="" width={42} height={42} className="size-10 rounded-full" priority />
          <span className="hidden text-[13px] font-semibold tracking-[.18em] uppercase sm:block">House Noodles</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} className={`relative py-6 transition-colors after:absolute after:inset-x-0 after:bottom-[17px] after:h-0.5 after:origin-left after:bg-red after:transition-transform ${activeSection === id ? "text-red after:scale-x-100" : "text-ink/68 after:scale-x-0 hover:text-ink"}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="grid min-w-[90px] grid-cols-2 rounded-full border border-ink/15 bg-white/35 p-1 text-[11px] font-bold tracking-wider" aria-label="Language">
            {(["pt", "en"] as const).map((lang) => (
              <button key={lang} onClick={() => setLanguage(lang)} className={`relative h-7 rounded-full uppercase ${language === lang ? "text-white" : "text-ink/55"}`} aria-pressed={language === lang}>
                {language === lang && <motion.span layoutId="language-pill" className="absolute inset-0 -z-10 rounded-full bg-ink" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                {lang}
              </button>
            ))}
          </div>
          <Link href="/reservation" className="hidden min-w-[106px] rounded-full bg-red px-5 py-3 text-center text-xs font-bold tracking-[.12em] text-white uppercase transition-transform hover:scale-[1.03] lg:block">{t.nav.reserve}</Link>
          <button className="grid size-10 place-items-center rounded-full border border-ink/15 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-ink/8 bg-paper px-5 py-5 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-lg ${activeSection === id ? "bg-red/8 text-red" : ""}`}>{label}</a>)}
            <Link href="/reservation" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-red px-5 py-3 text-center text-sm font-bold tracking-wider text-white uppercase">{t.nav.reserve}</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
