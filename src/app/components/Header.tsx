"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, utilityNav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brown-deep text-cream">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-2 px-5 py-2 text-[11px] uppercase tracking-[0.18em] sm:px-8">
          <p className="text-orange-pale/90">{site.location}</p>
          <div className="flex flex-wrap items-center gap-4">
            {utilityNav.map((item) => (
              <Link key={item.href} href={item.href} className="hidden hover:text-orange md:inline">
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${site.email}`} className="hover:text-orange">
              {site.email}
            </a>
            <Link href="/contact-us" className="hidden text-gold sm:inline hover:text-orange">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-brown/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.png"
              alt={site.fullName}
              width={56}
              height={56}
              priority
              className="h-auto w-auto"
            />
            <span className="leading-tight">
              <span className="block font-display text-2xl font-semibold tracking-tight text-brown">
                {site.name}
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.22em] text-brown-soft sm:block">
                Old Students’ Association
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[13px] font-medium transition ${
                  isActive(item.href)
                    ? "bg-brown text-cream"
                    : "text-brown-soft hover:bg-orange-pale/50 hover:text-brown"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/membership"
              className="hidden rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white shadow-lift transition hover:bg-orange-deep md:inline-flex"
            >
              Join
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/15 lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 bg-brown transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 bg-brown transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-brown transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-brown/10 bg-cream px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-medium ${
                    isActive(item.href) ? "bg-brown text-cream" : "text-brown"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-wrap gap-3 border-t border-brown/10 pt-4 text-xs uppercase tracking-[0.16em] text-brown-soft">
              {utilityNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
