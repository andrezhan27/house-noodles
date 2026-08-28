import type { Metadata } from "next";
import { reservationWidgetUrl } from "@/lib/restaurantInfo";

export const metadata: Metadata = {
  title: "Reserve a Table | House Noodles 见一面",
  description: "Reserve your table at House Noodles in Entrecampos, Lisbon.",
};

const restaurantInfo = { reservationWidgetUrl };

export default function ReservationPage() {
  return (
    <main className="h-svh bg-white">
      <iframe
        className="block h-full w-full border-0"
        loading="eager"
        src={restaurantInfo.reservationWidgetUrl}
        title="House Noodles Reservation Form"
      />
    </main>
  );
}
