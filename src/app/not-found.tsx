import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-5 py-24 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-orange">404</p>
      <h1 className="mt-4 font-display text-5xl text-brown">This page doesn’t seem to exist.</h1>
      <p className="mx-auto mt-4 max-w-md text-brown-soft">
        The link pointing here may be faulty. Return home or search the Association pages from the
        menu.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white"
      >
        Back to home
      </Link>
    </section>
  );
}
