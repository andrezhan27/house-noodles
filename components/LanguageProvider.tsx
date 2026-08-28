"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "pt" | "en";

const copy = {
  pt: {
    nav: { food: "Comida", space: "Espaço", contact: "Contactos", reserve: "Reservar" },
    hero: { eyebrow: "Entrecampos · Lisboa", title: "Uma tigela quente. Um encontro feliz.", text: "Noodles, ramen e sabores chineses preparados com tempo, técnica e alma.", reserve: "Reservar mesa", explore: "Descobrir o menu", scroll: "Descobrir" },
    food: { eyebrow: "Da nossa cozinha", title: "Feito para dar vontade de voltar.", text: "Caldo rico, noodles com textura e ingredientes cheios de sabor. Cada tigela chega à mesa preparada no momento.", drag: "Arraste para explorar" },
    space: { eyebrow: "O nosso espaço", title: "Um recanto quente no coração de Entrecampos.", text: "Madeira, luz suave e mesas prontas para almoços tranquilos, jantares demorados e tudo o que acontece entre os dois." },
    contact: { eyebrow: "Visite-nos", title: "A sua mesa está à espera.", address: "Morada", phone: "Telefone", hours: "Horário", weekdays: "Dom — Qui", weekend: "Sex — Sáb", closed: "Cozinha aberta ao almoço e jantar", delivery: "Peça em casa", directions: "Como chegar", mapTitle: "Mapa de House Noodles Entrecampos" },
    reserve: { eyebrow: "Venha ter connosco", title: "Boa comida sabe ainda melhor quando é partilhada.", text: "Reserve a sua mesa e deixe-nos tratar do resto.", cta: "Ligar para reservar" },
    footer: { line: "Noodles, ramen e cozinha chinesa em Lisboa.", follow: "Instagram", complaints: "Livro de reclamações", rights: "Todos os direitos reservados." },
  },
  en: {
    nav: { food: "Food", space: "Our space", contact: "Contact", reserve: "Reserve" },
    hero: { eyebrow: "Entrecampos · Lisbon", title: "A warm bowl. A happy meeting.", text: "Noodles, ramen and Chinese flavours made with time, craft and soul.", reserve: "Reserve a table", explore: "Explore the menu", scroll: "Explore" },
    food: { eyebrow: "From our kitchen", title: "Made to keep you coming back.", text: "Deep broth, springy noodles and full-flavoured ingredients. Every bowl is prepared fresh for your table.", drag: "Drag to explore" },
    space: { eyebrow: "Our space", title: "A warm corner in the heart of Entrecampos.", text: "Natural wood, soft light and tables set for easy lunches, lingering dinners and everything in between." },
    contact: { eyebrow: "Visit us", title: "Your table is waiting.", address: "Address", phone: "Phone", hours: "Opening hours", weekdays: "Sun — Thu", weekend: "Fri — Sat", closed: "Kitchen open for lunch and dinner", delivery: "Order delivery", directions: "Get directions", mapTitle: "Map of House Noodles Entrecampos" },
    reserve: { eyebrow: "Come meet us", title: "Good food tastes better when it is shared.", text: "Reserve your table and let us take care of the rest.", cta: "Call to reserve" },
    footer: { line: "Noodles, ramen and Chinese cooking in Lisbon.", follow: "Instagram", complaints: "Complaints book", rights: "All rights reserved." },
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
