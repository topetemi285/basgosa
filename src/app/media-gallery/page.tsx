import type { Metadata } from "next";
import GalleryGrid from "../components/GalleryGrid";
import PageHero from "../components/PageHero";

export const metadata: Metadata = { title: "Media Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Memories"
        title="Media gallery"
        lede="Moments from the Association — gatherings, service, and the life of old students."
      />
      <section className="mx-auto max-w-site px-5 py-16 sm:px-8">
        <GalleryGrid />
      </section>
    </>
  );
}
