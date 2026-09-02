import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Journal"
        title="Blog"
        lede="Stories, notices, and reflections from old students will be published here."
      />
      <section className="mx-auto max-w-site px-5 py-20 text-center sm:px-8">
        <p className="font-display text-3xl text-brown">No posts yet</p>
        <p className="mx-auto mt-3 max-w-lg text-brown-soft">
          The Association has not published blog posts on this site yet. Check back for news from
          sets, events, and the school.
        </p>
      </section>
    </>
  );
}
