import { Contact } from "@/components/Contact";
import { FoodCarousel } from "@/components/FoodCarousel";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { ReserveCard } from "@/components/ReserveCard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SpaceGallery } from "@/components/SpaceGallery";
import { getRestaurantInfo } from "@/lib/restaurantInfo";

export default async function Home() {
  const restaurantInfo = await getRestaurantInfo();

  return (
    <LanguageProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <FoodCarousel />
        <SpaceGallery />
        <Contact />
        <ReserveCard />
      </main>
      <Footer privacyPolicyUrl={restaurantInfo.privacyPolicyUrl} termsAndConditionsUrl={restaurantInfo.termsAndConditionsUrl} />
    </LanguageProvider>
  );
}
