import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-brown-soft sm:px-8">
        <p>
          {site.fullName} ({site.name}) collects the information you choose to send through this
          website — typically your name, email address, and message — so we can respond to enquiries
          about membership, events, volunteering, and giving.
        </p>
        <p>
          We use that information only to administer the Association and to keep old students
          informed of the school’s progress. We do not sell personal data.
        </p>
        <p>
          Questions about this notice may be sent to{" "}
          <a className="text-orange" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
