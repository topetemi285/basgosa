import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Contact us"
        lede="Write the Association. We welcome enquiries from old students, the school community, and friends of BASGOSA."
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-brown p-8 text-cream">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Reach us</p>
          <h2 className="mt-3 font-display text-3xl">Jos, Plateau State</h2>
          <p className="mt-4 text-orange-pale/85">{site.location}</p>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block text-orange hover:underline">
            {site.email}
          </a>
          <p className="mt-10 text-sm text-orange-pale/70">{site.motto}</p>
        </div>
        <div className="rounded-[2rem] bg-cream p-8 shadow-lift">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
