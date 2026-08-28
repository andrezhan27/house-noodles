"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "pt" | "en";

const copy = {
  pt: {
    nav: { food: "Menu", space: "O nosso espaço", contact: "Contactos", reserve: "Reservar" },
    hero: { title: "House Noodles 见一面", text: "Noodles, ramen e sabores chineses preparados com tempo, técnica e alma.", reserve: "Reservar mesa", explore: "Descobrir o menu", scroll: "Descobrir" },
    food: { title: "Menu", text: "Caldo rico, noodles com textura e ingredientes cheios de sabor. Cada tigela chega à mesa preparada no momento.", drag: "Arraste para explorar", pdf: "Ver menu em PDF" },
    space: { title: "O nosso espaço", text: "Madeira, luz suave e mesas prontas para almoços tranquilos, jantares demorados e tudo o que acontece entre os dois." },
    contact: { title: "Contacte-nos", address: "Morada", phone: "Telefone", hours: "Horário", weekdays: "Dom — Qui", weekend: "Sex — Sáb", closed: "Cozinha aberta ao almoço e jantar", delivery: "Peça em casa", mapTitle: "Mapa de House Noodles Entrecampos" },
    reserve: { title: "Reserve a sua mesa", text: "Venha provar noodles, ramen e sabores chineses preparados no momento.", cta: "Reservar mesa" },
    footer: { line: "Noodles, ramen e cozinha chinesa em Lisboa.", follow: "Instagram", complaints: "Livro de reclamações", terms: "Termos e condições", privacy: "Política de privacidade", designed: "Designed by Intelis. All rights reserved." },
  },
  en: {
    nav: { food: "Menu", space: "Our space", contact: "Contact", reserve: "Reserve" },
    hero: { title: "House Noodles 见一面", text: "Noodles, ramen and Chinese flavours made with time, craft and soul.", reserve: "Reserve a table", explore: "Explore the menu", scroll: "Explore" },
    food: { title: "Menu", text: "Deep broth, springy noodles and full-flavoured ingredients. Every bowl is prepared fresh for your table.", drag: "Drag to explore", pdf: "Open PDF menu" },
    space: { title: "Our space", text: "Natural wood, soft light and tables set for easy lunches, lingering dinners and everything in between." },
    contact: { title: "Contact us", address: "Address", phone: "Phone", hours: "Opening hours", weekdays: "Sun — Thu", weekend: "Fri — Sat", closed: "Kitchen open for lunch and dinner", delivery: "Order delivery", mapTitle: "Map of House Noodles Entrecampos" },
    reserve: { title: "Reserve your table", text: "Come enjoy noodles, ramen and Chinese flavours prepared fresh to order.", cta: "Reserve a table" },
    footer: { line: "Noodles, ramen and Chinese cooking in Lisbon.", follow: "Instagram", complaints: "Complaints book", terms: "Terms & conditions", privacy: "Privacy policy", designed: "Designed by Intelis. All rights reserved." },
  },
} as const;

type LanguageContextType = { language: Language; setLanguage: (language: Language) => void; t: (typeof copy)[Language] };
const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
