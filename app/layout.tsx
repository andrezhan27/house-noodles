import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://house-noodles-lisboa.vercel.app"),
  title: "House Noodles 见一面 | Noodles & Chinese Food in Lisbon",
  description:
    "Hand-pulled noodles, ramen and Chinese comfort food in Entrecampos, Lisbon.",
  openGraph: {
    title: "House Noodles 见一面",
    description: "A warm bowl, made for Lisbon.",
    type: "website",
    locale: "pt_PT",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "House Noodles 见一面" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Noodles 见一面",
    description: "Noodles, ramen and Chinese food in Lisbon.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
