import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="mx-auto max-w-site px-5 py-20 sm:px-8">
        <div className="rounded-[2.2rem] border border-dashed border-brown/20 bg-cream px-8 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-orange">Calendar</p>
          <h2 className="mt-4 font-display text-4xl text-brown">No event found</h2>
          <p className="mx-auto mt-4 max-w-lg text-brown-soft">
            There are no published events at the moment. Check back soon, or get in touch if you
            would like to host a set meeting or programme.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
