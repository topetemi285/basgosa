import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import { homePhotos, site, whoWeAre } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="BASGOSA · Who we are"
        title="About us"
        lede="A purposeful community of old students, shaped by successive sets and guided by the ideals of Baptist Science Grammar School."
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl text-brown">Our story</h2>
          <p className="mt-6 text-lg leading-8 text-brown-soft">{whoWeAre}</p>
          <p className="mt-8 font-display text-2xl italic text-brown">{site.quote}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-orange">{site.motto}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image src={homePhotos[4]} alt="BASGOSA alumni" width={400} height={320} className="h-48 w-full rounded-3xl object-cover" />
          <Image src={homePhotos[5]} alt="BASGOSA gathering" width={400} height={400} className="mt-8 h-56 w-full rounded-3xl object-cover" />
          <Image src={homePhotos[6]} alt="BASGOSA programme" width={400} height={400} className="h-56 w-full rounded-3xl object-cover" />
          <Image src={homePhotos[7]} alt="BASGOSA community" width={400} height={320} className="h-48 w-full rounded-3xl object-cover" />
        </div>
      </section>
    </>
  );
}
