import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import { team } from "@/lib/content";

export const metadata: Metadata = { title: "Management Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Leadership"
        title="Management team"
        lede="The Executive Committee serving Baptist Science Grammar School Old Students’ Association."
      />
      <section className="mx-auto grid max-w-site gap-8 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="overflow-hidden rounded-[1.8rem] bg-cream shadow-lift">
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              width={640}
              height={800}
              className="h-80 w-full object-cover object-top"
            />
            <div className="p-5">
              <h2 className="font-display text-2xl text-brown">{member.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-orange">{member.role}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
