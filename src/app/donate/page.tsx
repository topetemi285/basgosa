import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Donate / Give" };

export default function DonatePage() {
  return (
    <>
      <PageHero
        kicker="Give"
        title="Donate / Give"
        lede="Encourage the progress of the school by contributing morally, financially, and otherwise — as every old student is invited to do."
      />
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <div className="rounded-[2rem] bg-cream p-8 shadow-lift sm:p-12">
          <h2 className="font-display text-3xl text-brown">Support the Association</h2>
          <p className="mt-4 leading-relaxed text-brown-soft">
            Empowerment, grants, and school progress are determined by the Association, the Executive
            Committee, and the Trustees. To give, write us and the desk will share the current giving
            channels.
          </p>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Donation / giving enquiry")}`}
            className="mt-8 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white"
          >
            Write to {site.email}
          </a>
        </div>
      </section>
    </>
  );
}
