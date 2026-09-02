import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        kicker="Library"
        title="Publications"
        lede="Newsletters, reports, and notices from the Association will be shared here as they are issued."
      />
      <section className="mx-auto max-w-site px-5 py-20 text-center sm:px-8">
        <p className="font-display text-3xl text-brown">No publications yet</p>
        <p className="mx-auto mt-3 max-w-lg text-brown-soft">
          When the Association releases a publication, it will appear on this page.
        </p>
        <Link href="/contact-us" className="mt-8 inline-flex text-sm font-semibold text-orange">
          Enquire about submissions
        </Link>
      </section>
    </>
  );
}
