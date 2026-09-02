import Image from "next/image";
import Link from "next/link";
import {
  homePhotos,
  objectives,
  objectivesIntro,
  programmes,
  site,
  team,
  values,
  whoWeAre,
} from "@/lib/content";

export default function Home() {
  return (
    <div>
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src={homePhotos[1]}
          alt="BASGOSA alumni gathering"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/90 via-brown-deep/70 to-brown-deep/35" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-site flex-col justify-center px-5 py-20 sm:px-8">
          <p className="text-xs uppercase tracking-[0.32em] text-orange-pale">{site.motto}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            The old students of Baptist Science Grammar School.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">{site.intro}</p>
          <p className="mt-4 max-w-xl font-display text-xl italic text-gold">{site.quote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/membership"
              className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-deep"
            >
              Alumni Membership
            </Link>
            <Link
              href="/upcoming-events"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Upcoming Events
            </Link>
          </div>
          <p className="mt-8 inline-flex w-fit rounded-full border border-cream/20 bg-brown-deep/40 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-cream">
            {site.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-orange">Who we are</p>
          <h2 className="mt-3 font-display text-4xl text-brown sm:text-5xl">A living community, not a reunion once a decade.</h2>
        </div>
        <p className="text-lg leading-8 text-brown-soft">{whoWeAre}</p>
      </section>

      <section className="bg-brown text-cream">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-white/10 p-5">
                <h3 className="font-display text-xl">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-orange-pale/80">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 sm:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-orange">Aims & objectives</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl text-brown sm:text-5xl">
          {objectivesIntro}
        </h2>
        <ol className="mt-12 divide-y divide-brown/10 border-y border-brown/10">
          {objectives.map((item, index) => (
            <li key={item.title} className="grid gap-4 py-8 md:grid-cols-[88px_1fr]">
              <span className="font-display text-3xl text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl text-brown">{item.title}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-brown-soft">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-site px-5 pb-8 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-orange">Calendar</p>
            <h2 className="mt-2 font-display text-4xl text-brown">Upcoming events</h2>
          </div>
          <Link href="/upcoming-events" className="text-sm font-semibold text-orange hover:text-orange-deep">
            View all
          </Link>
        </div>
        <div className="mt-8 rounded-[2rem] border border-dashed border-brown/20 bg-cream px-8 py-16 text-center">
          <p className="font-display text-3xl text-brown">No event found</p>
          <p className="mx-auto mt-3 max-w-md text-brown-soft">
            New programmes will appear here. In the meantime, join the Association and stay informed
            of the school’s progress.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-5 px-5 py-16 sm:px-8 lg:grid-cols-3">
        {programmes.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-[2rem] bg-brown p-8 text-cream shadow-lift transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-gold">{item.kicker}</p>
            <h3 className="mt-4 font-display text-4xl">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-orange-pale/80">{item.text}</p>
            <span className="mt-8 inline-block text-sm font-semibold text-orange group-hover:underline">
              Get started
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-site px-5 py-10 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-orange">Leadership</p>
            <h2 className="mt-2 font-display text-4xl text-brown">Management team</h2>
          </div>
          <Link href="/management-team" className="text-sm font-semibold text-orange">
            Meet the team
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.slice(0, 4).map((member) => (
            <article key={member.name} className="overflow-hidden rounded-[1.6rem] bg-cream shadow-lift">
              <Image
                src={member.image}
                alt={member.name}
                width={480}
                height={640}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-4">
                <h3 className="font-display text-xl">{member.name}</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-orange">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl text-brown">From the gallery</h2>
          <Link href="/media-gallery" className="text-sm font-semibold text-orange">
            Open gallery
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {homePhotos.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`BASGOSA gallery highlight ${index + 1}`}
              width={400}
              height={280}
              className="h-36 w-full rounded-2xl object-cover sm:h-44"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
