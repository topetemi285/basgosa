import type { Metadata } from "next";
import Link from "next/link";
import MembershipForm from "../components/MembershipForm";
import PageHero from "../components/PageHero";

export const metadata: Metadata = { title: "Connect" };

export default function ConnectPage() {
  return (
    <>
      <PageHero
        kicker="Alumni connect"
        title="Stay in the family"
        lede="Network with classmates, mentor younger old students, and keep the ideals of the school alive in daily life."
      />
      <section className="mx-auto grid max-w-site gap-8 px-5 py-16 sm:px-8 lg:grid-cols-3">
        {[
          { title: "Find your set", text: "Reconnect with classmates and keep affection for the school alive." },
          { title: "Mentor", text: "Provide mentorship for younger old students as the Association has capacity." },
          { title: "Serve", text: "Volunteer your time so management, staff, and students can offer their best." },
        ].map((item) => (
          <article key={item.title} className="rounded-3xl bg-cream p-6 shadow-lift">
            <h2 className="font-display text-2xl text-brown">{item.title}</h2>
            <p className="mt-3 text-brown-soft">{item.text}</p>
          </article>
        ))}
      </section>
      <section id="volunteer" className="mx-auto grid max-w-site gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-orange">Volunteer programmes</p>
          <h2 className="mt-3 font-display text-4xl text-brown">Give your time</h2>
          <p className="mt-4 leading-relaxed text-brown-soft">
            Tell us how you would like to serve — mentoring, events, welfare, or support for the
            school. We will follow up from the Association desk.
          </p>
          <Link href="/donate" className="mt-6 inline-block text-sm font-semibold text-orange">
            Prefer to give financially? Donate / Give
          </Link>
        </div>
        <MembershipForm />
      </section>
    </>
  );
}
