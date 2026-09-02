import type { Metadata } from "next";
import MembershipForm from "../components/MembershipForm";
import PageHero from "../components/PageHero";

export const metadata: Metadata = { title: "Membership" };

export default function MembershipPage() {
  return (
    <>
      <PageHero
        kicker="Alumni membership"
        title="Belong to the Association"
        lede="Keep alive the affection every old student has for the school. Membership helps you stay informed, contribute, and remain part of the family."
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-brown">Why join</h2>
          <ul className="mt-6 space-y-4 text-brown-soft">
            <li>Stay informed of the general progress of the school.</li>
            <li>Contribute morally, financially, and otherwise towards that progress.</li>
            <li>Mentor younger old students as the Association has capacity.</li>
            <li>Take part in events, volunteer programmes, and alumni connect.</li>
          </ul>
        </div>
        <MembershipForm />
      </section>
    </>
  );
}
