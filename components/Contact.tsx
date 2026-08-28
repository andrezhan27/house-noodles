"use client";

import { ArrowUpRight, Bike, Clock3, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const deliveries = [
  ["Glovo", "https://glovoapp.com/pt/pt/lisboa/stores/azul-sublime-lda-lis"],
  ["Uber Eats", "https://www.ubereats.com/pt/store/house-noodles-entrecampos/nvYmKvnuRpOZS8u2PSWs5A"],
  ["Bolt Food", "https://food.bolt.eu/en/386-lisbon/p/892572-house-noodles-entrecampos/"],
];
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.6831280262204!2d-9.153688424024088!3d38.74803307175641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a5c33ef09f%3A0xb8765f6f819ba6e1!2zSG91c2Ugbm9vZGxlc-ingeS4gOmdoihFbnRyZWNhbXBvcyk!5e0!3m2!1sen!2spt!4v1787914314990!5m2!1sen!2spt";
const directionsUrl = "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1933a5c33ef09f:0xb8765f6f819ba6e1";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="bg-blue py-24 text-white md:py-32">
      <div className="@container mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Reveal><h2 className="section-title max-w-3xl text-white">{t.contact.title}</h2></Reveal>
        <div className="mt-12 grid min-h-[680px] overflow-hidden rounded-[2rem] bg-[#f8f2e8] text-ink shadow-[0_30px_100px_rgba(0,0,0,.2)] @min-[900px]:grid-cols-[.92fr_1.08fr] md:mt-16 md:rounded-[2.5rem]">
          <div className="flex p-6 sm:p-9 lg:p-12">
            <div className="flex w-full flex-col justify-center divide-y divide-ink/10">
              <ContactItem icon={<MapPin size={19} />} label={t.contact.address}>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1 leading-relaxed transition-colors hover:text-red">Av. das Forças Armadas 34A<br />1600-082 Lisboa<ArrowUpRight size={14} className="mt-1 shrink-0" /></a>
              </ContactItem>
              <ContactItem icon={<Phone size={19} />} label={t.contact.phone}>
                <a href="tel:+351217970485" className="text-lg font-semibold transition-colors hover:text-red">21 797 0485</a>
              </ContactItem>
              <ContactItem icon={<Clock3 size={19} />} label={t.contact.hours}>
                <div className="grid max-w-md gap-3 text-sm sm:grid-cols-2">
                  <p><span className="block font-semibold">{t.contact.weekdays}</span>12:00–15:00 · 19:00–23:00</p>
                  <p><span className="block font-semibold">{t.contact.weekend}</span>12:00–15:00 · 19:00–23:30</p>
                </div>
                <p className="mt-3 text-xs text-ink/48">{t.contact.closed}</p>
              </ContactItem>
              <ContactItem icon={<Bike size={19} />} label={t.contact.delivery}>
                <div className="flex flex-wrap gap-2">
                  {deliveries.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-ink/15 px-4 py-2 text-xs font-bold tracking-wider uppercase transition hover:scale-[1.03] hover:border-red hover:bg-red hover:text-white">{name}</a>)}
                </div>
              </ContactItem>
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden bg-[#ddd2c0] @min-[900px]:min-h-full">
            <iframe src={mapUrl} title={t.contact.mapTitle} width="600" height="450" className="absolute inset-0 size-full border-0 grayscale-[.15]" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[132px_1fr] sm:gap-6 lg:grid-cols-[150px_1fr]">
      <p className="flex items-center gap-2 self-start text-[11px] font-bold tracking-[.18em] text-red uppercase">{icon}{label}</p>
      <div>{children}</div>
    </div>
  );
}
