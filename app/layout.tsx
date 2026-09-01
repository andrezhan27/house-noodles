import type { Metadata } from "next";
import { PromotionBanner } from "@andrezhan27/intelis-restaurant-ui";
import { Analytics } from "@vercel/analytics/next";
import { restaurantInfo } from "@/lib/restaurantInfo";
import "./globals.css";

// The live promotion banner intentionally performs an uncached Supabase request.
// Declare the shared layout dynamic before Next.js attempts static prerendering.
export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be set to the site's absolute public URL.");
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      <body>
        <PromotionBanner
          className="site-promotion-banner"
          restaurantId={restaurantInfo.databaseId}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
