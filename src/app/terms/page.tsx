import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms & Conditions" />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-brown-soft sm:px-8">
        <p>
          This website is published by {site.fullName} for the benefit of old students, the school,
          and friends of the Association.
        </p>
        <p>
          Content is provided for information about membership, events, programmes, and the aims of
          BASGOSA. The Association may update pages from time to time.
        </p>
        <p>
          For official correspondence, write to{" "}
          <a className="text-orange" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or visit us in {site.location}.
        </p>
      </article>
    </>
  );
}
