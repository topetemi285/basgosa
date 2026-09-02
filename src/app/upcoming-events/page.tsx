import type { Metadata } from "next";
import EventFlyers from "../components/EventFlyers";
import PageHero from "../components/PageHero";

export const metadata: Metadata = { title: "Upcoming Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        kicker="Events & programmes"
        title="Upcoming events"
        lede="Reunions, set gatherings, and programmes that keep the school family close."
      />
      <section className="mx-auto max-w-site px-5 py-16 sm:px-8">
        <EventFlyers />
      </section>
    </>
  );
}
